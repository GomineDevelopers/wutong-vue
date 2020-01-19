<template>
  <div class="DrugsForDetails">
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
    <div class="product">
      <div class="product_c">
        <div class="product_title">
          <div class="product_title_l">产品参数</div>
          <div class="product_title_r">查看全部&nbsp;&nbsp;></div>
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
        <van-goods-action-button id="moneyShow" type="warning" text @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
    <div class="flex_consult">
      <div class="consult_bg">
        <div class="consult_c">
          <van-icon class="consult_d" name="smile-comment-o" />
        </div>
        <div class="consult_c consult_space">咨询</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "DrugsForDetails",
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
    let eve = document.getElementById("moneyShow");
    eve.innerHTML =
      "<div><p class='moneyShow1'>￥ 18.99</p><p class='moneyShow2'>￥ <span class='through'>21.00</span></p></div>";
  },
  methods: {
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
.DrugsForDetails .van-swipe {
  width: 7.5rem;
  height: 4.2rem;
}
/* ******* 购买栏 */
.DrugsForDetails .van-goods-action {
  bottom: 0.32rem;
  margin: 0 0.4rem;
}
.DrugsForDetails .van-goods-action-button--warning {
  height: 0.98rem;
  background: #ffffff;
  color: #81d8ce;
}
.DrugsForDetails .van-goods-action-button--danger {
  height: 0.98rem;
  background: #81d8ce;
  color: #ffffff;
}

.DrugsForDetails .van-goods-action-button--warning .moneyShow1 {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(129, 216, 207, 1);
  line-height: 0.45rem;
  margin: 0 auto;
}
.DrugsForDetails .van-goods-action-button--warning .moneyShow2 {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.33rem;
  margin: 0 auto;
}
.DrugsForDetails .van-goods-action-button--warning .moneyShow2 .through {
  text-decoration: line-through;
}
</style>
<style scoped>
.DrugsForDetails {
  width: 7.5rem;
}
.DrugsForDetails .banner_img {
  width: 100%;
  height: 4.2rem;
}
.DrugsForDetails .b_img {
  background: rgba(255, 255, 255, 1);
  width: 7.5rem;
  height: 4.2rem;
}
.DrugsForDetails .numFontBg {
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
.DrugsForDetails .numFont {
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
.DrugsForDetails .title {
  height: 0.9rem;
  width: 6.7rem;
  padding: 0.32rem 0.4rem;

  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.45rem;
}
.DrugsForDetails .product {
  width: 100%;
}
.DrugsForDetails .product_c {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: 4.73rem;
}
.DrugsForDetails .product_title {
  height: 0.45rem;
}
.DrugsForDetails .product_content {
  height: auto;
}
.DrugsForDetails .product_title_l {
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
.DrugsForDetails .product_title_r {
  height: 0.37rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 0.37rem;
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails .pc_row {
  background: rgba(249, 250, 251, 1);
}
.DrugsForDetails .pc_row2 {
  background: rgba(255, 255, 255, 1);
}
.DrugsForDetails .pc_row_font {
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
.DrugsForDetails .pc_subtitle {
  color: rgba(133, 139, 156, 1);
  display: inline-block;
  width: 1.69rem;
  margin-left: 0.19rem;
}
.DrugsForDetails .pc_intro {
  color: rgba(65, 72, 93, 1);
  display: inline-block;
}

.DrugsForDetails .p_intro {
  margin: 0 0.32rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: auto;
}
.DrugsForDetails .p_intro_title_l {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.45rem;
}
.DrugsForDetails .p_intro_font {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 111, 131, 1);
  line-height: 0.37rem;
  text-align: justify;
}

.DrugsForDetails .flex_consult {
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
.DrugsForDetails .consult_bg {
  height: 0.4rem;
  width: 1.12rem;
  padding: 0.08rem 0rem 0.08rem 0.21rem;
  background: rgba(129, 216, 207, 0.8);
  border-radius: 1rem 0 0 1rem;
}
.DrugsForDetails .consult_c {
  display: inline-block;
  vertical-align: top;
}
.DrugsForDetails .consult_d {
  vertical-align: middle;
}
.DrugsForDetails .consult_space {
  margin-left: 0.11rem;
}
</style>

