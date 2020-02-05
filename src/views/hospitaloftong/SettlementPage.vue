<template>
  <div id="SettlementPage" class="settlement_wrap">
    <div class="settlement_cell">
      <van-cell center is-link>
        <template slot="title">
          <span class="settlement_title">范真伟</span>
          <span class="settlement_number">15794299550</span>
        </template>
        <div slot="label" class="settlement_addr" >青海省果洛藏族自治州班玛县银霄大道306号</div>
      </van-cell>
    </div>
    <div class="settlement_cell">
      <van-cell center>
        <template slot="title">
          <span class="settlement_title">用药信息</span>
          <van-icon @click="openMedication" class="settlement_number" name="question-o" />
        </template>
        <van-icon
          class="van-cell__right-icon"
          slot="right-icon"
          name="arrow"
          @click="toMedicationInfo"
        />
        <div slot="label" class="settlement_addr" @click="toMedicationInfo">依据国家规定，此需求单含处方药需填写用药信息</div>
      </van-cell>
    </div>
    <div class="settlement_cell">
      <p class="settlement_title">广联医药</p>
      <div>
        <van-card price="20" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <div slot="title" class="settlement_title product_name">金纳多（银杏叶提取物）</div>
          <div slot="price" class="price_number">
            <span>￥16.98</span>
            <span>&nbsp;&nbsp;x&nbsp;2</span>
          </div>
          <span slot="num" class="price_number">￥33.96</span>
        </van-card>
        <van-card price="20" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <div slot="title" class="settlement_title product_name">金纳多（银杏叶提取物）</div>
          <div slot="price" class="price_number">
            <span>￥16.98</span>
            <span>&nbsp;&nbsp;x&nbsp;2</span>
          </div>
          <span slot="num" class="price_number">￥33.96</span>
        </van-card>
      </div>
      <van-cell class="coupon" is-link title="优惠券" title-class="settlement_title" value-class="" value="暂无优惠券可用"/>
    </div>
    <div class="settlement_submit">
        <van-submit-bar :price="6792" button-text="提交订单" @submit="onSubmit"/>
    </div>
    <!-- 用药信息弹窗 -->
    <van-popup class="medication_info_popup" v-model="showMedication">
        <div class="medication_info_content">
            <div class="settlement_title">处方药购买须知</div>
            <div class="medication_text">
                <p>1.按照国家相关法律法规规定，本次医疗服务,仅向部分复诊与有相关病例内容慢病患者提供。</p>
                <p>2.首诊患者需在实体医院就诊且已有明确诊断，取得病例记录或诊断处方后方可使用平台服务。首诊无诊断结果，无病例将无法使用该服务。</p>
                <p>3.本次您提供填写的信息将会被严格保密，除为您提供诊疗服务使用，不会用作其他目的。</p>
                <p>4.不支持给0- -6岁儿童开具处方药。</p>
            </div>
        </div>
        <div class="close_btn">
            <van-icon name="cross" @click="showMedication = false"/>
        </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "SettlementPage",
  data() {
      return {
          showMedication: false,
      }
  },
  methods: {
    openMedication() {
      this.showMedication = true;
      return false;
    },
    toMedicationInfo() {
      this.$router.push("/medicationinfo")
    },
    onSubmit() {

    }
  },
};
</script>
<style scoped>
.settlement_wrap {
  padding: 0.32rem;
}
.settlement_wrap .van-cell__title {
  overflow: hidden;
}
.settlement_cell {
  margin-bottom: 0.2rem;
  padding: 0.32rem;
  color: #41485d;
  border: 1px solid #f2efef;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
}
.settlement_title {
  margin: 0;
  font-size: 0.32rem;
}
.settlement_number {
  padding-left: 10px;
  color: #858b9c;
  font-size: 0.28rem;
}
.settlement_addr {
  margin-top: 0.12rem;
  color: #858b9c;
  font-size: 0.28rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.settlement_cell .van-card {
  padding: 0.2rem 0;
  background-color: #fff;
  border-bottom: 1px solid #f2efef;
}

.settlement_cell .van-card__thumb {
  width: 1rem;
  height: 1rem;
  border-radius: 6px;
  border: 1px solid rgba(223, 223, 223, 1);
}
.settlement_cell .van-card__content {
  min-height: auto;
}
.settlement_cell .product_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.settlement_cell .price_number {
  color: #858b9c;
  font-size: 0.28rem;
}
.settlement_cell .coupon{
    margin-top: .4rem
}
.settlement_submit .van-submit-bar{
    bottom: 80px;
    left: 5%;
    width: 90%;
    overflow: hidden;
    border: 1px solid #81D8CE;
    border-radius: 50px;
    box-shadow:0px 2px 40px 0px rgba(129,216,206,0.2);
}
.settlement_submit .van-submit-bar__bar{
    padding: 0;
    font-size: 0.32rem;
}
.settlement_submit .van-submit-bar__price{
    color: #FF4800;
    font-size: 0.32rem;
}
.settlement_submit .van-submit-bar__button{
    width: 36%;
    height: 100%;
    font-size: 0.32rem;
    background: #81D8CE;
    border-radius: 0;
}
.medication_info_popup{
    width: 70%;
    max-width: 400px;
    background: transparent;
}
.medication_info_popup .settlement_title{
    text-align: center;
}
.medication_info_popup .medication_text{
    font-size: 0.24rem;
    line-height: .36rem;
}
.medication_info_content{
    padding: 0.3rem;
    background: #fff;
    border-radius: 20px;
}
.medication_info_popup .close_btn{
    text-align: center;
}
.medication_info_popup .close_btn .van-icon{
    color: #fff;
    font-size: 0.4rem;
    padding: 0.15rem;
    background: #81D8CE;
    border-radius: 50%;
    cursor: pointer;
}
</style>

