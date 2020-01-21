<template>
  <div class="ShoppingTrolley">
    <vue-headful title="购物车"></vue-headful>
    <div :style="{height: '0.4rem'}"></div>
    <div class="ST_title">共3件商品</div>
    <div :style="{height: '0.46rem'}"></div>
    <div class="content_bg">
      <div :style="{height: '0.32rem'}"></div>
      <div class="c_title">
        广联医药&nbsp;
        <van-icon size="0.28rem" name="arrow" />
      </div>
      <div :style="{height: '0.21rem'}"></div>
      <template v-for="(item,index) in BaseArr ">
        <div class="PerRow" :key="index + 'st' ">
          <div class="st_choose blockB_floatL">
            <img
              @click="ChangeSelectedStatus(index,false)"
              v-if="item.ifSelected"
              :src="pic.selected"
              alt
            />
            <img
              @click="ChangeSelectedStatus(index,true)"
              v-if="!item.ifSelected"
              :src="pic.unselected"
              alt
            />
          </div>
          <div class="st_img_p blockB_floatL">
            <img class="st_img" :src="item.pic" alt />
          </div>
          <div class="st_content blockB_floatL">
            <div class="st_name">{{item.name}}</div>
            <div class="st_specification">{{item.specification}}</div>
            <div class="st_bottom">
              <div class="st_price">￥&nbsp;{{item.price}}</div>
              <div class="st_originalPrice">￥&nbsp;{{item.originalPrice}}</div>
              <div class="st_count">
                <div class="pc_right blockB_floatL">
                  <div class="subtract countRadius blockB_floatL">
                    <div @click="countChange('subtract',index)" class="countFont blockB_floatL">-</div>
                  </div>
                  <div class="p_count blockB_floatL">{{item.count}}</div>
                  <div class="add countRadius blockB_floatL">
                    <div
                      @click="countChange('add',index)"
                      class="countFont countFont2 blockB_floatL"
                    >+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
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
      pic: {
        selected: require("@/assets/pic/selected.png"),
        unselected: require("@/assets/pic/unselected.png")
      },
      BaseArr: [
        {
          Did: 1,
          name: "金纳多（银杏叶提取物）",
          pic: require("@/assets/pic/drug.jpg"),
          specification: "15g*1支/盒",
          price: 16.98,
          originalPrice: 18.98,
          count: 1,
          ifSelected: true
        },
        {
          Did: 2,
          name: "金纳多（银杏叶提取物）2",
          pic: require("@/assets/pic/drug.jpg"),
          specification: "15g*1支/盒",
          price: 16.9888,
          originalPrice: 18.98888,
          count: 55,
          ifSelected: true
        },
        {
          Did: 3,
          name: "金纳多（银杏叶提取物）2333",
          pic: require("@/assets/pic/drug.jpg"),
          specification: "15g*1支/盒",
          price: 16.9888,
          originalPrice: 18.98888,
          count: 8,
          ifSelected: true
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    ChangeSelectedStatus(index, CurrentStatus) {
      let Obj = this.BaseArr[index];
      Obj.ifSelected = CurrentStatus;
      Vue.set(this.BaseArr, index, Obj);
    },
    countChange(type, index) {
      let currentCount = this.BaseArr[index].count;
      let Obj = this.BaseArr[index];
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
      Vue.set(this.BaseArr, index, Obj);
    }
  }
};
</script>
<style scoped>
.ShoppingTrolley {
  padding: 0 0.32rem;
}
.ShoppingTrolley .ST_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(65, 72, 93, 1);
  line-height: 0.45rem;
}
.ShoppingTrolley .content_bg {
  width: 6.86rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.04rem 0.2rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
  border: 0.01rem solid rgba(233, 232, 232, 1);
}
.ShoppingTrolley .c_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(65, 72, 93, 1);
  line-height: 0.45rem;
  padding-left: 0.21rem;
}

.ShoppingTrolley .pc_right {
  height: 0.5rem;
}

.ShoppingTrolley .p_count {
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

.ShoppingTrolley .subtract {
  width: 0.32rem;
  height: 0.32rem;
  border: 0.02rem solid rgba(197, 202, 213, 1);
  margin-top: 0.05rem;
}
.ShoppingTrolley .add {
  width: 0.32rem;
  height: 0.32rem;
  background: rgba(129, 216, 206, 1);
  border: 0.02rem solid rgba(129, 216, 206, 1);
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
  font-size: 0.38rem;
  color: rgba(197, 202, 213, 1);
  vertical-align: top;
  margin-left: 0.07rem;
  margin-top: -0.11rem;
}
.ShoppingTrolley .countFont2 {
  color: rgba(255, 255, 255, 1);
  margin-left: 0.02rem;
}

.ShoppingTrolley .PerRow {
  width: 6.84rem;
  height: 1.8rem;
}
.ShoppingTrolley .st_choose {
  width: 0.32rem;
  height: 0.32rem;
  padding: 0.74rem 0.24rem;
}
.ShoppingTrolley .st_img_p {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.06rem;
  border: 0.01rem solid rgba(223, 223, 223, 1);
  padding: 0.3rem 0;
}
.ShoppingTrolley .st_img {
  height: 1.2rem;
  width: 1.2rem;
}
.ShoppingTrolley .st_content {
  width: 4.85rem;
  height: 1.8rem;
}
.ShoppingTrolley .st_name {
  height: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(65, 72, 93, 1);
  line-height: 0.32rem;
}
.ShoppingTrolley .st_specification {
  height: 0.24rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.24rem;
}
.ShoppingTrolley .st_bottom{
    height: 0.39rem;
}

</style>

