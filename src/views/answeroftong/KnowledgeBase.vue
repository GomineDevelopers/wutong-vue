<template>
  <div class="KnowledgeBase">
    <vue-headful title="答题通-知识库"></vue-headful>
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入相关信息进行检索"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{height: '0.40rem'}"></div>
    <div v-for="(item,index) in PatientCard" :key="index + 'p1' ">
      <div class="patientCard">
        <!-- <div class="patient_avatar">
          <img class="img_avatar" :src="item.avatar" alt />
        </div>-->
        <div class="patient_info">
          <div class="i_top">
            <div class="i_name">{{ item.name }}</div>
          </div>
          <div class="i_bottom">
            <van-progress
              class="i_progress"
              color="#55EBA2"
              :percentage="item.percentage"
              stroke-width="8"
            />
          </div>
        </div>
        <div class="icon_detail">
          <van-icon size="0.4rem" name="arrow" />
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
          name: "糖尿病基础第一部分",
          percentage: 50
        },
        {
          userId: "2",
          avatar: require("@/assets/pic/sicknessdetail1.png"),
          name: "合规培训第一部分",
          percentage: 60
        },
        {
          userId: "3",
          avatar: require("@/assets/pic/sicknessdetail2.png"),
          name: "安达唐产品知识",
          percentage: 55
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
  background-color: rgba(0, 0, 0, 0) !important;
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
  color: #55eba2;
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
  border-radius: 0.44rem;
  /* background: rgba(255, 255, 255, 1); */
  /* border: 0.02rem solid #81d8ce; */
  background: #1d2439;
  border: 0.02rem solid rgba(0, 0, 0, 0);
}
.KnowledgeBase .van-search__content {
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(0, 0, 0, 0);
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
  padding: 0.3rem 0rem 0.3rem 0.32rem;
  height: 1.02rem;
  /* border-bottom: 1px #f6f6f6 solid; */
  border-bottom: 1px #4a5677 solid;
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
  box-shadow: 0 0.03rem 0.06rem 0 rgba(134, 129, 129, 0.1);
  border-radius: 0.1rem;
  border: 0.01rem solid rgba(239, 239, 239, 1);
}
.KnowledgeBase .patient_info {
  display: inline-block;
  vertical-align: top;
  width: 5.46rem;
  height: 100%;
  padding-left: 0.24rem;
  padding-top: 0.04rem;
}
.KnowledgeBase .patient_info .i_top {
  height: 50%;
}
.KnowledgeBase .patient_info .i_bottom {
  /* height: 50%; */
}
.KnowledgeBase .i_name {
  display: inline-block;
  vertical-align: top;
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 0.45rem;
  letter-spacing: 0.01rem;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;
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
.KnowledgeBase .i_progress {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
  margin-top: 0.1rem;
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
