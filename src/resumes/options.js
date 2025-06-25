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

                const useTerms = this.terms[ this.$route.query.lang || process.env.LANGUAGE || 'en' ] || this.terms.en;

                return useTerms;

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

                return this.person.skills
                    .sort(
                        (
                            { level: a },
                            { level: b },
                        ) => b - a
                    )
                    .sort(
                        (
                            { hot: a },
                            { hot: b },
                        ) => {

                            if( a && ! b )
                                return - 1;

                            if( b && ! a )
                                return 1;

                            return 0;

                        }
                    )
                    .sort(
                        (
                            { first: a },
                            { first: b },
                        ) => {

                            if( a && ! b )
                                return - 1;

                            if( b && ! a )
                                return 1;

                            return 0;

                        }
                    )
                ;

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
