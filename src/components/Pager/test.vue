<template>
  <div id="app">
    <Pager :current="current" :visibleNumber="visibleNumber" :total="total" @pageChange="pageChange"/>
  </div>
</template>
<script>
import Pager from './Pager'
export default {
  name:"App",
  components: { Pager},
  data() {
    return {
      current:3,
      visibleNumber:10,
      total:201,
    }
  },
  methods: {
    pageChange(newPage){
      console.log("翻页");
      this.current = newPage;
    }
  },
};
</script>