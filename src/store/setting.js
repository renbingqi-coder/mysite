import getsetting from "@/api/setting.js";
import { setTitle } from "@/utils"

export default {
    namespaced: true, //命名空间  防止mutation重名
    state: {
        loading: false,  //是否正在加载中
        data: null,        //数据
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fecthSettings(ctx) {
            ctx.commit("setLoading", true)
            let data = await getsetting();
            ctx.commit("setData", data);
            setTitle.setSiteTitle(data.siteTitle);
            ctx.loading = false;
            if (data.favicon) {
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = data.favicon;
                document.querySelector("head").appendChild(link);
            }
        }
    }
}