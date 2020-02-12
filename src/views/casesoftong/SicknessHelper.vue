<template>
  <van-row class="van_container">
    <vue-headful title="疾病助手"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="top_search">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入"
          shape="round"
          @search="onSearch"
          background="#ffffff"
        ></van-search>
      </van-row>
      <!-- 主体内容 -->
      <van-row class="sickness_content flex">
        <van-row class="left_sidebar">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="儿科" />
            <van-sidebar-item title="妇产科" />
            <van-sidebar-item title="内分泌科" />
            <van-sidebar-item title="消化内科" />
            <van-sidebar-item title="神经内科" />
          </van-sidebar>
        </van-row>
        <van-row class="right_content flex_1">
          <van-row
            class="sickness_list flex flex_align_center flex_justify_between"
            @click="router_to('/detailsofdisease')"
            v-for="(item, index) in sicknessList"
            :key="index"
          >
            <van-row class="flex flex_direction">
              <span class="main_font2">{{ item.name }}</span>
              <span class="main_font3">{{ item.content }}</span>
            </van-row>
            <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "SicknessHelper",
  data() {
    return {
      searchContent: "",
      activeKey: 2,
      sicknessList: [],
      sicknessListArr: [
        [
          {
            name: "疳积",
            content:
              "疳积以神萎、面黄肌瘦、毛发焦枯、肚大筋露、纳呆便溏为主要表现的儿科病证。"
          },
          {
            name: "痄腮",
            content:
              "痄腮（zhàsāi），类似于中医所说的“大头瘟”，是流行性腮腺炎。"
          },
          {
            name: "慢性肺炎",
            content:
              "肺炎，是指肺部的肺泡出现发炎的症状，病程超过3个月者为慢性肺炎。"
          },
          {
            name: "儿童口吃",
            content:
              "口吃是语音节律障碍的一种，是由于不同原因引起字音重复或语流中断的语音节律障碍，当言语表达涩阴时常伴躯体抽搐样动作和面部异常的表情。"
          },
          {
            name: "小儿溶血性贫血",
            content:
              "溶血性贫血（haemolytic anaemias）是由多种病因引起红细胞寿命的缩短和过早地破坏，且红细胞的破坏超过了骨髓生血功能的代偿能力而发生循环中红细胞数和血红蛋白含量减少的一种贫血。正常红细胞的寿命为110～120天。"
          },
          {
            name: "小儿错畸形",
            content:
              "错颌畸形是指儿童在生长发育过程中，可由于遗传和环境等各种诸多因素的影响。"
          },
          {
            name: "小儿厌食症",
            content:
              "厌食症在小儿时期很常见，主要的症状有呕吐、食欲不振、腹泻、便秘、腹胀、腹痛和便血等。"
          },
          {
            name: "新生儿破伤风",
            content:
              "新生儿破伤风（tetanus of newborn）是由破伤风厌氧芽孢梭菌由脐部侵入引起的一种急性感染性疾病。"
          }
        ],
        [
          {
            name: "急性子宫颈炎",
            content:
              "急性子宫颈炎（acute cervieitis）为病原体感染宫颈引起的急性炎症。"
          },
          {
            name: "难产",
            content:
              "难产（dystocia）是指由于各种原因而使分娩的开口期（第一阶段）尤其是胎儿排出期（第二阶段）时间明显延长，如不进行人工助产则母体难于或者不能排出胎儿的产科疾病。"
          },
          {
            name: "更年期综合征",
            content:
              "更年期综合征（climacteric syndrome）系指由于更年期精神心理、神经内分泌和代谢变化，所引起的各器官系统的症状和体片综合症候群。"
          },
          {
            name: "月经不调",
            content:
              "月经失调也称月经不调妇科常见病 。表现为月经周期或出血量的异常，或是月经前、经期时的腹痛及全身症状。"
          },
          {
            name: "盆腔脓肿",
            content:
              "盆腔脓肿多由急性盆腔结缔组织炎未得到及时的治疗，化脓形成盆腔脓肿，这种脓肿可局限于子宫的一侧或双侧，脓液流入于盆腔深部。"
          },
          {
            name: "妊高征",
            content:
              "妊高症，即妊娠高血压综合症，也是以往所说的妊娠中毒症、先兆子痫等，是孕妇特有的病症。"
          },
          {
            name: "产后伤食",
            content:
              "产后因饮食不当，而致纳呆，脘腹胀满，甚则嗳腐泛酸，恶心呕吐等证，称为“产后伤食”。"
          },
          {
            name: "不孕症",
            content:
              "不孕症(infertility)是指凡婚后夫妇有正常的性生活、未避孕、同居2年而未受孕的一种病症。"
          }
        ],
        [
          {
            name: "高血脂",
            content:
              "由于脂肪代谢或运转异常使血浆一种或多种脂质高于正常称为高脂血症。"
          },
          {
            name: "糖尿病",
            content:
              "糖尿病是由遗传和环境因素相互作用而引起的常见病，临床以高血糖为主要标志，常见症状有多饮、多尿、多食以及消瘦等。"
          },
          {
            name: "甲亢性心脏病",
            content:
              "甲状腺功能亢进性心脏病是指在甲状腺功能亢进症时，甲状腺素对心脏的直接或间接作用所致的心脏扩大、心功能不全、心房纤颤、心绞痛甚至心肌梗死、病态窦房结综合征和心肌病等一系列心血管症状和体征的一种内分泌代谢紊乱性心脏病。"
          },
          {
            name: "结节性甲状腺肿",
            content:
              "结节性甲状腺肿又称腺瘤样甲状腺肿，实际上是指地方性甲状腺肿和散发性甲状腺肿晚期所形成的多发结节。"
          },
          {
            name: "碘源性甲亢",
            content:
              "碘致甲状腺功能亢进(iodine-induced hyperthyroidism，IIH)是指与摄碘量增加有关的甲亢，简称碘甲亢。"
          },
          {
            name: "巨人症",
            content:
              "系腺垂体分泌生长激素（GH）过多所致。青少年因骨骺未闭形成巨人症；青春期后骨骺已融合则形成肢端肥大症；少数青春期起病至成年后继续发展形成肢端肥大性巨人症。"
          },
          {
            name: "肥胖症",
            content: "肥胖症(adiposity)是一组常见的、古老的代谢症群。"
          },
          {
            name: "骨质疏松症",
            content:
              "骨质疏松症（osteoporosis）是一种系统性骨病，其特征是骨量下降和骨的微细结构破坏。"
          }
        ],
        [
          {
            name: "第五日综合征",
            content:
              "第五日综合征（Fifth Day Syndrome）又名小儿阑尾切除术后第五日综合征。"
          },
          {
            name: "肝囊肿",
            content:
              "肝囊肿是一种较常见的肝脏良性疾病，可分为寄生虫性、非寄生虫性和先天遗传性。"
          },
          {
            name: "酒精性肝病",
            content:
              "酒精性肝病是长期酗酒所致酒精中毒性肝脏疾病，包括脂肪肝、酒精性肝类和酒精性肝硬化。"
          },
          {
            name: "甲醇中毒",
            content:
              "甲醇（methyl alcohol）在工业上作为甲醛、塑料、胶片等的生产原料，并用于防冻剂及溶剂等。"
          },
          {
            name: "胃良性肿瘤",
            content:
              "胃良性肿瘤约占胃肿瘤的3%。根据其来源分为两类，一类源于胃壁粘膜上皮组织的腺瘤或息肉样腺瘤"
          },
          {
            name: "儿童腹痛",
            content:
              "腹痛是小儿时期最常见的症状之一。引起腹痛的原因很多，几乎涉及各科疾病。"
          },
          {
            name: "胃、十二指肠溃疡出血",
            content: "胃、十二指肠溃疡合并出血是上消化道出血的常见原因之一。"
          },
          {
            name: "胰胆汁综合征",
            content:
              "胰胆汁综合征（Pancreas Bile Syndrome）亦称胰腺恶性病变综合征、胰头癌梗阻性黄疸综合征。"
          }
        ],
        [
          {
            name: "痿病",
            content:
              "痿病系指外感或内伤，使精血受损，肌肉筋脉失养以致肢体弛缓、软弱无力，甚至日久不用，引起肌肉萎缩或瘫痪的一种病证。"
          },
          {
            name: "腓骨肌萎缩症",
            content:
              "腓骨肌萎缩症（Charcot-Marie-Tooth，CMT）亦称为遗传性运动感觉神经病（HMSN），是一组最常见的家族性周围神经病，约占全部遗传性神经病的90%。"
          },
          {
            name: "呃逆症",
            content:
              "呃逆症（Hiccup）是膈肌和肋间肌等辅助呼吸肌的阵挛性不随意挛缩，伴吸气期门突然闭锁，空气迅速流入气管内，发出特异性声音。"
          }
        ]
      ]
    };
  },
  mounted() {
    let vm = this;
    this.sicknessList = this.sicknessListArr[this.activeKey];
  },
  methods: {
    onSearch(event) {
      console.log(event);
    },
    onChange(e) {
      console.log(e);
      this.activeKey = e;
      this.sicknessList = this.sicknessListArr[e];
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style scoped>
.van_container_body {
  overflow: hidden;
}
.top_search {
  padding: 0.44rem 0.32rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  z-index: 99;
}
.sickness_content {
  margin-top: 1.68rem;
  height: calc(100% - 1.68rem);
  overflow: hidden;
  /* box-shadow: 0px -0.04rem 0.2rem 0rem rgba(243, 244, 248, 1); */
}
.left_sidebar {
  height: 100%;
}
.right_content {
  overflow-y: auto;
  padding: 0.31rem 0.32rem 0rem 0.32rem;
}
.sickness_list {
  padding-bottom: 0.32rem;
  margin-bottom: 0.32rem;
  border-bottom: 1px solid #4A5677;
}
.sickness_list .flex {
  width: 4rem;
  overflow: hidden;
}
.right_content span:nth-child(1) {
  white-space: nowrap;
  margin-bottom: 0.2rem;
}
.right_content span:nth-child(2) {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
