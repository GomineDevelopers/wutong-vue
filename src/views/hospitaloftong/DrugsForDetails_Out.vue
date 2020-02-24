<template>
  <div class="DrugsForDetails_Out">
    <vue-headful title="药品详情"></vue-headful>
    <div class="banner_img">
      <van-swipe @change="onChange">
        <template v-for="(item,index) in picUrlArr ">
          <van-swipe-item :key="index + 'bi' ">
            <img @click="goUrl(index)" class="b_img" :src="item" alt />
          </van-swipe-item>
        </template>
        <div class="custom-indicator" slot="indicator">
          <div class="numFontBg">
            <div class="numFont">{{ current + 1 }} / {{picNums}}</div>
          </div>
        </div>
      </van-swipe>
    </div>
    <div class="title">达格列净片(安达唐) 2型糖尿病 成人 辅助饮食 血糖控制</div>
    <div v-if="false" class="productCount">
      <div class="pc_left blockB_floatL">
        <!-- <div class="price1 blockB_floatL">
          <span class="rmb_mark">￥</span>
          16.98
        </div>
        <div class="price2 blockB_floatL">￥ &nbsp;18.98</div>-->
      </div>
      <div v-if="ifShopping == false" class="pc_right blockB_floatL">
        <!-- <div @click="BtnStatusChange()" class="btn_shopping">
          <P class="shopping_font">加入购物车</P>
        </div>-->
        <div class="btn_shopping btn_shopping2">
          <P class="shopping_font">进入线上平台</P>
        </div>
      </div>

      <div v-if="ifShopping == true" class="pc_right blockB_floatL">
        <!-- <div class="subtract countRadius blockB_floatL">
          <div @click="countChange('subtract')" class="countFont blockB_floatL">-</div>
        </div>
        <div class="p_count blockB_floatL">{{p_count}}</div>
        <div class="add countRadius blockB_floatL">
          <div @click="countChange('add')" class="countFont countFont2 blockB_floatL">+</div>
        </div>-->
        <div class="subtract_icon_p">
          <img
            class="subtract_icon"
            src="../../assets/pic/subtract_icon.png"
            alt
            @click="countChange('subtract')"
          />
        </div>
        <div class="p_count blockB_floatL">
          <div>{{p_count}}</div>
        </div>
        <div class="add_icon_p">
          <img class="add_icon" src="../../assets/pic/add_icon.png" alt @click="countChange('add')" />
        </div>
      </div>
    </div>
    <div :style="{height: '0.4rem'}"></div>
    <div class="product">
      <div class="product_c">
        <div class="product_title">
          <div class="product_title_l">产品参数</div>
          <!-- <div class="product_title_r">查看全部&nbsp;&nbsp;></div> -->
        </div>
        <div :style="{height: '0.2rem'}"></div>
        <div class="product_content">
          <template v-for="(item,index) in productContent ">
            <div :key="index + 'pc' " class="pc_row_font pc_row" v-if="index%2 == 0">
              <div class="pc_subtitle">{{item.subtitle}}</div>
              <div class="pc_intro">{{item.intro}}</div>
            </div>
            <div :key="index + 'pc' " class="pc_row_font pc_row2" v-if="index%2 != 0">
              <div class="pc_subtitle">{{item.subtitle}}</div>
              <div class="pc_intro">{{item.intro}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div :style="{height: '0.2rem'}"></div>
    <div class="p_intro">
      <div class="p_intro_title_l">产品说明</div>
      <div :style="{height: '0.2rem'}"></div>
      <div class="p_intro_font">
        <template v-for="(item,index) in DrugDetails.infoArr ">
          <p :key="index + 'DD' ">{{item}}</p>
        </template>
      </div>
    </div>
    <div :style="{height: '0.8rem'}"></div>

    <div class="flex_purchase">
      <!-- <van-goods-action>
        <van-goods-action-button
          class="first"
          id="serviceShow"
          type="warning"
          text
          @click="onClickButton"
        />
        <van-goods-action-button id="moneyShow" type="danger" text @click="onClickButton" />
      </van-goods-action>-->
      <div class="textAlignCenter_w100">
        <van-button
          @click="router_to('/dpcommunication')"
          round
          class="common_middle_btn common_fontsize i_btn"
        >咨询医生</van-button>
      </div>
      <div class="textAlignCenter_w100 flex_bottom_bg">此药品为处方药，需咨询医生开具处方购买</div>
    </div>
    <!-- <div class="flex_consult">
      <div class="consult_bg">
        <div class="consult_c">
          <van-icon class="consult_d" name="smile-comment-o" />
        </div>
        <div class="consult_c consult_space">咨询</div>
      </div>
    </div>-->
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "DrugsForDetails_Out",
  components: {},
  data() {
    return {
      current: 0,
      picNums: 3,
      picUrlArr: [
        // require("@/assets/pic/drug_1.jpg"),
        require("@/assets/pic/drug_n1.jpg"),
        require("@/assets/pic/drug_n2.jpg"),
        require("@/assets/pic/drug_n3.png")
      ],
      pic: {
        service_icon: require("@/assets/pic/service_icon.png"),
        ShoppingTrolley: require("@/assets/pic/ShoppingTrolley.png")
      },
      ifShopping: false,
      p_count: 1,
      productContent: [
        {
          subtitle: "品牌",
          intro: "AstraZeneca"
        },
        {
          subtitle: "产品名",
          intro: "达格列净片(安达唐)"
        },
        {
          subtitle: "规格",
          intro: "10mg*14s/盒"
        },
        {
          subtitle: "用法",
          intro: "口服"
        },
        {
          subtitle: "剂型",
          intro: "片装"
        },
        {
          subtitle: "使用剂量",
          intro: "每晚一次，于睡前将药轻轻涂于患处"
        }
      ],
      DrugDetails: {
        infoArr: [
          "[用法用量]1）推荐起始剂量是5mg每天1次，早晨服用，不受进食限制。 （2）在耐受FARXIGA需要附加血糖控制患者中剂量可增加至10 mg每天1次。 （3）开始FARXIGA前评估肾功能。如eGFR低于60 mL/min/1.73 m2不要开始FARXIGA。 （4）终止FARXIGA如eGFR下降持续低于60 mL/min/1.73 m2。",
          "[不良反应]伴随FARXIGA最常见不良反应(5%或更高发生率)是女性生殖器真菌感染，鼻咽炎，和泌尿道感染。",
          "[禁忌]（1）对FARXIGA严重超敏反应史； （2）严重肾受损，肾病终末期，或透析。",
          "[注意事项]（1）低血压：开始FARXIGA前，评估血容量状态和在老年人，在有肾受损或低收缩压患者，和用利尿药患者中纠正低血容量。治疗期间监视体征和症状。 （2）肾功能受损：治疗期间监视肾功能。 （3）低血糖：在用FARXIGA服用胰岛素或一种胰岛素促分泌素患者，考虑较低剂量胰岛素或胰岛素促分泌素以减低低血糖风险。 （4）生殖器真菌感染：如适用监视和治疗。 （5）LDL-C增高：每标准医护监视和治疗。 （6）膀胱癌：在临床试验中观察到膀胱癌不平衡。有活动性膀胱癌患者中不应使用FARXIGA和有膀胱癌既往史患者中应谨慎使用。 （7）大血管病变结局：没有临床研究确定用FARXIGA或任何其他抗糖尿病药物减低大血管风险结论性证据。请仔细阅读说明书并遵医嘱使用。"
        ]
      }
    };
  },
  mounted() {
    let vm = this;
    // var ob2 = document.getElementsByClassName("van-button--danger");
    // ob2[0].onclick = function() {
    //   console.log("~~~pd=>shop");
    //   vm.router_to("/shoppingtrolley");
    // };

    // ****** 购买栏样式 js 处理
    // let eve1 = document.getElementById("serviceShow");
    // eve1.innerHTML =
    //   "<div class='moudule'>\
    //     <div class='img_serve_p'></div>\
    //     <div class='font_serve'>联系客服</div>\
    //   </div>";

    // let eve2 = document.getElementById("moneyShow");
    // eve2.innerHTML =
    //   "<div class='moudule2'>\
    //     <div class='m2_left'>\
    //       <div class='img_shopping_p'>\
    //         <div class='shopping_count'><div class='shopping_count_c'>10</div></div>\
    //       </div>\
    //     </div>\
    //     <div class='m2_middle'>\
    //       <p class='moneyShow1'>￥ 18.99</p><p class='moneyShow2'>￥ <span class='through'>21.00</span></p>\
    //     </div>\
    //     <div class='m2_right'><div class='shu'></div><div class='payfor'>去付款</div></div>\
    //   </div>";
  },
  methods: {
    goUrl(index){
      if(index == 0){
        window.location.href = "https://mp.weixin.qq.com/s/ywIrsNkvIv_ySmD4LIhwJg";
      }
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    BtnStatusChange() {
      this.ifShopping = true;
    },
    countChange(type) {
      if (type == "subtract") {
        if (this.p_count > 1) {
          this.p_count--;
        }
      } else if (type == "add") {
        if (this.p_count < 99) {
          this.p_count++;
        }
      }
    },
    onChange(index) {
      this.current = index;
    },
    onClickIcon() {
      // Toast("点击图标");
    },
    onClickButton() {
      // Toast("点击按钮");
    }
  }
};
</script>

<style>
.DrugsForDetails_Out {
  padding-bottom: 2rem;
}
/* ******* 轮播图 */
.DrugsForDetails_Out .van-swipe {
  width: 7.5rem;
  height: 4.2rem;
}
/* ******* 购买栏 */
.DrugsForDetails_Out .van-goods-action {
  bottom: 0.32rem;
  margin: 0 0.4rem;
  /* border: 0.01rem solid #81d8ce; */
  background-color: rgba(0, 0, 0, 0);
}

.DrugsForDetails_Out .van-goods-action-button--warning {
  height: 0.98rem;
  background: #55eba2;
  color: #0e1528;
}
.DrugsForDetails_Out .van-goods-action-button--danger {
  height: 0.98rem;
  background: #0e1528;
  color: #ffffff;
}
.DrugsForDetails_Out .first.van-goods-action-button--warning {
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  box-shadow: 0 0.02rem 0.4rem 0 rgba(129, 216, 206, 0.2);

  /* border-radius: 20px; */
  /* background: red; */
}
.DrugsForDetails_Out .van-goods-action-button--last {
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 0.02rem 0.4rem 0 rgba(129, 216, 206, 0.2);
}

.DrugsForDetails_Out .van-goods-action-button {
  border: 0.01rem solid #55eba2;
}

.DrugsForDetails_Out .van-goods-action-button--warning .img_serve_p {
  width: 0.43rem;
  height: 0.44rem;
  background-image: url("../../assets/pic/service_icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}

.DrugsForDetails_Out .van-goods-action-button--warning .moudule {
  height: 0.84rem;
  padding-top: 0.12rem;
  width: 1.64rem;
}

.DrugsForDetails_Out .van-goods-action-button--warning .font_serve {
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #0e1528;
  line-height: 0.2rem;
  margin-top: 0.06rem;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moudule2 {
  width: 4.8rem;
}
.DrugsForDetails_Out .van-goods-action-button--danger .img_shopping_p {
  width: 0.66rem;
  height: 0.55rem;
  background-image: url("../../assets/pic/ShoppingTrolley.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}
.DrugsForDetails_Out .van-goods-action-button--danger .shopping_count {
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
.DrugsForDetails_Out .van-goods-action-button--danger .shopping_count_c {
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.2rem;
  padding-top: 0.05rem;
}

.DrugsForDetails_Out .van-goods-action-button--danger .moudule2 .m2_left {
  height: 0.76rem;
  width: 0.9rem;
  padding-bottom: 0.3rem;
  padding-top: 0.22rem;
  display: block;
  float: left;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moudule2 .m2_middle {
  display: block;
  float: left;
  width: 1.85rem;
  height: 0.88rem;
  padding-top: 0.1rem;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moneyShow1 {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.45rem;
  margin: 0 auto;
  text-align: left;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moneyShow2 {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(209, 248, 237, 1);
  line-height: 0.33rem;
  margin: 0 auto;
  text-align: left;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moneyShow2 .through {
  text-decoration: line-through;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moudule2 .m2_right {
  display: block;
  float: left;
  padding-top: 0.26rem;
  height: 0.7rem;
}
.DrugsForDetails_Out .van-goods-action-button--danger .moudule2 .payfor {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.45rem;
  padding-left: 0.4rem;
}
.DrugsForDetails_Out .van-goods-action-button--danger .shu {
  width: 0.02rem;
  height: 0.2rem;
  background: rgba(255, 255, 255, 1);
  display: block;
  float: left;
  margin-top: 0.14rem;
}
</style>
<style scoped>
.DrugsForDetails_Out {
  width: 7.5rem;
}
.DrugsForDetails_Out .banner_img {
  width: 100%;
  height: 4.2rem;
}
.DrugsForDetails_Out .b_img {
  background: rgba(255, 255, 255, 1);
  width: 7.5rem;
  height: 4.2rem;
}
.DrugsForDetails_Out .numFontBg {
  width: 0.77rem;
  height: 0.41rem;
  background: rgba(0, 0, 0, 0.7);
  /* border-radius: 0.28rem; */
  opacity: 0.5;
  display: inline-block;
  position: relative;
  top: -1.4rem;
  left: 6.3rem;
  border-radius: 0.28rem;
  line-height: 0.41rem;
  padding-top: 0.08rem;
  padding-left: 0.2rem;
}
.DrugsForDetails_Out .numFont {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.33rem;
  /* display: inline-block; */
  /* position: relative; */
  color: rgba(255, 255, 255, 1);
  /* left: 0.1rem; */
  /* top: -0.76rem; */
}
.DrugsForDetails_Out .title {
  /* height: 0.9rem; */
  width: 6.7rem;
  padding: 0.32rem 0.4rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
}
.DrugsForDetails_Out .productCount {
  height: 0.5rem;
  padding: 0 0.32rem;
}
.DrugsForDetails_Out .pc_left {
  width: 4.9rem;
  height: 0.5rem;
}
.DrugsForDetails_Out .pc_right {
  /* height: 0.5rem; */
  font-size: 0;
  padding-top: 0.04rem;
}
.DrugsForDetails_Out .btn_shopping {
  width: 1.68rem;
  height: 0.41rem;
  padding-top: 0.09rem;
  background: #49d691;
  border-radius: 0.3rem;
}
.DrugsForDetails_Out .btn_shopping2 {
  width: 1.8rem;
}
.DrugsForDetails_Out .shopping_font {
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  margin: 0;
  text-align: center;
}
.DrugsForDetails_Out .price1 {
  height: 0.5rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 85, 0, 1);
  line-height: 0.4rem;
}
.DrugsForDetails_Out .rmb_mark {
  font-size: 0.24rem;
}
.DrugsForDetails_Out .price2 {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.28rem;
  text-decoration: line-through;
  margin-left: 0.12rem;
  margin-top: 0.08rem;
}
.DrugsForDetails_Out .p_count {
  height: 0.32rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  line-height: 0.45rem;
  /* margin: 0 0.33rem; */
  width: 0.5rem;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  line-height: 0.32rem;
  margin: 0 0.1rem 0 0.58rem;
}

.DrugsForDetails_Out .subtract_icon_p {
  display: inline-block;
  vertical-align: top;
  margin-left: -1rem;
}
.DrugsForDetails_Out .add_icon_p {
  display: inline-block;
  vertical-align: top;
  margin-left: 0.7rem;
}
.DrugsForDetails_Out .subtract_icon {
  width: 0.32rem;
  height: 0.32rem;
}
.DrugsForDetails_Out .add_icon {
  width: 0.32rem;
  height: 0.32rem;
}

.DrugsForDetails_Out .subtract {
  width: 0.32rem;
  height: 0.32rem;
  border: 0.02rem solid rgba(197, 202, 213, 1);
  margin-top: 0.05rem;
}
.DrugsForDetails_Out .add {
  width: 0.32rem;
  height: 0.32rem;
  background: #55eba2;
  border: 0.02rem solid #55eba2;
  margin-top: 0.05rem;
}
.DrugsForDetails_Out .countRadius {
  -webkit-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
}
/* .DrugsForDetails_Out .countFont {
  font-size: 0.38rem;
  color: rgba(197, 202, 213, 1);
  vertical-align: top;
  margin-left: 0.07rem;
  margin-top: -0.11rem;
}
.DrugsForDetails_Out .countFont2 {
  color: rgba(255, 255, 255, 1);
  margin-left: 0.02rem;
} */
.DrugsForDetails_Out .countFont {
  /* font-size: 0.38rem;
  color: rgba(197, 202, 213, 1);
  vertical-align: top;
  margin-left: 0.07rem;
  margin-top: -0.12rem; */
  font-size: 40%;
  color: rgba(197, 202, 213, 1);
  vertical-align: top;
  margin-left: 20%;
  margin-top: -40%;
}
.DrugsForDetails_Out .countFont2 {
  color: rgba(255, 255, 255, 1);
  /* margin-left: 0.03rem;
  margin-top: -0.1rem; */
  margin-left: 10%;
  margin-top: -32%;
}
.DrugsForDetails_Out .product {
  width: 100%;
}
.DrugsForDetails_Out .product_c {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: 4.73rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0rem 0.04rem 0.2rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
}
.DrugsForDetails_Out .product_title {
  height: 0.45rem;
}
.DrugsForDetails_Out .product_content {
  height: auto;
}
.DrugsForDetails_Out .product_title_l {
  width: 4.9rem;
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails_Out .product_title_r {
  height: 0.37rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #55eba2;
  line-height: 0.37rem;
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails_Out .pc_row {
  /* background: rgba(249, 250, 251, 1); */
}
.DrugsForDetails_Out .pc_row2 {
  /* background: rgba(255, 255, 255, 1); */
}
.DrugsForDetails_Out .pc_row_font {
  width: 6.3rem;
  /* height: 0.68rem; */
  height: 0.37rem;
  padding: 0.15rem 0 0.16rem 0;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.37rem;
  letter-spacing: 0.01rem;
  border-bottom: 1px solid #4a5677;
}
.DrugsForDetails_Out .pc_subtitle {
  color: #858b9c;
  display: inline-block;
  width: 1.69rem;
  margin-left: 0.19rem;
}
.DrugsForDetails_Out .pc_intro {
  color: #fff;
  display: inline-block;
}

.DrugsForDetails_Out .p_intro {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
}
.DrugsForDetails_Out .p_intro_title_l {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
}
.DrugsForDetails_Out .p_intro_font {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 111, 131, 1);
  line-height: 0.37rem;
  text-align: justify;
}

.DrugsForDetails_Out .flex_consult {
  position: fixed;
  right: 0;
  bottom: 3.12rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.4rem;
}
.DrugsForDetails_Out .consult_bg {
  height: 0.4rem;
  width: 1.12rem;
  padding: 0.08rem 0rem 0.08rem 0.21rem;
  background: rgba(129, 216, 207, 0.8);
  border-radius: 1rem 0 0 1rem;
}
.DrugsForDetails_Out .consult_c {
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails_Out .consult_d {
  vertical-align: middle;
}
.DrugsForDetails_Out .consult_space {
  margin-left: 0.11rem;
}

.DrugsForDetails_Out .i_btn {
  width: 3.6rem;
  height: 0.9rem;
  border: none;
  margin-bottom: 0.4rem;
}
.DrugsForDetails_Out .flex_purchase {
  position: fixed;
  bottom: 0rem;
}
.DrugsForDetails_Out .flex_bottom_bg {
  height: 0.5rem;
  font-size: 0.24rem;
  line-height: 0.5rem;
  color: #ffffff;
  background-color: #2a6b59;
  bottom: 0;
}
</style>

