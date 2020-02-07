<template>
  <div class="HealthSelfTest">
    <vue-headful title="健康自测"></vue-headful>
    <div class="per_uestionnaire">
      <div class="per_uestionnaire_child">
        <template v-for="(item,index) in questtionData ">
          <div :key="index + 'qd' ">
            <div v-if="item.optionType == 'Single' ">
              <p class="questtion">{{item.id}}. {{item.title}}</p>
              <div class="options_settings" style="font-size: 0;">
                <template v-for="(itemC,indexC) in item.options ">
                  <div class="per_input" :key="indexC + 'qds' ">
                    <input type="radio" :name="item.id" :value="indexC" class="m_radio" />
                    <span class="per_input_font">{{itemC}}</span>
                  </div>
                </template>
              </div>
            </div>
            <div v-if="item.optionType == 'Multiple' ">
              <p class="questtion">{{item.id}}. {{item.title}}</p>
              <div class="options_settings" style="font-size: 0;">
                <template v-for="(itemC,indexC) in item.options ">
                  <div class="per_input" :key="indexC + 'qdm' ">
                    <input type="checkbox" :name="item.id" :value="indexC" class="m_checkbox" />
                    <span class="per_input_font">{{itemC}}</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div :style="{height: '0.1rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button
        round
        class="common_middle_btn i_btn common_fontsize i_btn_space"
      >提&nbsp;&nbsp;&nbsp;交</van-button>
      <van-button round class="common_middle_btn2 i_btn common_fontsize">重&nbsp;&nbsp;&nbsp;置</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "HealthSelfTest",
  components: {},
  data() {
    return {
      questtionData: [
        {
          id: 1,
          optionType: "Single",
          title: "职业",
          options: [
            "高级管理者",
            "管理人员",
            "营销人员",
            "传媒业者",
            "司机",
            "IT行业",
            "体力工作者",
            "离退休人员"
          ]
        },
        {
          id: 2,
          optionType: "Multiple",
          title: "既往病史",
          options: [
            "高血压病",
            "脑卒中",
            "冠心病",
            "心肌梗塞",
            "脂肪肝",
            "胆囊疾病",
            "肝炎",
            "糖尿病",
            "肺结核",
            "肺心病",
            "手术外伤",
            "肿瘤",
            "其他"
          ]
        },
        {
          id: 3,
          optionType: "Multiple",
          title: "您的直系亲属中是否患以下疾病",
          options: [
            "未知",
            "肝硬化",
            "脑卒中",
            "结核病 ",
            "糖尿病",
            "恶性肿瘤",
            "高血压病",
            "冠心病",
            "无"
          ]
        },
        {
          id: 4,
          optionType: "Single",
          title: "体检情况",
          options: ["每年一次", "两年一次", "两年以上", "从未体检"]
        },
        {
          id: 5,
          optionType: "Multiple",
          title: "既往体检异常情况",
          options: [
            "空腹血糖高",
            "胆囊结石",
            "胆囊息肉",
            "肾结石 ",
            "子宫肌瘤",
            "高血压",
            "卵巢囊肿",
            "无"
          ]
        },
        {
          id: 6,
          optionType: "Single",
          title: "体检情况",
          options: ["大", "一般", "小"]
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style >
.HealthSelfTest input[type="checkbox"] {
  visibility: hidden;
}
.HealthSelfTest input[type="checkbox"]:checked::after {
  background-image: url(../../assets/picture/checkbox_1_small.png);
  background-repeat: no-repeat;
  /* background-position: -59px -10px; */
  background-position: 0px 0px;
  visibility: visible;
}
.HealthSelfTest input[type="checkbox"]::after {
  content: " ";
  display: block;
  height: 13px;
  width: 13px;
  background-image: url(../../assets/picture/checkbox_2_small.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  visibility: visible;
}

.HealthSelfTest input[type="radio"] {
  visibility: hidden;
}
.HealthSelfTest input[type="radio"]:checked::after {
  background-image: url(../../assets/picture/radio_1_small.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  visibility: visible;
}
.HealthSelfTest input[type="radio"]::after {
  content: " ";
  display: block;
  height: 13px;
  width: 13px;
  background-image: url(../../assets/picture/radio_2_small.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  visibility: visible;
}
</style>
<style scoped>
.HealthSelfTest {
}
.HealthSelfTest .per_uestionnaire_child {
  margin: auto;
  /* background: rgba(251, 251, 251, 1); */
  padding-bottom: 0.28rem;
}

.HealthSelfTest .per_uestionnaire .questtion {
  font-size: 0.32rem;
  color: rgba(100, 101, 105, 1);
  letter-spacing: 0.01rem;
  margin-top: 0.32rem;
  height: 0.32rem;
  line-height: 0.32rem;
  margin-left: 0.32rem;
  font-weight: 600;
}
.HealthSelfTest .per_uestionnaire .options_settings {
  padding-left: 0.5rem;
  width: 6.6rem;
}
.HealthSelfTest .per_uestionnaire .per_input {
  display: inline-block;
  line-height: 0.4rem;
  margin-right: 0.2rem;
}
.HealthSelfTest .per_uestionnaire .per_input_font {
  height: 0.28rem;
  font-size: 0.28rem;
  font-weight: 400;
  color: rgba(100, 101, 105, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  margin-left: 0.1rem;
}

.HealthSelfTest .i_btn {
  width: 2.6rem;
  height: 0.9rem;
  cursor: pointer;
}
.HealthSelfTest .i_btn_space {
  margin-right: 0.68rem;
}
</style>

