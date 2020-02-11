<template>
  <div class="AcademicMilestone">
    <vue-headful title="我的成就"></vue-headful>
    <div :style="{height: '3.66rem'}"></div>
    <div class="top_img" :style="StyleBg">
      <div class="am_avatar">
        <img class="avatar" :src="pic.avatar" alt />
      </div>
      <div class="am_name">Dora Ross</div>
      <div class="am_row2">
        <div class="row2_l">
          <div class="l_top">
            <div class="inlineBlock top_font1">4</div>
            <div class="inlineBlock top_font1 top_font2">个</div>
          </div>
          <div class="am_bottom">累计获得勋章</div>
        </div>
        <div class="row2_r">
          <div class="r_top">
            <div class="inlineBlock top_font1">98.5</div>
            <div class="inlineBlock top_font1 top_font2">%</div>
          </div>
          <div class="am_bottom">超越用户</div>
        </div>
      </div>
    </div>
    <p class="RQ_title">基础奖章</p>
    <div :style="{height: '0.13rem'}"></div>
    <template v-for="(item,index) in BaseArr ">
      <div class="perImgModule" :key="index + 'QA' ">
        <div class="pIM">
          <div>
            <img v-if="item.ifActive == true" class="perImg" :src="item.pic[0]" alt />
            <img v-if="item.ifActive != true" class="perImg" :src="item.pic[1]" alt />
          </div>
          <div v-if="item.ifActive == true" class="pIM_name">{{item.name}}</div>
          <div v-if="item.ifActive != true" class="pIM_name pIM_name2">{{item.name}}</div>
        </div>
      </div>
    </template>

    <div :style="{height: '0.38rem'}"></div>
    <p class="RQ_title">进阶奖章</p>
    <div :style="{height: '0.13rem'}"></div>
    <template v-for="(item2,index2) in UpArr ">
      <div v-if="index2 <= 3" class="perImgModule" :key="index2 + 'QA2' ">
        <div class="pIM">
          <div>
            <img v-if="item2.ifActive == true" class="perImg" :src="item2.pic[0]" alt />
            <img v-if="item2.ifActive != true" class="perImg" :src="item2.pic[1]" alt />
          </div>
          <div v-if="item2.ifActive == true" class="pIM_name">{{item2.name}}</div>
          <div v-if="item2.ifActive != true" class="pIM_name pIM_name2">{{item2.name}}</div>
        </div>
      </div>
      <div v-if="index2 > 3" class="perImgModule perImgModule2" :key="index2 + 'QA2' ">
        <div class="pIM">
          <div>
            <img v-if="item2.ifActive == true" class="perImg" :src="item2.pic[0]" alt />
            <img v-if="item2.ifActive != true" class="perImg" :src="item2.pic[1]" alt />
          </div>
          <div v-if="item2.ifActive == true" class="pIM_name">{{item2.name}}</div>
          <div v-if="item2.ifActive != true" class="pIM_name pIM_name2">{{item2.name}}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "AcademicMilestone",
  components: {},
  data() {
    return {
      StyleBg: {
        backgroundImage:
          "url(" + require("@/assets/pic/AcademicMilestone/am_bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        textAlign: "center"
      },
      BaseArr: [
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_study.svg"),
            require("@/assets/pic/AcademicMilestone/am_study_b.svg")
          ],
          name: "开始学习",
          ifActive: true
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_zsyb.svg"),
            require("@/assets/pic/AcademicMilestone/am_zsyb_b.svg")
          ],
          name: "再刷一遍",
          ifActive: false
        }
      ],
      UpArr: [
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_3.svg"),
            require("@/assets/pic/AcademicMilestone/am_3b.svg")
          ],
          name: "尝试3天",
          ifActive: true
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_7.svg"),
            require("@/assets/pic/AcademicMilestone/am_7_b.svg")
          ],
          name: "坚持7天",
          ifActive: false
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_15.svg"),
            require("@/assets/pic/AcademicMilestone/am_15_b.svg")
          ],
          name: "坚持15天",
          ifActive: false
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_xxdr.svg"),
            require("@/assets/pic/AcademicMilestone/am_xxdr_b.svg")
          ],
          name: "学习达人",
          ifActive: false
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_stdr.svg"),
            require("@/assets/pic/AcademicMilestone/am_stdr_b.svg")
          ],
          name: "刷题达人",
          ifActive: false
        },
        {
          pic: [
            require("@/assets/pic/AcademicMilestone/am_dtrs.svg"),
            require("@/assets/pic/AcademicMilestone/am_dtrs_b.svg")
          ],
          name: "登堂入室",
          ifActive: true
        }
      ],
      pic: {
        avatar: require("@/assets/pic/head1.png")
      }
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.AcademicMilestone {
  font-size: 0.28rem;
  padding: 0 0.32rem;
}
.AcademicMilestone .top_img {
  position: absolute;
  left: 0;
  top: 0.66rem;
  z-index: -1;
  width: 7.5rem;
  height: 2.78rem;
  background: linear-gradient(
    45deg,
    rgba(0, 202, 171, 1) 0%,
    rgba(0, 216, 160, 1) 100%
  );
}
.AcademicMilestone .avatar {
  width: 1.52rem;
  height: 1.52rem;
  position: absolute;
  top: -0.3rem;
  left: 0.74rem;
}
.AcademicMilestone .am_name {
  width: 3rem;
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
  position: absolute;
  top: 0.3rem;
  left: 2.2rem;
}
.AcademicMilestone .am_row2 {
  margin-top: 1.3rem;
}
.AcademicMilestone .row2_l {
  display: inline-block;
  width: 50%;
}
.AcademicMilestone .row2_r {
  display: inline-block;
  width: 50%;
}
.AcademicMilestone .top_font1 {
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
}
.AcademicMilestone .top_font2 {
  font-size: 0.28rem;
}
.AcademicMilestone .am_bottom {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
}
.AcademicMilestone .RQ_title {
  margin: 0;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;
  line-height: 0.5rem;
  letter-spacing: 0.01px;
}
.AcademicMilestone .perImgModule {
  width: 1.7rem;
  height: 1.78rem;
  display: inline-block;
}
.AcademicMilestone .perImgModule2 {
  margin-top: 0.31rem;
}

.AcademicMilestone .perImg {
  width: 1.2rem;
  height: 1.2rem;
}
.AcademicMilestone .pIM {
  width: 100%;
  text-align: center;
}
.AcademicMilestone .pIM_name {
  height: 0.37rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  /* color: rgba(65, 72, 93, 1); */
  color: #ffffff;
  line-height: 0.37rem;
}
.AcademicMilestone .pIM_name2 {
  color: #858b9c;
}
</style>

