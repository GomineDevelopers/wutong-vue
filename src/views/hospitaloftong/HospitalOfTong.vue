<template>
  <div class="HospitalOfTong">
    <vue-headful title="智能搜药"></vue-headful>
    <div class="hot_top">
      <div class="inlineBlock verticalAlignTop address" @click="showArea = true">
        <div class="inlineBlock verticalAlignTop t_img1 Font_t1">
          <van-icon name="location-o" />
        </div>
        <div class="inlineBlock verticalAlignTop S_font Font_t2">{{currentArea}}</div>
        <div class="inlineBlock verticalAlignTop t_img2 Font_t3">
          <van-icon name="arrow-down" />
        </div>
      </div>
      <van-search
        right-icon="search"
        v-model="searchContent"
        placeholder="请输入药品名"
        shape="round"
        @search="onSearch"
        background="transparent"
        id="m_search_HOT"
        class="inlineBlock verticalAlignTop"
      ></van-search>
    </div>
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="AreaList"
        value="110101"
        @cancel="showArea = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <div class="h_content">
      <div :style="{height: '0.44rem'}"></div>
      <template v-for="(item,index) in BaseArr ">
        <div class="perImgModule" :key="index + 'ht' ">
          <div class="pIM">
            <div class="pIM_c">
              <img class="perImg" :src="item.pic[0]" alt />
            </div>
            <div class="pIM_name">{{item.name}}</div>
          </div>
        </div>
      </template>
      <div :style="{height: '1.8rem'}"></div>
      <div class="RQ_title">返现券</div>
      <template v-for="(item4,index4) in DiscountCouponArr ">
        <div class="DiscountCoupon FontSize0" :key="index4 + 'dc' ">
          <div class="dc_top S_font">
            <div class="inlineBlock verticalAlignTop dc_tl S_font2">
              <span class="S_font3">￥</span>
              {{item4.money}}
            </div>
            <div class="inlineBlock verticalAlignTop dc_tr">
              <div class="dc_tr_t S_font4">{{item4.name}}</div>
              <div class="dc_tr_b S_font5 fontColor">{{item4.info}}</div>
            </div>
          </div>
          <div class="dc_bottom S_font">
            <div class="inlineBlock verticalAlignTop dc_bl S_font6 fontColor">有效期至&nbsp;{{item4.validity}}</div>
            <div class="inlineBlock verticalAlignTop dc_br">
              <van-button
                @click="getUse(index4)"
                v-if="item4.use =='立即领取'"
                round
                class="common_middle_btn common_fontsize i_btn"
              >{{item4.use}}</van-button>
              <van-button
                v-if="item4.use =='已领取'"
                round
                class="common_middle_btn common_fontsize i_btn i_btn2"
              >{{item4.use}}</van-button>
            </div>
          </div>
        </div>
      </template>
      <!-- <div class="RQ_title">
        <div class="RQ_title_l">历史记录</div>
        <div class="RQ_title_r">
          <img class="img_delete" :src="pic.delete" alt />
        </div>
      </div>
      <div :style="{height: '0.1rem'}"></div>
      <template v-for="(item2,index2) in SearchArr ">
        <div class="perSearch" :key="index2 + 'ht2' ">
          <div class="S_bg">
            <div class="S_font">{{item2.value}}</div>
          </div>
        </div>
      </template>
      <div :style="{height: '2.2rem'}"></div>
      <div :style="{height: '0.35rem'}"></div>
      <div class="RQ_title">更多</div>
      <div :style="{height: '0.00rem'}"></div>
      <template v-for="(item3,index3) in MoreArr ">
        <div class="perImgModule perImgModule2" :key="index3 + 'ht3' ">
          <div class="pIM" @click="router_to(item3.path)">
            <div class="pIM_c">
              <img class="perImg perImg2" :src="item3.pic[0]" alt />
            </div>
            <div class="pIM_name pIM_name2">{{item3.name}}</div>
          </div>
        </div>
      </template>-->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { province_list, city_list } from "@/utils/area.js";
export default {
  name: "HospitalOfTong",
  components: {},
  data() {
    return {
      showArea: false,
      currentArea: "北京市",
      AreaList: {
        province_list: province_list,
        city_list: city_list
      },
      searchContent: "",
      pic: {
        delete: require("@/assets/pic/HospitalOfTong/delete.png")
      },
      BaseArr: [
        {
          pic: [require("@/assets/pic/HospitalOfTong/photograph.png")],
          name: "拍照片"
        },
        {
          pic: [require("@/assets/pic/HospitalOfTong/voice.png")],
          name: "语音搜"
        },
        {
          pic: [require("@/assets/pic/HospitalOfTong/service.png")],
          name: "问客服"
        }
      ],
      MoreArr: [
        {
          pic: [require("@/assets/pic/HospitalOfTong/shopping.png")],
          name: "购物车",
          path: "/shoppingtrolley"
        },
        {
          pic: [require("@/assets/pic/HospitalOfTong/order.png")],
          name: "我的订单",
          path: "/"
        }
      ],
      DiscountCouponArr: [
        {
          id: 1,
          money: 20,
          name: "安达唐药品专用返现券",
          info: "购买20天之后返现20",
          validity: "2020.03.02",
          use: "立即领取"
        },
        {
          id: 2,
          money: 20,
          name: "安达唐药品专用返现券",
          info: "购买20天之后返现20",
          validity: "2020.03.02",
          use: "立即领取"
        }
      ],
      SearchArr: [
        {
          value: "内分泌科"
        },
        {
          value: "外科"
        },
        {
          value: "感冒"
        },
        {
          value: "999感冒灵颗粒"
        },
        {
          value: "神经科"
        },
        {
          value: "金嗓子喉片"
        },
        {
          value: "脑白金"
        },
        {
          value: "益达木糖醇"
        },
        {
          value: "皮炎平"
        },
        {
          value: "胃康灵"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
    // window.onload = function() {
    console.log("~~~");
    // var ob = document.getElementById("m_search_HOT");
    var ob = document.getElementsByClassName("van-field__right-icon");
    // ob.onclick = function() {
    ob[0].onclick = function() {
      // console.log("~~~!");
      // console.log(ob);
      // console.log(ob.childNodes);
      // van-field__right-icon
      vm.router_to("/searchdrug");
    };
    // ob.className = xxoo;
    // };
  },
  methods: {
    onConfirm(value) {
      // console.log("onConfirm");
      // console.log(value);
      this.currentArea = value[1].name;
      this.showArea = false;
    },

    onSearch(event) {
      console.log(event);
    },
    // router_toSpec(str, p_id) {
    //   let vm = this;
    //   // 待添加query 对应 pid
    //   vm.$router.push({ path: str });
    // },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    getUse(index) {
      this.$toast.fail("领取成功！");
      let obj = this.DiscountCouponArr[index];
      obj.use = "已领取";
      Vue.set(this.DiscountCouponArr, index, obj);
    }
  }
};
</script>
<style>
/* ****** 输入框 */

.HospitalOfTong .van-search {
  margin-top: 10px;
  padding: 0.1rem 0rem 0rem 0.16rem;
  width: 4.8rem;
}
.HospitalOfTong .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.HospitalOfTong .van-field__left-icon .van-icon,
.HospitalOfTong .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.HospitalOfTong .van-field__left-icon {
  display: none;
}
.HospitalOfTong .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.HospitalOfTong .van-field__body {
  height: 0.4rem;
}
.HospitalOfTong .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(29, 36, 57, 1);
  border-radius: 0.44rem;
}
.HospitalOfTong .van-search__content {
  background: transparent;
}
</style>
<style scoped>
.HospitalOfTong {
}
.HospitalOfTong .address {
  width: 2.4rem;
}
.HospitalOfTong .address .Font_t1 {
  font-size: 0.32rem;
  color: #43da9c;
  margin-top: 0.5rem;
  margin-left: 0.32rem;
}
.HospitalOfTong .address .Font_t2 {
  font-size: 0.32rem;
  color: #ffffff;
  margin-top: 0.53rem;
  margin-left: 0.2rem;
}
.HospitalOfTong .address .Font_t3 {
  font-size: 0.32rem;
  color: #cccccc;
  margin-left: 0.1rem;
  margin-top: 0.5rem;
}
.HospitalOfTong .h_content {
  padding: 0 0.32rem;
}
.HospitalOfTong .perImgModule {
  /* width: 2.3rem; */
  width: 33%;
  height: 1.78rem;
  /* display: inline-block; */
  display: block;
  float: left;
}
.HospitalOfTong .perImgModule2 {
  width: 25%;
  height: 1.5rem;
}
.HospitalOfTong .perImg {
  width: 1rem;
  height: 1rem;
  box-shadow: 0 0.02 0.2 0 rgba(0, 215, 162, 0.4);
}
.HospitalOfTong .perImg2 {
  width: 0.5rem;
  height: 0.5rem;
}

.HospitalOfTong .pIM {
  width: 100%;
  text-align: center;
}
.HospitalOfTong .pIM_c {
  height: 1rem;
}

.HospitalOfTong .pIM_name {
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #858b9c;
  line-height: 0.4rem;
}
.HospitalOfTong .pIM_name2 {
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #858b9c;
  line-height: 0.33rem;
  margin-top: 0.12rem;
}

.HospitalOfTong .RQ_title {
  margin: 0;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.5rem;
  letter-spacing: 0.01px;
}
.HospitalOfTong .RQ_title2 {
  width: 100%;
}
.HospitalOfTong .RQ_title_l {
  width: 6.45rem;
  display: inline-block;
  vertical-align: top;
}
.HospitalOfTong .RQ_title_r {
  display: inline-block;
  vertical-align: top;
  height: 0.38rem;
  width: 0.38rem;
  margin-top: 0.02rem;
}
.HospitalOfTong .img_delete {
  height: 0.38rem;
  width: 0.38rem;
}
.HospitalOfTong .S_bg {
  padding: 0.06rem 0.2rem;
  /* height: 0.4rem; */
  background: rgba(197, 202, 213, 1);
  border-radius: 0.1rem;
  display: block;
  float: left;
  margin-right: 0.4rem;
  margin-top: 0.3rem;
}
.HospitalOfTong .S_font {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
}
/* ************ 新修改 */
.HospitalOfTong .DiscountCoupon {
  background: rgba(0, 0, 0, 0) url(../../assets/newpic2/DiscountCoupon.png)
    no-repeat;
  width: 6.06rem;
  padding-left: 0.8rem;
  height: 2.4rem;
  background-size: 100% 100%;
  margin-top: 0.4rem;
}
.HospitalOfTong .dc_top {
  width: 90%;
  height: 1.08rem;
  padding-top: 0.3rem;
  border-bottom: 0.01rem solid #3f4451;
}
.HospitalOfTong .dc_tl {
  width: 22%;
}
.HospitalOfTong .dc_tr {
  width: 67%;
}
.HospitalOfTong .dc_bottom {
  width: 100%;
}
.HospitalOfTong .dc_bl {
  width: 60%;
}
.HospitalOfTong .dc_br {
  width: 39%;
}
.HospitalOfTong .S_font2 {
  color: #43da9c;
  font-size: 0.4rem;
  margin-top: 0.32rem;
}
.HospitalOfTong .S_font3 {
  font-size: 0.24rem;
}
.HospitalOfTong .S_font4 {
  color: #ffffff;
  font-size: 0.32rem;
}
.HospitalOfTong .S_font5 {
  color: #ffffff;
  font-size: 0.24rem;
  margin-top: 0.22rem;
}
.HospitalOfTong .S_font6 {
  font-size: 0.22rem;
  margin-top: 0.35rem;
}

.HospitalOfTong .i_btn {
  width: 1.8rem;
  height: 0.55rem;
  border: none;
  line-height: 0.55rem;
  margin-top: 0.2rem;
  font-size: 0.28rem;
  background-color: rgba(0, 0, 0, 0);
  border: 0.01rem solid #49d691;
  color: #49d691;
}
.HospitalOfTong .i_btn2 {
  background-color: rgba(255, 255, 255, 0.2) ;
  border: 0.01rem solid #49696A;
  color: #679393;
}

.HospitalOfTong .fontColor{
  color: #A3A7AF;
}
</style>
