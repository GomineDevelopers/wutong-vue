import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 测试 - Test
// 首页 - Home(/)
// 404 - 404
// 资源预览 - ResourcesToPreview (test)

// ● 表示：已做基础路由跳转。
// ▲ 表示：已对现有视图做路由跳转，由于无视图则未做跳转的。
// ○ 表示：无视图。
// △ 表示：跳转疑问。
// ※ 表示：不管的（如UI已删掉情况）。

//● 登录 - Login     （UI改变）- OK
//● 身份 - Identity

//● 基本信息-医生 - DoctorBaseInfo
//● 个人中心-医生 - DoctorPersonCenter
//● 扫码邀请 - SweepAndInvite
//● 个人资料 - PersonalData
//● 个人资料-编辑 - PersonalDataEdit
//● 实名认证 - Certification
//● 积分管理 - PointManagement
//● 卡券管理 - CardTicketManagement
//● 我的患者 - MyPatient
//● 患者信息 - PatientInfo  （UI改变）(前端先修改)- ing => OK


//● 基本信息-患者 - PatientBaseInfo   （UI改变）- ing => OK
//● 个人中心-患者 - PatientPersonCenter
//● 个人资料-患者 - PersonalDataPatient   (新增) -OK(lh)
//● 个人资料-患者-地址修改 - PersonalDataPatientEdit   (新增) -OK(lh)

//▲ 病例通 - CasesOfTong

//● 病例通-疾病助手 - SicknessHelper
//● 病例通-疾病助手-疾病详情 - DetailsOfDisease  1.指南-(新增) -OK 2.药品库-(UI改变) -OK 3.典型病例(新增) -OK
//△ 病例通-疾病助手-疾病详情-典型病例 - SicknessDetail
//※ 病例通-疾病助手-疾病详情-药品详情 - DrugsForDetails   （▲UI删掉了）

// 医患沟通 - DPCommunication  (新增) -OK

//○ 病例通-新药助手 -跳转》 NewDrugsToPromote - 新药推广 (新增)

//△ 病例通-病例采集 - SicknessCollect
//△ 病例通-病例采集-病例上传 - CasesOfUpload


//○ 院外通-联系客服 - 还没有

//△ 院外通 - HospitalOfTong            (新增) - OK
//△ 院外通-搜索药品 - SearchDrug
//△ 院外通-地图 - Map                  (UI改变) - OK
//△ 院外通-药房详情 - PharmacyDetail   (UI改变) - OK
//△ 院外通-药房详情-药品详情 - DrugsForDetails_Out      (UI改变) -OK

//※ 院外通-列表 - PharmacyList     （▲UI删掉了）
//※ 院外通-搜索药店 - SearchDrugstore    （▲UI删掉了）

//● 院外通-购物车 - ShoppingTrolley    （新增）-OK
//● 院外通-结算页面（+用药信息-提示） --订单页 -  SettlementPage  （新增）-OK(lh)   --订单页
//● 院外通-用药信息 - MedicationInfo   （新增）-OK(lh)

//● 答题通 - AnswerOfTong

//● 答题通-问卷调研 - QuestionnaireInquiry    （新增）- OK +   (UI改变) - OK => 过期添加弹窗新增已过期选项与时间区间
//● 答题通-问卷调研-答题 - QuestionnaireInquiry_Answer

//● 答题通-知识库 - KnowledgeBase

//● 答题通-在线考试 - OnlineExamination   (UI改变) -OK  =>限时考试+开放考试  合并 => 过期添加弹窗新增
//● 答题通-在线考试-限时考试 - TimedExamination
//● 答题通-在线考试-开放考试 - OpenExamination
//● 答题通-在线考试-考后查询 - ResultsQuery
//△ 答题通-学业里程碑 - AcademicMilestone


//● 知会通 - 在线会议 OnlineMetting
//● 知会通 - 视频库 VideoLibrary


// 随访通 - FollowUpOfTong （新增）
//● 随访通-患者评测（健康自测） HealthSelfTest  --OK
//● 随访通-随访记录上传  RecordUpload  --OK (临时版)
//△ 随访通-用户画像（健康画像） HealthPortrait
//△ 随访通-随访列表 FollowUpList               --OK
//● 随访通-随访列表（随访记录详情/随访通-复诊周期/随访通-复购周期）  RecordList  --OK (临时版)
// （医生编辑患者信息页面）- 编辑患者信息（编辑患者资料） - EditPatientInfo   (新增) -OK
// （医生查看） - 患者档案 -  PatientRecords   (新增) -OK
// 随访通-患者列表  PatientList （新增）

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/Test")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login")
    },
    {
      path: "/identity",
      name: "Identity",
      component: () => import("@/views/Identity")
    },
    { path: "/404", name: "NotFound404", component: () => import("@/views/NotFound404") },
    { path: "*", redirect: "/404" },
    {
      path: "/resourcestopreview",
      name: "ResourcesToPreview",
      component: () => import("@/views/components/ResourcesToPreview")
    },

    // 医生的页面
    {
      path: "/doctorbaseinfo",
      name: "DoctorBaseInfo",
      component: () => import("@/views/Doctor/DoctorBaseInfo"),
    },
    {
      path: "/doctorpersoncenter",
      name: "DoctorPersonCenter",
      component: () => import("@/views/Doctor/DoctorPersonCenter")
    },
    {
      path: "/patientinfo",
      name: "PatientInfo",
      component: () => import("@/views/Doctor/PatientInfo")
    },

    {
      path: "/mypatient",
      name: "MyPatient",
      component: () => import("@/views/Doctor/MyPatient")
    },
    {
      path: "/personaldata",
      name: "PersonalData",
      component: () => import("@/views/Doctor/PersonalData")
    },
    {
      path: "/personaldataedit",
      name: "PersonalDataEdit",
      component: () => import("@/views/Doctor/PersonalDataEdit")
    },

    // 患者的页面

    {
      path: "/personaldatapatient",
      name: "PersonalDataPatient",
      component: () => import("@/views/Patient/PersonalDataPatient")
    },
    {
      path: "/personaldatapatientedit",
      name: "PersonalDataPatientEdit",
      component: () => import("@/views/Patient/PersonalDataPatientEdit")
    },
    {
      path: "/patientBaseinfo",
      name: "PatientBaseInfo",
      component: () => import("@/views/Patient/PatientBaseInfo")
    },
    {
      path: "/patientpersoncenter",
      name: "PatientPersonCenter",
      component: () => import("@/views/Patient/PatientPersonCenter")
    },

    {
      path: "/cardticketmanagement",
      name: "CardTicketManagement",
      component: () => import("@/views/CardTicketManagement")
    },
    {
      path: "/certification",
      name: "Certification",
      component: () => import("@/views/Certification")
    },
    {
      path: "/pointmanagement",
      name: "PointManagement",
      component: () => import("@/views/PointManagement")
    },

    {
      path: "/sweepandinvite",
      name: "SweepAndInvite",
      component: () => import("@/views/SweepAndInvite")
    },
    {
      path: "/casesoftong",
      name: "CasesOfTong",
      component: () => import("@/views/casesoftong/CasesOfTong")
    },
    {
      path: "/sicknesshelper",
      name: "SicknessHelper",
      component: () => import("@/views//casesoftong/SicknessHelper")
    },
    {
      path: "/detailsofdisease",
      name: "DetailsOfDisease",
      component: () => import("@/views//casesoftong/DetailsOfDisease")
    },
    {
      path: "/drugsfordetails",
      name: "DrugsForDetails",
      component: () => import("@/views//casesoftong/DrugsForDetails")
    },
    {
      path: "/dpcommunication",
      name: "DPCommunication",
      component: () => import("@/views//casesoftong/DPCommunication")
    },

    {
      path: "/casesofupload",
      name: "CasesOfUpload",
      component: () => import("@/views//casesoftong/CasesOfUpload")
    },
    {
      path: "/drugsfordetails_out",
      name: "DrugsForDetails_Out",
      component: () => import("@/views//hospitaloftong/DrugsForDetails_Out")
    },
    {
      path: "/shoppingtrolley",
      name: "ShoppingTrolley",
      component: () => import("@/views//hospitaloftong/ShoppingTrolley")
    },
    {
      path: "/medicationinfo",
      name: "MedicationInfo",
      component: () => import("@/views//hospitaloftong/MedicationInfo")
    },
    {
      path: "/sicknessdetail",
      name: "SicknessDetail",
      component: () => import("@/views/casesoftong/SicknessDetail")
    },
    {
      path: "/newdrugstopromote",
      name: "NewDrugsToPromote",
      component: () => import("@/views/casesoftong/NewDrugsToPromote")
    },
    {
      path: "/sicknesscollect",
      name: "SicknessCollect",
      component: () => import("@/views/casesoftong/SicknessCollect")
    },
    {
      path: "/hospitaloftong",
      name: "HospitalOfTong",
      component: () => import("@/views/hospitaloftong/HospitalOfTong")
    },
    {
      path: "/map",
      name: "Map",
      component: () => import("@/views/hospitaloftong/Map")
    },
    {
      path: "/pharmacydetail",
      name: "PharmacyDetail",
      component: () => import("@/views/hospitaloftong/PharmacyDetail")
    },
    {
      path: "/pharmacylist",
      name: "PharmacyList",
      component: () => import("@/views/hospitaloftong/PharmacyList")
    },
    {
      path: "/searchdrugstore",
      name: "SearchDrugstore",
      component: () => import("@/views/hospitaloftong/SearchDrugstore")
    },
    {
      path: "/searchdrug",
      name: "SearchDrug",
      component: () => import("@/views/hospitaloftong/SearchDrug")
    },
    {
      path: "/settlementpage",
      name: "SettlementPage",
      component: () => import("@/views/hospitaloftong/SettlementPage")
    },
    // ******** 答题通
    {
      path: "/answeroftong",
      name: "AnswerOfTong",
      component: () => import("@/views/answeroftong/AnswerOfTong")
    },
    {
      path: "/questionnaireinquiry",
      name: "QuestionnaireInquiry",
      component: () => import("@/views/answeroftong/QuestionnaireInquiry")
    },
    {
      path: "/questionnaireinquiry_answer",
      name: "QuestionnaireInquiry_Answer",
      component: () =>
        import("@/views/answeroftong/QuestionnaireInquiry_Answer")
    },
    {
      path: "/knowledgebase",
      name: "KnowledgeBase",
      component: () => import("@/views/answeroftong/KnowledgeBase")
    },
    {
      path: "/onlineexamination",
      name: "OnlineExamination",
      component: () => import("@/views/answeroftong/OnlineExamination")
    },
    {
      path: "/timedexamination",
      name: "TimedExamination",
      component: () => import("@/views/answeroftong/TimedExamination")
    },
    {
      path: "/openexamination",
      name: "OpenExamination",
      component: () => import("@/views/answeroftong/OpenExamination")
    },
    {
      path: "/resultsquery",
      name: "ResultsQuery",
      component: () => import("@/views/answeroftong/ResultsQuery")
    },
    {
      path: "/academicmilestone",
      name: "AcademicMilestone",
      component: () => import("@/views/answeroftong/AcademicMilestone")
    },

    //知会通
    {
      path: "/onlinemetting",
      name: "OnlineMetting",
      component: () => import("@/views/mettingoftong/OnlineMetting")
    },
    {
      path: "/videolibrary",
      name: "VideoLibrary",
      component: () => import("@/views/mettingoftong/VideoLibrary")
    },
    // 随访通

    {
      path: "/followupoftong",
      name: "FollowUpOfTong",
      component: () => import("@/views/followupoftong/FollowUpOfTong")
    },
    {
      path: "/healthselftest",
      name: "HealthSelfTest",
      component: () => import("@/views/followupoftong/HealthSelfTest")
    },
    {
      path: "/healthportrait",
      name: "HealthPortrait",
      component: () => import("@/views/followupoftong/HealthPortrait")
    },
    {
      path: "/followuplist",
      name: "FollowUpList",
      component: () => import("@/views/followupoftong/FollowUpList")
    },
    {
      path: "/recordupload",
      name: "RecordUpload",
      component: () => import("@/views/followupoftong/RecordUpload")
    },
    {
      path: "/recordlist",
      name: "RecordList",
      component: () => import("@/views/followupoftong/RecordList")
    },
    {
      path: "/editpatientinfo",
      name: "EditPatientInfo",
      component: () => import("@/views/followupoftong/EditPatientInfo")
    },
    {
      path: "/patientrecords",
      name: "PatientRecords",
      component: () => import("@/views/followupoftong/PatientRecords")
    },
    {
      path: "/patientlist",
      name: "PatientList",
      component: () => import("@/views/followupoftong/PatientList")
    },

  ]
});
