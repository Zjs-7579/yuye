export default {
  // PersonShareholder_deleteHtml(state, len){
  //     state.HighTechData.agriculturalShareholder.splice(len-1, 1);
  // }
  HighTech_IsDisabledDataClose(state) {
    //console.log(state)
    state.isDisabledData = false;
  },
  HighTech_IsDisabledDataOpen(state) {
    //console.log(state)
    state.isDisabledData = true;
  },

  // HighTech_IsCountableUploadClose(state){
  //     //console.log(state)
  //     state.isCountableUpload = false
  // },
  // HighTech_IsCountableUploadOpen(state){
  //     //console.log(state)
  //     state.isCountableUpload = true
  // },

  HighTech_IsDetailsContentOpen(state) {
    //console.log(state)
    state.isDetailsContent = true;
  },
  HighTech_IsDetailsContentClose(state) {
    //console.log(state)
    state.isDetailsContent = false;
  },

  HighTech_UserName(state, res) {
    state.userName = res.user_name;
  },
  HighTech_UserTaskId(state, res) {
    console.log(res);
    state.userTaskId = res;
  },

  HighTech_AllClearData(state, res) {
    state.HighTechData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },
};
