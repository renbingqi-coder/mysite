<template>
  <div ref="mainscroll" class="project-container" v-loading="loading">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.url ? item.url : `javascript:alert('外网不支持访问')`"
      :target="item.url ? '_blank' : '_self'"
      class="project-item"
    >
      <img v-lazy="item.thumb" alt="" class="thumb" />
      <div class="info">
        <h2>
          {{ item.name }}
        </h2>
        <div class="github" v-if="item.github">
          <Icon type="github" v-if="item.github" />:
          <a
            target="_blank"
            :href="item.github"
            v-if="item.github"
          >
            github:{{ item.github }}
          </a>
        </div>

        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
import mainScroll from "@/mixin/mainScroll.js";
export default {
  mixins: [mainScroll("mainscroll")],
  computed: {
    ...mapState("project", ["loading", "data"]),
  },
  components: {
    Icon,
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.project-container {
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
  height: 100%;
  overflow-y: auto;
  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    &:hover {
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }
    .thumb {
      object-fit: cover;
      width: 250px;
      flex: 0 0 auto;
      border-radius: 5px;
      margin-right: 15px;
    }
    .info {
      overflow: hidden;
      line-height: 1.7;
      flex: 1 1 auto;
      h2 {
        margin: 0;
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .github {
      display: flex;
      font-size: 14px;
      color: @primary;
    }
  }
}
</style>