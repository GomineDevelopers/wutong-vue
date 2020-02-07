<template>
  <div class="RecordUpload">
    <vue-headful title="随访记录上传"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>患者姓名
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>随访周次
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="PerRow PerRow_borderBottom">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>随访结果
      </div>
      <input class="i_input" type="text" placeholder="请填写随访结果" />
    </div>
    <div class="PerRow PerRow_borderBottom">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>血糖信息
      </div>
      <input class="i_input" type="text" placeholder="请填写患者血糖信息" />
    </div>
    <div class="PerRow PerRow_borderBottom">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>剂量信息
      </div>
      <input class="i_input" type="text" placeholder="请填写剂量信息" />
    </div>
    <div class="PerRow PerRow_borderBottom">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>伴随降糖药
      </div>
      <input class="i_input" type="text" placeholder="请填写详细记录" />
    </div>
    <div :style="{height: '0.48rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize i_btn_space">提&nbsp;&nbsp;&nbsp;交</van-button>
      <van-button
        round
        class="common_middle_btn2 i_btn common_fontsize "
      >重&nbsp;&nbsp;&nbsp;置</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "RecordUpload",
  components: {},
  data() {
    return {
      radio: "1",
      value1: 0,
      option1: [
        { text: "请选择患者", value: 0 },
        { text: "张三", value: 1 },
        { text: "李四", value: 2 },
        { text: "王二", value: 3 }
      ],
      value2: 0,
      option2: [
        { text: "请选择当前随访周次", value: 0 },
        { text: "第一周", value: 1 },
        { text: "第二周", value: 2 },
        { text: "第三周", value: 3 }
      ]
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
.RecordUpload .van-dropdown-menu {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  height: 0.5rem;
  width: 4.35rem;
}
.RecordUpload .van-dropdown-menu__title {
  /* padding: 0 5.5rem 0 0; */
  padding: 0;
  color: #c5cad5;
  font-size: 0.32rem;
  line-height: 0.32rem;
}
.RecordUpload .van-ellipsis {
  width: 4.7rem;
  font-size: 0.32rem;
}
.RecordUpload .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}
.RecordUpload .van-dropdown-item__option {
  font-size: 0.32rem;
  color: #41485d;
}

/* *********** 单选框样式  */
.RecordUpload .van-radio-group {
  display: inline-block;
}
.RecordUpload .van-radio {
  width: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  /* display: inline-flex; */
}
.RecordUpload .van-radio__icon {
  vertical-align: top;
  display: inline-block;
}
.RecordUpload .van-radio__label {
  font-size: 0.32rem;
  vertical-align: text-top;
  display: inline-block;
  line-height: 0.32rem;
}
/* ***********  */
</style>
<style scoped>
.RecordUpload {
}
.RecordUpload input::-webkit-input-placeholder {
  font-size: 0.32rem;
  color: #c5cad5;
  height: 0.4rem;
}
/* 通用输入框 */
.RecordUpload .i_input {
  font-size: 0.32rem;
  color: #41485d;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
  width: 4.35rem;
}
.RecordUpload .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}

.RecordUpload .PerRow_borderBottom {
  border-bottom: 1px #f6f6f6 solid;
}
.RecordUpload .title_spaceRight {
  margin-right: 0rem;
}

.RecordUpload .MustFillIn {
  color: #ed493d;
}
.RecordUpload .i_btn {
  width: 2.6rem;
  height: 0.9rem;
  cursor: pointer;
}
.RecordUpload .i_btn_space {
  margin-right: 0.68rem;
}
</style>

