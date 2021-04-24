<template>
  <div class="login-container">
      账号<input type="text">
      密码<input type="password">
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
methods: {
    login(){
        this.$router.push({
            name:"Mysite",
        })
    }
},
}
</script>
<style lang="less" scoped>
@import "~@/style/mixin.less";
.login-container {
    position: relative;
    height: 30%;
    width: 40%;
    .self-center();
}
</style>