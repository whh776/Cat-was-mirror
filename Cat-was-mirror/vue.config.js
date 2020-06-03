//!对当前项目配置的添加或是覆盖
//! 配置文件一旦修改，是必须重启
//!修改的是node modules/evue/cli- serverwebpack配置
//! 当前的这个配置史件用的是Common.js模块化
const path = require('path')
module.exports = {
    devServer: {   //项目启动自动打开浏览器的配置
        open: true
    },
    chainWebpack: config => {       //这是路径的别名配置
        config.resolve.alias
        .set('@', path.join(__dirname, './src'))
        .set('Style', path.join(__dirname, './src/style'))
        .set('Page', path.join(__dirname, './src/pages'))
        .set('ProjectManage', path.join(__dirname, './src/components/content/projectManage'))
    }
}