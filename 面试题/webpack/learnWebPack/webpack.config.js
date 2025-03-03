const path = require('path'); // node 内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件
const { VueLoaderPlugin } = require('vue-loader'); // 引入vue-loader插件
const { Static } = require('vue');


module.exports = {
    mode: 'development',  // 开发模式（线上模式就会把没有意义的代码剔除掉）
    entry: path.resolve(__dirname, './src/main.js'), // 入口文件（大总管）
    output: {  // 出口文件
        path: path.resolve(__dirname, './dist'), // 出口文件路径
        filename: 'js/[name].js' // 出口文件名
    },
    module: {
        rules: [ // 规则
            {
                test: /\.vue$/, // 匹配.vue文件
                use: 'vue-loader' // 使用vue-loader
            },
            {
                test: /\.css$/, // 匹配.css文件
                use: ['style-loader', 'css-loader'] // 使用css-loader和style-loader(loader从右往左执行)
            },
            {
                test: /\.js$/, // 匹配.js文件
                use: 'babel-loader', // 使用babel-loader
                exclude: /node_modules/ // 排除node_modules文件夹
            }
        ]
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'), // 模板文件
            filename: 'index.html', // 生成的文件名
            title: 'learnWebpack', // 标题
            
        }),
        new VueLoaderPlugin()
    ],
    devServer:{  // 开发环境下实时运行的服务
        static:{
            directory: path.resolve(__dirname, './dist')
        },
        port: 5174, // 端口号
        open: true, // 自动打开浏览器
        hot: true // 热更新
    }
}