const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

const fileArr = glob.sync('./src/pages/*.js').reduce((acc,cur) =>
{
    const entry = cur.substring(6).slice(0,-3)
    acc[entry] = cur
    return acc
},{})

module.exports = 
{
    entry: fileArr,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'website'
    },
    plugins: [
        new webpack.ProvidePlugin( {
            // $: 'jquery',
            jQuery: 'jquery',
            //'window.jQuery': 'jquery'
        } )
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'production'
}
