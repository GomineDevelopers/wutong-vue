<template>
  <van-row class="van_container">
    <vue-headful title="药房详情"></vue-headful>
    <van-row class="van_container_body height_auto">
      <van-row class="header_body">
        <van-row class="top_search padding_mudule">
          <van-search
            right-icon="search"
            v-model="searchContent"
            placeholder="请输入"
            shape="round"
            @search="onSearch"
            background="#ffffff"
          ></van-search>
        </van-row>
        <van-row class="header_pharmacy_info flex flex_align_center">
          <img class="pharmacy_img" src="../../assets/pic/pharmacylist.jpg" />
          <van-row class="flex_1">
            <van-row class="main_font2">广联医药</van-row>
            <van-row class="pharmacy_tips flex">
              <span class="hour">24h营业</span>
              <span class="health_insurance">医保定点</span>
              <span class="cooperation">合作药店</span>
              <span class="coupon">可用优惠券</span>
            </van-row>
          </van-row>
        </van-row>
      </van-row>
      <!-- 列表开始 -->
      <van-row class="medicine_content">
        <!-- 主体内容 -->
        <van-row class="height_auto sickness_content flex">
          <van-row class="left_sidebar">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="感冒用药" />
              <van-sidebar-item title="儿童用药" />
              <van-sidebar-item title="清热解毒" />
              <van-sidebar-item title="消化系统" />
              <van-sidebar-item title="妇科用药" />
              <van-sidebar-item title="营养保健" />
            </van-sidebar>
          </van-row>
          <van-row class="right_content flex_1">
            <van-row
              class="sickness_list flex flex_justify_between"
              v-for="(item, index) in sicknessList"
              :key="index"
            >
              <van-row
                class="drug_img flex flex_align_center flex_justify_content"
              >
                <img :src="item.img" />
              </van-row>
              <van-row class="flex flex_direction">
                <span class="drug_name main_font2">{{ item.name }}</span>
                <span class="drug_content main_font3">{{ item.content }}</span>
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
  name: "PharmacyDetail",
  components: {},
  data() {
    return {
      searchContent: "",
      activeKey: "3",
      sicknessList: [
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content:
            "适用症：脑部、周围血液循环障碍,适用症：脑部、周围血液循环障碍,"
        },
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content: "适用症：脑部、周围血液循环障碍"
        },
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content: "适用症：脑部、周围血液循环障碍"
        },
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content: "适用症：脑部、周围血液循环障碍"
        },
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content: "适用症：脑部、周围血液循环障碍"
        },
        {
          img: require("../../assets/pic/drug_img.png"),
          name: "金纳多（银杏叶提取物）",
          content: "适用症：脑部、周围血液循环障碍"
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
  padding-top: 0.05rem;
}
.header_pharmacy_info {
  margin-top: 0.44rem;
  margin-bottom: 0.4rem;
  padding-left: 0.32rem;
}
.pharmacy_tips {
  margin-top: 0.18rem;
}
.pharmacy_img {
  width: 1.02rem;
  height: 1.02rem;
  margin-right: 0.24rem;
  border-radius: 0.1rem;
}
.pharmacy_tips span {
  font-size: 0.18rem;
  width: 1.18rem;
  height: 0.3rem;
  padding: 0.03rem 0.05rem;
  border-radius: 1rem;
  border: 0.01rem solid;
  text-align: center;
  line-height: 0.32rem;
  margin-right: 0.14rem;
}
.pharmacy_tips span.hour {
  color: #f7af27;
  border-color: #f7af27;
}
.pharmacy_tips span.health_insurance {
  color: #26c2e1;
  border-color: #26c2e1;
}
.pharmacy_tips span.cooperation {
  color: #3cd7be;
  border-color: #3cd7be;
}
.pharmacy_tips span.coupon {
  color: #ff6865;
  border-color: #ff6865;
}
.medicine_content {
  height: calc(100% - 2.74rem);
  overflow: hidden;
  box-shadow: 0px -0.04rem 0.2rem 0rem rgba(243, 244, 248, 1);
}
.drug_img {
  width: 1.02rem;
  height: 1.02rem;
  border-radius: 0.1rem;
  border: 0.01rem solid rgba(239, 239, 239, 1);
  margin-right: 0.24rem;
}
.drug_img img {
  width: 0.75rem;
  height: 0.85rem;
}
.right_content {
  padding-left: 0.2rem;
}
.sickness_list {
  padding: 0.4rem 0.4rem 0.4rem 0rem;
  border-bottom: 0.01rem solid #eee;
}
.drug_name {
  margin-bottom: 0.18rem;
}
.drug_content {
  line-height: 0.4rem;
}
</style>
