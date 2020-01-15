<template>
  <div class="Identity">
    <vue-headful title="身份"></vue-headful>
    <img class="avatar" :src="avatar1" alt />
    <van-button round class='common_middle_btn'>我是患者</van-button>
    <img class="avatar" :src="avatar2" alt />
    <van-button round class='common_middle_btn'>我是医生</van-button>
  </div>
</template>
<script>
export default {
  name: "Identity",
  components: {},
  data() {
    return {
      avatar1: require("@/assets/pic/head1.png"),
      avatar2: require("@/assets/pic/head2.png")
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.Identity {
}
.Identity .avatar {
  height: 200px;
  width: 200px;
}
</style>

