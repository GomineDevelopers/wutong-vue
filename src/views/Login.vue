<template>
  <div class="login_body" :style="loginBodyBgm"></div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginBodyBgm: {
        // backgroundImage: "url(" + require("@/assets/loginbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  },
  methods: {
    login() {}
  }
};
</script>
<style scoped></style>
