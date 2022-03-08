export default {
  // userName: '',//姓名
  // userTaskId: '',//task_id
  Safety_UserName(state, res) {
    //console.log(res)
    state.userName = res.user_name;
  },
  Safety_UserTaskId(state, res) {
    console.log("Safety_UserTaskId", res);
    state.userTaskId = res;
  },

  Safety_IsDisabledData(state, bool) {
    state.isDisabledData = bool;
  },
  // Safety_IsDisabledDataOpen(state) {
  //   state.isDisabledData = true;
  // },
  // Safety_IsDisabledDataClose(state) {
  //   state.isDisabledData = false;
  // },
  Safety_IsDetailsContent(state, bool) {
    state.isDetailsContent = bool;
  },
  // Safety_IsDetailsContentClose(state) {
  //   state.isDetailsContent = false;
  // },
  // Safety_IsDetailsContentOpen(state) {
  //   state.isDetailsContent = true;
  // },
  Safety_IsHoldInfo(state, bool) {
    state.isHoldInfo = bool;
  },

  Safety_AllClearData(state, res) {
    state.SafetyData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },
};
