<template>
  <van-row class="van_container">
    <vue-headful title="疾病详情"></vue-headful>
    <van-row class="van_container_body height_auto padding_mudule">
      <van-row class="sickness_title">高血压伴晕厥：嗜铬细胞瘤“作祟”</van-row>
      <van-row class="sickness_department">内分泌科</van-row>
      <van-row class="doctor_info flex flex_align_center">
        <img src="../../assets/pic/avatar2.png" />
        <span class="main_font2">张豆豆</span>
        <span class="main_font3">副主任医师</span>
      </van-row>
      <van-row class="issue_date">发布时间：2019-12-02 18:35</van-row>
      <van-row class="detail_content">
        <van-row
          class="detail_content_list"
          v-for="(item, index) in detailContentList"
          :key="index"
        >
          <van-row class="detail_content_title main_font2">{{
            item.title
          }}</van-row>
          <van-row class="detail_content_text">{{ item.content }}</van-row>
          <van-row v-if="item.img.length != 0">
            <img
              :src="imgItem"
              v-for="(imgItem, index) in item.img"
              :key="index + 'img'"
            />
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "SicknessDetail",
  data() {
    return {
      detailContentList: [
        {
          title: "病史",
          content:
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。",
          img: []
        },
        {
          title: "查体",
          content:
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。",
          img: []
        },
        {
          title: "检查",
          content:
            "心电图示窦性心律，未见明显异常改变;血常规、大小便常规及血气分析正常;肝肾功能及生化检查:随机血糖8.36mmol/L,血尿素氮(BUN) 5.65mmol/L,肌酐(Cr) 46.9umol/L,丙氨酸氨基转移酶(ALT) 29U/L,天冬氨酸氨基转移酶(AST) 38U/L,肌酸激酶(CK) 33U/L,肌酸激酶同工酶(CK-MB) 25U/L;血电解质:钾4.09mmol/L,钠143.9mmol/L,氯104.3mmol/L;胸部X线片示心肺未见异常。心脏超声心动图示左房饱满,余房室大小内径正常,三尖瓣轻度关闭不全,射血分数60%;头颅CT未见明显异常;肝胆胰脾双肾及肾上腺B超未见异常;反复多次查肝肾功能、电解质正常,血钾3.8~4.6mmol/L,血糖9.2~18.6mmol/L, CK85U/LCK-MB10U/L,心肌肌钙蛋白1 (TnI) 0.03μg/L,脑钠肽(BNP) 78pg/ml;动态心电图示窦性心律，平均心率81次/分，室上性早搏77次/天，ST段水平延长> 0.16s;动态血压监测示平均血压148/83mmHg,最高达224/121mmHg。腹部磁共振成像(MRI)及增强CT示左腹主动脉旁有1个分叶状软组织密度团块影,大小约85pxx90pxx120px,密度不均一，边界尚清,边缘强化明显,肝胆胰脾双肾及肾上腺未见异常(图3、图4)。立位醛固酮(ALD) 161ng/L,卧位ALD139ng/L;皮质醇(PTC, 8~10点) 351.7nmol/L; 去甲肾上腺素(NE) 2579ng/L,肾上腺素(E) 143ng/L。由于NE、E明显升高，而ALD、PTC基本正常,结合影像学检查高度怀疑异位嗜铬细胞瘤可能，建议转泌尿外科进一-步诊治。",
          img: [
            require("../../assets/pic/sicknessdetail1.png"),
            require("../../assets/pic/sicknessdetail1.png")
          ]
        },
        {
          title: "诊断",
          content:
            "高血压伴晕厥入院后予氨氯地平、缬沙坦、二甲双胍等常规降压、降糖治疗。患者于入院当天夜间再次出现晕厥，伴意识丧失，呼之不应，心电监护图示心率170次/分，室性心动过速，考虑尖端扭转型室性心动过速(TdP)(图1),立即予胸外心脏按压，并准备电复律。经胸外心脏按压后，患者意识恢复伴头痛、腹痛、恶心、不适，床旁心电图示室速终止，转为窦性心律,但QT间期明显延长达0.5s以上，且伴有T-U波畸形(图2)。以后多次心电图示T波电交替伴阵发性窦性心动过速,但无病理性Q波形成，符合长QT间期综合征(LQTS)的“3T”改变。",
          img: []
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.sickness_title {
  font-size: 0.36rem;
  font-weight: 500;
  color: #111a34;
  margin: 0.4rem 0rem 0.2rem 0rem;
}
.sickness_department {
  width: 1.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background: rgba(197, 202, 213, 1);
  border-radius: 0.06rem;
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
}
.doctor_info img {
  width: 0.4rem;
  height: 0.4rem;
}
.doctor_info {
  margin: 0.24rem 0rem 0.21rem 0rem;
}
.doctor_info .main_font2 {
  margin: 0rem 0.12rem 0rem 0.26rem;
}
.issue_date {
  color: #666f83;
  font-size: 0.2rem;
}

/* 病史开始 */
.detail_content {
  box-shadow: 0rem 0.04rem 0.2rem 0rem rgba(0, 0, 0, 0.06);
  border: 0.01rem solid #fff;
  border-radius: 0.1rem;
  padding: 0rem 0.2rem 0.3rem 0.2rem;
  margin: 0.4rem 0rem;
}
.detail_content_list {
  margin-top: 0.36rem;
}
.detail_content_text {
  color: #666f83;
  font-size: 0.26rem;
  margin-top: 0.2rem;
  line-height: 0.38rem;
}
.detail_content_list img {
  width: 6.46rem;
  height: 2.6rem;
  margin-top: 0.4rem;
  display: block;
}
</style>
