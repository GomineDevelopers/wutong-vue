<template>
  <div id="app">
    <!-- <img class="bg_img_c" src="./assets/newpic/bg2.png" alt /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  }, //为子页面刷新提供机制
  data() {
    return {
      isRouterAlive: true
    };
  },
  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    // var divscll = document.getElementById("app");
    // divscll.scrollTop = 0;
    // this.$nextTick(function() {
    //   var div = document.getElementById("scrolldIV");
    //   div.scrollTop = 0;
    // });
  },
  methods: {
    //为子页面刷新提供机制
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style>
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #41485d;
  height: 100%;
}
body {
  background: #000000 url(./assets/newpic/bg2.png) no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
