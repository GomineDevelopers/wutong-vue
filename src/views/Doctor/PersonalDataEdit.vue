<template>
  <div class="PersonalDataEdit">
    <vue-headful title="修改邮箱"></vue-headful>
    <div class="van_container_body">
      <div class="PerRow flex flex_align_center">
        <div class="text_info theme_color5">
          <div class="inlineBlock flex flex_justify_between">
            <input
              v-model="email"
              class="i_input i_input2 flex_1"
              type="text"
              placeholder="填写手机验证码"
            />
            <img class="icon_delete" @click="deleteInput()" :src="icon_delete" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex_align_center flex_justify_content">
      <van-button round class="common_middle_btn i_btn">保&nbsp;存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalDataEdit",
  components: {},
  data() {
    return {
      icon_delete: require("@/assets/newpic/close_icon.png"),
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
.van_container_body {
  padding-left: 0.32rem;
}
.PersonalDataEdit .i_input {
  background: rgba(255, 255, 255, 0);
}
.PersonalDataEdit .PerRow {
  height: 0.4rem;
  border-bottom: 1px #4a5677 solid;
  height: 1.2rem;
  padding-right: 0.32rem;
}
.PersonalDataEdit .i_input {
  font-size: 0.28rem;
  color: #ffffff;
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
  font-size: 0.32rem;
  width: 100%;
  vertical-align: top;
}
.PersonalDataEdit .icon_delete {
  display: inline-block;
  vertical-align: top;
  height: 0.56rem;
  width: 0.56rem;
}
.PersonalDataEdit .i_btn {
  width: 3.6rem;
  height: 0.9rem;
  border-radius: 0.45rem;
  margin-top: 1rem;
}
</style>

