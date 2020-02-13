<template>
  <van-row class="PharmacyDetail van_container">
    <vue-headful title="药房详情"></vue-headful>
    <van-row class="van_container_body height_auto">
      <van-row class="header_body">
        <van-row class="top_search padding_mudule">
          <van-search
            right-icon="search"
            v-model="searchContent"
            placeholder="请输入"
            shape="round"
            @search="onSearch"
            background="transparent"
          ></van-search>
        </van-row>
        <van-row class="header_pharmacy_info flex flex_align_center">
          <!-- <img class="pharmacy_img" src="../../assets/pic/pharmacylist.jpg" /> -->
          <van-row class="flex_1">
            <van-row class="main_font2">广联医药</van-row>
            <!-- <van-row class="pharmacy_tips flex">
              <span class="hour">24h营业</span>
              <span class="health_insurance">医保定点</span>
              <span class="cooperation">合作药店</span>
              <span class="coupon">可用优惠券</span>
            </van-row>-->
            <van-row @click="router_to('/map')" class="pharmacy_address flex flex_align_center">
              <img src="../../assets/pic/address_green.png" />
              {{ address }}
            </van-row>
          </van-row>
          <img class="navigation_icon" src="../../assets/pic/navigation_icon.png" />
        </van-row>
      </van-row>
      <!-- 列表开始 -->
      <van-row class="medicine_content">
        <!-- 主体内容 -->
        <van-row class="height_auto sickness_content flex">
          <van-row class="left_sidebar">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="感冒用药" />
              <van-sidebar-item title="儿童用药" />
              <van-sidebar-item title="清热解毒" />
              <van-sidebar-item title="消化系统" />
              <van-sidebar-item title="妇科用药" />
              <van-sidebar-item title="营养保健" />
            </van-sidebar>
          </van-row>
          <van-row class="right_content flex_1">
            <van-row
              class="sickness_list flex flex_justify_between"
              v-for="(item, index) in sicknessList"
              :key="index"
            >
              <van-row
                @click="router_to('/drugsfordetails_out')"
                class="drug_img flex flex_align_center flex_justify_content"
              >
                <img :src="item.img" />
              </van-row>
              <van-row class="flex flex_1 flex_direction">
                <van-row
                  @click="router_to('/drugsfordetails_out')"
                  class="drug_name main_font2"
                >{{ item.name }}</van-row>
                <van-row @click="router_to('/drugsfordetails_out')" class="drug_content main_font3">
                  {{
                  item.content
                  }}
                </van-row>
                <van-row class="drug_price flex flex_align_center">
                  <span class="flex_1">¥&nbsp;{{ item.price }}</span>
                  <img src="../../assets/pic/add_icon.png" />
                </van-row>
              </van-row>
            </van-row>
          </van-row>
        </van-row>
      </van-row>

      <div class="flex_purchase">
        <van-goods-action>
          <van-goods-action-button
            class="first"
            id="serviceShow2"
            type="warning"
            text
            @click="onClickButton"
          />
          <van-goods-action-button id="moneyShow2" type="danger" text @click="onClickButton" />
        </van-goods-action>
      </div>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "PharmacyDetail",
  components: {},
  data() {
    return {
      searchContent: "",
      activeKey: "3",
      address: "上海市徐汇区汾阳路83号",
      sicknessList: [
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content:
            "适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        },
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content: "适用症：适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        },
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content: "适用症：适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        },
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content: "适用症：适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        },
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content: "适用症：适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        },
        {
          img: require("../../assets/pic/drug_img.jpg"),
          name: "安立泽 沙格列汀片",
          content: "适用症：适用症：2型糖尿病。可作为单药治疗，在饮食和运动基础上改善血糖控制",
          price: 62.00
        }
      ]
    };
  },
  mounted() {
    let vm = this;
    console.log("~~~");
    var ob = document.getElementsByClassName("van-field__right-icon");
    ob[0].onclick = function() {
      console.log("~~~pd");
      vm.router_to("/pharmacydetail");
    };
    var ob2 = document.getElementsByClassName("van-button--danger");
    ob2[0].onclick = function() {
      console.log("~~~pd=>shop");
      vm.router_to("/shoppingtrolley");
    };
    // ****** 购买栏样式 js 处理
    let eve1 = document.getElementById("serviceShow2");
    eve1.innerHTML =
      "<div class='moudule'>\
        <div class='img_serve_p'></div>\
        <div class='font_serve'>联系客服</div>\
      </div>";

    let eve2 = document.getElementById("moneyShow2");
    eve2.innerHTML =
      "<div class='moudule2'>\
        <div class='m2_left'>\
          <div class='img_shopping_p'>\
            <div class='shopping_count'><div class='shopping_count_c'>10</div></div>\
          </div>\
        </div>\
        <div class='m2_middle'>\
          <p class='moneyShow1'>￥ 18.99</p><p class='moneyShow2'>￥ <span class='through'>21.00</span></p>\
        </div>\
        <div class='m2_right'><div class='shu'></div><div class='payfor'>去付款</div></div>\
      </div>";
  },
  methods: {
    onSearch(event) {
      console.log(event);
    },
    onClickButton() {
      // Toast("点击按钮");
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ******* 购买栏 */
.PharmacyDetail .van-goods-action {
  bottom: 0.32rem;
  margin: 0 0.4rem;
  /* border: 0.01rem solid #81d8ce; */
  background-color: rgba(0, 0, 0, 0);
}

.PharmacyDetail .van-goods-action-button--warning {
  height: 0.98rem;
  background: #56eaa3;
  color: #0e1528;
}
.PharmacyDetail .van-goods-action-button--danger {
  height: 0.98rem;
  background: rgba(14, 21, 40, 1);
  color: #ffffff;
}
.PharmacyDetail .first.van-goods-action-button--warning {
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  box-shadow: 0 0.02rem 0.4rem 0 rgba(129, 216, 206, 0.2);

  /* border-radius: 20px; */
  /* background: red; */
}
.PharmacyDetail .van-goods-action-button--last {
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 0.02rem 0.4rem 0 rgba(129, 216, 206, 0.2);
}

.PharmacyDetail .van-goods-action-button {
  border: 0.01rem solid #56eaa3;
}

.PharmacyDetail .van-goods-action-button--warning .img_serve_p {
  width: 0.43rem;
  height: 0.44rem;
  background-image: url("../../assets/pic/service_icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}

.PharmacyDetail .van-goods-action-button--warning .moudule {
  height: 0.84rem;
  padding-top: 0.12rem;
  width: 1.64rem;
}

.PharmacyDetail .van-goods-action-button--warning .font_serve {
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.2rem;
  margin-top: 0.06rem;
}
.PharmacyDetail .van-goods-action-button--danger .moudule2 {
  width: 4.8rem;
}
.PharmacyDetail .van-goods-action-button--danger .img_shopping_p {
  width: 0.66rem;
  height: 0.55rem;
  background-image: url("../../assets/pic/ShoppingTrolley.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}
.PharmacyDetail .van-goods-action-button--danger .shopping_count {
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(255, 85, 0, 1);
  -webkit-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  margin-left: 0.36rem;
}
.PharmacyDetail .van-goods-action-button--danger .shopping_count_c {
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.2rem;
  padding-top: 0.05rem;
}

.PharmacyDetail .van-goods-action-button--danger .moudule2 .m2_left {
  height: 0.76rem;
  width: 0.9rem;
  padding-bottom: 0.3rem;
  padding-top: 0.22rem;
  display: block;
  float: left;
}
.PharmacyDetail .van-goods-action-button--danger .moudule2 .m2_middle {
  display: block;
  float: left;
  width: 1.85rem;
  height: 0.88rem;
  padding-top: 0.1rem;
}
.PharmacyDetail .van-goods-action-button--danger .moneyShow1 {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.45rem;
  margin: 0 auto;
  text-align: left;
}
.PharmacyDetail .van-goods-action-button--danger .moneyShow2 {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(209, 248, 237, 1);
  line-height: 0.33rem;
  margin: 0 auto;
  text-align: left;
}
.PharmacyDetail .van-goods-action-button--danger .moneyShow2 .through {
  text-decoration: line-through;
}
.PharmacyDetail .van-goods-action-button--danger .moudule2 .m2_right {
  display: block;
  float: left;
  padding-top: 0.26rem;
  height: 0.7rem;
}
.PharmacyDetail .van-goods-action-button--danger .moudule2 .payfor {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.45rem;
  padding-left: 0.4rem;
}
.PharmacyDetail .van-goods-action-button--danger .shu {
  width: 0.02rem;
  height: 0.2rem;
  background: rgba(255, 255, 255, 1);
  display: block;
  float: left;
  margin-top: 0.14rem;
}
</style>
<style scoped>
.top_search {
  padding-top: 0.05rem;
}
.header_pharmacy_info {
  margin-top: 0.44rem;
  margin-bottom: 0.4rem;
  padding-left: 0.32rem;
  padding-right: 0.2rem;
  position: relative;
}
.medicine_content {
  height: calc(100% - 2.74rem);
  overflow: hidden;
  /* box-shadow: 0px -0.04rem 0.2rem 0rem rgba(243, 244, 248, 1); */
}
.drug_img {
  width: 1.02rem;
  height: 1.0282rem;
  border-radius: 0.1rem;
  border: 0.01rem solid rgba(239, 239, 239, 1);
  margin-right: 0.24rem;
}
.drug_img img {
  width: 0.75rem;
  height: 0.85rem;
}
.right_content {
  padding-left: 0.2rem;
}
.sickness_list {
  padding: 0.4rem 0.4rem 0.4rem 0rem;
  border-bottom: 0.01rem solid #4a5677;
}
.drug_content {
  line-height: 0.4rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 0.19rem;
  margin-bottom: 0.13rem;
}
.drug_price {
  font-size: 0.28rem;
  color: #ff5500;
}
.drug_price img {
  width: 0.32rem;
}
</style>
