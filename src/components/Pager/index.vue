<template>
  <!-- v-if  v-for v-show  全局样式-->
  <div class="paper-container" v-if="pageNumber > 1">
    <a  @click="pageChange(1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="pageChange(current - 1)"
      :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      @click="pageChange(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="pageChange(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="pageChange(pageNumber)"
      >&gt;&gt;</a
    >
  </div>
</template>


<script>
export default {
  name: "Pager",
  props: {
    //当前页
    current: {
      type: Number,
      default: 1,
    },
    //总数
    total: {
      type: Number,
    },
    //每页数据容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 当前最小页
    pageMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    pageMax() {
      let max = this.pageMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 页数
    numbers() {
      let nums = [];
      for (let i = this.pageMin; i <= this.pageMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    pageChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      //抛出事件(事件名,数据)
     this.$emit("pageChange", newPage);
    },
  },
};
</script>


<style lang="less" scoped>
// 导入全局样式
@import "~@/style/var.less";
.paper-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>