const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {    //忽略打包
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter",
        axios: "axios",
    },
}