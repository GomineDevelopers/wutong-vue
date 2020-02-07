<template>
  <div class="PatientBaseInfo">
    <vue-headful title="基本信息"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">手机号</div>
      <input class="i_input" type="text" v-model="p_phone" placeholder="请填写您的手机号" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">验证码</div>
      <input
        class="i_input i_input2"
        type="text"
        v-model="p_verificationCode"
        placeholder="填写手机验证码"
      />
      <div class="VeriCode">获取验证码</div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">姓名</div>
      <input class="i_input" type="text" v-model="p_name" placeholder="请填写您的真实姓名" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <van-radio-group v-model="radio_sex">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">男</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">女</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">年龄</div>
      <input class="i_input" type="text" v-model="p_age" placeholder="请填写年龄" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">加入随访</div>
      <input class="i_input" type="text" v-model="p_follow" placeholder="陈平安" />
    </div>
    <div class="upload_arr">
      <template v-for="(item,index) in upload_arr ">
        <div class="PerRow PerRow2" :key="index + 'ua' ">
          <div class="common_Stitle_font2 title_spaceRight title_spaceRight2">{{item.u_title}}</div>
          <br />
          <textarea
            class="i_input i_input3"
            v-model="p_diagnose"
            :placeholder="item.u_info"
            rows="3"
            cols="20"
          ></textarea>
          <div class="camera">
            <img class="img_camera" :src="url_camera" alt />
          </div>
        </div>
      </template>
    </div>
    <div class="m_pic_p m_pic_p2">
      <template v-for="(item,index) in Imgs ">
        <div :key="index + 'PIImgs' " class="m_pic">
          <img class="m_img" :src="item" alt />
        </div>
      </template>
    </div>
    <div class="textAlignCenter_w100 UserKnow">
      <div class="per_input">
        <input type="checkbox" :name="1" :value="ifKnow" class="m_checkbox" />
        <span class="text">用户须知</span>
      </div>
    </div>

    <!--     
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font3 title_spaceRight title_spaceRight2">体重(kg)</div>
      <input class="i_input" type="text" placeholder="请填写体重" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">过敏史</div>
      <van-radio-group v-model="radio_allergy">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">无</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">有</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">过往病史</div>
      <van-radio-group v-model="radio_illness">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">无</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">有</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">肝功能</div>
      <van-radio-group v-model="radio_liver">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">无</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">有</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">肝功能</div>
      <van-radio-group v-model="radio_renal">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">无</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">有</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">我的医生</div>
      <input class="i_input" type="text" placeholder="陈平安" />
    </div>-->
    <!-- <div :style="{height: '1.48rem'}"></div> -->
    <div class="textAlignCenter_w100">
      <van-button @click="RegisterInfo" round class="common_middle_btn i_btn common_fontsize">提交</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "PatientBaseInfo",
  components: {},
  data() {
    return {
      radio_sex: "1",
      radio_allergy: "1",
      radio_illness: "1",
      radio_liver: "1",
      radio_renal: "1",

      url_camera: require("@/assets/pic/camera.jpg"),
      upload_arr: [
        {
          u_title: "诊断",
          u_info: "请描述现诊断详情"
        }
      ],
      Imgs: [
        require("@/assets/pic/sicknessdetail1.png"),
        require("@/assets/pic/sicknessdetail2.png"),
        require("@/assets/pic/img_camera.jpg")
      ],
      ifKnow: 0,
      p_phone: "",
      p_verificationCode: "",
      p_name: "",
      p_age: "",
      p_follow: "",
      p_diagnose: ""
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    RegisterInfo() {
      if (this.p_phone == "") {
        this.$toast.fail("请填写您的手机号码！");
        return false;
      }
      if (this.p_verificationCode == "") {
        this.$toast.fail("请填写手机验证码！");
        return false;
      }
      if (this.p_name == "") {
        this.$toast.fail("请填写您的真实姓名！");
        return false;
      }
      if (this.p_age == "") {
        this.$toast.fail("请填写您的年龄！");
        return false;
      }
      if (this.p_follow == "") {
        this.$toast.fail("请填写随访！");
        return false;
      }
      if (this.p_diagnose == "") {
        this.$toast.fail("请描述诊断详情！");
        return false;
      }
      if (document.querySelector('input[type="checkbox"]').checked == false) {
        this.$toast.fail("请查看并勾选用户须知");
        return false;
      }

      this.$Utils.setCookieCry("P_registered", "true", 1);
      this.router_toSpec({
        path: "/doctorpersoncenter",
        query: { P_registered: true }
      });
    },
    router_toSpec(obj) {
      let vm = this;
      vm.$router.push(obj);
    }
  }
};
</script>

<style >
/* *********** 单选框样式  */
.PatientBaseInfo .van-radio-group {
  display: inline-block;
}
.PatientBaseInfo .van-radio {
  width: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  /* display: inline-flex; */
}
.PatientBaseInfo .van-radio__icon {
  vertical-align: top;
  display: inline-block;
}
.PatientBaseInfo .van-radio__label {
  font-size: 0.32rem;
  vertical-align: text-top;
  display: inline-block;
  line-height: 0.32rem;
}
/* *********** 用户须知 复选框 */
.PatientBaseInfo input[type="checkbox"] {
  visibility: hidden;
  vertical-align: top;
}
.PatientBaseInfo input[type="checkbox"]:checked::after {
  background-image: url(../../assets/picture/checkbox_1_small.png);
  background-repeat: no-repeat;
  /* background-position: -59px -10px; */
  background-position: 0px 0px;
  visibility: visible;
}
.PatientBaseInfo input[type="checkbox"]::after {
  content: " ";
  display: block;
  height: 13px;
  width: 13px;
  background-image: url(../../assets/picture/checkbox_2_small.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  visibility: visible;
}
</style>
<style scoped>
.PatientBaseInfo {
}
.PatientBaseInfo input::-webkit-input-placeholder {
  font-size: 0.32rem;
  color: #c5cad5;
  height: 0.4rem;
}
/* 通用输入框 */
.PatientBaseInfo .i_input {
  font-size: 0.32rem;
  color: #41485d;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
}
.PatientBaseInfo .i_input2 {
  width: 2.7rem;
}

.PatientBaseInfo .i_input3 {
  height: 1.4rem;
  width: 100%;
  margin-top: -0.5rem;
}

.PatientBaseInfo .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}
.PatientBaseInfo .PerRow_borderBottom {
  border-bottom: 1px #f6f6f6 solid;
}
.PatientBaseInfo .title_spaceRight {
  margin-right: 0‬;
}
.PatientBaseInfo .title_spaceRight2 {
  margin-right: 0;
}

.PatientBaseInfo .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}
.PatientBaseInfo .VeriCode {
  display: inline-block;
  width: 1.8rem;
  border-left: 1px solid #e4e4e4;
  padding-left: 0.096rem;
  font-size: 0.32rem;
  color: #81d8ce;
  margin-left: 0.096rem;
  vertical-align: top;
}

/* *********** */
.PatientBaseInfo .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}

.PatientBaseInfo .PerRow2 {
  height: 2.6rem;
}

.PatientBaseInfo .title_spaceRight {
  margin-right: 0rem;
}
.PatientBaseInfo .title_spaceRight2 {
  /* width: 100%; */
  display: inline;
}
.PatientBaseInfo .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}

/* 更改textarea 默认placeholder样式 */
.PatientBaseInfo textarea::-webkit-input-placeholder {
  color: rgba(197, 202, 213, 1);
}

.PatientBaseInfo textarea:-moz-placeholder {
  color: rgba(197, 202, 213, 1);
}

.PatientBaseInfo textarea::-moz-placeholder {
  color: rgba(197, 202, 213, 1);
}

.PatientBaseInfo textarea:-ms-input-placeholder {
  color: rgba(197, 202, 213, 1);
}
.PatientBaseInfo .camera {
  width: 100%;
  text-align: right;
  vertical-align: top;
  height: 0.5rem;
}
.PatientBaseInfo .img_camera {
  width: 0.34rem;
  height: 0.31rem;
  background: rgba(197, 202, 213, 1);
  opacity: 0.57;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.1rem;
}

.PatientBaseInfo .title_spaceRight {
  margin-right: 0rem;
}
.PatientBaseInfo .title_spaceRight2 {
  /* width: 100%; */
  display: inline;
}
.PatientBaseInfo .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}

.PatientBaseInfo .m_pic_p {
  /* width: 7.5rem; */
  margin-top: 0.67rem;
}
.PatientBaseInfo .m_pic_p2 {
  padding: 0 0.4rem;
}

.PatientBaseInfo .m_pic {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin-right: 0.35rem;
}
.PatientBaseInfo .m_pic:nth-child(3n) {
  margin-right: 0rem;
}

.PatientBaseInfo .m_img {
  width: 100%;
  height: 100%;
}

/* **** 用户须知 */
.PatientBaseInfo .UserKnow {
  line-height: 0.5rem;
  margin-top: 0.7rem;
}
.PatientBaseInfo .per_input {
  display: inline-block;
  line-height: 0.4rem;
  margin-right: 0.2rem;
}

.PatientBaseInfo .text {
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 0.4rem;
  letter-spacing: 0.01rem;
  margin-left: 0.05rem;
  vertical-align: top;
}
</style>

