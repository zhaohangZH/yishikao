let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //打包的入口文件  String|Object
    entry:'./src/main.js',
    output: { //配置打包结果     Object
        //定义输出文件路径
        path:path.resolve('./build'),
        //指定打包文件名称
        filename: 'bundle.js'
    },
    devtool:'cheap-module-source-map',
    module: {
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|jpg|gif|bmp)$/,
                use:'url-loader'
            }
        ]
    },
    devServer: {
            stats: {  }, //显示颜色
        port: 8080,//端口
            contentBase: 'build',//指定静态文件的根目录
        },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
};