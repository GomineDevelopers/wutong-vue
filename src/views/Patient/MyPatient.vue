<template>
  <div class="MyPatient">
    <!-- <vue-headful title="我的患者"></vue-headful> -->
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{ height: '0.44rem' }"></div>
    <div v-for="(item, index) in PatientCard" :key="index + 'p1'">
      <div class="patientCard">
        <div class="patient_avatar">
          <img class="img_avatar" :src="item.avatar" alt />
        </div>
        <div class="patient_info">
          <div class="i_top">
            <div class="i_name">{{ item.name }}</div>
            <div class="i_age_sex">{{ item.age }}岁&nbsp;({{ item.sex }})</div>
          </div>
          <div class="i_bottom">
            <div class="i_history">病史：{{ item.medicalHistory }}</div>
          </div>
        </div>
        <div class="icon_detail">
          <van-icon
            size="0.4rem"
            name="arrow"
            @click="router_to('/patientinfo')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPatient",
  components: {},
  data() {
    return {
      searchContent: "",
      PatientCard: [
        {
          userId: "1",
          avatar: require("@/assets/pic/avatar1.png"),
          name: "白琦晶",
          age: "21",
          sex: "女",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "2",
          avatar: require("@/assets/pic/avatar2.png"),
          name: "连文之",
          age: "23",
          sex: "男",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "3",
          avatar: require("@/assets/pic/avatar3.png"),
          name: "亢康克",
          age: "21",
          sex: "男",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "4",
          avatar: require("@/assets/pic/avatar4.png"),
          name: "令狐蓓",
          age: "24",
          sex: "女",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "5",
          avatar: require("@/assets/pic/avatar5.png"),
          name: "卫英纯",
          age: "21",
          sex: "男",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "6",
          avatar: require("@/assets/pic/avatar6.png"),
          name: "简瑾秀",
          age: "27",
          sex: "女",
          medicalHistory: "心脏病，肝病，肾结石"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    onSearch(event) {
      console.log(event);
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ****** 输入框 */

.MyPatient .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.MyPatient .van-field__left-icon {
  display: none;
}
.MyPatient .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.MyPatient .van-field__body {
  height: 0.4rem;
}
.MyPatient .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 2px solid #81d8ce;
}
.van-search__content {
  background: rgba(255, 255, 255, 1);
}
/* ****** icon */
.MyPatient .patientCard .van-icon {
  font-size: 0.5rem;
  margin-top: 0.34rem;
  margin-left: 0.3rem;
  vertical-align: top;
  color: #efeff4;
}
</style>
<style scoped>
.MyPatient {
}
.MyPatient .patientCard {
  width: 6.825rem;
  padding: 0.48rem 0.32rem;
  height: 1.02rem;
}
.MyPatient .patient_avatar {
  display: inline-block;
  vertical-align: top;
  width: 1.02rem;
  height: 100%;
}
.MyPatient .img_avatar {
  width: 1.02rem;
  height: 1.02rem;
  height: 100%;
  margin-bottom: 0.05rem;
}
.MyPatient .patient_info {
  display: inline-block;
  vertical-align: top;
  width: 4.76rem;
  height: 100%;
  padding-left: 0.24rem;
  padding-top: 0.09rem;
}
.MyPatient .patient_info .i_top {
  height: 50%;
}
.MyPatient .patient_info .i_bottom {
  /* height: 50%; */
}
.MyPatient .i_name {
  width: 1.36rem;
  height: 32px;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.32rem;
  display: inline-block;
  vertical-align: top;
}
.MyPatient .i_age_sex {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(17, 26, 52, 1);
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: top;
}
.MyPatient .i_history {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
  padding-top: 0.07rem;
}

.MyPatient .icon_detail {
  display: inline-block;
  vertical-align: top;
  width: 0.8rem;
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
</style>
