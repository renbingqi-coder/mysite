<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ blog.createDate }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <router-link :to="{
          name:'CategoryBlog',
          params:{
            categoryid: blog.category.id,
          }
      }">
      {{ blog.category.name }}
      </router-link>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
    <div class="message">
      <MessageArea
        title="评论列表"
        :subTitle="`(${data.total})`"
        :list="data.rows"
        :isListLoading="isLoading"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import "highlight.js/styles/github.css";
import "@/style/markdown.css";
import fetchData from "@/mixin/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
import {setTitle} from "@/utils"
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore(){
      //如果数据长度小于数据总数  还有数据
      return this.data.rows.length  < this.data.total;
    }
  },
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  created() {
    setTitle.setRouterTitle(this.blog.title)
    this.$bus.$on("mainScroll",this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll",this.handleScroll);
  },
  methods: {
    handleScroll(dom){
      let height = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight);
      if(height<=100){
        this.fetchMore();
      }
    },
    async fetchData() {
      let data = await getComments(
        this.page,
        this.limit,
        this.$route.params.id,
      );
      return data;
    },
    async fetchMore(){
      if(!this.hasMore){
        return ;
      }
      //重新将loading设为true
      this.isLoading = true;
      this.page++; //请求的数据页加1
      //请求数据
      let resp = await this.fetchData();
      //拿到数据之后讲loading设为true;
      
      //将新数据添加到旧数据中   数据更细重新渲染
      this.data.total = resp.total,
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
      
    },

    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      //添加到评论列表中
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.blog-detail-container {
  height: 100%;
}
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
.message {
  margin: 30px 0;
}
</style>