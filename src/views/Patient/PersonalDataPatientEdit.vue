<template>
  <div class="PersonalDataPatientEdit">
    <vue-headful title="个人资料-编辑"></vue-headful>
    <div class="main_con">
      <div class="PerRow">
        <div class="common_Stitle_font2 title_spaceRight">所在地区</div>
        <div class="text_info" @click="popupShow = true">
          <span class="main_font3" v-if="location">{{location}}</span>
          <span v-else class="main_font3">省市区县，乡镇等</span>
        </div>
      </div>
      <div class="PerRow_c">
        <div class="common_Stitle_font2 title_spaceRight addr_label">详细地址</div>
        <van-field v-model="address" rows="2" autosize type="textarea" placeholder="街道，楼牌号等" />
      </div>
    </div>
    <div :style="{height: '0.48rem'}"></div>
    <van-popup round v-model="popupShow" position="bottom">
      <van-area
        :area-list="areaList"
        title="选择省市区/县"
        @confirm="confirm"
        @cancel="cancel"
        :value="addrCode"
      />
    </van-popup>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn submit_btn common_fontsize">保存</van-button>
    </div>
  </div>
</template>
<script>
import areaList from "@/assets/area.js";
export default {
  name: "PersonalDataPatientEdit",
  components: {},
  data() {
    return {
      popupShow: false,
      areaList: areaList,
      location: "",
      addrCode: "",
      address: ""
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

    // 点击确认，获取所选的省市区数据
    confirm(e) {
      console.log(e);
      this.addrCode = e[2].code;
      this.location = `${e[0].name} ${e[1].name} ${e[2].name}`;
      this.popupShow = false;
    },

    cancel() {
      this.popupShow = false;
    }
  }
};
</script>
<style>
.PersonalDataPatientEdit .van-picker__toolbar {
  height: 60px;
  line-height: 60px;
}
.PersonalDataPatientEdit .van-picker__cancel,
.PersonalDataPatientEdit .van-picker-column__item {
  color: #858b9c;
  font-size: 0.28rem;
}
.PersonalDataPatientEdit .van-picker__confirm {
  color: #81d8ce;
  font-size: 0.28rem;
}
.PersonalDataPatientEdit .van-picker-column__item--selected {
  color: #81d8ce;
}
.PersonalDataPatientEdit .van-cell {
  background: none;
}
.PersonalDataPatientEdit .van-cell .van-field__control {
  color: #858b9c;
  font-size: 0.28rem;
}
</style>
<style scoped>
.main_con {
  padding-left: 0.32rem;
}
.PersonalDataPatientEdit .PerRow {
  height: 0.4rem;
  border-bottom: 1px #4a5677 solid;
  padding: 0.38rem 0.32rem 0.37rem 0rem;
}
.PersonalDataPatientEdit .PerRow_c {
  border-bottom: 1px #4a5677 solid;
  padding: 0.38rem 0.32rem 0.37rem 0rem;
}

.PersonalDataPatientEdit .text_info {
  display: inline-block;
  font-size: 0.32rem;
  width: 4.8rem;
  vertical-align: top;
}
.PersonalDataPatientEdit .addr_label {
  display: block;
  margin-bottom: 0.3rem;
}
.PersonalDataPatientEdit input::-webkit-input-placeholder {
  color: #c5cad5;
}
.PersonalDataPatientEdit .addr_detail {
  margin-top: 10px;
  width: 100%;
  color: #41485d;
  font-size: 0.32rem;
  height: 0.6rem;
  outline: none;
  border: 0;
  vertical-align: top;
}

.PersonalDataPatientEdit .submit_btn {
  margin-top: 1.4rem;
  width: 3.6rem;
  height: 0.9rem;
  letter-spacing: 8px;
  border: none;
}
</style>

