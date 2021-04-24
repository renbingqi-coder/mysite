<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        :src="banner.bigImg"
        :placeholder="banner.bigImg"
        @load="movetext"
      />
    </div>
    <div class="carousel-text">
      <div class="title" ref="title">{{ banner.title }}</div>
      <div class="desc" ref="desc">{{ banner.description }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  name: "Carouselitem",
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标相对容器的横坐标
      mouseY: 0, // 鼠标想对的纵坐标
    };
  },
  computed: {
    //图片坐标平移
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      //多出部分
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      
      //图片移动后的位置 往鼠标反方向移动
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },

    //容器中心位置
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  components: {
    ImageLoader,
  },
  props: ["banner"],
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.$refs.title.style.width = 0;
    this.$refs.desc.style.width = 0;

    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    movetext() {
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },

    //设置大小
    setSize() {

      // 容器大小
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      //图片大小
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },

    //求鼠标相对与容器的位置
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();//元素相对视口的位置
      this.mouseX = e.clientX - rect.left; //鼠标真正位置减去元素相对视口位置
      this.mouseY = e.clientY - rect.top;
    },

    //回到中心点
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.carousel-item-container {
  position: relative;
  background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  .carousel-img {
    position: absolute;
    width: 110%;
    height: 110%;
  }
  .carousel-text {
    text-shadow: 2px 0 0 rgba(0, 0, 0, 0.5), -2px 0 0 rgba(0, 0, 0, 0.5),
      0 2px 0 rgba(0, 0, 0, 0.5), 0 -2px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    top: calc(50%);
    left: 3%;
    .title {
      font-size: 2em;
      padding: 5px 0;
      letter-spacing: 3px; //设置文字间隔
    }
    .desc {
      padding: 5px 0;
      font-size: 1.2em;
      text-indent: 2em;
      letter-spacing: 2px; //设置文字间隔
    }
  }
}
</style>
