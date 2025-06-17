var utils = require('./utils');
var config = require('../config');

module.exports = {
    loaders: utils.cssLoaders(
        {
            sourceMap: false,
            extract: true,
        }
    ),
    compilerOptions: {
        removeComments: true,
        preserveWhitespace: false,
        whitespace: 'condense',
    },
};
