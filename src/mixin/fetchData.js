//公共的混入代码   导出一个函数  函数返回一个第对象
export default function (defaultData = null) {
    return {
        data() {
            return {
                data: defaultData,//数据      
                isLoading: true, // 是否在加载
            }
        },
        async created(){
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}