const path = require('path')
const glob = require('glob')

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
    mode: 'production'
}
