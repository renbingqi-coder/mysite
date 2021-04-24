<template>
  <!-- 样式属性 绑定一个对象 -->
  <img
    class="avator-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  name: "Avatur",
  props: {
    // 属性约束
    url: {
      type: String, //属性类型
      required: true, //属性必填
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.avator-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>