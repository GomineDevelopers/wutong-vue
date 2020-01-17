<template>
  <van-row class="van_container">
    <vue-headful title="病例"></vue-headful>
    <van-row class="van_container_body sickness_conllect_body height_auto">
      <van-row class="header_nav flex">
        <span :class="activeIndex ? 'active' : ''" @click="activeIndex = true"
          >病例库</span
        >
        <span :class="activeIndex ? '' : 'active'" @click="activeIndex = false"
          >病例采集</span
        >
      </van-row>
      <van-row class="sickness_collect_content">
        <sickness-library-list v-show="activeIndex"></sickness-library-list>
        <sickness-collect-list v-show="!activeIndex"></sickness-collect-list>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
import SicknessLibraryList from "../components/SicknessLibraryList"; //病例库
import SicknessCollectList from "../components/SicknessCollectList"; //病例采集
export default {
  name: "SicknessCollect",
  components: {
    "sickness-library-list": SicknessLibraryList,
    "sickness-collect-list": SicknessCollectList
  },
  data() {
    return {
      activeIndex: true
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.sickness_conllect_body {
  position: relative;
  overflow: hidden;
}
.header_nav {
  height: 0.88rem;
  line-height: 0.88rem;
  justify-content: center;
  border: 0.01rem solid #e3e3e3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.header_nav span {
  font-size: 0.28rem;
  color: #111a34;
  position: relative;
  display: block;
}
.header_nav span:nth-child(1) {
  margin-right: 1.62rem;
}
.header_nav span.active {
  color: #81d8ce;
  font-weight: 500;
}
.header_nav span::after {
  content: "";
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  height: 0.04rem;
  background: transparent;
}
.header_nav span.active::after {
  background: #81d8ce;
}
.sickness_collect_content {
  margin-top: 0.88rem;
  height: calc(100% - 0.88rem);
  overflow-y: auto;
}
</style>
