<template>
  <div class="FollowUpList">
    <vue-headful title="随访列表"></vue-headful>
    <table class="m_table" border="1">
      <tr class="tr_title">
        <td
          @click="titleSort(index,ListData.titleSort[index])"
          v-for="(item,index) in ListData.title "
          :key="index + 'a' "
          colspan="1"
        >
          <div class="font_p">{{item}}</div>
          <div v-if="index != 4" class="arrow_p">
            <van-icon v-show=" ListData.titleSort[index] == 1 " name="arrow-down" />
            <van-icon v-show=" ListData.titleSort[index] == 2 " name="arrow-up" />
          </div>
        </td>
      </tr>
      <template v-for="(item,index) in ListData.data ">
        <tr @click="ContentFunc(index)" class="tr_row" :key="index + 'ld' ">
          <td
            v-show=" INDEXC != 4 "
            v-for="(IChild,INDEXC) in item"
            :key="INDEXC + '1td' "
            colspan="1"
            @click="router_to('/recordlist')"
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
            <div v-if="IChild != '线上交流'" class="font_p">{{IChild}}</div>
            <div v-if="IChild == '线上交流'" class="font_p font_p2">
              <van-button
                @click="router_toSpec('/dpcommunication')"
                round
                class="common_middle_btn common_fontsize i_btnC"
              >线上交流</van-button>
            </div>

            <!-- <div class="arrow_p arrow_p2">
              <van-icon name="arrow" />
            </div>-->
          </td>
        </tr>
      </template>
    </table>
    <div :style="{height: '2rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button @click="routerto_b" round class="common_middle_btn common_fontsize i_btn">上传新随访记录</van-button>
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
        title: ["姓名", "性别", "随访次数", "入组时间", "线上交流"],
        titleSort: [1, 1, 1, 1, 1],
        data: [
          ["张三", "男", "3", "2020-01-23", "线上交流"],
          ["张三", "男", "3", "2020-01-23", "线上交流"],
          ["张三", "男", "3", "2020-01-23", "线上交流"],
          ["张三", "男", "3", "2020-01-23", "线上交流"]
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
      // this.$router.push({ path: "/recordlist" });
    },
    routerto_b() {
      this.$router.push({ path: "/recordupload" });
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    router_toSpec(str) {
      let vm = this;
      vm.$router.push({
        path: str,
        query: {
          CommunicationType: "reverse"
        }
      });
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
.FollowUpList .m_table {
  /* margin-top: -0.8rem; */
  text-align: left;
  border-collapse: collapse;
  border: none;
}
.FollowUpList .m_table tr {
  border: 0.01rem solid #4a5677;
}
.FollowUpList .tr_title {
  height: 1.08rem;
}
.FollowUpList .tr_title td {
  border: none;
  font-weight: bold;
  font-size: 0.28rem;
  color: #858b9c;
  width: auto;
  margin: auto;
  height: 0.5rem;
  padding: 0.05rem 0.1rem;
  text-align: center;
}
.FollowUpList .tr_row {
  height: 1.2rem;
}
.FollowUpList .tr_row td {
  border: none;
  font-size: 0.28rem;
  color: #858b9c;
  width: auto;
  margin: auto;
  width: 1.2rem;
  padding: 0.05rem 0.1rem;
}

.FollowUpList .tr_title td:nth-child(1) {
  text-align: center;
  width: 1rem;
}
.FollowUpList .tr_title td:nth-child(2) {
  text-align: center;
  width: 1rem;
}
.FollowUpList .tr_title td:nth-child(3) {
  text-align: center;
  width: 1.6rem;
}
.FollowUpList .tr_title td:nth-child(4) {
  text-align: center;
  /* width: 2.2rem; */
  /* text-align: center; */
  width: 1.8rem;
}
.FollowUpList .tr_title td:nth-child(5) {
  text-align: center;
}

.FollowUpList .tr_row td:nth-child(1) {
  text-align: center;
  width: 1rem;
  font-size: 0.32rem;
  color: #fff;
}
.FollowUpList .tr_row td:nth-child(2) {
  text-align: center;
  width: 1rem;
}

.FollowUpList .tr_row td:nth-child(3) {
  text-align: center;
  width: 1.4rem;
}
.FollowUpList .tr_row td:nth-child(4) {
  text-align: center;
  /* width: 2.4rem; */
  width: 1.8rem;
}
.FollowUpList .tr_row td:nth-child(5) {
  text-align: center;
}

.FollowUpList .spec_td {
  text-align: left;
}

.FollowUpList .font_p {
  display: inline-block;
  vertical-align: top;
  height: 0.32rem;
}
.FollowUpList .font_p2 {
  height: auto;
}
.FollowUpList .arrow_p {
  display: inline-block;
  vertical-align: top;
  height: 0.28rem;
  padding-top: 0.04rem;
  color: #b4b4b4;
  margin-left: 0.1rem;
}
.FollowUpList .arrow_p .van-icon {
  font-size: 0.2rem;
  vertical-align: middle;
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
.FollowUpList .i_btnC {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.22rem;
  padding: 0 0.08rem;
}
</style>

