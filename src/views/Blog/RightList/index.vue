<template>
  <ul class="rightlist-container">
    <li v-for="(item, index) in list" :key="index">
      <span :class="{ select: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span v-if="item.aside" class="count" @click="handleClick(item)" :class="{ select: item.isSelect }">
        {{item.aside}}篇
      </span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    //选中向上抛出数据
    handleClick(item) {
      if(!item.isSelect){
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.rightlist-container {
  margin-top: 0px;
  margin-left: 10px;
  list-style: none;
  padding: 0;
  li {
    margin-left: 1em;
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-weight: bold;
    .count{
      padding-left:5px;
      color:gray;
      font-size: 13px;
      font-weight: 500;
      padding-bottom: 50px;
    }
    .select {
      color: sandybrown;
      font-weight: bold;
    }
  }
}
</style>