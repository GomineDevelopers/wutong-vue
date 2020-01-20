<template>
  <van-row class="van_container">
    <vue-headful title="搜索药品"></vue-headful>
    <van-row class="van_container_body height_auto">
      <van-row class="top_search">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入药店或药品名"
          shape="round"
          @search="onSearch"
          background="#ffffff"
        ></van-search>
      </van-row>
      <!-- 主体内容 -->
      <van-row class="medicine_content">
        <van-row
          class="pharmacy_detail_info"
          v-for="(item, index) in pharmacyList"
          :key="index"
        >
          <van-row class="pharmacy_list_body">
            <van-row class="list_item_top flex flex_align_center">
              <van-row class="flex_1 flex flex_align_center">
                <img class="pharmacy_img" :src="item.img" />
                <van-row class="flex flex_direction">
                  <van-row class="pharmacy_name flex">
                    <span class="main_font2">{{ item.pharmacyName }}</span>
                    <span class="pharmacy_time">{{ item.time }}</span>
                  </van-row>
                  <van-row class="pharmacy_tips flex">
                    <span class="hour">24h营业</span>
                    <span class="health_insurance">医保定点</span>
                    <span class="cooperation">合作药店</span>
                  </van-row>
                </van-row>
              </van-row>
              <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />
            </van-row>
            <van-row class="pharmacy_tel flex flex_align_center">
              <img src="../../assets/pic/phone_green.png" />{{ item.tel }}
            </van-row>
            <van-row class="pharmacy_address flex flex_align_center">
              <img src="../../assets/pic/address_green.png" />{{ item.address }}
            </van-row>
          </van-row>
          <!-- 药品列表开始 -->
          <van-row class="flex drug_body">
            <van-row
              v-for="(drugItem, index2) in item.drugList"
              :key="index2 + 'drug'"
              class="drug_list flex flex_direction"
            >
              <van-row
                class="drug_item_img flex flex_align_center flex_justify_content"
              >
                <img :src="drugItem.img" />
              </van-row>
              <van-row class="drug_item_name">{{ drugItem.drugName }}</van-row>
              <van-row class="drug_item_price"
                >¥&nbsp;{{ drugItem.price }}</van-row
              >
            </van-row>
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "SearchDrug",
  components: {},
  data() {
    return {
      searchContent: "",
      pharmacyList: [
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            },
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）",
              price: "18.98"
            }
          ]
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号",
          drugList: [
            {
              img: require("../../assets/pic/drug.jpg"),
              drugName: "金纳多（银杏叶提取物）金纳多（银杏叶提取物）",
              price: "18.98"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    }
  }
};
</script>
<style scoped>
.top_search {
  padding: 0.05rem 0.32rem 0.24rem 0.32rem;
}
.medicine_content {
  padding-bottom: 0.3rem;
  overflow: hidden;
}
.pharmacy_detail_info {
  padding-top: 0.4rem;
  border-bottom: 1px solid #eee;
}
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
.drug_item_name {
  font-size: 0.28rem;
  color: #41485d;
  margin-bottom: 0.12rem;
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
</style>
