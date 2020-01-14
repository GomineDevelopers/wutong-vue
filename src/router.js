import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页 - Home
// 登录 - Login
// 404 - 404
// 个人中心 - PersonalCenter 
// 个人资料 - PersonalData
// 医生基本信息 - DoctorInfo
// 卡券管理 - CardTicketManagement
// 实名认证 - Certification
// 积分管理 - PointManagement
// 身份 - Identity 
// 扫码邀请 - SweepAndInvite
// 患者信息 - PatientInfo
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
      path: '/doctorinfo',
      name: 'DoctorInfo',
      component: () => import('@/views/DoctorInfo'),
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
      path: '/patientinfo',
      name: 'PatientInfo',
      component: () => import('@/views/PatientInfo'),
    },
    {
      path: '/casesoftong',
      name: 'CasesOfTong',
      component: () => import('@/views/CasesOfTong'),
    }
  ]
})