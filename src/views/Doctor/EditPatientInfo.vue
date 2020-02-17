<template>
  <div class="EditPatientInfo">
    <vue-headful title="编辑患者信息"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">患者姓名</div>
      <input class="i_input" type="text" placeholder="请输入患者姓名" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <van-radio-group class="verticalAlignTop" v-model="radio">
        <van-radio name="1" icon-size="16px" checked-color="#55EBA2">男</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#55EBA2">女</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">年龄</div>
      <input class="i_input" type="text" placeholder="请输入患者年龄" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">身高</div>
      <input class="i_input" type="text" placeholder="请输入患者身高" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">体重</div>
      <input class="i_input" type="text" placeholder="请输入患者体重" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">血型</div>
      <input class="i_input" type="text" placeholder="请输入患者血型" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">出生日期</div>
      <input class="i_input" type="text" placeholder="请输入患者出生日期" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">电话号码</div>
      <input class="i_input" type="text" placeholder="请输入患者电话号码" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">籍贯</div>
      <input class="i_input" type="text" placeholder="请输入患者籍贯" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">手术医院</div>
      <input class="i_input" type="text" placeholder="请输入患者手术医院" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">入院时间</div>
      <input class="i_input" type="text" placeholder="请输入患者入院时间" />
    </div>
    <div :style="{height: '0.48rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn common_fontsize i_btn">提交</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "EditPatientInfo",
  components: {},
  data() {
    return {
      radio: "1"
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style >
/* *********** 单选框样式  */
.EditPatientInfo .van-radio-group {
  display: inline-block;
}
.EditPatientInfo .van-radio {
  width: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  /* display: inline-flex; */
}
.EditPatientInfo .van-radio__icon {
  vertical-align: top;
  display: inline-block;
}
.EditPatientInfo .van-radio__label {
  font-size: 0.32rem;
  color: #858b9c;
  vertical-align: text-top;
  display: inline-block;
  line-height: 0.32rem;
}
</style>
<style scoped>
.EditPatientInfo {
}
.EditPatientInfo .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-bottom: 0.01rem #4a5677 solid;
  /* padding: 0.38rem 0.4rem 0.37rem 0.4rem; */
  padding: 0.38rem 0.0rem 0.37rem 0.4rem;

  background: transparent;
}

.EditPatientInfo .PerRow2 {
  height: 3.6rem;
}
.EditPatientInfo .title_spaceRight {
  margin-right: 0rem;
}
.EditPatientInfo .i_input {
  font-size: 0.32rem;
  /* color: #fff; */
  color: #7b8192;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
  background: transparent;
}
.EditPatientInfo .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}
</style>

