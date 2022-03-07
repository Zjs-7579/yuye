export default {
  // userName: '',//姓名
  // userTaskId: '',//task_id
  Modern_UserName(state, res) {
    //console.log(res)
    state.userName = res.user_name;
  },
  Modern_UserTaskId(state, res) {
    console.log("Modern_UserTaskId", res);
    state.userTaskId = res;
  },
  Modern_IsDisabledData(state, bool) {
    state.isDisabledData = bool;
  },
  // Modern_IsDisabledDataOpen(state) {
  //   state.isDisabledData = true;
  // },
  // Modern_IsDisabledDataClose(state) {
  //   state.isDisabledData = false;
  // },
  Modern_IsDetailsContent(state, bool) {
    state.isDetailsContent = bool;
  },

  Modern_IsHoldInfo(state, bool) {
    state.isHoldInfo = bool;
  },
  // Modern_IsDetailsContentClose(state) {
  //   state.isDetailsContent = false;
  // },
  // Modern_IsDetailsContentOpen(state) {
  //   state.isDetailsContent = true;
  // },

  Modern_AllClearData(state, res) {
    state.ModernData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },
};
