/* global require, module, process */
var path = require("path")
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.build.testSourceMap = true

module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.build.testSourceMap,
            extract: true
        })
    },
    devtool: '#eval-source-map',
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.testSourceMap,
            extract: true
        })
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"test"'
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["common", "vendor"]
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        }),
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            chunks: ['manifest', 'vendor', 'app'],
            filename: process.env.NODE_ENV === 'testing' ? 'index.html' : config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
})
