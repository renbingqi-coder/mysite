<template>
  <div class="ImageLoader-container">
      <img v-if="!imgLoaded" class="placeholder" :src="placeholder" >
      <img class="src" :src="src" @load="handleLoad" :style="{opacity:opacity,transition:`all ${duration}ms`}">
  </div>
</template>

<script>
export default {
    name:"ImageLoader",
    data() {
        return {
            imgLoaded:false,//原图是否加载完
            opacity:0,
        }
    },
    props:{
        // 原始图片的路径
        src:{
            type:String,
            required:true,
        },
        //原始图片加载完成前的占位图片
        placeholder:{
            type:String,
            required:true,
        },
        //原始图片加载完成后，切换到原始图经过的毫秒数
        duration:{
            type:Number,
            default:1000,
        }
    },
    methods: {
        handleLoad(){
             this.opacity=1; //原图加载完将透明度设为1
            setTimeout(() => {
                this.imgLoaded=true;//显示完之后 将imgloaded设为true 取消占位图
                this.$emit("load");
            },this.duration);
        }
    },
}
</script>
<style lang="less" scoped>
    @import "~@/style/mixin.less";
    @import "~@/style/var.less";
    .ImageLoader-container{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
        img{
            .self-fill(); 
            object-fit:cover; //保持原有尺寸比例。但部分内容可能被剪切。
            &.src{
                opacity: 0;
            }
            &.placeholder{
                filter: blur(2vw); //遮罩层模糊度
            }
        }
    }
</style>