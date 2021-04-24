<template>
  <div class="app-container">
    <LayOut>
      <template #left>
        <div class="siteAisde">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div class="main">
          <RouterView />
        </div>
      </template>
    </LayOut>
    <ToTop />
  </div> 
</template>
<script>
import LayOut from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop"
export default {
  name: "App",
  components: { LayOut, SiteAside,ToTop },
};
</script>
<style lang="less" scoped>
@import "~@/style/mixin.less";
.app-container {
  .self-fill();
}
.siteAisde {
  width: 230px;
  height: 100%;
}
.main{
  height: 100%;
}
</style>