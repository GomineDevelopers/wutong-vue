<template>
  <div class="RecordList">
    <vue-headful title="随访列表"></vue-headful>
    <div class="record_list_body padding_mudule">
      <p class="RQ_title">张三</p>
      <p class="R_time">入组时间：2020-01-21</p>
      <div :style="{height: '0.4rem'}"></div>
      <table class="m_table" border="1">
        <tr class="tr_title">
          <td v-for="(item,index) in ListData.title " :key="index + 'a' " colspan="1">{{item}}</td>
        </tr>
        <template v-for="(item,index) in ListData.data ">
          <tr class="tr_row" :key="index + 'ld' ">
            <td v-for="(item,index) in item" :key="index + 'td' " colspan="1">{{item}}</td>
          </tr>
        </template>
      </table>
    </div>
    <div :style="{height: '0.7rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button
        @click="BtnFunc(1)"
        round
        class="common_middle_btn common_fontsize i_btn_space i_btn"
      >设置复诊时间</van-button>
      <van-button @click="BtnFunc(2)" round class="common_middle_btn common_fontsize i_btn">设置复购周期</van-button>
    </div>
    <!-- 弹出框 -->
    <van-popup v-model="popupShow">
      <div class="textAlignCenter_w100p">
        <div class="popup_bg">
          <div class="textAlignCenter_w100p">
            <div class="popup_warning">{{Q_Status}}</div>
            <div class="popup_stitle">请设置患者{{Q_Status}}及通知日期</div>
          </div>
          <div class="popup_info">
            <van-row class="choose_date" v-if="Q_Status_Id == 1">
              <van-cell title="选择日期：" :value="Text_c1" @click="ifShow_c1 = true">
                <van-icon slot="right-icon" name="calender-o" style="line-height: inherit;" />
              </van-cell>
            </van-row>
            <van-row class="choose_date" v-if="Q_Status_Id == 1">
              <van-cell title="选择周期：" :value="Text_c2" @click="ifShow_c2 = true">
                <van-icon slot="right-icon" name="arrow-down" style="line-height: inherit;" />
              </van-cell>
            </van-row>
            <van-row class="choose_date" v-if="Q_Status_Id == 2">
              <van-cell title="购买日期：" :value="Text_c3" @click="ifShow_c3 = true">
                <van-icon slot="right-icon" name="calender-o" style="line-height: inherit;" />
              </van-cell>
            </van-row>
            <van-row class="choose_date" v-if="Q_Status_Id == 2">
              <van-cell title="选择周期：" :value="Text_c4" @click="ifShow_c4 = true">
                <van-icon slot="right-icon" name="arrow-down" style="line-height: inherit;" />
              </van-cell>
            </van-row>
          </div>
          <div class="popup_btns">
            <div>
              <div
                v-show="pageType ==  'Record'"
                class="popup_perBtn popup_perBtn2"
                @click="popupFunc('GoBack')"
              >
                <div class="p_btn">返回</div>
              </div>
              <div class="popup_perBtn popup_perBtn2" @click="popupFunc('Submit')">
                <div class="p_btn">确定</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 日历 -->
    <van-calendar color="#81d8ce" v-model="ifShow_c1" @confirm="onConfirm($event,1)" />
    <!-- <van-calendar color="#81d8ce" v-model="ifShow_c2" @confirm="onConfirm($event,2)" /> -->
    <van-action-sheet v-model="ifShow_c2" :actions="actions_week" @select="onConfirm($event,2)" />

    <van-calendar color="#81d8ce" v-model="ifShow_c3" @confirm="onConfirm($event,3)" />
    <!-- <van-calendar color="#81d8ce" v-model="ifShow_c4" @confirm="onConfirm($event,4)" /> -->
    <van-action-sheet v-model="ifShow_c4" :actions="actions_week" @select="onConfirm($event,4)" />
  </div>
</template>
<script>
export default {
  name: "RecordList",
  components: {},
  data() {
    return {
      Text_c1: "",
      Text_c2: "",
      Text_c3: "",
      Text_c4: "",
      ifShow_c1: false,
      ifShow_c2: false,
      ifShow_c3: false,
      ifShow_c4: false,
      popupShow: false,
      actions_week: [
        { name: "一周" },
        { name: "二周" },
        { name: "三周" },
        { name: "四周" }
      ],
      pageType: "Record",
      Q_Status: "复诊时间",
      Q_Status_Id: 1,
      ListData: {
        title: ["周次", "结果", "血糖", "剂量", "伴随降糖药"],
        data: [
          [
            "第一周",
            "电话获取",
            "FFG:6.5(2020-01-25) 患者已知血糖控制目标 患者已知血糖达标状态",
            "8.0",
            "二甲双胍1500.00mg/每月 3次/日每次用量: 早 500.00mg，中 500.mg,晚 500.mg"
          ],
          [
            "第二周",
            "本周未测",
            "患者已知血糖控制目标 患者已知血糖达标状态",
            "9.0",
            "无变化"
          ],
          [
            "第三周",
            "电话获取",
            "FFG:6.5(2020-01-25) 患者已知血糖控制目标 患者已知血糖达标状态",
            "19.0",
            "二甲双胍1500.00mg/每月 3次/日每次用量: 早 500.00mg，中 500.mg,晚 500.mg"
          ],
          [
            "第四周",
            "本周未测",
            "患者已知血糖控制目标 患者已知血糖达标状态",
            "9.0",
            "无变化"
          ]
        ]
      }
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    formatDate(date) {
      console.log(date);
      let month = date.getMonth() + 1;
      if (month <= 9) {
        month = "0" + month;
      }
      return `${date.getFullYear()}-${month}-${date.getDate()}`;
    },
    onConfirm(eventText, id) {
      console.log(eventText);
      if (id == 1) {
        this.ifShow_c1 = false;
        this.Text_c1 = this.formatDate(eventText);
      }
      if (id == 2) {
        this.ifShow_c2 = false;
        this.Text_c2 = eventText.name;
      }
      if (id == 3) {
        this.ifShow_c3 = false;
        this.Text_c3 = this.formatDate(eventText);
      }
      if (id == 4) {
        this.ifShow_c4 = false;
        this.Text_c4 = eventText.name;
      }
    },
    popupFunc(status) {
      this.popupShow = false;
      if (status == "Submit") {
        console.log("设置成功");
      }
    },
    BtnFunc(type) {
      this.popupShow = true;
      if (type == 1) {
        this.Q_Status = "复诊时间";
        this.Q_Status_Id = 1;
      } else if (type == 2) {
        this.Q_Status = "复购时间";
        this.Q_Status_Id = 2;
      }
    }
  }
};
</script>
<style>
.RecordList .popup_info .van-cell__value {
  text-align: left;
  border: 1px solid #ececec;
  border-radius: 0.1rem;
  padding-left: 0.15rem;
}
.RecordList .van-cell:not(:last-child)::after {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
/* 弹出框-输入框中-icon */
.RecordList .popup_info .van-icon {
  position: absolute;
  right: 0.2rem;
}
</style>
<style scoped>
.RecordList {
  overflow-x: hidden;
}
.record_list_body {
  padding-top: 0.36rem;
}
.RecordList .RQ_title {
  margin: 0;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.5rem;
  letter-spacing: 0.01px;
  vertical-align: top;
  width: 1.5rem;
}
.RecordList .R_time {
  font-size: 0.2rem;
  margin: 0;
  vertical-align: top;
  color: #858b9c;
  letter-spacing: 0.01rem;
  margin-top: 0.12rem;
}
.RecordList .m_table {
  text-align: left;
  border-collapse: collapse;
  border-radius: 0.25rem;
  border: none;
  overflow: hidden;
}
.RecordList .tr_title {
  height: 0.99rem;
}
.RecordList .tr_title td {
  background: #1d2439;
  border: none;
  font-weight: bold;
  font-size: 0.24rem;
  color: #dfdfdf;
  width: auto;
  margin: auto;
  height: 0.5rem;
  padding: 0.05rem 0.1rem;
  text-align: center;
}

.RecordList .tr_row td {
  border: none;
  font-size: 0.18rem;
  color: #dfdfdf;
  width: auto;
  margin: auto;
  height: 0.9rem;
  width: 1.2rem;
  padding: 0.05rem 0.1rem;
}
.RecordList .m_table .tr_row:nth-child(2n) {
  background: rgba(255, 255, 255, 0.1);
}

.RecordList .m_table .tr_row:nth-child(2n + 1) {
  background: rgba(255, 255, 255, 0.05);
}

.RecordList .tr_title td:nth-child(1) {
  width: 1rem;
}
.RecordList .tr_title td:nth-child(2) {
  width: 1rem;
}
.RecordList .tr_title td:nth-child(3) {
  width: 1.8rem;
}
.RecordList .tr_title td:nth-child(4) {
  width: 1rem;
}
.RecordList .tr_title td:nth-child(5) {
  width: 1.6rem;
}
.RecordList .tr_row td:nth-child(1) {
  text-align: center;
  width: 1rem;
}
.RecordList .tr_row td:nth-child(2) {
  text-align: center;
  width: 1rem;
}
.RecordList .tr_row td:nth-child(3) {
  text-align: left;
  width: 1.8rem;
}
.RecordList .tr_row td:nth-child(4) {
  text-align: center;
  width: 1rem;
}
.RecordList .tr_row td:nth-child(5) {
  text-align: left;
  width: 1.6rem;
}

.RecordList .i_btn {
  width: 2.6rem;
  height: 0.9rem;
  cursor: pointer;
  font-size: 0.28rem;
}
.RecordList .i_btn_space {
  margin-right: 0.68rem;
}

/* 弹出框内容 */
.RecordList .van-popup {
  border-radius: 0.1rem;
}
.RecordList .popup_bg {
  width: 5.4rem;
  height: auto;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  overflow-y: hidden;
  height: 5.57rem;
}
.RecordList .popup_bg .choose_date {
  height: 1.2rem;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.RecordList .popup_warning {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
  margin-top: 0.33rem;
}
.RecordList .popup_stitle {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  color: #41485d;
  letter-spacing: 0.01rem;
  margin-top: 0.26rem;
  margin-bottom: 0.3rem;
}
.RecordList .popup_info {
  height: 2.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(65, 72, 93, 1);
  line-height: 0.38rem;
  margin: 0 0.32rem;
}
.RecordList .popup_info_c {
  display: inline-block;
}
.RecordList .popup_btns {
  /* height: 0.45rem; */
  /* padding:  0.28rem 0 0.26rem 0; */
  border-top: 0.01rem solid rgba(221, 221, 221, 1);
  border-bottom: 0.01rem solid rgba(221, 221, 221, 1);
  /* height: 0.99rem; */
  margin-top: 0.5rem;
}
.RecordList .popup_perBtn {
  display: inline-block;
  width: 49.5%;
  /* height: 0.45rem; */
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.45rem;
  letter-spacing: 0.1rem;
  vertical-align: top;
  cursor: pointer;
}
.RecordList .popup_perBtn2 {
  color: #858b9c;
  border-left: 1px solid rgba(221, 221, 221, 1);
}

.RecordList .popup_perBtn2:nth-child(2) {
  color: #81d8ce;
}
.RecordList .p_btn {
  margin-top: 0.28rem;
  margin-bottom: 0.26rem;
}
</style>

