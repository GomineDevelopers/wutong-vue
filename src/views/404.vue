<template>
  <div class="login_body flex" :style="loginBodyBgm">
    <div class="content_form flex">
      <div class="login_left height_auto">
        <!-- <img src="@/assets/lgoin-left.png" /> -->
      </div>
      <div class="login_right height_auto">
        <span class="form_title">404 - 无当前页</span>
      </div>
    </div>
  </div>
</template>
<script>
// import { login, get_user_permissions } from "@/api/api";

export default {
  name: "404",
  data() {
    return {
      loginBodyBgm: {
        // backgroundImage: "url(" + require("@/assets/loginbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  },
  methods: {}
};
</script>
<style>
.login_body .el-input--suffix .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #666;
  background: none !important;
  color: #fff;
  font-size: 14px;
}
.login_body .el-input .el-input__clear {
  color: #fff;
}
.login_body input::-webkit-input-placeholder {
  color: #fff;
}

.login_body input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}

.login_body input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}

.login_body input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
.login_body .el-button--primary {
  width: 280px;
  height: 40px;
  margin-top: 10px;
}
.alert_div {
  position: absolute;
  height: 20px;
  line-height: 20px;
  top: 0;
  left: 50%;
  width: 700px;
  transform: translateX(-50%);
}
</style>
<style scoped>
.login_body {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.content_form {
  width: 700px;
  height: 430px;
}
.login_left,
.login_right {
  width: 50%;
}
.login_right {
  background: rgba(255, 255, 255, 0.4);
  padding: 0px 35px;
}
.login_right .form_title {
  display: inline-block;
  font-size: 30px;
  color: #fff;
  margin: 180px 0px 10px 0px;
}
.login_right p {
  margin-bottom: 40px;
}
.login_right p span {
  width: 100%;
  margin-bottom: 5px;
  display: inline-block;
  text-align: left;
  color: #333;
  font-size: 16px;
}
</style>
