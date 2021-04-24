<template>
  <div class="message-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3> 
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading">
    </div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  name:"MessageArea",
  components: {
    DataForm,
    DataList,
  },
  props: {
    //标题
    title: {
      type: String,
      default: "",
    },
    //提交标题
    subTitle: {
      type: String,
      default: "",
    },
    //评论信息
    list: {
      type: Array,
      default: () => [],
    },
    //是否加载
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.message-container{
  padding: 20px 100px;
  height:100%;
}
.loading {
  position: relative;
  height: 100px;
}
</style>