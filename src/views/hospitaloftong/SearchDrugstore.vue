<template>
  <van-row class="van_container">
    <vue-headful title="搜索药店"></vue-headful>
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
          class="pharmacy_list flex flex_align_center"
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
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "SearchDrugstore",
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
          address: "上海市徐汇区汾阳路83号"
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号"
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号"
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号"
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号"
        },
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药",
          time: "00:00 - 24:00",
          status1: 1,
          status2: 2,
          status3: 3,
          tel: "15678727278",
          address: "上海市徐汇区汾阳路83号"
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
</style>
