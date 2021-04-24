<template>
  <div id="app">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" @load="handleLoad"
/>
  </div>
</template>
<script>
import ImageLoader from './';
export default {
  name:"App",
  components: { ImageLoader },
  methods: {
      handleLoad(){
          console.log("图片完全显示");
      }
  },
};
</script>
<style>
    #app{
        width: 500px;
        height: 400px;
        border: 1px solid red;
    }
</style>