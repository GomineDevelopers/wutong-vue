<template>
  <van-row class="van_container">
    <!-- <vue-headful title="地图"></vue-headful> -->
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="search_content flex flex_align_center">
        <van-icon name="location" />
        <van-field
          class="list_input flex flex_align_center"
          v-model="value"
          placeholder="请输入用户名"
        />
        <van-icon name="search" />
      </van-row>
      <van-row class="map_container">
        <van-row class="map_nav flex">
          <span :class="active == 1 ? 'active' : ''" @click="goMap">地图</span>
          <span :class="active == 2 ? 'active' : ''">列表</span>
        </van-row>
        <van-row class="map_content">
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
                <img src="../../assets/pic/address_green.png" />{{
                  item.address
                }}
              </van-row>
            </van-row>
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "PharmacyList",
  components: {},
  data() {
    return {
      searchContent: "",
      active: "2",
      value: "东城区万花街722号",
      pharmacyList: [
        {
          img: require("../../assets/pic/pharmacylist.jpg"),
          pharmacyName: "广联医药广联医药广联医药",
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
    },
    goMap() {
      this.$router.replace("/map");
    }
  }
};
</script>
<style>
.van_container_body .list_input {
  height: 100%;
}
.van_container_body .list_input .van-field__body {
  height: 100%;
}
.van_container_body .list_input .van-cell__value--alone {
  height: 100%;
}
.van_container_body .van-cell .van-field__control {
  color: #111a34;
  height: 100%;
}
.van_container_body .list_input.van-cell:not(:last-child)::after {
  border-bottom: 1px solid #fff;
}
</style>
<style scoped>
.map_content {
  padding-left: 0.32rem;
}
.pharmacy_list {
  padding-right: 0.32rem;
  height: 2.8rem;
  border-bottom: 1px solid #eee;
}
.pharmacy_list_body {
  width: 100%;
}
.van_container_body {
  position: relative;
  overflow: hidden;
}
.search_content {
  position: absolute;
  top: 0.05rem;
  left: 0.32rem;
  right: 0.32rem;
  height: 0.88rem;
  padding: 0rem 0.15rem;
}
.search_content .van-icon-location {
  font-size: 0.4rem;
  color: #000000;
  margin-right: 0.05rem;
}
.search_content .van-icon-search {
  font-size: 0.4rem;
  color: #666f83;
}
.map_container {
  height: calc(100% - 0.85rem);
  margin-top: 0.85rem;
  position: relative;
  padding-top: 0.4rem;
}
.map_nav {
  width: 3.2rem;
  height: 0.58rem;
  line-height: 0.58rem;
  background: #fff;
  border-radius: 0.3rem;
  border: 0.02rem solid rgba(129, 216, 206, 1);
  margin: 0rem auto;
  overflow: hidden;
  position: absolute;
  top: 0.43rem;
  left: 50%;
  transform: translateX(-50%);
}
.map_nav span {
  font-size: 0.28rem;
  width: 50%;
  text-align: center;
}
.map_nav span.active {
  color: #fff;
  background: #81d8ce;
}
.map_content {
  height: calc(100% - 1.6rem);
  margin-top: 0.7rem;
  padding-bottom: 0.5rem;
  overflow-y: auto;
}
</style>
