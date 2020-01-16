<template>
  <van-row class="login_body">
    <van-row class="login_title">
      <!-- <img src="../assets/pic/logo.svg" /> -->
      <img src="../assets/pic/logo.png" />
    </van-row>
    <van-row class="login_main">
      <van-row class="login_title2 theme_color2">登录</van-row>
      <van-row class="login_main_input flex flex_align_center">
        <van-field v-model="tel" type="number" placeholder="请输入手机号" />
      </van-row>
      <van-row class="login_main_input flex flex_align_center">
        <van-col span="16">
          <van-field v-model="code" placeholder="请输入验证码" />
        </van-col>
        <van-col span="8" class="forget_password_btn theme_color6">
          <span></span> 获取验证码
        </van-col>
      </van-row>
      <van-row
        :class="['login_button', active ? 'active_button' : 'disable_button']"
        @click="login"
      >
        <button>登&nbsp;录</button>
      </van-row>
    </van-row>
    <van-row class="login_protocol flex flex_justify_content">
      <span>登录即表示同意</span>
      <router-link :to="{ path: '/loginprotocol' }"
        >《用户注册协议》</router-link
      >
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      tel: "",
      code: "",
      active: false //按钮不可点击
    };
  },
  methods: {
    login() {
      console.log("登录");
      let regs = /^1[3456789]\d{9}$/;
      if (!regs.test(this.tel)) {
        this.$toast.fail("电话号码格式不正确");
        return false;
      }
      if (this.code.length == 0) {
        this.$toast.fail("验证码不能为空");
        return false;
      }
      this.active = true;
    }
  }
};
</script>
<style>
.login_main .van-cell.van-field .van-field__control {
  font-size: 0.32rem;
}
</style>
<style scoped>
.login_body {
  height: 100%;
  background: url("../assets/pic/bg.png") no-repeat 100%;
  background-size: cover;
  padding: 0rem 0.5rem;
}
.login_title {
  height: 3.1rem;
  line-height: 3.1rem;
  text-align: center;
}
.login_title img {
  width: 35%;
}
.login_main {
  padding: 0.6rem;
  /* height: 6.5rem; */
  border-radius: 0.24rem;
  background: #fff;
}
.login_title2 {
  font-size: 0.4rem;
  font-weight: 500;
}
.login_main_input {
  border-bottom: 0.01rem solid #e5e5ea;
  padding-bottom: 0.23rem;
}
.login_main .van-cell.van-field {
  padding-top: 0.56rem;
  font-weight: 400;
}
.login_main .van-cell.van-field .van-field__control {
  font-size: 0.32rem;
}
.login_main .forget_password_btn {
  padding-top: 0.56rem;
  font-size: 0.28rem;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_main .forget_password_btn i {
  font-style: normal;
}
.login_main .forget_password_btn .disabled_i {
  color: #999;
}
.login_main .forget_password_btn span {
  display: inline-block;
  margin-right: 0.3rem;
  height: 0.4rem;
  border-left: 1px solid #d8d8d8;
}
.login_button {
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 1.125rem;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
}
.disable_button {
  background: rgba(239, 239, 244, 1);
}
.active_button {
  background: #81d8ce;
}
.login_button button {
  border: none;
  background: rgba(255, 255, 255, 0);
}
.login_protocol {
  text-align: center;
  font-size: 0.26rem;
  margin-top: 3.25rem;
}

.login_protocol span {
  font-size: 0.26rem;
}
.login_protocol a {
  color: #81d8ce;
}
</style>
