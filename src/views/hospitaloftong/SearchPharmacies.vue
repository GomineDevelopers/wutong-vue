<template>
  <div class="SearchPharmacies">
    <vue-headful title="搜索药店"></vue-headful>
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{height: '0.40rem'}"></div>
    <div v-for="(item,index) in PatientCard" :key="index + 'p1' ">
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
          <van-icon size="0.4rem" name="arrow" @click="router_to('/patientinfo',item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchPharmacies",
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
    router_to(str, p_id) {
      let vm = this;
      // 待添加query 对应 pid
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ****** 输入框 */

.SearchPharmacies .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
}
.SearchPharmacies .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.SearchPharmacies .van-field__left-icon .van-icon,
.SearchPharmacies .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.SearchPharmacies .van-field__left-icon {
  display: none;
}
.SearchPharmacies .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.SearchPharmacies .van-field__body {
  height: 0.4rem;
}
.SearchPharmacies .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 0.02rem solid #81d8ce;
}
.SearchPharmacies .van-search__content {
  background: rgba(255, 255, 255, 1);
}
/* ****** icon */
.SearchPharmacies .patientCard .van-icon {
  font-size: 0.5rem;
  margin-top: 0.34rem;
  margin-left: 0.52rem;
  vertical-align: top;
  color: #efeff4;
}
</style>
<style scoped>
.SearchPharmacies {
}
.SearchPharmacies .patientCard {
  width: 6.825rem;
  padding: 0.48rem 0.32rem;
  height: 1.02rem;
  border-bottom: 1px #f6f6f6 solid;
}
.SearchPharmacies .patient_avatar {
  display: inline-block;
  vertical-align: top;
  width: 1.02rem;
  height: 100%;
}
.SearchPharmacies .img_avatar {
  width: 1.02rem;
  height: 1.02rem;
  height: 100%;
  margin-bottom: 0.05rem;
}
.SearchPharmacies .patient_info {
  display: inline-block;
  vertical-align: top;
  width: 4.76rem;
  height: 100%;
  padding-left: 0.24rem;
  padding-top: 0.09rem;
}
.SearchPharmacies .patient_info .i_top {
  height: 50%;
}
.SearchPharmacies .patient_info .i_bottom {
  /* height: 50%; */
}
.SearchPharmacies .i_name {
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
.SearchPharmacies .i_age_sex {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(17, 26, 52, 1);
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: top;
}
.SearchPharmacies .i_history {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
  padding-top: 0.07rem;
}

.SearchPharmacies .icon_detail {
  display: inline-block;
  vertical-align: top;
  width: 0.8rem;
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
</style>
