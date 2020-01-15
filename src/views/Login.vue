<template>
  <van-row class="login_body">
    <van-row class="login_title"><img src="../assets/pic/logo.png"/></van-row>
    <van-row class="login_main"> </van-row>
  </van-row>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login() {}
  }
};
</script>
<style scoped>
.login_body {
  height: 100%;
  background: url("../assets/pic/bg.png") no-repeat 100%;
  background-size: cover;
  padding: 0rem 1.5625rem;
}
.login_title {
  font-size: 0.875rem;
  height: 9.6875rem;
  line-height: 9.6875rem;
  text-align: center;
}
</style>
