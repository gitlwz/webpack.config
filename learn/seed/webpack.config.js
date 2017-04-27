var cwd = process.cwd();
module.exports = {
    entry: __dirname+'/src/main.js',
    output: {
        path: __dirname+'/build/bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },{
                test: /\.css$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    solove: [
        '','.js','.jsx'
    ],
    devServer: {
        contentBase: cwd,
        colors: true,
        inline: true,
        historyApiFallback: true
    }
}