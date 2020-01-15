<template>
  <div class="PatientBaseInfo">
    <vue-headful title="基本信息"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">手机号</div>
      <input class="i_input" type="text" placeholder="请填写您的手机号" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">验证码</div>
      <input class="i_input i_input2" type="text" placeholder="填写手机验证码" />
      <div class="VeriCode">获取验证码</div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">姓名</div>
      <input class="i_input" type="text" placeholder="请填写您的真实姓名" />
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
      <input class="i_input" type="text" placeholder="请填写年龄" />
    </div>
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
    </div>
    <div :style="{height: '1.5rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize">提交</van-button>
    </div>
    <div :style="{height: '1.5rem'}"></div>
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
      radio_renal: "1"
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>

<style >
/* *********** 下拉框样式 */
.PatientBaseInfo .van-dropdown-menu {
  display: inline-block;
}
.PatientBaseInfo .van-dropdown-menu__title {
  /* padding: 0 5.5rem 0 0; */
  padding: 0;
  color: #c5cad5;
  font-size: 0.75rem;
  line-height: 1rem;
}
.PatientBaseInfo .van-ellipsis {
  width: 9.8rem;
}
.PatientBaseInfo .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}
.PatientBaseInfo .van-dropdown-item__option {
  font-size: 0.75rem;
  color: #41485d;
}

/* *********** 单选框样式  */
.PatientBaseInfo .van-radio-group {
  display: inline-block;
}
.PatientBaseInfo .van-radio {
  width: 3rem;
  display: inline-flex;
}
.PatientBaseInfo .van-radio__label {
  font-size: 0.75rem;
}
/* ***********  */
</style>
<style scoped>
.PatientBaseInfo {
}
.PatientBaseInfo input::-webkit-input-placeholder {
  font-size: 0.75rem;
  color: #c5cad5;
  height: 1.25rem;
}
/* 通用输入框 */
.PatientBaseInfo .i_input {
  font-size: 0.75rem;
  color: #41485d;
  height: 1.25rem;
  outline: none;
  border: 0;
}
.PatientBaseInfo .i_input2 {
  width: 5.4rem;
}
.PatientBaseInfo .PerRow {
  height: 1.25rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 1.1875rem 1.25rem 1.15625rem 1.25rem;
}
.PatientBaseInfo .PerRow_borderBottom {
  border-bottom: 1px #f6f6f6 solid;
}
.PatientBaseInfo .title_spaceRight {
  margin-right: 0.3rem;
}
.PatientBaseInfo .title_spaceRight2 {
  margin-right: 0rem;
}

.PatientBaseInfo .i_btn {
  width: 11.25rem;
  height: 2.8125rem;
}
.PatientBaseInfo .VeriCode {
  display: inline-block;
  width: 3.8rem;
  border-left: 1px solid #e4e4e4;
  padding-left: 0.3rem;
  font-size: 0.75rem;
  color: #81d8ce;
  margin-left: 0.3rem;
}
</style>

