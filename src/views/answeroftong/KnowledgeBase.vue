<template>
  <div class="KnowledgeBase">
    <vue-headful title="答题通-知识库"></vue-headful>
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
  name: "KnowledgeBase",
  components: {},
  data() {
    return {
      searchContent: "",
      PatientCard: [
        {
          userId: "1",
          avatar: require("@/assets/pic/pharmacylist.jpg"),
          name: "白琦晶",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "2",
          avatar: require("@/assets/pic/pharmacylist.jpg"),
          name: "连文之",
          medicalHistory: "心脏病，肝病，肾结石"
        },
        {
          userId: "3",
          avatar: require("@/assets/pic/pharmacylist.jpg"),
          name: "亢康克",
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

.KnowledgeBase .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
}
.KnowledgeBase .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.KnowledgeBase .van-field__left-icon .van-icon,
.KnowledgeBase .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.KnowledgeBase .van-field__left-icon {
  display: none;
}
.KnowledgeBase .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.KnowledgeBase .van-field__body {
  height: 0.4rem;
}
.KnowledgeBase .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 0.02rem solid #81d8ce;
}
.KnowledgeBase .van-search__content {
  background: rgba(255, 255, 255, 1);
}
/* ****** icon */
.KnowledgeBase .patientCard .van-icon {
  font-size: 0.5rem;
  margin-top: 0.34rem;
  margin-left: 0.52rem;
  vertical-align: top;
  color: #efeff4;
}
</style>
<style scoped>
.KnowledgeBase {
}
.KnowledgeBase .patientCard {
  width: 6.825rem;
  padding: 0.48rem 0.32rem;
  height: 1.02rem;
  border-bottom: 1px #f6f6f6 solid;
}
.KnowledgeBase .patient_avatar {
  display: inline-block;
  vertical-align: top;
  width: 1.02rem;
  height: 100%;
}
.KnowledgeBase .img_avatar {
  width: 1.02rem;
  height: 1.02rem;
  height: 100%;
  margin-bottom: 0.05rem;
}
.KnowledgeBase .patient_info {
  display: inline-block;
  vertical-align: top;
  width: 4.76rem;
  height: 100%;
  padding-left: 0.24rem;
  padding-top: 0.09rem;
}
.KnowledgeBase .patient_info .i_top {
  height: 50%;
}
.KnowledgeBase .patient_info .i_bottom {
  /* height: 50%; */
}
.KnowledgeBase .i_name {
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
.KnowledgeBase .i_age_sex {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(17, 26, 52, 1);
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: top;
}
.KnowledgeBase .i_history {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
  padding-top: 0.07rem;
}

.KnowledgeBase .icon_detail {
  display: inline-block;
  vertical-align: top;
  width: 0.8rem;
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
</style>
