import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { setTitle } from "../utils"
// src/router/index.js
if (!window.VueRouter) {
  Vue.use(VueRouter); // 使用一个vue插件
}

//解决重复点击导航问题
// const VueRouterPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

//配置路由
const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "hash",
});

//后置守卫
router.afterEach((to,from)=>{
  setTitle.setRouterTitle(to.meta.title);
})
export default router;
