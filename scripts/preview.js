const path = require(
        'path',
    )
    , fs = require(
        'fs',
    )
    , mv = require(
        'mv',
    );
const PDFImage = require(
        'pdf-image',
    ).PDFImage


    , getDirectories = () => {

        const srcpath = path.join(
            __dirname,
            '../pdf',
        );

        return fs.readdirSync(
            srcpath,
        );

    }

    , getTemplateName = PDF => {

        return PDF.replace(
            '.pdf',
            '',
        );

    }

    , convert = async PDF => {

        const pdfImage = new PDFImage(
            path.join(
                __dirname,
                '../pdf/' + PDF,
            ),
        );

        await pdfImage.convertPage(
            0,
        );

    }

    , directories = getDirectories();

directories.forEach(
    async dir => {

        try {

            await convert(
                dir,
            );

        } catch( e ) {

            // eslint-disable-next-line
        console.dir(
                e,
            );

        }
        const source = path.join(
                __dirname,
                '../pdf/' + getTemplateName(
                    dir,
                ) + '-0.png',
            )
            , output = path.join(
                __dirname,
                '../src/assets/preview/resume-' + getTemplateName(
                    dir,
                ) + '.png',
            );

        // eslint-disable-next-line
    console.log(
            output,
        );
        mv(
            source,
            output,
            function(
                err,
            ) {

                if( err ) {

                    // eslint-disable-next-line
 console.dir(
                        err,
                    );

                }

            },
        );

    },
);
