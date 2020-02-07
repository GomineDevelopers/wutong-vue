<template>
  <div class="CardTicketManagement">
    <vue-headful title="卡券管理"></vue-headful>
    <van-tabs v-model="activeName">
      <van-tab title="全部" name="a">
        <div :style="{height: '0.52rem'}"></div>
        <div v-for="(item,index) in Card1" :key="index + 'c1' ">
          <div class="cardBg" :style="cardBgSettings(item.cardType)">
            <div class="cardLeft">
              <div class="cardName">{{item.name}}</div>
              <div class="cardMoney">{{item.money}}</div>
              <div class="cardTimeRange">{{item.startTime}}&nbsp;-&nbsp;{{item.endTime}}</div>
            </div>
            <div class="cardRight">
              <img class="QrCodeImg" @click="imgDialog(item.QrCodeUrl)" :src="item.QrCodeUrl" alt />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="未使用" name="b">
        <div :style="{height: '0.52rem'}"></div>
        <div v-for="(item,index) in Card2" :key="index + 'c2' ">
          <div class="cardBg" :style="cardBgSettings(item.cardType)">
            <div class="cardLeft">
              <div class="cardName">{{item.name}}</div>
              <div class="cardMoney">{{item.money}}</div>
              <div class="cardTimeRange">{{item.startTime}}&nbsp;-&nbsp;{{item.endTime}}</div>
            </div>
            <div class="cardRight">
              <img class="QrCodeImg" @click="imgDialog(item.QrCodeUrl)" :src="item.QrCodeUrl" alt />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已失效" name="c">
        <div :style="{height: '0.52rem'}"></div>
        <div v-for="(item,index) in Card3" :key="index + 'c3' ">
          <div class="cardBg" :style="cardBgSettings(item.cardType)">
            <div class="cardLeft">
              <div class="cardName">{{item.name}}</div>
              <div class="cardMoney">{{item.money}}</div>
              <div class="cardTimeRange">{{item.startTime}}&nbsp;-&nbsp;{{item.endTime}}</div>
            </div>
            <div class="cardRight">
              <img class="QrCodeImg" @click="imgDialog(item.QrCodeUrl)" :src="item.QrCodeUrl" alt />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup v-model="popupShow">
      <div class="textAlignCenter">
        <div class="QrCodeImgBig_bg">
          <img class="QrCodeImgBig" :src="CurrentQrCodeUrl" alt />
        </div>
      </div>
      <div class="textAlignCenter">
        <img class="closePopup" @click="closePopup()" :src="icon_close" alt />
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "CardTicketManagement",
  components: {},
  data() {
    return {
      activeName: "a",
      // 卡券类型： New-新到  ToExpire-快失效  Expired-已失效
      // 未使用： New ToExpire
      // 已失效： Expired
      Card1: [
        {
          cardType: "New",
          name: "xxx活动优惠券",
          money: "100元",
          QrCodeUrl: require("@/assets/pic/QrCode.png"),
          startTime: "2019.12.02",
          endTime: "2020.02.02"
        },
        {
          cardType: "New",
          name: "xxx活动优惠券",
          money: "200元",
          QrCodeUrl: require("@/assets/pic/QrCode.png"),
          startTime: "2019.12.02",
          endTime: "2020.02.02"
        },
        {
          cardType: "ToExpire",
          name: "xxx活动优惠券",
          money: "500元",
          QrCodeUrl: require("@/assets/pic/QrCode.png"),
          startTime: "2019.12.02",
          endTime: "2020.02.02"
        },
        {
          cardType: "Expired",
          name: "xxx活动优惠券",
          money: "888元",
          QrCodeUrl: require("@/assets/pic/QrCode.png"),
          startTime: "2019.12.02",
          endTime: "2020.02.02"
        }
      ],
      Card2: [],
      Card3: [],
      popupShow: false,
      CurrentQrCodeUrl: "",
      icon_close: require("@/assets/pic/icon_delete2.png")
    };
  },
  mounted() {
    let vm = this;
    this.cardManage();
  },
  methods: {
    closePopup() {
      this.popupShow = false;
    },
    imgDialog(QrCodeURL) {
      this.CurrentQrCodeUrl = QrCodeURL;
      this.popupShow = true;
    },
    cardBgSettings(type) {
      let bgUrl;
      if (type == "New") {
        bgUrl = "url(" + require("@/assets/pic/NewArrival.png") + ")";
      }
      if (type == "ToExpire") {
        bgUrl = "url(" + require("@/assets/pic/FastFailure.png") + ")";
      }
      if (type == "Expired") {
        bgUrl = "url(" + require("@/assets/pic/LostEeffectiveness.png") + ")";
      }
      // console.log(bgUrl);
      return {
        backgroundImage: bgUrl,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // height: "110vw",
        width: "90vw"
      };
    },
    // 卡片分类
    cardManage() {
      for (let i = 0; i < this.Card1.length; i++) {
        if (
          this.Card1[i].cardType == "New" ||
          this.Card1[i].cardType == "ToExpire"
        ) {
          this.Card2.push(this.Card1[i]);
        }
        if (this.Card1[i].cardType == "Expired") {
          this.Card3.push(this.Card1[i]);
        }
      }
    }
  }
};
</script>
<style>
/* ******** 标签 */
.CardTicketManagement .van-tabs--line .van-tabs__wrap {
  height: 0.88rem;
}
.CardTicketManagement .van-tab {
  color: #111a34;
}
.CardTicketManagement .van-tab__text {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.CardTicketManagement .van-tab--active {
  color: rgba(129, 216, 206, 1);
}
.CardTicketManagement .van-tabs__line {
  background-color: rgba(129, 216, 206, 1);
  width: 14% !important;
}

/* ******** 弹出层 */
.CardTicketManagement .van-popup {
  background-color: rgba(0, 0, 0, 0);
}
</style>
<style scoped>
.CardTicketManagement {
}
.CardTicketManagement .cardBg {
  width: 6.86rem;
  height: 1.76rem;
  padding: 0.1rem 0;
  margin: 0.06rem 5%;
}
.CardTicketManagement .cardLeft {
  display: inline-block;
  width: 67%;
  vertical-align: top;
  padding-left: 6%;
}
.CardTicketManagement .cardRight {
  display: inline-block;
  width: 25%;
  vertical-align: top;
  padding-top: 0.23rem;
  height: 1rem;
}
.CardTicketManagement .cardName {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.45rem;
  letter-spacing: 0.01rem;
}
.CardTicketManagement .cardMoney {
  height: 0.67rem;
  font-size: 0.48rem;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: rgba(129, 216, 206, 1);
  line-height: 0.55rem;
  letter-spacing: 0.03rem;
  padding: 0.08rem 0;
}
.CardTicketManagement .cardTimeRange {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
}
.CardTicketManagement .QrCodeImg {
  width: 1rem;
  height: 1rem;
}
.QrCodeImgBig_bg {
  padding: 0.4rem;
  width: 4rem;
  height: 4rem;
  background-color: #ffffff;
  -webkit-border-radius: 0.08rem;
  -ms-border-radius: 0.08rem;
  -o-border-radius: 0.08rem;
  -moz-border-radius: 0.08rem;
  border-radius: 0.08rem;
}
.CardTicketManagement .QrCodeImgBig {
  width: 100%;
  height: 100%;
}
.CardTicketManagement .closePopup {
  width: 0.6rem;
  height: 0.6rem;
}
</style>

