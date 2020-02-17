const getters = {
    ifCanCheckToken: state => state.app.ifCanCheckToken,
    articleData: state => state.app.articleData,
    videoData: state => state.app.videoData,
    ChatMsg: state => state.app.ChatMsg,
    ChatMsgId: state => state.app.ChatMsgId,
    OnlineStatus: state => state.app.OnlineStatus,
    client_id: state => state.app.client_id,
    ChatObject: state => state.app.ChatObject,
    UserChatLists: state => state.app.UserChatLists,
    selfContent: state => state.app.selfContent,
    selfContentId: state => state.app.selfContentId,
    selfFlow: state => state.app.selfFlow,
    selfFlowId: state => state.app.selfFlowId,
    SourceTypeAndId: state => state.app.SourceTypeAndId, //临时
    beMarkedMissionId: state => state.app.beMarkedMissionId,
    myMissionList: state => state.app.myMissionList,
    roleId: state => state.app.roleId

}
export default getters
