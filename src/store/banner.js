import { getBanners } from "@/api/banner.js";

export default{
    namespaced: true, //命名空间  防止mutation重名
    state:{
        loading:false,  //是否正在加载中
        data:[],        //数据
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload;
        },
        setData(state,payload){
            state.data = payload;
        }
    },
    actions:{
        async fecthBanners(ctx){
          if(ctx.state.data.length)
            return;
          ctx.commit("setLoading",true);
          let data = await getBanners();
          ctx.commit("setData",data);
          ctx.commit("setLoading",false);
        }
    }
}