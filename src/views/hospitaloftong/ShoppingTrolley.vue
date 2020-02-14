<template>
  <div class="ShoppingTrolley">
    <vue-headful title="购物车"></vue-headful>
    <div :style="{height: '0.4rem'}"></div>
    <div class="ST_title">共3件商品</div>
    <div :style="{height: '0.46rem'}"></div>
    <template v-for="(itemP,indexP) in BaseArrP ">
      <div :key="indexP + 'stP' ">
        <div v-if="indexP != 0" :style="{height: '0.5rem'}"></div>
        <div class="content_bg">
          <div :style="{height: '0.32rem'}"></div>
          <div class="c_title">
            {{itemP.ShopName}}&nbsp;
            <van-icon size="0.28rem" name="arrow" />
          </div>
          <template v-for="(item,index) in BaseArr[indexP] ">
            <div
              :class="'PerRow' + ' PerRowCommon' + ' ' + indexP+'_'+index+'PerRowCommon'  "
              :key="indexP+ '-' + index + 'st' "
              @touchstart.capture="touchStart($event,indexP,index)"
              @touchend.capture="touchEnd($event,indexP,index)"
            >
              <div class="st_choose blockB_floatL">
                <img
                  @click="ChangeSelectedStatus(indexP,index,false)"
                  v-if="item.ifSelected"
                  :src="pic.selected"
                  alt
                  class="img_choose"
                />
                <img
                  @click="ChangeSelectedStatus(indexP,index,true)"
                  v-if="!item.ifSelected"
                  :src="pic.unselected"
                  alt
                  class="img_choose"
                />
              </div>
              <div class="blockB_floatL st_pic">
                <div class="st_img_p">
                  <img class="st_img" :src="item.pic" alt />
                </div>
              </div>
              <div class="st_content blockB_floatL">
                <div class="st_name">{{item.name}}</div>
                <div class="st_specification">{{item.specification}}</div>
                <div class="st_bottom">
                  <div class="st_price">￥&nbsp;{{item.price}}</div>
                  <div class="st_originalPrice">￥&nbsp;{{item.originalPrice}}</div>
                  <div class="st_count">
                    <div class="pc_right blockB_floatL">
                      <!-- <div class="subtract countRadius blockB_floatL">
                        <div
                          @click="countChange('subtract',indexP,index)"
                          class="countFont blockB_floatL"
                        >-</div>
                      </div>-->
                      <div class="subtract_icon_p">
                        <img
                          class="subtract_icon"
                          src="../../assets/pic/subtract_icon.png"
                          alt
                          @click="countChange('subtract',indexP,index)"
                        />
                      </div>

                      <div class="p_count blockB_floatL">
                        <div>{{item.count}}</div>
                      </div>
                      <!-- <div class="add countRadius blockB_floatL">
                        <div
                          @click="countChange('add',indexP,index)"
                          class="countFont countFont2 blockB_floatL"
                        >+</div>                         
                      </div>-->
                      <div class="add_icon_p">
                        <img
                          class="add_icon"
                          src="../../assets/pic/add_icon.png"
                          alt
                          @click="countChange('add',indexP,index)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="deleteAssign" @click="deleteItem($event,indexP,index)">删除</div>
            </div>
          </template>
        </div>
      </div>
    </template>
    <div :style="{height: '0.5rem'}"></div>

    <div class="flex_purchase">
      <van-submit-bar :price="5094" button-text="结算" @submit="onSubmit">
        <van-checkbox checked-color="#55EBA2" v-model="AllChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "ShoppingTrolley",
  components: {},
  data() {
    return {
      AllChecked: true,
      pic: {
        selected: require("@/assets/pic/selected.png"),
        unselected: require("@/assets/pic/unselected.png")
      },
      BaseArrP: [
        {
          Sid: 1,
          ShopName: "广联医药"
        },
        {
          Sid: 2,
          ShopName: "老百姓大药房"
        },
        {
          Sid: 3,
          ShopName: "盛大药房"
        }
      ],
      BaseArr: [
        [
          {
            Did: 1,
            name: "安立泽 沙格列汀片",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 1,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 2,
            name: "安立泽 沙格列汀片b",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 55,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 3,
            name: "安立泽 沙格列汀片c",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 8,
            ifSelected: true,
            startX: 0,
            endX: 0
          }
        ],
        [
          {
            Did: 1,
            name: "安立泽 沙格列汀片",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 1,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 2,
            name: "安立泽 沙格列汀片b",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 55,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 3,
            name: "安立泽 沙格列汀片c",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 8,
            ifSelected: true,
            startX: 0,
            endX: 0
          }
        ],
        [
          {
            Did: 1,
            name: "安立泽 沙格列汀片",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 1,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 2,
            name: "安立泽 沙格列汀片b",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 55,
            ifSelected: true,
            startX: 0,
            endX: 0
          },
          {
            Did: 3,
            name: "安立泽 沙格列汀片c",
            pic: require("@/assets/pic/drug.jpg"),
            specification: "5mg*7片/盒",
            price: 62.0,
            originalPrice: 70.8,
            count: 8,
            ifSelected: true,
            startX: 0,
            endX: 0
          }
        ]
      ]
    };
  },
  mounted() {
    let vm = this;
    var ob2 = document.getElementsByClassName("van-button--danger");
    ob2[0].onclick = function() {
      console.log("~~~pd=>shop");
      vm.router_to("/settlementpage");
    };
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
    //     <div class='m2_right'><div class='shu'></div><div class='payfor'>结算</div></div>\
    //   </div>";
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    onSubmit() {
      console.log("结算");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    // 进行店铺核验
    checkShopName(indexP) {
      let length = this.BaseArr[indexP].length;
      console.log(indexP);
      if (length == 0) {
        this.BaseArr.splice(indexP, 1);
        this.BaseArrP.splice(indexP, 1);
      }
    },
    deleteItem(e, indexP, index) {
      // 复位
      this.restSlideAll();
      // 删除
      let temp_Arr = this.BaseArr[indexP];
      temp_Arr.splice(index, 1);
      Vue.set(this.BaseArr, indexP, temp_Arr);
      this.checkShopName(indexP);
    },
    // 复位滑动状态-指定
    restSlideAssign(indexP, index) {
      let AssignClass = indexP + "_" + index + "PerRowCommon";
      console.log(AssignClass);
      let AssignItem = document.getElementsByClassName(AssignClass);
      // 复位
      AssignItem[0].dataset.type = 0;
    },
    // 复位滑动状态-所有
    restSlideAll() {
      let listItems = document.getElementsByClassName("PerRowCommon");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    },
    // 滑动开始
    touchStart(e, indexP, index) {
      // 记录初始位置
      let temp_startX = e.touches[0].clientX;
      // console.log(e);
      console.log(indexP + "-" + index);
      // console.log(e.touches[0].clientX);
      let Obj = this.BaseArr[indexP][index];
      Obj.startX = temp_startX;
      Vue.set(this.BaseArr[indexP], index, Obj);
    },
    // 滑动结束
    touchEnd(e, indexP, index) {
      // // 记录结束位置
      let temp_endX = e.changedTouches[0].clientX;
      let AssignClass = indexP + "_" + index + "PerRowCommon";
      let Assign = document.getElementsByClassName(AssignClass);

      // 左滑
      if (this.BaseArr[indexP][index].startX - temp_endX > 30) {
        console.log("左滑"); // 显示删除
        this.restSlideAll(); // 滑块全部初始化
        Assign[0].dataset.type = 1;
      }
      // 右滑
      if (this.BaseArr[indexP][index].startX - temp_endX < -30) {
        console.log("右滑"); // 关掉删除
        this.restSlideAll(); // 滑块全部初始化
        Assign[0].dataset.type = 0;
      }
      // this.startX = 0;
      // this.endX = 0;
      // console.log("~~~");
      // console.log(e);
      // console.log(indexP + "-" + index);
    },
    ChangeSelectedStatus(indexP, index, CurrentStatus) {
      let Obj = this.BaseArr[indexP][index];
      Obj.ifSelected = CurrentStatus;
      Vue.set(this.BaseArr[indexP], index, Obj);
    },
    countChange(type, indexP, index) {
      let currentCount = this.BaseArr[indexP][index].count;
      let Obj = this.BaseArr[indexP][index];
      if (type == "subtract") {
        if (currentCount > 1) {
          currentCount--;
        }
      } else if (type == "add") {
        if (currentCount < 99) {
          currentCount++;
        }
      }
      Obj.count = currentCount;
      Vue.set(this.BaseArr[indexP], index, Obj);
    }
  }
};
</script>

<style>
/* ******* 新购买栏 */

.ShoppingTrolley .flex_purchase .van-submit-bar {
  bottom: 0.32rem;
  left: 5%;
  width: 90%;
  overflow: hidden;
  border: 1px solid #55eba2;
  border-radius: 50px;
  background-color: #0e1528;
  /* box-shadow: 0 0.02rem 0.4rem 0 rgba(129, 216, 206, 0.2); */
}
.ShoppingTrolley .flex_purchase .van-submit-bar__bar {
  padding: 0;
  font-size: 0.32rem;
}
.ShoppingTrolley .flex_purchase .van-submit-bar__price {
  color: #ff4800;
  font-size: 0.32rem;
}
.ShoppingTrolley .flex_purchase .van-submit-bar__button {
  width: 28%;
  height: 100%;
  font-size: 0.32rem;
  background: #55eba2;
  border-radius: 0;
}
.ShoppingTrolley .van-submit-bar__text,
.ShoppingTrolley .van-checkbox__label {
  color: #fff;
}
/* **全选 */
.ShoppingTrolley .flex_purchase .van-checkbox {
  margin-left: 0.44rem;
}
</style>

<style scoped>
.ShoppingTrolley {
  padding: 0 0.32rem 1.1rem;
  /* padding: 0 0.35rem 0 0.32rem; */
  /* overflow-x: hidden;
  overflow-y: hidden; */
}
.ShoppingTrolley .ST_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #858b9c;
  line-height: 0.45rem;
}
.ShoppingTrolley .content_bg {
  width: 6.86rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.04rem 0.2rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
  /* border: 0.01rem solid rgba(233, 232, 232, 1); */
  overflow-x: hidden;
  overflow-y: hidden;
}
.ShoppingTrolley .c_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
  padding-left: 0.21rem;
  padding-bottom: 0.21rem;
  border-bottom: 1px solid #4a5677;
}

.ShoppingTrolley .pc_right {
  /* height: 0.5rem; */
  font-size: 0;
}

.ShoppingTrolley .p_count {
  height: 0.32rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  line-height: 0.45rem;
  /* margin: 0 0.33rem; */
  margin: 0 0.105rem;
  width: 0.5rem;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  line-height: 0.32rem;
  margin-left: 0.4rem;
}

.ShoppingTrolley .subtract_icon_p {
  display: inline-block;
  vertical-align: top;
  margin-left: -1rem;
}
.ShoppingTrolley .add_icon_p {
  display: inline-block;
  vertical-align: top;
  margin-left: 0.7rem;
}
.ShoppingTrolley .subtract_icon {
  width: 0.32rem;
  height: 0.32rem;
}
.ShoppingTrolley .add_icon {
  width: 0.32rem;
  height: 0.32rem;
}

.ShoppingTrolley .subtract {
  width: 0.32rem;
  height: 0.32rem;
  border: 0.02rem solid rgba(197, 202, 213, 1);
  margin-top: 0.05rem;
}
.ShoppingTrolley .add {
  width: 0.32rem;
  height: 0.32rem;
  background: #55eba2;
  border: 0.02rem solid #55eba2;
  margin-top: 0.05rem;
}

.ShoppingTrolley .countRadius {
  -webkit-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
}
.ShoppingTrolley .countFont {
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
.ShoppingTrolley .countFont2 {
  color: rgba(255, 255, 255, 1);
  /* margin-left: 0.03rem;
  margin-top: -0.1rem; */
  margin-left: 10%;
  margin-top: -32%;
}

.ShoppingTrolley .PerRow {
  width: 6.84rem;
  height: 1.2rem;
  padding: 0.3rem 0 0.29rem 0;
}

.ShoppingTrolley .PerRowCommon {
  position: relative;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.ShoppingTrolley .PerRowCommon[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
.ShoppingTrolley .PerRowCommon[data-type="1"] {
  transform: translate3d(-1.8rem, 0, 0);
}
.ShoppingTrolley .PerRowCommon:after {
  content: " ";
  position: absolute;
  left: 0.2rem;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #4a5677;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.ShoppingTrolley .PerRowCommon:last-child::after {
  border: none;
}
.ShoppingTrolley .st_choose {
  width: 0.32rem;
  height: 0.4rem;
  padding: 0.4rem 0.24rem;
}
.ShoppingTrolley .img_choose {
  height: 0.32rem;
  width: 0.32rem;
  vertical-align: top;
}
.ShoppingTrolley .st_pic {
  height: 100%;
  margin-right: 0.2rem;
}

.ShoppingTrolley .st_img_p {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.06rem;
  border: 0.01rem solid rgba(223, 223, 223, 1);
  padding: 0.01rem;
}
.ShoppingTrolley .st_img {
  height: 1.18rem;
  width: 1.18rem;
}
.ShoppingTrolley .st_content {
  /* height: 1.8rem; */
}
.ShoppingTrolley .st_name {
  height: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.32rem;
}
.ShoppingTrolley .st_specification {
  height: 0.24rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.24rem;
  margin-top: 0.18rem;
}
.ShoppingTrolley .st_bottom {
  height: 0.39rem;
  margin-top: 0.07rem;
}

.ShoppingTrolley .st_price {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 85, 0, 1);
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: top;
  margin-right: 0.12rem;
  margin-top: 0.11rem;
  width: 1.5rem;
}
.ShoppingTrolley .st_originalPrice {
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.2rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.19rem;
  text-decoration: line-through;
  width: 1.3rem;
}
.ShoppingTrolley .st_count {
  display: inline-block;
  vertical-align: top;
  margin-top: -0.05rem;
  margin-left: 0.1rem;
}

.ShoppingTrolley .deleteAssign {
  width: 1.8rem;
  height: 1.8rem;
  font-size: 17px;
  color: #fff;
  text-align: center;
  line-height: 1.8rem;
  position: absolute;
  top: 0;
  right: -1.81rem;
  background: rgba(255, 85, 0, 1);
}
</style>

