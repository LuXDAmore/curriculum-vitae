import { terms } from '../terms';

const person = require(
        `../../resume/data.${ process.env.LANGUAGE }.json`
    )
    , coverLetter = person && person.cover && person.cover.letter && require(
        `../../resume/${ person.cover.letter }`
    )
    // Called by templates to decrease redundancy
    , mixin = {
        data: () => (
            {
                person,
                coverLetter,
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
