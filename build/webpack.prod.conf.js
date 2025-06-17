const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = config.build.env;

env.NODE_ENV = '"production"';

const webpackConfig = merge(
    baseWebpackConfig,
    {
        mode: 'production',
        module: {
        rules: utils.styleLoaders(
            {
                sourceMap: config.build.productionSourceMap,
                extract: true
            }
        )
        },
        devtool: false,
        output: {
            path: config.build.assetsRoot,
            filename: utils.assetsPath('js/[name].[chunkhash].js'),
            chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
        },
        optimization: {
            nodeEnv: 'production',
            minimize: true,
            splitChunks: {
                chunks: "all"
            },
            minimizer: [
                new TerserPlugin(
                    {
                        cache: true,
                        parallel: true,
                    }
                ),
                new OptimizeCSSAssetsPlugin(),
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            // http://vuejs.github.io/vue-loader/en/workflow/production.html
            new webpack.DefinePlugin(
                {
                    'process.env': env,
                }
            ),
            // extract css into its own file
            new ExtractTextPlugin(
                {
                    filename: utils.assetsPath(
                        'css/[name].[hash].css'
                    ),
                }
            ),
            new CopyWebpackPlugin(
                [
                    {
                        from: './src/static',
                        to: './'
                    },
                    {
                        from: './pdf',
                        to: './pdf'
                    },
                ]
            ),
            // generate dist index.html with correct asset hash for caching.
            // you can customize output by editing /index.html
            // see https://github.com/ampedandwired/html-webpack-plugin
            new HtmlWebpackPlugin(
                {
                    filename: config.build.index,
                    template: 'index.html',
                    inject: true,
                    minify: {
                        collapseBooleanAttributes: true,
                        decodeEntities: true,
                        minifyCSS: true,
                        minifyJS: true,
                        processConditionalComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        trimCustomFragments: true,
                        useShortDoctype: true,
                        collapseWhitespace: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        removeComments: true,
                        // more options:
                        // https://github.com/kangax/html-minifier#options-quick-reference
                    },
                    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                    chunksSortMode: 'dependency'
                }
            ),
            new webpack.AutomaticPrefetchPlugin(),
        ],
    }
);

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        `\\.(${ config.build.productionGzipExtensions.join('|') })$`
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
