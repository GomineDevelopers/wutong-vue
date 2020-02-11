<template>
  <div class="CasesOfUpload">
    <vue-headful title="病例上传"></vue-headful>
    <!-- <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">标题</div>
      <input class="i_input" type="text" placeholder="请填写标题" />
    </div> -->
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">分类</div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <van-radio-group class="verticalAlignTop" v-model="radio">
        <van-radio name="1" icon-size="16px" checked-color="#55EBA2">男</van-radio>
        <van-radio name="2" icon-size="16px" checked-color="#55EBA2">女</van-radio>
      </van-radio-group>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">年龄</div>
      <input class="i_input" type="text" placeholder="请填写年龄" />
    </div>
    

    <div class="upload_arr">
      <template v-for="(item,index) in upload_arr ">
        <div class="PerRow PerRow2" :key="index + 'ua' ">
          <div class="common_Stitle_font2 title_spaceRight title_spaceRight2">{{item.u_title}}</div>
          <!-- <input class="i_input i_input2" type="text" :placeholder="item.u_info" /> -->
          <br />
          <textarea class="i_input i_input2" :placeholder="item.u_info" rows="3" cols="20"></textarea>
          <div class="camera">
            <img class="img_camera" :src="url_camera" alt />
          </div>
        </div>
      </template>
      <div class="m_pic_p m_pic_p2">
        <template v-for="(item,index) in Imgs ">
          <div :key="index + 'PIImgs' " class="m_pic">
            <img class="m_img" :src="item" alt />
          </div>
        </template>
      </div>
    </div>

    <div :style="{height: '0.48rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize">提交</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "CasesOfUpload",
  components: {},
  data() {
    return {
      url_camera: require("@/assets/pic/camera.jpg"),
      radio: "1",
      value1: 0,
      option1: [
        { text: "请选择所属医院", value: 0 },
        { text: "上海医院", value: 1 },
        { text: "北京医院", value: 2 },
        { text: "贵阳医院", value: 3 }
      ],
      upload_arr: [
        {
          u_title: "病史",
          u_info: "请描述现病史详情"
        },
        {
          u_title: "查体",
          u_info: "请描述现查体详情"
        },
        {
          u_title: "检查",
          u_info: "请描述现检查详情"
        },
        {
          u_title: "诊断",
          u_info: "请描述现诊断详情"
        }
      ],
      Imgs: [
        require("@/assets/pic/sicknessdetail1.png"),
        require("@/assets/pic/sicknessdetail2.png"),
        require("@/assets/pic/img_camera.jpg")
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
/* *********** 下拉框样式 */
.CasesOfUpload .van-dropdown-menu {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  height: 0.5rem;
  background: transparent;
}
.CasesOfUpload .van-dropdown-menu__title {
  /* padding: 0 5.5rem 0 0; */
  padding: 0;
  color: #c5cad5;
  font-size: 0.32rem;
  line-height: 0.32rem;
}
.CasesOfUpload .van-ellipsis {
  width: 4.7rem;
  font-size: 0.32rem;
}
.CasesOfUpload .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}

.CasesOfUpload .van-dropdown-item__option {
  font-size: 0.32rem;
  color: #41485d;
  padding: 0.2rem ;
}

/* *********** 单选框样式  */
.CasesOfUpload .van-radio-group {
  display: inline-block;
}
.CasesOfUpload .van-radio {
  width: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.12rem;
  /* display: inline-flex; */
}
.CasesOfUpload .van-radio__icon {
  vertical-align: top;
  display: inline-block;
}
.CasesOfUpload .van-radio__label {
  font-size: 0.32rem;
  color: #858B9C;
  vertical-align: text-top;
  display: inline-block;
  line-height: 0.32rem;
}
/* ***********  */
</style>
<style scoped>
.CasesOfUpload {
}
.CasesOfUpload input::-webkit-input-placeholder {
  font-size: 0.32rem;
  color: #c5cad5;
  height: 0.4rem;
}
/* 通用输入框 */
.CasesOfUpload .i_input {
  font-size: 0.32rem;
  color: #fff;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
  background: transparent;
}
.CasesOfUpload .i_input2 {
  height: 2.4rem;
  width: 100%;
  margin-top: -0.5rem;
}

.CasesOfUpload .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #4A5677 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}

.CasesOfUpload .PerRow2 {
  height: 3.6rem;
}

.CasesOfUpload .title_spaceRight {
  margin-right: 0rem;
}
.CasesOfUpload .title_spaceRight2 {
  /* width: 100%; */
  display: inline;
}
.CasesOfUpload .i_btn {
  width: 3.6rem;
  height: 0.9rem;
  border: none
}

/* 更改textarea 默认placeholder样式 */
.CasesOfUpload textarea::-webkit-input-placeholder {
  color: rgba(197, 202, 213, 1);
}

.CasesOfUpload textarea:-moz-placeholder {
  color: rgba(197, 202, 213, 1);
}

.CasesOfUpload textarea::-moz-placeholder {
  color: rgba(197, 202, 213, 1);
}

.CasesOfUpload textarea:-ms-input-placeholder {
  color: rgba(197, 202, 213, 1);
}
.CasesOfUpload .camera {
  width: 100%;
  text-align: right;
  vertical-align: top;
  height: 0.5rem;
}
.CasesOfUpload .img_camera {
  width: 0.34rem;
  height: 0.31rem;
  background: rgba(197, 202, 213, 1);
  opacity: 0.57;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.1rem;
}

.CasesOfUpload .title_spaceRight {
  margin-right: 0rem;
}
.CasesOfUpload .title_spaceRight2 {
  /* width: 100%; */
  display: inline;
}
.CasesOfUpload .i_btn {
  width: 3.6rem;
  height: 0.9rem;
}

/* ****图片 */
.CasesOfUpload .m_pic_p {
  /* width: 7.5rem; */
  margin-top: 0.67rem;
}
.CasesOfUpload .m_pic_p2 {
  padding: 0 0.4rem;
}

.CasesOfUpload .m_pic {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin-right: 0.35rem;
}
.CasesOfUpload .m_pic:nth-child(3n) {
  margin-right: 0rem;
}

.CasesOfUpload .m_img {
  width: 100%;
  height: 100%;
}
</style>

