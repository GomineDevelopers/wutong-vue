<template>
  <div class="DrugsForDetails_Out">
    <!-- <vue-headful title="药品详情"></vue-headful> -->
    <div class="banner_img">
      <van-swipe @change="onChange">
        <template v-for="(item,index) in picUrlArr ">
          <van-swipe-item :key="index + 'bi' ">
            <img class="b_img" :src="item" alt />
          </van-swipe-item>
        </template>
        <div class="custom-indicator" slot="indicator">
          <div class="numFontBg">
            <div class="numFont">{{ current + 1 }} / {{picNums}}</div>
          </div>
        </div>
      </van-swipe>
    </div>
    <div class="title">3盒40 包邮赠医药棉签50支 迪维 维A酸乳膏15g*1支/盒祛痘痘 痤疮膏 粉刺</div>
    <div class="productCount">
      <div class="pc_left blockB_floatL">
        <div class="price1 blockB_floatL">
          <span class="rmb_mark">￥</span>
          16.98
        </div>
        <div class="price2 blockB_floatL">￥ &nbsp;18.98</div>
      </div>
      <div class="pc_right blockB_floatL">
        <div class="subtract countRadius blockB_floatL">
          <div @click="countChange('subtract')" class="countFont blockB_floatL">-</div>
        </div>
        <div class="p_count blockB_floatL">{{p_count}}</div>
        <div class="add countRadius blockB_floatL">
          <div @click="countChange('add')" class="countFont countFont2 blockB_floatL">+</div>
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
        <p>[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。</p>
        <p>[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。</p>
        <p>[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。</p>
        <p>
          [注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。
          请仔细阅读说明书并遵医嘱使用。
        </p>
      </div>
    </div>
    <div class="flex_purchase">
      <van-goods-action>
        <van-goods-action-button
          class="first"
          id="serviceShow"
          type="warning"
          text
          @click="onClickButton"
        />
        <van-goods-action-button id="moneyShow" type="danger" text @click="onClickButton" />
      </van-goods-action>
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
        require("@/assets/pic/drug_1.jpg"),
        require("@/assets/pic/drug_2.jpg"),
        require("@/assets/pic/drug_3.jpg")
      ],
      pic: {
        service_icon: require("@/assets/pic/service_icon.png"),
        ShoppingTrolley: require("@/assets/pic/ShoppingTrolley.png")
      },
      p_count: 1,
      productContent: [
        {
          subtitle: "品牌",
          intro: "迪维"
        },
        {
          subtitle: "产品名",
          intro: "维A酸乳膏"
        },
        {
          subtitle: "规格",
          intro: "15g*1支/盒"
        },
        {
          subtitle: "用法",
          intro: "皮肤外用"
        },
        {
          subtitle: "剂型",
          intro: "乳膏"
        },
        {
          subtitle: "使用剂量",
          intro: "每晚一次，于睡前将药轻轻涂于患处"
        }
      ]
    };
  },
  mounted() {
    let vm = this;

    // ****** 购买栏样式 js 处理
    let eve1 = document.getElementById("serviceShow");
    eve1.innerHTML =
      "<div class='moudule'>\
        <div class='img_serve_p'></div>\
        <div class='font_serve'>联系客服</div>\
      </div>";

    let eve2 = document.getElementById("moneyShow");
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
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    }
  }
};
</script>

<style>
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
}

.DrugsForDetails_Out .van-goods-action-button--warning {
  height: 0.98rem;
  background: #ffffff;
  color: #81d8ce;
}
.DrugsForDetails_Out .van-goods-action-button--danger {
  height: 0.98rem;
  background: #81d8ce;
  color: #ffffff;
}
.DrugsForDetails_Out .first.van-goods-action-button--warning {
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  /* border-radius: 20px; */
  /* background: red; */
}
.DrugsForDetails_Out .van-goods-action-button--last {
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}

.DrugsForDetails_Out .van-goods-action-button {
  border: 0.01rem solid #81d8ce;
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
  color: rgba(129, 216, 206, 1);
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
  border-radius: 0.28rem;
  opacity: 0.2;
  display: inline-block;
  position: relative;
  top: -1rem;
  left: 6.3rem;
  -webkit-border-radius: 0.28rem;
  -ms-border-radius: 0.28rem;
  -o-border-radius: 0.28rem;
  -moz-border-radius: 0.28rem;
  border-radius: 0.28rem;
}
.DrugsForDetails_Out .numFont {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.33rem;
  display: inline-block;
  position: relative;
  color: rgba(255, 255, 255, 1);
  left: 0.1rem;
  top: -0.76rem;
}
.DrugsForDetails_Out .title {
  height: 0.9rem;
  width: 6.7rem;
  padding: 0.32rem 0.4rem;

  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
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
  height: 0.5rem;
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
  height: 0.45rem;
  height: 0.32rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(65, 72, 93, 1);
  line-height: 0.45rem;
  margin: 0 0.33rem;
  width: 0.5rem;
  text-align: center;
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
  background: rgba(129, 216, 206, 1);
  border: 0.02rem solid rgba(129, 216, 206, 1);
  margin-top: 0.05rem;
}
.DrugsForDetails_Out .countRadius {
  -webkit-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
}
.DrugsForDetails_Out .countFont {
  font-size: 0.38rem;
  color: rgba(197, 202, 213, 1);
  vertical-align: top;
  margin-left: 0.07rem;
  margin-top: -0.11rem;
}
.DrugsForDetails_Out .countFont2 {
  color: rgba(255, 255, 255, 1);
  margin-left: 0.02rem;
}

.DrugsForDetails_Out .product {
  width: 100%;
}
.DrugsForDetails_Out .product_c {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: 4.73rem;
  background:rgba(255,255,255,1);
  box-shadow:0rem 0.04rem 0.20rem 0rem rgba(0,0,0,0.04);
  border-radius:0.20rem;
  border: 0.01rem solid rgba(233,232,232,0.5);

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
  color: rgba(17, 26, 52, 1);
  line-height: 0.45rem;
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails_Out .product_title_r {
  height: 0.37rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 0.37rem;
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails_Out .pc_row {
  background: rgba(249, 250, 251, 1);
}
.DrugsForDetails_Out .pc_row2 {
  background: rgba(255, 255, 255, 1);
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
}
.DrugsForDetails_Out .pc_subtitle {
  color: rgba(133, 139, 156, 1);
  display: inline-block;
  width: 1.69rem;
  margin-left: 0.19rem;
}
.DrugsForDetails_Out .pc_intro {
  color: rgba(65, 72, 93, 1);
  display: inline-block;
}

.DrugsForDetails_Out .p_intro {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: auto;
}
.DrugsForDetails_Out .p_intro_title_l {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
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
</style>

