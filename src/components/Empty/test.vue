<template>
  <div id="app">
    <Empty />
  </div>
</template>Empty
<script>
import Empty from './index';
export default {
  name:"App",
  components: { Empty },
};
</script>
<style>
    #app{
        position: relative;
        width: 500px;
        height: 500px;
        border: 2px solid red;
    }
</style>