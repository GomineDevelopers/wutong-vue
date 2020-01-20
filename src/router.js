import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 测试 - Test
// 首页 - Home
// 登录 - Login
// 404 - 404
// 个人中心 - PersonalCenter
// 个人资料 - PersonalData
// 个人资料-编辑 - PersonalDataEdit
// 基本信息-医生 - DoctorBaseInfo
// 基本信息-患者 - PatientBaseInfo
// 个人中心-医生 - DoctorPersonCenter
// 个人中心-患者 - PatientPersonCenter
// 患者信息 - PatientInfo
// 卡券管理 - CardTicketManagement
// 实名认证 - Certification
// 积分管理 - PointManagement
// 身份 - Identity
// 扫码邀请 - SweepAndInvite
// 病例通 - CasesOfTong
// 病例通-疾病助手 - SicknessHelper

// 病例通-疾病助手-疾病详情 - DetailsOfDisease
// 病例通-疾病助手-疾病详情-药品详情 - DrugsForDetails
// 病例通-病例采集-病例上传 - CasesOfUpload
// 病例通-疾病详情 - SicknessDetail
// 病例通-病例采集 - SicknessConllect

// 院外通 - HospitalOfTong
// 院外通-地图 - Map
// 院外通-列表 - PharmacyList
// 院外通-药房详情 - PharmacyDetail
// 院外通-药房详情-药品详情 - DrugsForDetails_Out

// 院外通-搜索药店 - SearchDrugstore
// 院外通-搜索药品 - SearchDrug

// 答题通 - AnswerOfTong
// 答题通-问卷调研 - QuestionnaireInquiry
// 答题通-问卷调研-答题 - QuestionnaireInquiry_Answer
// 答题通-知识库 - KnowledgeBase
// 答题通-在线考试 - OnlineExamination
// 答题通-在线考试-限时考试 - TimedExamination
// 答题通-在线考试-开放考试 - OpenExamination
// 答题通-在线考试-考后查询 - ResultsQuery 
// 答题通-学业里程碑 - AcademicMilestone

// 我的患者 - MyPatient

// 知会通 - 在线会议 OnlineMetting
// 知会通 - 视频库 VideoLibrary

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
    { path: "/404", name: "404", component: () => import("@/views/404") },
    { path: "*", redirect: "/404" },
    {
      path: "/personalcenter",
      name: "PersonalCenter",
      component: () => import("@/views/PersonalCenter")
    },
    {
      path: "/personaldata",
      name: "PersonalData",
      component: () => import("@/views/PersonalData")
    },
    {
      path: "/personaldataedit",
      name: "PersonalDataEdit",
      component: () => import("@/views/PersonalDataEdit")
    },

    {
      path: "/doctorbaseinfo",
      name: "DoctorBaseInfo",
      component: () => import("@/views/Doctor/DoctorBaseInfo"),
      path: "/doctorbaseinfo",
      name: "DoctorBaseInfo",
      component: () => import("@/views/Doctor/DoctorBaseInfo")
    },
    {
      path: "/doctorpersoncenter",
      name: "DoctorPersonCenter",
      component: () => import("@/views/Doctor/DoctorPersonCenter")
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
      path: "/patientinfo",
      name: "PatientInfo",
      component: () => import("@/views/Patient/PatientInfo")
    },
    {
      path: "/mypatient",
      name: "MyPatient",
      component: () => import("@/views/Patient/MyPatient")
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
      path: "/identity",
      name: "Identity",
      component: () => import("@/views/Identity")
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
      path: "/casesofupload",
      name: "CasesOfUpload",
      component: () => import("@/views//casesoftong/CasesOfUpload")
    },
    {
      path: "/drugsfordetails_out",
      name: "DrugsForDetails_Out",
      component: () => import("@/views//outsideoftong/DrugsForDetails_Out")
    },

    {
      path: "/sicknessdetail",
      name: "SicknessDetail",
      component: () => import("@/views/casesoftong/SicknessDetail")
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
    }
  ]
});
