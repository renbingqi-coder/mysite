<template>
  <div class="blogcategory-container" v-loading="isLoading" ref="maincontainer">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "../RightList";
import fetchData from "@/mixin/fetchData.js";
import mainScroll from "@/mixin/mainScroll.js";
import { getBlogTypes } from "@/api/blog.js";
export default {
  mixins: [fetchData([]),mainScroll("maincontainer")],
  data() {
    return {};
  },
  computed: {
    //分类ID  路由信息 设为计算属性
    categoryId() {
      return +this.$route.params.categoryid || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      //获取所有文章
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      //添加一个全部
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      //给数据添加一个isSelect属性
      return result.map((el) => ({
        ...el,
        isSelect: el.id === this.categoryId,  //根据路由信息 改变为哪一个激活状态
        aside: `${el.articleCount}篇`,
      }));
    },
  },
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blogcategory-container {
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.2em;
    margin: 0;
  }
}
</style>