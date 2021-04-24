//入口文件  渲染文件
import "./mock";
import Vue from 'vue';
import App from './App.vue';
import "./style/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import vLoading from  "@/directives/loading.js";
import vLazy from  "@/directives/lazy.js";
import "./eventBus";
import store from  "./store/index";
store.dispatch("setting/fecthSettings");  //全局数据在main中请求

console.log("使用插件");
Vue.prototype.$showMessage = showMessage;
//全局注册 指令 directive
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')