<template>
  <van-row class="SicknessLibraryList height_auto sickness_module">
    <van-row
      class="sickness_list flex flex_align_center"
      @click="router_toSpec('/sicknessdetail',item.id)"
      v-for="(item, index) in sicknessList"
      :key="index + 'lib'"
    >
      <van-row class="sickness_left_content flex_1 flex flex_direction">
        <van-row class="sickness_title">
          <span class="main_font2 check_status2">{{ item.title }}</span>
          <!-- <span v-if="item.status == 1" class="check_status checking">审核中</span>
          <span v-if="item.status == 2" class="check_status checkPass">已通过</span>
          <span v-if="item.status == 3" class="check_status checNopass">未通过</span> -->
        </van-row>
        <span class="sickness_content main_font3">{{ item.content }}</span>
        <span class="sickness_date">{{ item.date }}</span>
      </van-row>
      <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />
    </van-row>
    <!-- <div class="textAlignCenter_w100">
      <van-button
        @click="router_to('/casesofupload')"
        round
        class="common_middle_btn common_fontsize i_btn"
      >添&nbsp;&nbsp;加</van-button>
    </div> -->
  </van-row>
</template>
<script>
export default {
  name: "SicknessLibraryList",
  data() {
    return {
      sicknessList: [
        {
          id: 1,
          title: "高血压",
          content: "高血压伴晕厥：嗜铬细胞瘤“作祟”",
          date: "2019-12-02 16:31",
          status: 1
        },
        {
          id: 2,
          title: "糖尿病",
          content: "糖尿病：高血糖为特征的代谢性疾病",
          date: "2019-12-02 16:31",
          status: 2
        },
        {
          id: 3,
          title: "心脏病",
          content:
            "心脏病:比较常见的循环系统疾病",
          date: "2019-12-02 16:31",
          status: 3
        }
      ]
    };
  },
  mounted() {},
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    router_toSpec(str, id) {
      let vm = this;
      // console.log(id);
      vm.$router.push({
        path: str,
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style scoped>
.sickness_module {
  padding-left: 0.32rem;
}
.sickness_date {
  font-size: 0.2rem;
  color: #c5cad5;
}
.sickness_list {
  height: 1.96rem;
  align-items: center;
  padding-right: 0.32rem;
  border-bottom: 0.01rem solid #4A5677;
}
.sickness_title {
  line-height: 0;
}
.sickness_title .check_status {
  font-size: 0.24rem;
  width: 0.95rem;
  height: 0.38rem;
  line-height: 0.38rem;
  text-align: center;
  border-radius: 0.2rem;
  border: 0.02rem solid;
  display: inline-block;
  margin-left: 0.4rem;
}
.sickness_title .check_status2 {
  height: 0.38rem;
  line-height: 0.38rem;
}
.sickness_title .checking {
  border-color: #6abdfc;
  color: #6abdfc;
}
.sickness_title .checkPass {
  border-color: #81d8ce;
  color: #81d8ce;
}
.sickness_title .checNopass {
  border-color: #ffc671;
  color: #ffc671;
}
.sickness_left_content {
  width: 1.18rem;
}
.sickness_content {
  width: 100%;
  margin: 0.23rem 0rem 0.2rem 0rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.SicknessLibraryList .i_btn {
  width: 3.6rem;
  height: 0.9rem;
  border: none;
}
</style>
