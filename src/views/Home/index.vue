<template>
  <div v-loading="loading" class="home-container" @wheel="handleWheel">
    <ul
      class="carouse-container"
      ref="container"
      :style="{
        marginTop,
      }"
      @transitionend="handletransitioned"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :banner="item" />
      </li>
    </ul>
    <div v-if="index >= 1" class="iconfont icon-up" @click="moveTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div v-if="index < 2" class="iconfont icon-down" @click="moveTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <div class="indicator">
      <span
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="moveTo(i)"
      >
      </span>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
  name: "Home",
  //注册组件
  components: {
    CarouselItem,
    Icon,
  },

  //数据
  data() {
    return {
      index: 0, //当前页面索引
      containerHeight: 0,
      switching: false, //是否正在翻页
    };
  },
  //组件挂在之后
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;

    window.addEventListener("resize", this.handleresize);
  },
  //组件销毁时
  destroyed() {
    window.removeEventListener("resize", this.handleresize);
  },

  //计算属性
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"]),
  },
  created() {
    this.$store.dispatch("banner/fecthBanners");
  },
  //方法
  methods: {
    //监听窗口改变
    handleresize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },

    //切换页面事件
    moveTo(index) {
      this.index = index;
    },

    //滚动事件
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -50 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
      if (e.deltaY > 50 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },

    //动画结束之后
    handletransitioned() {
      this.switching = false;
    },

  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.home-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  background: @dark;
  ul {
    transition: all 500ms;
    margin: 0;
    padding: 0;
    &.carouse-container {
      width: 100%;
      height: 100%;
    }
    li {
      height: 100%;
    }
  }
  .iconfont {
    position: fixed;
    .self-center();
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    &.icon-up {
      top: 30px;
      animation: jumpup 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: 30px;
      animation: jumpdown 2s infinite;
    }
    @keyframes jumpup {
      0% {
        transform: translate(50%, -5px);
      }
      50% {
        transform: translate(50%, 5px);
      }
      100% {
        transform: translate(50%, -5px);
      }
    }
    @keyframes jumpdown {
      0% {
        transform: translate(50%, -5px);
      }
      50% {
        transform: translate(50%, 5px);
      }
      100% {
        transform: translate(50%, -5px);
      }
    }
  }
  .indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    span {
      cursor: pointer;
      display: block;
      height: 7px;
      width: 7px;
      background: #000;
      border: 1px solid #fff;
      border-radius: 50%;
      margin: 20px;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
