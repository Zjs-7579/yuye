export default {
  // PersonShareholder_deleteHtml(state, len){
  //     state.HighTechData.agriculturalShareholder.splice(len-1, 1);
  // }
  HighTech_IsDisabledData(state, bool) {
    //console.log(state)
    state.isDisabledData = bool;
  },
  // HighTech_IsDisabledDataClose(state) {
  //   //console.log(state)
  //   state.isDisabledData = false;
  // },
  // HighTech_IsDisabledDataOpen(state) {
  //   //console.log(state)
  //   state.isDisabledData = true;
  // },

  HighTech_IsHoldInfo(state, bool) {
    //console.log(state)
    state.isHoldInfo = bool;
  },

  // HighTech_IsCountableUploadClose(state){
  //     //console.log(state)
  //     state.isCountableUpload = false
  // },
  // HighTech_IsCountableUploadOpen(state){
  //     //console.log(state)
  //     state.isCountableUpload = true
  // },
  HighTech_IsDetailsContent(state, bool) {
    //console.log(state)
    state.isDetailsContent = bool;
  },
  // HighTech_IsDetailsContentOpen(state) {
  //   //console.log(state)
  //   state.isDetailsContent = true;
  // },
  // HighTech_IsDetailsContentClose(state) {
  //   //console.log(state)
  //   state.isDetailsContent = false;
  // },

  HighTech_UserName(state, res) {
    state.userName = res.user_name;
  },
  HighTech_UserTaskId(state, res) {
    console.log(res);
    state.userTaskId = res;
  },

  HighTech_upAllData(state, res) {
    console.log("////////////", res);
    state.HighTechData = res.result;
    state.uploadUrlData = res.uploadUrlData;

    console.log(state);
  },
};
