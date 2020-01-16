<template>
  <div class="PersonalDataEdit">
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">邮箱</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">
          <input v-model="email" class="i_input i_input2" type="text" placeholder="填写手机验证码" />
          <img class="icon_delete" @click="deleteInput()" :src="icon_delete" alt />
        </div>
      </div>
    </div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize">保存</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "PersonalDataEdit",
  components: {},
  data() {
    return {
      icon_delete: require("@/assets/pic/icon_delete.png"),
      email: "43243233@qq.com"
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    deleteInput() {
      this.email = "";
    }
  }
};
</script>

<style >
.PersonalDataEdit .van-icon {
  vertical-align: bottom;
}
</style>
<style scoped>
.PersonalDataEdit {
}

.PersonalDataEdit .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}
.PersonalDataEdit .i_input {
  font-size: 0.32rem;
  color: #41485d;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
}
.PersonalDataEdit .i_input2 {
  width: auto;
}
.PersonalDataEdit .title_spaceRight {
  margin-right: 0rem;
}

.PersonalDataEdit .text_info {
  display: inline-block;
  text-align: right;
  font-size: 0.32rem;
  width: 4.8rem;
  vertical-align: top;
}
.PersonalDataEdit .icon_delete {
  display: inline-block;
  vertical-align: top;
  height: 0.56rem;
  width: 0.56rem;
}
.PersonalDataEdit .i_btn {
  width: 2rem;
  height: 0.9rem;
}
</style>

