<template>
    <div class="mysite-container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.mysite-container {
  .self-fill(fixed);
}

</style>