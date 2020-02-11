<template>
  <van-row class="login_body">
    <vue-headful title="登录"></vue-headful>
    <van-row class="login_title">
      <!-- <img src="../assets/pic/logo.png" /> -->
    </van-row>
    <!-- 中间部分登录模块 -->
    <van-row class="login_main">
      <img src="../assets/pic/login_logo.png" />
      <van-row class="login_title2">登录</van-row>
      <van-row class="login_main_input flex flex_align_center">
        <van-field v-model="tel" type="number" placeholder="请输入手机号" @blur="telBlur" />
      </van-row>
      <van-row class="login_main_input flex flex_align_center">
        <van-col span="16">
          <van-field v-model="code" placeholder="请输入验证码" @blur="codeBlur" />
        </van-col>
        <van-col span="8" class="forget_password_btn">
          <span></span> 获取验证码
        </van-col>
      </van-row>
      <van-row
        :class="[
          'login_button flex flex_align_center flex_justify_content',
          active ? 'active_button' : 'disable_button'
        ]"
        @click="login"
      >
        <button>登&nbsp;录</button>
      </van-row>
    </van-row>
    <van-row class="login_protocol flex flex_justify_content">
      <span>登录即表示同意</span>
      <!-- <router-link :to="{ path: '/loginprotocol' }">《用户注册协议》</router-link> -->
      <a>《用户注册协议》</a>
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
    telBlur() {
      this.checkInput();
    },
    codeBlur() {
      this.checkInput();
    },

    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
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
      this.router_to("/identity");
    },
    // 检验电话号码和验证码
    checkInput() {
      let regs = /^1[3456789]\d{9}$/;
      if (!regs.test(this.tel)) {
        this.active = false;
        return false;
      }
      if (this.code.length == 0) {
        this.active = false;
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
.login_main .van-cell {
  background: rgba(255, 255, 255, 0);
}
</style>
<style scoped>
.login_body {
  height: 100%;
  /* background: url("../assets/pic/bg.png") no-repeat 100%;
  background-size: cover; */
  background: #0e1528;
  padding: 0rem 0.5rem;
}
.login_title {
  height: 25%;
  line-height: 25%;
  text-align: center;
}
.login_title img {
  width: 35%;
}
.login_main {
  padding: 0.6rem;
  border-radius: 0.24rem;
  background: rgba(255, 255, 255, 0.1);
}
.login_title2 {
  font-size: 0.4rem;
  font-weight: 500;
  color: #fff;
}
.login_main_input {
  border-bottom: 0.01rem solid #4a5677;
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
  color: #55eba2;
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
  border-left: 1px solid #4a5677;
}
.login_button {
  text-align: center;
  color: #8a8f96;
  font-size: 0.32rem;
  height: 0.9rem;
  border-radius: 1.125rem;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
}
.disable_button {
  background: rgba(90, 97, 107, 1);
}
.active_button {
  background: #49d691;
  color: #fff;
}
.login_button button {
  border: none;
  background: rgba(90, 97, 107, 0);
}
.login_protocol {
  text-align: center;
  font-size: 0.26rem;
  /* margin-top: 3.25rem; */
  margin-top: 30%;
  color: #858b9c;
}

.login_protocol span {
  font-size: 0.26rem;
}
.login_protocol a {
  color: #55eba2;
}
.login_main {
  position: relative;
}
.login_main img {
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: -0.9rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
