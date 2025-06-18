import { terms } from '../terms';

const
    // Called by templates to decrease redundancy
    mixin = {
        data: () => (
            {
                terms,
            }
        ),
        computed: {
            lang() {

                const defaultLang = this.terms.en
                    , useLang = this.terms[ process.env.LANGUAGE ]
                ;

                // overwrite non-set fields with default lang
                Object
                    .keys(
                        defaultLang,
                    )
                    .filter(
                        k => ! useLang[ k ],
                    )
                    .forEach(
                        k => ( useLang[ k ] = defaultLang[ k ] ),
                    )
                ;

                return useLang;

            },
            person() {

                const lang = this.$route.query.lang || process.env.LANGUAGE || 'en';

                return require(
                    `../../resume/data.${ lang }.json`
                );

            }
            , coverLetter() {

                if( ! this.person || ! this.person.cover || ! this.person.cover.letter )
                    return;

                return require(
                    `../../resume/${ this.person.cover.letter }`
                );

            },
            skillsSortedByLevel() {

                if( ! this.person || ! this.person.skills || ! this.person.skills.length )
                    return [];

                return this.person.skills.sort(
                    (
                        { level: a },
                        { level: b },
                    ) => b - a
                );

            },
        },
    }
;

function getVueOptions(
    name,
) {

    const opt = {
        name,
        ... mixin,
    };

    return opt;

}

export {
    getVueOptions,
    mixin,
};
