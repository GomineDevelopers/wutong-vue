<template>
  <div id="MedicationInfo" class="medication_information">
    <vue-headful title="用药信息"></vue-headful>
    <van-cell-group>
      <van-field class="med_user_cell" label="姓名" value="范真伟" disabled />
      <van-field class="med_user_cell" label="手机号" value="15794299550" disabled />
    </van-cell-group>
    <div class="medic_checkbox">
      <div class="medic_label">本次用药相关已确认病症（可多选）</div>
      <div class="checkbox_list">
        <a
          :class="{'checked': item.isChecked}"
          href="javascript:;"
          v-for="(item, index) in checkboxList"
          :key="index"
          @click="checkSymptom(item, index)"
        >{{item.text}}</a>
      </div>
      <van-field class="textarea_box" type="textarea" placeholder="其他补充" />
    </div>
    <div class="medic_upload">
      <div class="medic_label">上传复诊凭证</div>
      <div class="medic_sub">病例/处方单/检查报告/住院单可任选其一</div>
      <div class="uploader">
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
    <div class="medic_submit">
      <van-button round>完成</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MedicationInfo",
  data() {
    return {
      checkboxList: [
        {
          text: "高血压",
          isChecked: true
        },
        {
          text: "糖尿病",
          isChecked: false
        },
        {
          text: "高血脂",
          isChecked: false
        },
        {
          text: "甲亢",
          isChecked: false
        },
        {
          text: "感染类",
          isChecked: false
        },
        {
          text: "肾炎",
          isChecked: false
        }
      ],
      fileList: []
    };
  },
  methods: {
    // 选择症状
    checkSymptom(item, index) {
      this.checkboxList[index].isChecked = !this.checkboxList[index].isChecked;
    }
  }
};
</script>
<style>
.medication_information .medic_upload .van-uploader__upload,
.medication_information .medic_upload .van-uploader__preview-image {
  width: 2rem;
  height: 2rem;
  background: #f8faff;
}
.medication_information .textarea_box textarea{
  color: #fff;
  min-height: 80px;
}
</style>
<style scoped>
.medication_information {
  padding: 0.32rem;
}
.medication_information .med_user_cell {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.32rem;
  color: #fff;
  background: transparent;
}
.medication_information .van-cell-group{
  background: transparent;
}
.medication_information .medic_checkbox {
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
}
.medication_information .medic_label {
  color: #fff;
  font-size: 0.32rem;
  margin-top: 0.34rem;
  margin-bottom: 0.3rem;
}
.medication_information .checkbox_list a {
  float: left;
  color: #858B9C;
  font-size: 0.28rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 0.12rem 0.3rem;
  border: 1px solid #0E1528;
  background: #0E1528;
  border-radius: 5px;
  overflow: hidden;
}
.medication_information .checkbox_list a.checked {
  color: #55EBA2;
  border-color: #55EBA2;
  position: relative;
}
.medication_information .checkbox_list a.checked::after {
  content: "\F0C8";
  display: inline-block;
  font: normal normal normal 14px/1 "vant-icon";
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: -4px;
  right: -4px;
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.32rem;
  color: #fff;
  font-size: 0.24rem;
  background: #55EBA2;
  border-radius: 50%;
}
.medication_information .textarea_box{
  background: transparent;
  padding-top: 10px;
}

.medication_information .medic_upload .uploader {
  margin-top: 0.4rem;
}
.medication_information .medic_upload .medic_sub {
  color: #c5cad5;
  font-size: 0.28rem;
}
.medication_information .medic_submit {
  text-align: center;
  margin-top: 0.6rem;
}
.medication_information .medic_submit button {
  border: none;
  color: #fff;
  font-size: 0.32rem;
  letter-spacing: 0.2rem;
  background: #55EBA2;
  padding-left: 1.4rem;
  padding-right: 1.1rem;
}
</style>
