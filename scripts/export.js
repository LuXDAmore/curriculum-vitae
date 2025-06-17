const fs = require(
        'fs',
    )
    , path = require(
        'path',
    )
    , http = require(
        'http',
    )
    , config = require(
        '../config',
    )
    , puppeteer = require(
        'puppeteer',
    )

    , { interval } = require(
        'rxjs',
    )
    , {
        filter,
        first,
        mergeMap,
    } = require(
        'rxjs/operators',
    )
;

const fetchResponse = () => {

    // eslint-disable-next-line compat/compat
    return new Promise(
        (
            resolve,
            reject,
        ) => {

            try {

                const req = http.request(
                    `http://localhost:${ config.dev.port }/#/`,
                    response => resolve(
                        response.statusCode,
                    ),
                );

                req.on(
                    'error',
                    err => reject(
                        err,
                    ),
                );

                req.end();

            } catch( err ) {

                reject(
                    err,
                );

            }

        },
    );

}

 , waitForServerReachable = () => {

    return interval(
        1000,
    )
    .pipe(
        mergeMap(
            async() => {

                    try {

                        const statusCode = await fetchResponse();

                        if( statusCode === 200 ) return true;

                    } catch( err ) {

                        // eslint-disable-next-line
                        console.log(
                            err,
                        );

                    }
                    return false;

            },
        ),
        filter(
            ok => !! ok,
        ),
    );

}
 , convert = async() => {

        await waitForServerReachable()
            .pipe(
                first(),
            )
            .toPromise()
        ;

        // eslint-disable-next-line
        console.log(
            'Connected to server ...',
        );
        // eslint-disable-next-line
        console.log(
            'Exporting ...',
        );

        try {

            const directories = getResumesFromDirectories();

            directories.forEach(
                async dir => {

                    const browser = await puppeteer.launch(
                            {
                                args: [ '--no-sandbox' ],
                            },
                        )
                        , page = await browser.newPage()
                    ;

                    await page.goto(
                        `http://localhost:${ config.dev.port }/#/resume/${ dir.name }?pdf=1`,
                        {
                            waitUntil: 'networkidle2',
                        },
                    );

                    await page.pdf(
                        {
                            path: path.join(
                                __dirname,
                                `../pdf/${ dir.name }.pdf`,
                            ),
                            format: 'A4',
                            printBackground: true,
                        },
                    );

                    await browser.close();

                },
            );

        } catch( err ) {

            throw new Error(
                err,
            );

        }

        // eslint-disable-next-line
        console.log(
            'Finished exports.',
        );

    }
    , getResumesFromDirectories = () => {

    const directories = getDirectories();

    return directories
    .map(
 dir => {

        const fileName = dir.replace(
 '.vue',
'',
);

        return {
            path: fileName,
            name: fileName,
        };

},
);

}

 , getDirectories = () => {

    const srcpath = path.join(
__dirname,
'../src/resumes',
);

    return fs.readdirSync(
 srcpath,
)
    .filter(
file => file !== 'resumes.js' && file !== 'template.vue' && file !== 'options.js',
);

};

convert();
