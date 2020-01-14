<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/styles/comcom_3_new.css";

export default {};
</script>

<style>
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* min-height: 900px;
  min-width: 1500px; */
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
