import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页 - Home
// 登录 - Login
// 404 - 404
// 个人中心 - PersonalCenter 
// 个人资料 - PersonalData

// 个人资料-编辑 - PersonalDataEdit

// 基本信息-医生 - DoctorBaseInfo
// 基本信息-患者 - PatientBaseInfo
// 患者信息 - PatientInfo
// 卡券管理 - CardTicketManagement
// 实名认证 - Certification
// 积分管理 - PointManagement
// 身份 - Identity 
// 扫码邀请 - SweepAndInvite
// 病例通 - CasesOfTong

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login'),
    },
    { path: '/404', name: "404", component: () => import('@/views/404'), },
    { path: '*', redirect: '/404' },
    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: () => import('@/views/PersonalCenter'),
    },
    {
      path: '/personaldata',
      name: 'PersonalData',
      component: () => import('@/views/PersonalData'),
    },
    {
      path: '/personaldataedit',
      name: 'PersonalDataEdit',
      component: () => import('@/views/PersonalDataEdit'),
    },

    {
      path: '/doctorbaseinfo',
      name: 'DoctorBaseInfo',
      component: () => import('@/views/Doctor/DoctorBaseInfo'),
    },
    {
      path: '/patientBaseinfo',
      name: 'PatientBaseInfo',
      component: () => import('@/views/Patient/PatientBaseInfo'),
    },
    {
      path: '/patientinfo',
      name: 'PatientInfo',
      component: () => import('@/views/Patient/PatientInfo'),
    },
    {
      path: '/cardticketmanagement',
      name: 'CardTicketManagement',
      component: () => import('@/views/CardTicketManagement'),
    },
    {
      path: '/certification',
      name: 'Certification',
      component: () => import('@/views/Certification'),
    },
    {
      path: '/pointmanagement',
      name: 'PointManagement',
      component: () => import('@/views/PointManagement'),
    },
    {
      path: '/identity',
      name: 'Identity',
      component: () => import('@/views/Identity'),
    },
    {
      path: '/sweepandinvite',
      name: 'SweepAndInvite',
      component: () => import('@/views/SweepAndInvite'),
    },
    {
      path: '/casesoftong',
      name: 'CasesOfTong',
      component: () => import('@/views/CasesOfTong'),
    }
  ]
})