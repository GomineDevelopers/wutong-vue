<template>
  <div class="DPCommunication">
    <vue-headful title="医患沟通"></vue-headful>
    <div class="chat_bg">
      <div class="chat_name">
        <span>{{username}}</span>
      </div>
      <div class="chat_box" id="chat_box">
        <div
          is="send-message"
          v-for="(item, index) in Msg"
          v-bind:key="index"
          v-bind:chatObjectUid="item.chatObjectUid"
          v-bind:get_CurrentChatObjectUid="get_CurrentChatObjectUid"
          v-bind:title="item.message"
          v-bind:type="item.type"
          v-bind:infoType="item.infoType"
          v-bind:time="item.time"
          v-bind:date="item.date"
        ></div>
      </div>
      <div class="chat_input FontSize0">
        <div class="inlineBlock verticalAlignTop ci_1">
          <img
            class="chat_icon"
            @click="ifSpeak = !ifSpeak"
            v-if="!ifSpeak"
            src="../../assets/newpic2/key.png"
            alt
          />
          <img
            class="chat_icon"
            @click="ifSpeak = !ifSpeak"
            v-if="ifSpeak"
            src="../../assets/newpic2/speak.png"
            alt
          />
        </div>
        <div class="inlineBlock verticalAlignTop FontSize0 ci_2">
          <div class="m_input_change" v-if="!ifSpeak" @click="sendMyMessage()">按住说话</div>
          <input class="m_input" v-if="ifSpeak" type="text" v-model="message" />
        </div>
        <div class="inlineBlock verticalAlignTop FontSize0 ci_3">
          <van-button round @click="sendMyMessage()">发送</van-button>
        </div>
      </div>
      <div></div>
    </div>
    <!-- <div :style="{height: '0.4rem'}"></div> -->
  </div>
</template>
<script>
// import { sendMessage } from "@/api";
import Vue from "vue";
import message from "./components/message";

export default {
  name: "DPCommunication",
  components: {
    "send-message": message
  },
  data() {
    return {
      ifSpeak: true,
      message: "",
      username: "张医生",
      //   Msg: null,
      // 数据参考模板 - 看全局
      Msg: [],
      nextTodoId: null, //设置下一个 id的数值
      //   get_CurrentChatObjectUid: null,
      get_CurrentChatObjectUid: 123
    };
  },
  mounted() {
    let vm = this;
    vm.$store
      .dispatch("get_ChatMsg")
      .then(function(response) {
        vm.Msg = response;
      })
      .catch(function(error) {
        console.info(error);
      });

    setTimeout(() => {
      //   let vm = this;
      //   vm.$store
      //     .dispatch("get_ChatObject")
      //     .then(function(response) {
      //       vm.get_CurrentChatObjectUid = response;
      //     })
      //     .catch(function(error) {
      //       console.info(error);
      //       return false;
      //     });
    }, 500);
  },
  updated() {
    var divscll = document.getElementById("chat_box");
    divscll.scrollTop = divscll.scrollHeight;

    let vm = this;
    vm.$store
      .dispatch("get_ChatMsg")
      .then(function(response) {
        vm.Msg = response;
      })
      .catch(function(error) {
        console.info(error);
      });
    vm.$store
      .dispatch("get_ChatMsgId")
      .then(function(response) {
        vm.nextTodoId = response;
      })
      .catch(function(error) {
        console.info(error);
      });
  },
  methods: {
    sendMyMessage() {
      let vm = this;
      let length = vm.Msg.length;
      //   let tempUid = 123; // 测试
      let tempUid = length + 1; // 测试
      let infoType = "text";
      let date = ""; // 测试
      let num1 = tempUid % 5;
      let num2 = tempUid / 5;
      if (num1 == 0) {
        date = "10-06 14:2" + String(num2);
      }
      if (this.ifSpeak == false) {
        infoType = "voice";
      }
      console.log(infoType);
      let temp = {
        tempUid: tempUid,
        message: vm.message,
        time: 14,
        infoType: infoType,
        date: date
      };
      vm.$store
        .dispatch("send_ChatMsg", temp)
        .then(function(response) {
          vm.message = ""; //清空输入框
        })
        .catch(function(error) {
          console.info(error);
        });
      // 以下为临时代码
      if (tempUid == 13) {
        let temp = {
          tempUid: tempUid,
          message: "您好，我现在有点事儿，一会儿回复您。",
          time: 14,
          infoType: infoType,
          date: ""
        };
        vm.$store
          .dispatch("receive_ChatMsg", temp)
          .then(function(response) {
            vm.message = ""; //清空输入框
          })
          .catch(function(error) {
            console.info(error);
          });
      }
      if (tempUid == 21) {
        let temp = {
          tempUid: tempUid,
          message: "不好意思，让您久等了。",
          time: 14,
          infoType: infoType,
          date: ""
        };
        vm.$store
          .dispatch("receive_ChatMsg", temp)
          .then(function(response) {
            vm.message = ""; //清空输入框
          })
          .catch(function(error) {
            console.info(error);
          });
      }
    }
  }
};
</script>
<style>
.DPCommunication .van-button {
  background-color: #49d691;
  border: 0.01rem solid #49d691;
  color: #fff;
  font-size: 0.28rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
</style>
<style scoped>
.DPCommunication {
}

.DPCommunication .chat_bg {
  /* background-color: #f2f4f0; */
  height: 100vh;
  overflow: hidden;
}
.DPCommunication .chat_name {
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  font-size: 0.28rem;
}
.DPCommunication .chat_box {
  height: 86vh;
  margin: 6vh 4vw 0 4vw;
  overflow-x: hidden;
  overflow-y: auto;
}
.DPCommunication .chat_input {
  position: absolute;
  bottom: 0.2rem;
  /* background-color: #fff; */
  width: 100vw;
  height: 1rem;
  line-height: 7vh;
  text-align: center;
}
.DPCommunication .chat_input .m_input,
.DPCommunication .chat_input .m_input_change {
  border-radius: 0.04rem;
  height: 0.5rem;
  width: 4rem;
  padding: 0 0.05rem;
  border: 0.01rem solid rgba(0, 0, 0, 0);
  font-size: 0.28rem;
  line-height: 0.28rem;
  border-radius: 0.2rem;
  color: #ffff;
  background-color: #1d2439;
  text-indent: 0.2rem;
}
.DPCommunication .chat_input .m_input_change {
  margin-top: 0.05rem;
  letter-spacing: 0.2rem;
  line-height: 0.5rem;
}

.DPCommunication .chat_icon {
  height: 0.55rem;
  width: 0.55rem;
}
.DPCommunication .ci_1 {
  margin-top: 0.33rem;
  height: 0;
}
.DPCommunication .ci_2 {
  margin: 0 0.32rem;
  margin-top: 0.3rem;
  height: 0;
}
.DPCommunication .ci_3 {
  margin-top: 0.3rem;
  height: 0;
}
.height0 {
  height: 0;
}
</style>

