<template>
  <van-row class="van_container">
    <vue-headful title="疾病详情"></vue-headful>
    <van-row class="van_container_body height_auto padding_mudule">
      <van-row class="sickness_title">{{detailContentList.intro.title}}</van-row>
      <van-row class="sickness_department">{{detailContentList.intro.department}}</van-row>
      <van-row class="doctor_info flex flex_align_center">
        <img src="../../assets/pic/avatar2.png" />
        <span class="main_font2">{{detailContentList.intro.name}}</span>
        <span class="main_font3">{{detailContentList.intro.duty}}</span>
      </van-row>
      <van-row class="issue_date">发布时间：{{detailContentList.intro.date}}</van-row>
      <van-row class="detail_content">
        <van-row
          class="detail_content_list"
          v-for="(item, index) in detailContentList.content"
          :key="index"
        >
          <van-row class="detail_content_title main_font2">
            {{
            item.title
            }}
          </van-row>
          <van-row class="detail_content_text">{{ item.content }}</van-row>
          <van-row v-if="item.img.length != 0">
            <img :src="imgItem" v-for="(imgItem, index) in item.img" :key="index + 'img'" />
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
      detailContentListArr: [
        {
          id: 1,
          intro: {
            title: "高血压伴晕厥：嗜铬细胞瘤“作祟”",
            department: "内分泌科",
            name: "张豆豆",
            duty: "副主任医师",
            date: "2019-12-02 18:35"
          },
          content: [
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
        },
        {
          id: 2,
          intro: {
            title: "糖尿病：高血糖为特征的代谢性疾病",
            department: "内分泌科",
            name: "李玉",
            duty: "主任医师",
            date: "2019-12-02 18:35"
          },
          content: [
            {
              title: "病史",
              content:
                "患者男，62岁，1型或2型糖尿病均存在明显的遗传异质性。糖尿病存在家族发病倾向，1/4～1/2患者有糖尿病家族史。临床上至少有60种以上的遗传综合征可伴有糖尿病。1型糖尿病有多个DNA位点参与发病，其中以HLA抗原基因中DQ位点多态性关系最为密切。在2型糖尿病已发现多种明确的基因突变，如胰岛素基因、胰岛素受体基因、葡萄糖激酶基因、线粒体基因等。进食过多，体力活动减少导致的肥胖是2型糖尿病最主要的环境因素，使具有2型糖尿病遗传易感性的个体容易发病。1型糖尿病患者存在免疫系统异常，在某些病毒如柯萨奇病毒，风疹病毒，腮腺病毒等感染后导致自身免疫反应，破坏胰岛素β细胞。",
              img: []
            },
            {
              title: "查体",
              content:
                "1．多饮、多尿、多食和消瘦:严重高血糖时出现典型的“三多一少”症状，多见于1型糖尿病。发生酮症或酮症酸中毒时“三多一少”症状更为明显。2．疲乏无力，肥胖:多见于2型糖尿病。2型糖尿病发病前常有肥胖，若得不到及时诊断，体重会逐渐下降。",
              img: []
            },
            {
              title: "检查",
              content:
                "1．血糖:是诊断糖尿病的惟一标准。有明显“三多一少”症状者，只要一次异常血糖值即可诊断。无症状者诊断糖尿病需要两次异常血糖值。可疑者需做75g葡萄糖耐量试验。2．尿糖:常为阳性。血糖浓度超过肾糖阈（160～180毫克/分升）时尿糖阳性。肾糖阈增高时即使血糖达到糖尿病诊断可呈阴性。因此，尿糖测定不作为诊断标准。3．尿酮体:酮症或酮症酸中毒时尿酮体阳性。4．糖基化血红蛋白（HbA1c）:是葡萄糖与血红蛋白非酶促反应结合的产物，反应不可逆，HbA1c水平稳定，可反映取血前2个月的平均血糖水平。是判断血糖控制状态最有价值的指标。5．糖化血清蛋白:是血糖与血清白蛋白非酶促反应结合的产物，反映取血前1～3周的平均血糖水平。6．血清胰岛素和C肽水平:反映胰岛β细胞的储备功能。2型糖尿病早期或肥胖型血清胰岛素正常或增高，随着病情的发展，胰岛功能逐渐减退，胰岛素分泌能力下降。7．血脂:糖尿病患者常见血脂异常，在血糖控制不良时尤为明显。表现为甘油三酯、总胆固醇、低密度脂蛋白胆固醇水平升高。高密度脂蛋白胆固醇水平降低。8．免疫指标:胰岛细胞抗体（ICA），胰岛素自身抗体（IAA）和谷氨酸脱羧酶（GAD）抗体是1型糖尿病体液免疫异常的三项重要指标，其中以GAD抗体阳性率高，持续时间长，对1型糖尿病的诊断价值大。在1型糖尿病的一级亲属中也有一定的阳性率，有预测1型糖尿病的意义。9．尿白蛋白排泄量，放免或酶联方法:可灵敏地检出尿白蛋白排出量，早期糖尿病肾病尿白蛋白轻度升高。",
              img: [
                require("../../assets/pic/sicknessdetail1.png"),
                require("../../assets/pic/sicknessdetail1.png")
              ]
            },
            {
              title: "诊断",
              content:
                "糖尿病的诊断一般不难，空腹血糖大于或等于7.0毫摩尔/升，和/或餐后两小时血糖大于或等于11.1毫摩尔/升即可确诊。诊断糖尿病后要进行分型：1．1型糖尿病:发病年龄轻，大多<30岁，起病突然，多饮多尿多食消瘦症状明显，血糖水平高，不少患者以酮症酸中毒为首发症状，血清胰岛素和C肽水平低下，ICA、IAA或GAD抗体可呈阳性。单用口服药无效，需用胰岛素治疗。2．2型糖尿病:常见于中老年人，肥胖者发病率高，常可伴有高血压，血脂异常、动脉硬化等疾病。起病隐袭，早期无任何症状，或仅有轻度乏力、口渴，血糖增高不明显者需做糖耐量试验才能确诊。血清胰岛素水平早期正常或增高，晚期低下。",
              img: []
            }
          ]
        },
        {
          id: 3,
          intro: {
            title: "心脏病:比较常见的循环系统疾病",
            department: "内分泌科",
            name: "吴安",
            duty: "主任医师",
            date: "2019-12-02 18:35"
          },
          content: [
            {
              title: "病史",
              content:
                "患者男，62岁，心脏在胎儿期中发育异常所致，病变可累及心脏各组织。出生后心脏受到外来或机体内在因素作用而致病。如：冠状动脉粥样硬化性心脏病、风湿性心脏病、高血压性心脏病、肺源性心脏病、感染性心脏病、内分泌性心脏病、血液病性心脏病、营养代谢性心脏病等。",
              img: []
            },
            {
              title: "查体",
              content:
                "1.症状：常见症状有：心悸、呼吸困难、发绀、咳嗽、咯血、胸痛、水肿、少尿等。2.体征：常见体征有：心脏增大征、异常心音、心律失常征、脉搏异常等。",
              img: []
            },
            {
              title: "检查",
              content:
                "1.侵入性检查：主要有心导管检查和与该检查项结合进行的选择性心血管造影，选择性指示剂（包括温度）稀释曲线测定心排血量，心腔内心电图检查、希氏束电图检查、心内膜和外膜心电标测、心内膜心肌活组织检查以及心脏超声显像、心血管内镜检查等。这些检查给患者带来一些创伤，但可得到比较直接的诊断资料，诊断价值较大。2.非侵入性检查：包括各种类型的心电图检查、超声心动图、超声多普勒血流图检查、实时心肌声学造影、数字减影法心血管造影等。这些检查对患者无创伤性，故较易被接受，但得到的资料较间接，而随着仪器性能和检查技术的不断更新和提高，其诊断价值也在迅速提高。",
              img: [
                require("../../assets/pic/sicknessdetail1.png"),
                require("../../assets/pic/sicknessdetail1.png")
              ]
            },
            {
              title: "诊断",
              content:
                "临床表现：1.症状：常见症状有：心悸、呼吸困难、发绀、咳嗽、咯血、胸痛、水肿、少尿等。2.体征：常见体征有：心脏增大征、异常心音、心律失常征、脉搏异常等。",
              img: []
            }
          ]
        }
      ],
      detailContentList: {
        id: 1,
        intro: {
          title: "",
          department: "",
          name: "",
          duty: "",
          date: ""
        },
        content: [
          {
            title: "病史",
            content: "",
            img: []
          },
          {
            title: "查体",
            content: "",
            img: []
          },
          {
            title: "检查",
            content: "",
            img: [
              require("../../assets/pic/sicknessdetail1.png"),
              require("../../assets/pic/sicknessdetail1.png")
            ]
          },
          {
            title: "诊断",
            content: "",
            img: []
          }
        ]
      }
    };
  },
  mounted() {
    let vm = this;
    let assignId = vm.$route.query.id;
    console.log(assignId);
    for (let i = 0; i < vm.detailContentListArr.length; i++) {
      if (assignId == vm.detailContentListArr[i].id) {
        vm.detailContentList = vm.detailContentListArr[i];
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
.sickness_title {
  font-size: 0.36rem;
  font-weight: 500;
  color: #fff;
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
  border-radius: 0.1rem;
  padding: 0.1rem 0.2rem 0.3rem 0.2rem;
  margin: 0.4rem 0rem;
  background: rgba(255, 255, 255, 0.1)
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
