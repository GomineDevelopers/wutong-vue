<template>
  <div class="HospitalOfTong">
    <vue-headful title="院外通"></vue-headful>
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入药品名"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{height: '0.40rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "HospitalOfTong",
  components: {},
  data() {
    return {
      searchContent: "",
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    onSearch(event) {
      console.log(event);
    },
    router_to(str, p_id) {
      let vm = this;
      // 待添加query 对应 pid
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ****** 输入框 */

.HospitalOfTong .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
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
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 0.02rem solid #81d8ce;
}
.HospitalOfTong .van-search__content {
  background: rgba(255, 255, 255, 1);
}

</style>
<style scoped>
.HospitalOfTong {
}

</style>
