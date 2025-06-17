module.exports = {
    parser: 'postcss-less-engine',
    syntax: 'postcss-less',
    plugins: [
        require( 'postcss-import' )(),
        require( 'postcss-url' )(),
        require( 'postcss-scoped' )(),
        require( 'postcss-preset-env' )(
            {
                stage: 2,
            }
        ),
        require( 'autoprefixer' )(
            {
                grid: true,
            }
        ),
        require( 'postcss-combine-duplicated-selectors' )(
            {
                removeDuplicatedProperties: true,
            }
        ),
        require( 'cssnano' )(
            {
                preset: 'advanced',
                discardComments: {
                    removeAll: true,
                },
                zindex: false,
            }
        ),
    ],
};
