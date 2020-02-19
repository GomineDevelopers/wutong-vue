<template>
  <div class="RecordUpload">
    <vue-headful title="随访记录上传"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>患者姓名
      </div>
      <!-- <van-dropdown-menu >
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>-->
      <van-cell-group @click="ifShow_c1=true">
        <van-field placeholder="请选择患者" v-model="value1" right-icon="arrow-down" readonly clickable />
      </van-cell-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font5 title_spaceRight">
        <span class="MustFillIn">*&nbsp;&nbsp;</span>随访周次
      </div>
      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>-->
      <van-cell-group @click="ifShow_c2=true">
        <van-field
          placeholder="请选择当前随访周次"
          v-model="value2"
          right-icon="arrow-down"
          readonly
          clickable
        />
      </van-cell-group>
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
    <div :style="{height: '3.76rem'}"></div>
    <div class="flex flex_justify_content">
      <van-button
        @click="router_to('/followuplist')"
        round
        class="common_middle_btn i_btn common_fontsize"
      >提&nbsp;&nbsp;&nbsp;交</van-button>
    </div>
    <div class="flex flex_justify_content reset_button">重置</div>

    <!-- 弹出框 -->
    <van-action-sheet v-model="ifShow_c1" :actions="actions_name" @select="onConfirm($event,1)" />
    <van-action-sheet v-model="ifShow_c2" :actions="actions_week" @select="onConfirm($event,2)" />
  </div>
</template>
<script>
export default {
  name: "RecordUpload",
  components: {},
  data() {
    return {
      radio: "1",
      value1: "",
      option1: [
        { text: "请选择患者", value: 0 },
        { text: "张三", value: 1 },
        { text: "李四", value: 2 },
        { text: "王二", value: 3 }
      ],
      value2: "",
      option2: [
        { text: "请选择当前随访周次", value: 0 },
        { text: "第一周", value: 1 },
        { text: "第二周", value: 2 },
        { text: "第三周", value: 3 }
      ],
      ifShow_c1: false,
      ifShow_c2: false,
      actions_name: [{ name: "张三" }, { name: "李四" }, { name: "王二" }],
      actions_week: [{ name: "第一周" }, { name: "第二周" }, { name: "第三周" }]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    onConfirm(eventText, id) {
      console.log(eventText);
      if (id == 1) {
        this.ifShow_c1 = false;
        this.value1 = eventText.name;
      }
      if (id == 2) {
        this.ifShow_c2 = false;
        this.value2 = eventText.name;
      }
    }
  }
};
</script>

<style >
/* *********新下拉输入框 */
.RecordUpload .van-cell-group {
  width: 4.4rem;
  display: inline-block;
  vertical-align: top;
  background-color: rgba(0, 0, 0, 0);
}
.RecordUpload .van-cell {
  background-color: rgba(0, 0, 0, 0);
}
.RecordUpload .van-field__right-icon .van-icon {
  color: #9fa5b2;
  font-size: 0.3rem;
  margin-top: 0rem;
}
.RecordUpload .van-cell .van-field__control {
  color: #858b9c;
}
/* *********** 下拉框样式 */
.RecordUpload .van-dropdown-menu {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.09rem;
  height: 0.5rem;
  width: 4.35rem;
  background-color: transparent;
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
  font-size: 0.28rem;
  color: #858b9c;
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
.RecordUpload input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #858b9c;
  height: 0.4rem;
}
/* 通用输入框 */
.RecordUpload .i_input {
  font-size: 0.32rem;
  color: #858b9c;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
  width: 4.35rem;
  background: rgba(255, 255, 255, 0);
}
.RecordUpload .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-bottom: 1px #4a5677 solid;
  /* padding: 0.38rem 0.4rem 0.37rem 0.4rem; */
  padding: 0.38rem 0rem 0.37rem 0.4rem;
}

.RecordUpload .PerRow_borderBottom {
  border-bottom: 1px #4a5677 solid;
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
.reset_button {
  font-size: 0.28rem;
  color: #858b9c;
  text-decoration: underline;
  margin-top: 0.32rem;
}
</style>

