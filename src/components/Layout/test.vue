<template>
  <div class="test">
    <LayOut>
      <template #left>
        <div class="left">左边</div>
      </template>
      <template #main>
        <div class="main">中间</div>
      </template>
      <template #right>
        <div class="right">右边</div>
      </template>
    </LayOut>
  </div>
</template>

<script>
import LayOut from "./index";
export default {
  components: {
    LayOut,
  },
};
</script>

<style scoped>
.test {
  width: 60%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 220px;
  height: 100%;
  background-color: red;
}
.main {
  height: 100%;
  background-color: #00f;
}
.right {
  width: 250px;
  height: 100%;
  background-color: red;
}
</style>