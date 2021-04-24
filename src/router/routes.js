import "nprogress/nprogress.css"
import { start, done, configure } from "nprogress";
import NotFound  from "@/views/NotFound";
/**
 * 配置
 */
configure({
  trickleSpeed: 20,
  showSpinner: false,
});

/**
 * 延迟加载
 * @param {*} duration 
 * @returns 
 */

/**
 *异步获取组件 加一个进度条
*/
function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}


export default [
  { path: "/mysite", component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")), meta: { title: "首页" } },
  { name: "Home", path: "/", component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")), meta: { title: "首页" } },
  { name: "About", path: "/about", component: getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About")), meta: { title: "关于我" } },
  { name: "Blog", path: "/article", component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")), meta: { title: "文章" } },
  { name: "CategoryBlog", path: "/article/cate/:categoryid", component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")), meta: { title: "文章" } },
  { name: "BlogDetail", path: "/article/:id", component: getPageComponent(() => import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail")), meta: { title: "文章详情" } },
  { name: "Project", path: "/project", component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project")), meta: { title: "项目&效果" } },
  { name: "Message", path: "/message", component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message")), meta: { title: "留言板" } },
  // { name: "Index", path: "/index", component: Index},
  {
    path: "*", component:NotFound, meta: { title: "404" }
  },
];
