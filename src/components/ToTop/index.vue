<template>
  <div class="totop-container" v-show="isShow" @click="handleToTop">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleShow);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleShow);
  },
  methods: {
    handleShow(dom) {
      if (!dom) {
          console.log(dom);
        this.isShow = false;
        return;
      }
      if (dom.scrollTop < 500) this.isShow = false;
      if (dom.scrollTop > 500) this.isShow = true;
    },
    handleToTop() {
      this.$bus.$emit("setMainScroll",0);  
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.totop-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background-color: @primary;
  color: #fff;
  z-index: 99999999999999999999999999;
  cursor: pointer;
}
</style>