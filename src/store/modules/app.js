import Vue from "vue";
// import { getMissionList } from "@/api";
// import { resolve } from "q";

const app = {
    state: {
        ifCanCheckToken: true, //默认可以刷新token
        articleData: null,
        videoData: null,
        ChatMsgId: 1, //设置下一个id的数值(ChatMsg子集id最大为1，则ChatMsgId为1+1=2 如果为空，则为0+1=1)
        OnlineStatus: false,
        client_id: null, //当前只用于退出聊天状态 - 退出自己状态
        ChatObject: null,//当前聊天的对象
        // userIfReadArr:[]// 所有的在线用户uid-》消息是否已读状态
        UserChatLists: [],// 所有的在线用户uid-》消息是否已读状态,
        selfContent: [],
        selfContentId: 0,
        selfFlow: [],
        selfFlowId: 0,
        SourceTypeAndId: null, //规定值："article"或 "video" //临时处理变量-当前资源类型：原因暂时只给每串mission指定一个资源
        beMarkedMissionId: null,
        myMissionList: null,
        roleId: null,
        // ChatMsg: [], 
        ChatMsg: [
            {
                id: 1,
                type: "send", // 消息类型-send/receive
                message: "你好，张医生。",
                time: 14,
                infoType: 'text', // 信息类型-text/voice
                date: "10-06 14:02",
            },
            {
                id: 2,
                type: "receive",
                message: "您好，很高兴为您服务！",
                time: 0,
                infoType: 'text',
                date: "",

            },
            {
                id: 3,
                type: "send",
                message: "有个问题请教一下。",
                time: 20,
                infoType: 'voice',
                date: "",

            },
            {
                id: 4,
                type: "receive",
                message: "您请说。",
                time: 18,
                infoType: 'voice',
                date: "10-06 14:18",

            },
            {
                id: 5,
                type: "receive",
                message: "这里推荐您安达唐，下面是购买链接。",
                time: 13,
                infoType: 'text',
                date: "",
            },
            {
                id: 6,
                type: "receive",
                message: "https://item.jkcsjd.com/100002196329.html",
                time: 13,
                infoType: 'url',
                date: "",
            },
            {
                id: 7,
                type: "send",
                message: "谢谢您，张医生。",
                time: 5,
                infoType: 'text',
                date: "",
            },
            {
                id: 8,
                type: "receive",
                message: "不客气。",
                time: 13,
                infoType: 'text',
                date: "",
            },
        ],  // 测试
        /////////// 以下是数据格式参考模板
        // ChatMsg: [
        //     {
        //         id: 1,
        //         type: "send~~", //消息类型-send/receive
        //         message: "Test~~"
        //     }
        // ],
        // ChatMsgId: 2,
        // selfContent: [
        //     {
        //         selfTitle: "aaa",
        //         selfText: "bbb"
        //     },
        //     {
        //         selfTitle: "ccc",
        //         selfText: "ddd"
        //     }
        // ],
        // selfFlow: [
        //     {
        //         // id:1,  //id 用index+1表示即可
        //         selfTitle:"除草",
        //         selfInfo: "添加相关资料"
        //     },
        //     {
        //         // id: 2,
        //         selfTitle: "施肥",
        //         selfInfo: "添加相关资料"
        //     }
        // ],
        // SourceTypeAndId:{
        //     SourceType: xxx,
        //     SourceId: xxx
        // }
    },
    mutations: {
        // 设置文章
        SET_ARTICLEDATA: (state, articleData) => {
            state.articleData = articleData
        },
        // 设置视频
        SET_VIDEODATA: (state, videoData) => {
            state.videoData = videoData
        },
        // 设置client_id
        SET_CLIENT_ID: (state, index, client_id) => {
            state.client_id = client_id
        },
        // 设置聊天对象
        SET_CHATOBJECT: (state, ChatObject) => {
            state.ChatObject = ChatObject
        },
        // 设置用户聊天列表
        SET_USERCHATLISTS: (state, UserChatLists) => {
            state.UserChatLists = UserChatLists
        },
        // 设置（聊天信息）读取状态
        SET_READSTATUS: (state, temp) => {
            let length = state.UserChatLists[0].farmers.length
            let tempList = state.UserChatLists[0].farmers
            let i;
            for (i = 0; i < length; i++) {
                if (tempList[i].uid == temp.uid) {
                    state.UserChatLists[0].farmers[i].ifReadStatus = temp.message
                }
            }
        },
    },
    actions: {
        // 是否能刷新token
        set_ifCanCheckToken({ commit, state }, ifCanCheckToken) {
            return new Promise((resolve, reject) => {
                state.ifCanCheckToken = ifCanCheckToken
                resolve("set_ifCanCheckToken - SUCCESS")
            })
        },
        // 能否刷新token-状态判断
        get_ifCanCheckToken({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ifCanCheckToken)
            })
        },
        // 设置文章
        set_articleData({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                commit('SET_ARTICLEDATA', data)
                resolve("SET_ARTICLEDATA - SUCCESS")
            })
        },
        // 获取文章
        get_articleData({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.articleData)
            })
        },
        // 设置视频
        set_videoData({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                commit('SET_VIDEODATA', data)
                resolve("SET_VIDEODATA - SUCCESS")
            })
        },
        // 获取视频
        get_videoData({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.videoData)
            })
        },
        //////////// 线上聊天内容（开始）
        // 设置线上状态
        set_OnlineStatus({ commit, state }, bool) {
            return new Promise((resolve, reject) => {
                state.OnlineStatus = bool
                resolve("set_OnlineStatus - SUCCESS")
            })
        },
        // 获取线上状态
        get_OnlineStatus({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.OnlineStatus)
            })
        },
        // 获取聊天消息
        get_ChatMsg({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ChatMsg)
            })
        },
        // 获取消息id
        get_ChatMsgId({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ChatMsgId)
            })
        },
        // 发送消息
        send_ChatMsg({ commit, state }, temp) {
            return new Promise((resolve, reject) => {
                state.ChatMsg.push({
                    chatObjectUid: temp.tempUid,
                    id: state.ChatMsgId++,
                    type: "send",
                    message: temp.message,
                    time: temp.time,
                    infoType: temp.infoType,
                    date: temp.date

                });
                resolve("send_ChatMsg - SUCCESS")
            })
        },
        // 获取聊天消息
        // receive_ChatMsg({ commit, state }, message) {
        receive_ChatMsg({ commit, state }, temp) {
            return new Promise((resolve, reject) => {
                state.ChatMsg.push({
                    chatObjectUid: temp.tempUid,
                    id: state.ChatMsgId++,
                    type: "receive",
                    message: temp.message,
                    time: temp.time,
                    infoType: temp.infoType,
                    date: temp.date
                });

                // message = JSON.parse(message)
                // state.ChatMsg.push({
                //     chatObjectUid: message.user.id,
                //     id: state.ChatMsgId++,
                //     type: "receive",
                //     message: message.message,
                //     time: temp.time,
                //     infoType: temp.infoType,
                //     date: temp.date

                // });
                // // 添加一个用户消息激活成"未读状态"！
                // let uid = message.user.id
                // let temp = {
                //     uid: uid,
                //     message: "未读"
                // }
                // commit('SET_READSTATUS', temp)
                resolve("receive_ChatMsg - SUCCESS")
            })
        },
        // 设置client_id
        set_client_id({ commit, state }, client_id) {
            return new Promise((resolve, reject) => {
                commit('SET_CLIENT_ID', client_id)
                resolve("set_client_id - SUCCESS")
            })
        },
        // 获取client_id
        get_client_id({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.client_id)
            })
        },
        // 设置聊天对象
        set_ChatObject({ commit, state }, ChatObject) {
            return new Promise((resolve, reject) => {
                commit('SET_CHATOBJECT', ChatObject)
                resolve("set_ChatObject - SUCCESS")
            })
        },
        // 获取聊天对象
        get_ChatObject({ commit, state }) {
            // return(state.ChatObject)
            return new Promise((resolve, reject) => {
                resolve(state.ChatObject)
                // resolve("你好~~~")

            })
        },
        // 设置（在线）聊天用户列表
        set_UserChatLists({ commit, state }, lists) {
            return new Promise((resolve, reject) => {
                commit('SET_USERCHATLISTS', lists)
                resolve("set_UserChatLists - SUCCESS")
            })
        },
        // 获取（在线）聊天用户列表
        get_UserChatLists({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UserChatLists)
            })
        },
        // 设置用户消息状态-已读
        set_UserChatListsReadOK({ commit, state }, uid) {
            return new Promise((resolve, reject) => {
                let length = state.UserChatLists[0].farmers.length
                let tempList = state.UserChatLists[0].farmers
                let i;
                for (i = 0; i < length; i++) {
                    if (tempList[i].uid == uid) {
                        state.UserChatLists[0].farmers[i].ifReadStatus = "已读"
                    }
                }
                resolve("set_UserChatListsReadOK - SUCCESS")
            })
        },
        //////////// 线上聊天内容（结束）

        // （创建项目）获取自定义内容-selfContent
        get_selfContent({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.selfContent)
            })
        },
        // （创建项目）组件新建自定义
        push_selfContent({ commit, state }, temp) {
            return new Promise((resolve, reject) => {
                state.selfContent.push({
                    selfTitle: temp.title,
                    selfText: temp.text,
                    selfContentId: state.selfContentId++ //测试
                });
                resolve("push_selfContent - SUCCESS")
            })
        },
        // （创建项目）组件刷新自定义
        update_selfContent({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                let temp = {
                    selfTitle: data.myTitle,
                    selfText: data.myText,
                    selfContentId: state.selfContentId  //测试
                }
                Vue.set(state.selfContent, data.myindex, temp)
            })
        },
        // 初始化工作流
        init_selfFlow({ commit, state }) {
            return new Promise((resolve, reject) => {
                state.selfFlow = []
                resolve("init_selfFlow - SUCCESS")
            })
        },
        // 获取工作流
        get_selfFlow({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.selfFlow)
            })
        },
        // 新增工作流
        push_selfFlow({ commit, state }, temp) {
            return new Promise((resolve, reject) => {
                let tempId = state.selfFlowId
                state.selfFlow.push({
                    selfId: tempId,
                    selfTitle: temp.title,
                    selfInfo: temp.info,
                    selfFlowId: state.selfFlowId++ //测试
                });
                resolve("push_selfFlow - SUCCESS")
            })
        },
        // 刷新工作流
        update_selfFlow({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                let temp = {
                    selfId: data.myId,
                    selfTitle: data.myTitle,
                    selfInfo: data.myInfo,
                    selfFlowId: state.selfFlowId,  //测试
                }
                Vue.set(state.selfFlow, data.myindex, temp)
            })
        },
        //////////////////////////临时（开始）

        // 设置文章类型和id
        set_SourceTypeAndId({ commit, state }, SourceTypeAndId) {
            return new Promise((resolve, reject) => {
                state.SourceTypeAndId = SourceTypeAndId
                resolve("set_SourceTypeAndId - SUCCESS")
            })
        },
        // 获取文章类型和id
        get_SourceTypeAndId({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.SourceTypeAndId)
            })
        },
        //////////////////////////临时（结束）

        // 设置被标记的任务Id 
        set_beMarkedMissionId({ commit, state }, beMarkedMissionId) {
            return new Promise((resolve, reject) => {
                state.beMarkedMissionId = beMarkedMissionId
                resolve("set_beMarkedMissionId - SUCCESS")
            })
        },
        // 获取被标记的任务Id 
        get_beMarkedMissionId({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.beMarkedMissionId)
            })
        },
        // 设置当前用户的任务列表
        set_myMissionList({ commit, state }, myMissionList) {
            return new Promise((resolve, reject) => {
                state.myMissionList = myMissionList
                resolve("set_myMissionList - SUCCESS")
            })
        },
        // 获取当前用户的任务列表
        get_myMissionList({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.myMissionList)
            })
        },
        // 更新当前用户的任务列表
        // update_myMissionList({ commit, state }, data) {
        //     return new Promise((resolve, reject) => {
        //         // 获取当前用户的任务列表
        //         getMissionList(data.newToken, data.curPage)
        //             .then(function (response) {
        //                 state.myMissionList = response.data.data;
        //             })
        //             .catch(function (error) {
        //                 console.log(error);
        //             });
        //         resolve("update_myMissionList - SUCCESS")
        //     })
        // },
        // 设置角色权限id值
        set_roleId({ commit, state }, roleId) {
            return new Promise((resolve, reject) => {
                state.roleId = roleId
                resolve("set_roleId - SUCCESS")
            })
        },
        // 获取角色权限id值
        get_roleId({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.roleId)
            })
        },
    }
}

export default app
