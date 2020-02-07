<template>
  <div class="FollowUpList">
    <vue-headful title="健康自测"></vue-headful>
    <!-- <div :style="{height: '0.4rem'}"></div> -->
    <table class="m_table" border="1">
      <tr class="tr_title">
        <td
          @click="titleSort(index,ListData.titleSort[index])"
          v-for="(item,index) in ListData.title "
          :key="index + 'a' "
          colspan="1"
        >
          <div class="font_p">{{item}}</div>
          <div class="arrow_p">
            <van-icon v-show=" ListData.titleSort[index] == 1 " name="arrow-down" />
            <van-icon v-show=" ListData.titleSort[index] == 2 " name="arrow-up" />
          </div>
        </td>
      </tr>
      <template v-for="(item,index) in ListData.data ">
        <tr class="tr_row" :key="index + 'ld' ">
          <td
            v-show=" INDEXC != 4 "
            v-for="(IChild,INDEXC) in item"
            :key="INDEXC + '1td' "
            colspan="1"
          >
            <div class="font_p">{{IChild}}</div>
          </td>
          <td
            v-show=" INDEXC == 4 "
            v-for="(IChild,INDEXC) in item"
            :key="INDEXC + '2td' "
            colspan="1"
            class="spec_td"
          >
            <div class="font_p">{{IChild}}</div>
            <div class="arrow_p arrow_p2">
              <van-icon @click="ContentFunc(index)" name="arrow" />
            </div>
          </td>
        </tr>
      </template>
    </table>
    <div class="textAlignCenter_w100">
      <van-button @click="routerto_b" round class="common_middle_btn common_fontsize i_btn">上传随访记录</van-button>
    </div>
    <div :style="{height: '0.56rem'}"></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "FollowUpList",
  components: {},
  data() {
    return {
      ListData: {
        title: ["姓名", "性别", "年龄", "随访次数", "入组时间"],
        titleSort: [1, 1, 1, 1, 1],
        data: [
          ["张三", "男", "32", "3", "2020-01-23"],
          ["张三", "男", "32", "3", "2020-01-23"],
          ["张三", "男", "32", "3", "2020-01-23"],
          ["张三", "男", "32", "3", "2020-01-23"]
        ]
      }
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    ContentFunc(index) {
      console.log(index);
      this.$router.push({ path: "/recordlist" });
    },
    routerto_b() {
      this.$router.push({ path: "/recordupload" });
    },
    titleSort(index, status) {
      console.log(index);
      console.log(status);
      console.log("排序补充");
      let changeStatus = 0;
      if (status == 1) {
        changeStatus = 2;
      } else if (status == 2) {
        changeStatus = 1;
      }
      Vue.set(this.ListData.titleSort, index, changeStatus);
    }
  }
};
</script>
<style scoped>
.FollowUpList {
}

.FollowUpList .m_table {
  /* margin-top: -0.8rem; */
  text-align: left;
  border-collapse: collapse;
}

.FollowUpList .tr_title td {
  background: #f0f0f0;
  /* background: #a7e0da; */
  border: 1px solid rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 0.24rem;
  color: rgba(17, 26, 52, 1);
  width: auto;
  margin: auto;
  height: 0.5rem;
  padding: 0.05rem 0.1rem;
  text-align: center;
}

.FollowUpList .tr_row td {
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 0.22rem;
  color: #b4b4b4;
  width: auto;
  margin: auto;
  /* height: auto; */
  height: 1.8rem;
  width: 1.2rem;
  padding: 0.05rem 0.1rem;
}
.FollowUpList .m_table .tr_row:nth-child(2n) {
  background-color: #ffffff;
}

.FollowUpList .m_table .tr_row:nth-child(2n + 1) {
  background-color: #f1f2f1;
}

.FollowUpList .tr_title td:nth-child(1) {
  width: 1rem;
}
.FollowUpList .tr_title td:nth-child(2) {
  width: 1rem;
}
.FollowUpList .tr_title td:nth-child(3) {
  width: 1rem;
}
.FollowUpList .tr_title td:nth-child(4) {
  width: 1.4rem;
}
.FollowUpList .tr_title td:nth-child(5) {
  width: 2.4rem;
  text-align: left;
}
.FollowUpList .tr_row td:nth-child(1) {
  text-align: center;
  width: 1rem;
}
.FollowUpList .tr_row td:nth-child(2) {
  text-align: center;
  width: 1rem;
}
.FollowUpList .tr_row td:nth-child(3) {
  text-align: center;
  width: 1rem;
}
.FollowUpList .tr_row td:nth-child(4) {
  text-align: center;
  width: 1.4rem;
}
.FollowUpList .tr_row td:nth-child(5) {
  text-align: center;
  width: 2.4rem;
}
.FollowUpList .spec_td {
  text-align: left;
}

.FollowUpList .font_p {
  display: inline-block;
  vertical-align: top;
  height: 0.32rem;
}
.FollowUpList .arrow_p {
  display: inline-block;
  vertical-align: top;
  height: 0.28rem;
  padding-top: 0.04rem;
  color: #b4b4b4;
  margin-left: 0.1rem;
}
.FollowUpList .arrow_p2 {
  padding-top: 0.02rem;
  margin-left: 0.3rem;
}

.FollowUpList .i_btn {
  height: 0.9rem;
  width: 3.6rem;
  font-size: 0.28rem;
  letter-spacing: 0.03rem;
}
</style>

