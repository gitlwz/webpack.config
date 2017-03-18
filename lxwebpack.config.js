/**
 * 打包单个应用
 */
var config = require(); //引用webpack自我配置函数
//打印启动信息
config.initPrint(__filename);


var path = require('path'); 
var cwd = process.cwd();//返回运行当前脚本的工作目录的路径
var options = {
  //定义应用标识名
  key:'materialmgr',
  //定义各模块的入口
  modules : {
    bundle: './index-materialmgr.js'//入口
  }
  //根目录
  ,rootPath:__dirname
  //webpack-dev-server启动的端口
  ,port:8005
  //相对路径
  //,path: path.join(__dirname, 'apps')
  //编译后的路径
  //,filename: '[name]/build/bundle.js'
  //定义各种加载器
  //,loaders: []
  //定义各种插件
  //,plugins:[]
  //定义路径别名，即:require(alias)
  //,alias:{}
  , alias: {
        "yylib": path.join(cwd,"./core/yylib")//旧UI库
    }
}
//服务端产出路径
if(process.env.NODE_ENV==='prod' || process.env.NODE_ENV==='outer') {//发布态
    options.publicPath = '/icop-material-frontend';
}else{//开发态
}
//构建webpack配置
module.exports = config.webpack(options);