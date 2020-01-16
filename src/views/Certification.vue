<template>
  <van-row class="van_container">
    <vue-headful title="实名认证"></vue-headful>
    <van-row class="van_container_body height_auto">
      <van-row class="identity_input flex">
        <span class="main_font2">身份证号</span
        ><van-field v-model="identity" placeholder="请填写身份证号" />
      </van-row>
      <!-- 身份证照片开始 -->
      <van-row class="padding_mudule identity_moudle">
        <span class="main_font2 identity_num_title">身份证照片</span>
        <van-row class="flex flex_align_center flex_justify_between">
          <van-row class="identity_list"
            ><img src="../assets/pic/photo1.png"
          /></van-row>
          <van-row class="identity_list"
            ><img src="../assets/pic/photo2.png"
          /></van-row>
        </van-row>
        <van-row class="photo_notice">
          <span class="photo_notice_title">拍摄要求</span>
          <van-row class="notice_photo flex">
            <van-row
              class="notice_photo flex flex_justify_center flex_direction"
            >
              <img src="../assets/pic/ic_0.jpg" />
              <span><van-icon name="success" />标准拍摄</span>
            </van-row>
            <van-row
              class="notice_photo flex flex_justify_center flex_direction"
            >
              <img src="../assets/pic/ic_1.jpg" />
              <span><van-icon name="cross" />边框缺失</span>
            </van-row>
            <van-row
              class="notice_photo flex flex_justify_center flex_direction"
            >
              <img src="../assets/pic/ic_2.jpg" />
              <span><van-icon name="cross" />照片模糊</span>
            </van-row>
            <van-row
              class="notice_photo flex flex_justify_center flex_direction"
            >
              <img src="../assets/pic/ic_3.jpg" />
              <span><van-icon name="cross" />闪光强烈</span>
            </van-row>
          </van-row>
        </van-row>
        <van-row class="public_button_middle">
          <button>提交认证</button>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "Certification",
  data() {
    return {
      identity: ""
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style>
.van-field__control {
  font-size: 0.28rem;
  font-weight: 400;
}
</style>
<style scoped>
.identity_moudle {
  overflow: hidden;
  margin-top: 0.4rem;
}
.identity_input {
  margin-left: 0.32rem;
  height: 1.17rem;
  line-height: 1.17rem;
  border-bottom: 0.01rem solid #eeeeee;
  padding-bottom: 0.01rem;
}
.van-cell.van-field {
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.main_font2 {
  white-space: nowrap;
  margin-right: 0.36rem;
}
.identity_num_title {
  display: block;
  margin-bottom: 0.36rem;
  height: 0.45rem;
}
.identity_list {
  padding: 0.16rem;
  box-shadow: 0rem 0.05rem 0.2rem 0rem rgba(197, 202, 213, 0.25);
  border-radius: 0.04rem;
}
.identity_list img {
  widows: 2.93rem;
  height: 2.08rem;
}
.photo_notice {
  margin-top: 0.4rem;
}
.photo_notice_title {
  font-size: 0.24rem;
  font-weight: 400;
  display: block;
  margin-bottom: 0.19rem;
}
.notice_photo {
  margin-right: 0.25rem;
}
.notice_photo img {
  width: 1.49rem;
  height: 0.92rem;
}
.notice_photo span {
  font-size: 0.22rem;
  color: #858b9c;
  margin-top: 0.19rem;
  text-align: center;
}
.notice_photo span .van-icon {
  margin-right: 0.05rem;
  vertical-align: middle;
}
</style>
