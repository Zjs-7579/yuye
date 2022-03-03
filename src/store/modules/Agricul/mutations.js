export default {
  // PersonShareholder_deleteHtml(state, len){
  //     state.AgriculData.agriculturalShareholder.splice(len-1, 1);
  // }
  Agricul_IsDisabledDataClose(state) {
    //console.log(state)
    state.isDisabledData = false;
  },
  Agricul_IsDisabledDataOpen(state) {
    //console.log(state)
    state.isDisabledData = true;
  },

  // Agricul_IsCountableUploadClose(state){
  //     //console.log(state)
  //     state.isCountableUpload = false
  // },
  // Agricul_IsCountableUploadOpen(state){
  //     //console.log(state)
  //     state.isCountableUpload = true
  // },

  Agricul_IsDetailsContentOpen(state) {
    //console.log(state)
    state.isDetailsContent = true;
  },
  Agricul_IsDetailsContentClose(state) {
    //console.log(state)
    state.isDetailsContent = false;
  },

  Agricul_UserName(state, res) {
    state.userName = res.user_name;
  },
  Agricul_UserTaskId(state, res) {
    console.log(res);
    state.userTaskId = res;
  },

  Agricul_InancialType(state, res) {
    state.inancialType = res.result;
    state.inancialTypeSum = res.sum;
  },

  Agricul_upAllData(state, res) {
    state.AgriculData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },
};
