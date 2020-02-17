<template>
  <div>
    <div v-if="date !=  ''" class="date_p">
      <div class="date">{{date}}</div>
    </div>
    <div class="message me" v-if="type=='send'">
      <div class="content">
        <div class="bubble bubble_primary right">
          <div class="bubble_cont bubble_cont2">
            <div class="plain">
              <div v-if="infoType == 'text'">{{ title }}</div>
              <div v-if="infoType != 'text'">
                <div class="inlineBlock verticalAlignTop m_voice_img_p">
                  <img class="info_img" src="../../../assets/newpic2/voice.png" alt />
                </div>
                <div class="inlineBlock verticalAlignTop m_time">
                  <div>{{ time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="avatar" src="../../../assets/pic/head1.png" />
      </div>
    </div>
    <div class="message" v-if="type=='receive' && ifCurrentChatObjectUid()">
      <img class="avatar" src="../../../assets/pic/head2.png" />
      <div class="content">
        <div class="doctor_info">张伟 副主任医师</div>
        <div class="bubble bubble-default left">
          <div class="bubble_cont bubble_cont3">
            <div class="plain">
              <div v-if="infoType == 'text'">{{ title }}</div>
              <div v-if="infoType != 'text'">
                <div class="inlineBlock verticalAlignTop m_voice_img_p">
                  <img class="info_img" src="../../../assets/newpic2/voice.png" alt />
                </div>
                <div class="inlineBlock verticalAlignTop m_time">
                  <div>{{ time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  props: [
    "title",
    "type",
    "chatObjectUid",
    "get_CurrentChatObjectUid",
    "infoType",
    "time",
    "date"
  ],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.infoType);
    console.log(this.date);
  },
  methods: {
    ifCurrentChatObjectUid() {
      let vm = this;
      // if (vm.chatObjectUid == vm.get_CurrentChatObjectUid) {
      //   return true;
      // } else {
      //   // vm.$commonTools.ToastStr(vm.chatObjectUid);
      //   console.log(vm.chatObjectUid);
      //   return false;
      // }
      return true; // 测试
    }
  }
};
</script>

<style scoped>
/*对话起泡start*/
.message {
  margin-top: 0.08rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
}
.message .info_img {
  height: 0.4rem;
  width: 0.4rem;
}
.message .avatar {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 0.05rem;
}
.message.me {
  justify-content: flex-end;
}
.message .content {
  overflow: hidden;
  font-size: 0;
  margin-top: 0.2rem;
}
.message .doctor_info {
  font-size: 0.24rem;
  color: rgba(255, 255, 255, 0.2);
  margin-left: 0.2rem;
}
.bubble {
  max-width: 5rem;
  min-height: 1em;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: left;
  font-size: 0.28rem;
  border-radius: 0.06rem;
  margin: 0 0.2rem;
}
.bubble.left::before {
  border-right-color: #fff;
  border-right-width: 0.04rem;
  right: 100%;
}
.bubble.right::after,
.bubble.right::before {
  left: 100%;
}
.bubble.bubble_primary.right::after {
  border-left-color: #95ec69;
  border-left-width: 0.04rem;
}
.bubble::before,
.bubble::after {
  position: absolute;
  top: 0.14rem;
  border: 0.06rem solid transparent;
  content: " ";
  margin-top: 0.15rem;
}
.bubble.bubble-default {
  /* background-color: #fff; */
  background-color: #1d2439;
  margin-top: 0.1rem;
}
.bubble.bubble_primary {
  /* background-color: #95ec69; */
  background-color: #49d691;
  /* margin-top: 0.5rem; */
}
.bubble_cont {
  word-wrap: break-word;
  word-break: break-all;
  min-height: 0.5rem;
}
.bubble_cont .plain {
  /* padding: 0.18rem 0.26rem 0.10rem 0.26rem; */
  padding: 0.18rem 0.26rem;
}
.bubble.bubble-default.left::before {
  border-right-color: #1d2439;
}
.bubble.bubble_primary.right::after {
  border-left-color: #49d691;
}

/* pre {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  word-break: normal;
} */
/*对话起泡end*/
.m_voice_img_p {
  line-height: 0.4rem;
  padding-top: 0.02rem;
  margin-top: 0.08rem;
}
.m_time {
  margin-left: 0.2rem;
  line-height: 0.4rem;
  margin-top: 0.09rem;
}
.date_p {
  text-align: center;
  width: 100%;
}
.date {
  font-size: 0.24rem;
  color: rgba(255, 255, 255, 0.2);
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
}
</style>
