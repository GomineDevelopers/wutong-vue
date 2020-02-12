<template>
  <div class="DoctorBaseInfo">
    <vue-headful title="基本信息"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">姓名</div>
      <input class="i_input" type="text" v-model="d_name" placeholder="请填写您的真实姓名" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <van-radio-group class="verticalAlignTop" v-model="radio">
        <van-radio name="1" icon-size="16px" checked-color="#81D8CE">男</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#81D8CE">女</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">医院</div>
      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>-->
      <van-cell-group @click="ifShow_c1=true">
        <van-field
          placeholder="请选择所属医院"
          v-model="value1"
          right-icon="arrow-down"
          readonly
          clickable
        />
      </van-cell-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">科室</div>
      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>-->
      <van-cell-group @click="ifShow_c2=true">
        <van-field
          placeholder="请选择所属科室"
          v-model="value2"
          right-icon="arrow-down"
          readonly
          clickable
        />
      </van-cell-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">职称</div>
      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>-->
      <van-cell-group @click="ifShow_c3=true">
        <van-field
          placeholder="请选择您的职称"
          v-model="value3"
          right-icon="arrow-down"
          readonly
          clickable
        />
      </van-cell-group>
    </div>
    <div class="PerRow PerRow_borderBottom">
      <div class="common_Stitle_font2 title_spaceRight">邮箱</div>
      <input class="i_input" type="text" v-model="d_email" placeholder="用于接受咨询及相关信息" />
    </div>
    <div :style="{height: '0.48rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button
        @click="RegisterInfo"
        round
        class="common_middle_btn i_btn common_fontsize"
      >提&nbsp;&nbsp;交</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
    <!-- 弹出框 -->
    <van-action-sheet v-model="ifShow_c1" :actions="actions_data1" @select="onConfirm($event,1)" />
    <van-action-sheet v-model="ifShow_c2" :actions="actions_data2" @select="onConfirm($event,2)" />
    <van-action-sheet v-model="ifShow_c3" :actions="actions_data3" @select="onConfirm($event,3)" />
  </div>
</template>
<script>
export default {
  name: "DoctorBaseInfo",
  components: {},
  data() {
    return {
      radio: "1",
      value1: "",
      option1: [
        { text: "请选择所属医院", value: 0 },
        { text: "上海医院", value: 1 },
        { text: "北京医院", value: 2 },
        { text: "贵阳医院", value: 3 }
      ],
      value2: "",
      option2: [
        { text: "请选择所属科室", value: 0 },
        { text: "科室1", value: 1 },
        { text: "科室2", value: 2 },
        { text: "科室3", value: 3 }
      ],
      value3: "",
      option3: [
        { text: "请选择您的职称", value: 0 },
        { text: "职称1", value: 1 },
        { text: "职称2", value: 2 },
        { text: "职称3", value: 3 }
      ],
      d_name: "",
      d_email: "",
      ifShow_c1: false,
      ifShow_c2: false,
      ifShow_c3: false,
      actions_data1: [
        { name: "上海医院" },
        { name: "北京医院" },
        { name: "贵阳医院" }
      ],
      actions_data2: [{ name: "科室1" }, { name: "科室2" }, { name: "科室3" }],
      actions_data3: [{ name: "职称1" }, { name: "职称2" }, { name: "职称3" }]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
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
      if (id == 3) {
        this.ifShow_c3 = false;
        this.value3 = eventText.name;
      }
    },
    RegisterInfo() {
      console.log(this.value1);
      console.log(this.value2);
      console.log(this.value3);
      console.log(this.d_name);
      console.log(this.d_email);
      if (this.d_name == "") {
        this.$toast.fail("请填写您的真实姓名！");
        return false;
      }
      if (this.value1 == 0) {
        this.$toast.fail("请选择所属医院！");
        return false;
      }
      if (this.value2 == 0) {
        this.$toast.fail("请选择所属科室");
        return false;
      }
      if (this.value3 == 0) {
        this.$toast.fail("请选择您的职称");
        return false;
      }
      if (this.d_email == "") {
        this.$toast.fail("请填写您的邮箱！");
        return false;
      }
      this.$Utils.setCookieCry("D_registered", "true", 1);
      this.router_toSpec({
        path: "/doctorpersoncenter",
        query: { D_registered: true }
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
/* *********新下拉输入框 */
.DoctorBaseInfo .van-cell-group {
  width: 4.4rem;
  display: inline-block;
  vertical-align: top;
  background-color: rgba(0, 0, 0, 0);
}
.DoctorBaseInfo .van-cell {
  background-color: rgba(0, 0, 0, 0);
}
.DoctorBaseInfo .van-field__right-icon .van-icon {
  color: #9fa5b2;
  font-size: 0.3rem;
  margin-top: 0rem;
}
.DoctorBaseInfo .van-cell .van-field__control {
  color: #858b9c;
}
/* ***********  */

.DoctorBaseInfo .i_input {
  background: rgba(255, 255, 255, 0);
}
/* *********** 下拉框样式 */
.DoctorBaseInfo .van-dropdown-menu {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  height: 0.5rem;
  background-color: transparent;
}
.DoctorBaseInfo .van-dropdown-menu__title {
  /* padding: 0 5.5rem 0 0; */
  padding: 0;
  color: #858b9c;
  font-size: 0.32rem;
  line-height: 0.32rem;
}
.DoctorBaseInfo .van-ellipsis {
  width: 4.7rem;
  font-size: 0.28rem;
}
.DoctorBaseInfo .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}
.DoctorBaseInfo .van-dropdown-item__option {
  font-size: 0.28rem;
  color: #41485d;
}

/* *********** 单选框样式  */
.DoctorBaseInfo .van-radio-group {
  display: inline-block;
}
.DoctorBaseInfo .van-radio {
  width: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  /* display: inline-flex; */
}
.DoctorBaseInfo .van-radio__icon {
  vertical-align: top;
  display: inline-block;
}
.DoctorBaseInfo .van-radio__label {
  font-size: 0.28rem;
  vertical-align: text-top;
  display: inline-block;
  line-height: 0.32rem;
  color: #858b9c;
}
/* ***********  */
</style>
<style scoped>
.DoctorBaseInfo input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #858b9c;
  height: 0.4rem;
}
/* 通用输入框 */
.DoctorBaseInfo .i_input {
  font-size: 0.28rem;
  color: #858b9c;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
}
.DoctorBaseInfo .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #4a5677 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}

.DoctorBaseInfo .PerRow_borderBottom {
  border-bottom: 1px #4a5677 solid;
}
.DoctorBaseInfo .title_spaceRight {
  margin-right: 0rem;
  letter-spacing: 0.01rem;
}
.DoctorBaseInfo .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}
</style>

