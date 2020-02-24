<template>
  <div class="Test">
    <vue-headful title="测试页面"></vue-headful>
    <!-- 测试 -->
    <!-- <div class="contact_information_img">
      <com-mymap class="mapSm"></com-mymap>
    </div>-->
    <!-- <div>
      <com-deletetest :list="list"></com-deletetest>
      <com-deletetest :list="list2"></com-deletetest>
    </div>-->
    <div class="test_router">
      <h3>主要路由：</h3>
      <p @click="router_to('/login')">登录</p>
      <p @click="router_to('/identity')">身份</p>
      <br />
      <p @click="router_to('/casesoftong')">病例通</p>
      <br />

      <p @click="router_to('/hospitaloftong')">院外通</p>
      <br />

      <p @click="router_to('/answeroftong')">答题通</p>
      <!-- <p @click="router_to('/resultsquery')">答题通-在线考试-考后查询</p> -->
      <!-- <p @click="router_to('/academicmilestone')">答题通-学业里程碑</p> -->
      <br />

      <p @click="router_to('/onlinemetting')">知会通-在线会议</p>
      <p @click="router_to('/videolibrary')">知会通-视频库</p>
      <br />

      <p @click="router_to('/followupoftong')">随访通 (新增)</p>
      <!-- 未知 -->
      <p @click="router_to('/healthselftest')">随访通-患者评测（健康自测）</p>
      <!-- 患者资料 -->
      <!-- <p @click="router_to('/editpatientinfo')">（医生编辑患者信息页面）- 编辑患者信息 (新增)</p> -->
      <!-- <p @click="router_to('/patientrecords')">（医生查看） - 患者档案 (新增)</p> -->
      <!-- <p @click="router_to('/healthportrait')">随访通-用户画像（健康画像）</p> -->
      <!-- 随访计划 -->
      <!-- <p @click="router_to('/recordupload')">随访通-随访记录上传</p> -->
      <!-- <p @click="router_to('/followuplist')">随访通-随访列表</p> -->
      <!-- <p @click="router_to('/recordlist')">随访通-随访列表（随访记录详情/随访通-复诊周期/随访通-复购周期）</p> -->

      <br />
      <div>----------------------------------------------------------</div>
      <h3>以下是所有页面路由：（注：部分页面必须由指定页面进入，否则页面显示数据异常）</h3>
      <span class="specFont">橘色标记的尽量从对应跳转页跳转</span>
      <p @click="router_to('/login')">登录</p>
      <p @click="router_to('/identity')">身份</p>
      <p @click="router_to('/doctorbaseinfo')">基本信息-医生</p>
      <p @click="router_to('/doctorpersoncenter')">
        个人中心-医生
        <span class="specFont">(▲需要提前到“基本信息-医生”注册)</span>
      </p>
      <p @click="router_to('/sweepandinvite')">扫码邀请</p>
      <p @click="router_to('/personaldata')">个人资料（医生）</p>
      <p @click="router_to('/personaldataedit')">个人资料-编辑（医生）</p>
      <p @click="router_to('/certification')">实名认证</p>
      <p @click="router_to('/pointmanagement')">积分管理</p>
      <p @click="router_to('/cardticketmanagement')">卡券管理</p>
      <p @click="router_to('/myPatient')">我的患者</p>
      <p @click="router_to('/patientInfo')">患者信息</p>
      <!-- <p @click="router_to('/editpatientinfo')">（医生编辑患者信息页面）- 编辑患者信息</p> -->
      <!-- <p @click="router_to('/patientrecords')">（医生查看） - 患者档案</p> -->
      <div>&</div>
      <p @click="router_to('/patientbaseInfo')">基本信息-患者</p>
      <p @click="router_to('/patientpersoncenter')">
        个人中心-患者
        <span class="specFont">(▲需要提前到“基本信息-患者”注册)</span>
      </p>
      <p @click="router_to('/personaldatapatient')">个人资料-患者</p>
      <p @click="router_to('/personaldatapatientEdit')">个人资料-患者-地址修改</p>
      <br />

      <p @click="router_to('/casesoftong')">病例通</p>
      <p @click="router_to('/sicknesshelper')">病例通-疾病助手</p>
      <p @click="router_to('/detailsofdisease')">病例通-疾病助手-疾病详情</p>
      <br />
      <p @click="router_to('/newdrugstopromote')">病例通-新药助手-新药推广 (新增)</p>
      <p @click="router_to('/dpcommunication')">医患沟通 (新增)</p>

      <br />
      <p @click="router_to('/sicknesscollect')">病例通-病例采集</p>
      <p @click="router_to('/sicknessdetail')">
        病例通-疾病助手-疾病详情-典型病例
        <span class="specFont">(▲需要从“病例通-病例采集”点击进入)</span>
      </p>
      <p @click="router_to('/casesofupload')">病例通-病例采集-病例上传</p>
      <br />

      <p @click="router_to('/hospitaloftong')">院外通</p>
      <p @click="router_to('/searchdrug')">院外通-搜索药品</p>
      <p @click="router_to('/map')">院外通-地图</p>
      <p @click="router_to('/pharmacydetail')">院外通-药房详情</p>
      <p @click="router_to('/drugsfordetails_out')">院外通-药房详情-药品详情</p>
      <!-- <p @click="router_to('/shoppingtrolley')">院外通-购物车</p> -->
      <!-- <p @click="router_to('/settlementpage')">院外通-结算页面（+用药信息-提示）</p> -->
      <!-- <p @click="router_to('/medicationinfo')">院外通-用药信息</p> -->
      <br />
      <p @click="router_to('/answeroftong')">答题通</p>
      <p @click="router_to('/questionnaireinquiry')">答题通-问卷调研</p>
      <p @click="router_to('/questionnaireinquiry_answer')">答题通-问卷调研-答题</p>
      <p @click="router_to('/knowledgebase')">答题通-知识库</p>
      <p @click="router_to('/onlineexamination')">答题通-在线考试</p>
      <p @click="router_to('/timedexamination')">答题通-在线考试-限时考试</p>
      <p @click="router_to('/openexamination')">答题通-在线考试-开放考试</p>
      <p @click="router_to('/resultsquery')">答题通-在线考试-考后查询</p>
      <p @click="router_to('/academicmilestone')">答题通-学业里程碑</p>
      <br />

      <p @click="router_to('/onlinemetting')">知会通-在线会议</p>
      <p @click="router_to('/videolibrary')">知会通-视频库</p>
      <br />
      <br />
      <p @click="router_to('/followupoftong')">随访通 (新增)</p>
      <p @click="router_to('/healthselftest')">随访通-患者评测（健康自测）</p>
      <p @click="router_to('/editpatientinfo')">（医生编辑患者信息页面）- 编辑患者信息 (新增)</p>
      <p @click="router_to('/patientrecords')">（医生查看） - 患者档案 (新增)</p>
      <p @click="router_to('/healthportrait')">随访通-用户画像（健康画像）</p>
      <p @click="router_to('/recordupload')">随访通-随访记录上传</p>
      <p @click="router_to('/followuplist')">随访通-随访列表</p>
      <p @click="router_to('/recordlist')">随访通-随访列表（随访记录详情/随访通-复诊周期/随访通-复购周期）</p>
      <p @click="router_to('/patientlist')">患者列表</p>
      <br />

      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
import mymap from "@/views/components/mymap";
import DeleteTest from "@/views/components/DeleteTest";

export default {
  name: "Test",
  components: {
    "com-mymap": mymap,
    "com-deletetest": DeleteTest
  },
  data() {
    return {
      list2: [
        {
          id: 111,
          imgUrl: require("@/assets/pic/selected.png"),
          title: "ttt",
          tips: "xxxxxxx",
          time: "2020-02-04"
        }
      ],
      list: [
        {
          id: 1,
          imgUrl: require("@/assets/pic/selected.png"),
          title: "ttt",
          tips: "xxxxxxx",
          time: "2020-02-04"
        }
        // ,
        // {
        //   id: 2,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // },
        // {
        //   id: 3,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // },
        // {
        //   id: 4,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style scoped>
.Test {
}
.Test .test_router {
  font-size: 0.28rem;
  color: #ffffff;
  margin-left: 0.32rem;
}
.Test .test_router > p {
  text-decoration: underline;
}
.Test .specFont {
  color: orange;
}
</style>

