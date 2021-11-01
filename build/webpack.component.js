const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = require('./webpack.base');

const files = fs.readdirSync(path.resolve(__dirname, '../src/packages'));

const entrys = {};
for (const file of files) {
    entrys[file] = path.resolve(__dirname, `../src/packages/${ file }/index.js`);
}

module.exports = merge(webpackBaseConfig, {
    entry: entrys,
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/component/[name].css'
        })
    ]
});
