<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul v-for="item in data.rows" :key="item.id">
      <li>
        <div class="thumb" v-if="item.thumb">
          <router-link 
          :to="{
            name:'BlogDetail',
            params:{
              id:item.id,
            }
          }
          ">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link 
          :to="{
            name:'BlogDetail',
            params:{
              id:item.id,
            }
          }
          ">
          <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link :to="{
              name:'CategoryBlog',
              params:{
                categoryid:item.category.id
              }
            }
            " >{{item.category.name}}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
       v-if="data.total"
      :current="routeInfo.page"
      :visibleNumber="10"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import fetchData from "@/mixin/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import mainScroll from "@/mixin/mainScroll.js";
import Pager from "@/components/Pager";
export default {
  name: "BlogList",
  data() {
    return {
      
    };
  },
  components: { Pager },
  mixins: [fetchData({}),mainScroll("container")],
  computed: {
    // 获取路由信息   依赖路由信息变化   路由信息一变这快变化
    routeInfo() {
      const categoryId = +this.$route.params.categoryid || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    //获取数据
    async fetchData() {
      return await getBlogs(
            this.routeInfo.page,
            this.routeInfo.limit,
            this.routeInfo.categoryId
      );
    },
    pageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (this.routeInfo.categoryid === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    //动态监听路由
    async $route() {
        this.isLoading = true;
        //回到顶部
        this.$refs.container.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading =false;
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/style/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
