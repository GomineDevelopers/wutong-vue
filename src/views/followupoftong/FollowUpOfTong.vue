<template>
  <van-row class="van_container">
    <vue-headful title="随访通"></vue-headful>
    <van-row class="van_container_body height_auto flex flex_direction">
      <img @click="router_to('/editpatientinfo')" src="../../assets/newpic2/hzdj.png" />
      <img @click="router_to('/patientlist')" src="../../assets/newpic2/hzzl.png" />
      <img @click="router_to('/followuplist')" src="../../assets/newpic2/hzsf.png" />
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "FollowUpOfTong",
  data() {
    return {};
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style scoped>
.van_container_body {
  height: calc(100% - 0.56rem);
  background-size: cover;
  padding: 0.56rem 0.5rem 0rem 0.5rem;
}
.van_container_body img {
  width: 6.5rem;
  height: 2.6rem;
  margin-bottom: 0.4rem;
}
</style>
