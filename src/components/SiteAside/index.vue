<template>
  <div class="site-aside-container">
    <Avatar v-if="data"  :url="data.avatar" :size="110"/>
    <h1 v-if="data"  class="title">{{data.siteTitle}}</h1>
    <Menu v-if="data" />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{data.icp}}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatur";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex"
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed:{
    ...mapState("setting",["loading","data"]),
  },
  created() {
    
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avator-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
