import { Store, install } from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about"
import project from "./project"
if (!window.Vuex) {
    install(Vue);
}

let store =  new Store({
    strict:true,//开启严格模式只允许用matution获取状态
    modules:{
        banner,
        setting,
        about,
        project,
    }
})
export default store;