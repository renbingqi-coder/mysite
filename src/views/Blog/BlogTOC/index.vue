<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "../RightList";
import debounce from "@/utils/debounce";
export default {
  data() {
    return {
      activeAnchor:"", //当前锚点
      event:null,
    }
  },
  props: {
    list: {
      type: Array,
      requeire: true,
    },
  },
  created() {
    this.event = this.debounce(this.setSelect)
    this.$bus.$on("mainScroll", this.event);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.event);
  },
  computed:{
     // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect(){
      const getToc = (toc = []) => {
        //toc为空.map自动返回[] 且内部不执行
        return toc.map((t)=>({
          ...t,
          //设置子组件的isSelect
          isSelect:t.anchor === this.activeAnchor,   //根据当前锚点显示那个被选中

          children:getToc(t.children),
        }))
      }
      return getToc(this.list)
    },

    // 跟据anchor获取对应的dom
    doms(){
      const doms = [];
      const addToDoms = (toc)=>{
        for(let t of toc){
          //获取dom元素
          doms.push(document.getElementById(t.anchor));
      
          if(t.children&&t.children.length){
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.list);
      return doms;
    }
  },
  components: {
    RightList,
  },
  methods: {
    debounce,
    //点击之后将锚点 设为当前点击的锚点
    handleSelect(item) {
      location.hash = item.anchor;  //跳转锚点
    },

    // 设置activeAnchor为正确的值   让左边选中
    setSelect() {
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      
      const range = 200;

      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;

        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;    //根据dom锚点决定当前锚点
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id;   // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>