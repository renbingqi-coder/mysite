module.exports = {
  // publicPath:"./",
  devServer: {
    //服务器代理
    proxy: {  
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true  //更改请求头中的host和origin
      },
    },
  },
  configureWebpack:require("./webpack.config"),
};
