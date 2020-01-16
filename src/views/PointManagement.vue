<template>
  <div class="van_container">
    <vue-headful title="积分管理"></vue-headful>
    <van-row class="van_container_body height_auto padding_mudule">
      <van-row
        class="total_info_top flex flex_justify_between flex_align_center"
      >
        <img src="../assets/pic/jf_bgm.png" />
        <van-row class="total_info_item flex flex_1 flex_direction">
          <span>今日累计</span>
          <span>3298</span>
        </van-row>
        <van-row class="total_info_item flex flex_direction">
          <span>总累计</span>
          <span>217452</span>
        </van-row>
      </van-row>
      <!-- 积分记录 -->
      <van-row class="integral_content">
        <van-row class="main_font2">积分记录</van-row>
        <van-row
          class="integral_list flex flex_align_center"
          v-for="(list, index) in integralList"
          :key="index"
        >
          <span class="flex_1">{{ list.title }}</span>
          <span>+&nbsp;{{ list.integral }}</span>
        </van-row>
      </van-row>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "PointManagement",
  data() {
    return {
      integralList: [
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" },
        { title: "登录系统", integral: "1" }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.total_info_top {
  height: 1.98rem;
  background: linear-gradient(
    45deg,
    rgba(0, 202, 171, 1) 0%,
    rgba(0, 216, 160, 1) 100%
  );
  box-shadow: 0px 0.02rem 0.2rem 0rem rgba(0, 215, 162, 0.5);
  border-radius: 0.3rem;
  padding: 0rem 0.56rem;
  margin: 0.56rem 0rem 0.7rem 0rem;
  position: relative;
}
.total_info_top img {
  width: 2.23rem;
  position: absolute;
  left: 0.56rem;
  bottom: 0rem;
}
.total_info_item span:nth-child(1) {
  font-size: 0.2rem;
  color: #ffffff;
  margin-bottom: 0.1rem;
}
.total_info_item span:nth-child(2) {
  font-size: 0.4rem;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 500;
}
.integral_content .main_font2 {
  padding-bottom: 0.12rem;
  border-bottom: 0.01rem solid #eeeeee;
}
.integral_list {
  height: 1.18rem;
  border-bottom: 0.01rem solid #eeeeee;
  padding: 0rem 0.4rem;
}

.integral_list span:nth-child(1) {
  color: #41485d;
  font-size: 0.28rem;
}
.integral_list span:nth-child(2) {
  color: #81d8ce;
  font-size: 0.28rem;
}
</style>
