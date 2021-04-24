<template>
  <div  class="detail-container" v-loading="isLoading">
    <Layout>
      <template  #main>
        <div class="main" ref="maincontainer" >
          <BlogDetail :blog="data" v-if="!isLoading"/>
        </div>
      </template>
      <template #right>
        <div class="right" >
          <BlogTOC :list="data.toc" v-if="!isLoading" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import { getBlog } from "@/api/blog.js";
import fetchData from "@/mixin/fetchData.js";
import mainScroll from "@/mixin/mainScroll.js";
import Layout from "@/components/Layout";
import BlogTOC from "./BlogTOC";
import BlogDetail from "./BlogDetail";
export default {
  mixins: [fetchData({}),mainScroll("maincontainer")],
  components: {
    Layout,
    BlogTOC,
    BlogDetail,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
  updated(){
    console.log("chuangjian")
  }
};
</script>

<style lang="less" scoped>
.detail-container {
  position: relative;
  height: 100%;
  .main {
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  .right {
    padding-left: 10px;
    padding-top: 30px;
    width: 250px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>