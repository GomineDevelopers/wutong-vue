<template>
  <div class="ShoppingTrolley">
    <vue-headful title="购物车"></vue-headful>
    <div :style="{height: '0.4rem'}"></div>
    <div class="ST_title">共3件商品</div>
    <div :style="{height: '0.46rem'}"></div>
    <div class="content_bg">
      <div :style="{height: '0.32rem'}"></div>
      <div class="c_title">广联医药&nbsp;〉</div>
      <div :style="{height: '0.21rem'}"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShoppingTrolley",
  components: {},
  data() {
    return {};
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.ShoppingTrolley {
  padding: 0 0.32rem;
}
.ShoppingTrolley .ST_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(65, 72, 93, 1);
  line-height: 0.45rem;
}
.ShoppingTrolley .content_bg {
  width: 6.86rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.04rem 0.2rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
  border: 0.01rem solid rgba(233, 232, 232, 1);
}
</style>

