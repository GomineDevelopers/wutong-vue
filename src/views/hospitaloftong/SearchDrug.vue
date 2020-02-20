<template>
  <van-row class="SearchDrug van_container">
    <vue-headful title="搜索药品"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- <van-row class="top_search">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入药店或药品名"
          shape="round"
          @search="onSearch"
          background="transparent"
        ></van-search>
      </van-row>-->
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
      <!-- 主体内容 -->
      <van-row class="medicine_content">
        <van-row class="pharmacy_detail_info" v-for="(item, index) in pharmacyList" :key="index">
          <van-row class="pharmacy_list_body2 inlineBlock verticalAlignTop">
            <van-row
              @click="router_to('/pharmacydetail')"
              class="list_item_top flex flex_align_center list_item_top2"
            >
              <van-row class="flex_1 flex flex_align_center">
                <van-row class="flex flex_direction">
                  <van-row class="pharmacy_name flex">
                    <span class="main_font3">{{ item.pharmacyName }}</span>
                  </van-row>
                </van-row>
              </van-row>
            </van-row>
            <van-row @click="router_to('/map')" class="pharmacy_address flex flex_align_center">
              <img src="../../assets/pic/address_green.png" />
              {{ item.address }}
            </van-row>
            <van-row class="pharmacy_tel flex flex_align_center">
              <img src="../../assets/pic/phone_green.png" />
              {{ item.tel }}
            </van-row>
          </van-row>
          <!-- <van-row
            class="pharmacy_list_body3 inlineBlock verticalAlignTop FontSize0 textAlignCenter"
            @click="ifShow_c1=true"
          >
            <div>
              <img class="phone_img" src="../../assets/newpic2/phone.png" />
            </div>
            <div class="phone_font">电话咨询</div>
          </van-row> -->

          <!-- 药品列表开始 -->
          <van-row @click="router_to('/pharmacydetail')" class="flex drug_body">
            <van-row
              v-for="(drugItem, index2) in item.drugList"
              :key="index2 + 'drug'"
              class="drug_list flex flex_direction"
            >
              <!-- <van-row class="drug_item_img flex flex_align_center flex_justify_content">
                <img :src="drugItem.img" />
              </van-row>-->
              <van-row class="drug_item_name">·&nbsp;{{ drugItem.drugName }}</van-row>
            </van-row>
          </van-row>

          <van-action-sheet
            v-model="ifShow_c1"
            :actions="phone_name"
            @select="onConfirmPhone($event,1)"
          />
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
import { province_list, city_list } from "@/utils/area.js";

export default {
  name: "SearchDrug",
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
      pharmacyList: [
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "老百姓大药房（塘沽店）",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "022-25877799",
          address: "天津市滨海新区解放路488号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "安达唐 - 达格列净片"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "新华领先大药房（新华大药房店）",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "022-25879683",
          address: "天津市滨海新区新华路908号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "安达唐 - 达格列净片"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "天津国大药房连锁有限公司",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "022-25877799",
          address: "天津市北辰区双江道177号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "安达唐 - 达格列净片"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "天津市同润堂大药房连锁有限公司",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "022-59097295",
          address: "天穆镇柳滩村东建材道68号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "安达唐 - 达格列净片"
            }
          ]
        }
      ],
      ifShow_c1: false,
      phone_name: [{ name: "010-88511305" }, { name: "010-81900939" }],
      value1: "" // 暂无地方显示
    };
  },
  mounted() {
    let vm = this;
    console.log("~~~");
    var ob = document.getElementsByClassName("van-field__right-icon");
    ob[0].onclick = function() {
      console.log("~~sd");
      vm.router_to("/searchdrug");
    };
  },
  methods: {
    onConfirm(value) {
      // console.log("onConfirm");
      // console.log(value);
      this.currentArea = value[1].name;
      this.showArea = false;
    },
    onConfirmPhone(eventText, id) {
      console.log(eventText);
      if (id == 1) {
        this.ifShow_c1 = false;
        this.value1 = eventText.name;
      }
    },
    onSearch(event) {
      console.log(event);
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>

<style>
/* ****** 输入框 */

.SearchDrug .van-search {
  margin-top: 10px;
  padding: 0.1rem 0rem 0rem 0.16rem;
  width: 4.8rem;
}
.SearchDrug .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.SearchDrug .van-field__left-icon .van-icon,
.SearchDrug .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.SearchDrug .van-field__left-icon {
  display: none;
}
.SearchDrug .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.SearchDrug .van-field__body {
  height: 0.4rem;
}
.SearchDrug .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(29, 36, 57, 1);
  border-radius: 0.44rem;
}
.SearchDrug .van-search__content {
  background: transparent;
}
</style>
<style scoped>
.top_search {
  padding: 0.05rem 0.32rem 0.24rem 0.32rem;
}
.medicine_content {
  padding-bottom: 0.3rem;
  overflow: hidden;

  /* new */
  padding: 0 0.32rem;
}
.pharmacy_detail_info {
  padding-top: 0.18rem;
  border-bottom: 1px solid #4a5677;
  padding-bottom: 0.05rem;
}
/* */
.SearchDrug .address {
  width: 2.4rem;
}
.SearchDrug .address .Font_t1 {
  font-size: 0.32rem;
  color: #43da9c;
  margin-top: 0.5rem;
  margin-left: 0.32rem;
}
.SearchDrug .address .Font_t2 {
  font-size: 0.32rem;
  color: #ffffff;
  margin-top: 0.45rem;
  margin-left: 0.2rem;
}
.SearchDrug .address .Font_t3 {
  font-size: 0.32rem;
  color: #cccccc;
  margin-left: 0.1rem;
  margin-top: 0.5rem;
}
/* */

.drug_body {
  width: calc(100% - 0.2rem);
  overflow-x: auto;
}
.drug_list {
  margin-right: 0.16rem;
}
.drug_item_img {
  width: 1.98rem;
  height: 1.6rem;
  box-shadow: 0rem 0.03rem 0.06rem 0rem rgba(134, 129, 129, 0.1);
  border-radius: 0.1rem;
  border: 0.01rem solid rgba(239, 239, 239, 1);
  margin: 0.3rem 0rem 0.2rem 0rem;
}
.drug_item_img img {
  width: 80%;
  height: 1.4rem;
}
.pharmacy_address {
  font-size: 0.28rem;
  color: #73798b;
  margin-top: 0.2rem;
}
.pharmacy_tel {
  font-size: 0.24rem;
  color: #73798b;
  margin-top: 0.12rem;
  margin-bottom: 0.2rem;
}
.drug_item_name {
  font-size: 0.28rem;
  color: #51df9b;
  margin-bottom: 0.32rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.drug_item_price {
  color: #ff4800;
  font-size: 0.28rem;
  margin-bottom: 0.4rem;
}

.SearchDrug .pharmacy_name .main_font3 {
  max-width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 0.32rem;
}
.SearchDrug .pharmacy_list_body2 {
  width: 78%;
}
.SearchDrug .pharmacy_list_body3 {
  width: 21%;
  padding-top: 0.15rem;
}
.SearchDrug .phone_img {
  width: 0.5rem;
  height: 0.5rem;
}
.SearchDrug .phone_font {
  font-size: 0.3rem;
  margin-top: 0.28rem;
  color: #73798b;
}
</style>
