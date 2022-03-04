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
  Safety_IsDisabledDataOpen(state) {
    state.isDisabledData = true;
  },
  Safety_IsDisabledDataClose(state) {
    state.isDisabledData = false;
  },

  Safety_IsDetailsContentClose(state) {
    state.isDetailsContent = false;
  },
  Safety_IsDetailsContentOpen(state) {
    state.isDetailsContent = true;
  },

  Safety_AllClearData(state, res) {
    state.SafetyData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },

  // Safety_ClearAllData(state) {
  //   //console.log('aaaa')
  //   for (let item in state.SafetyData) {
  //     if (state.SafetyData[item].constructor == Array) {
  //       for (let res of state.SafetyData[item]) {
  //         for (let item in res) {
  //           if (item == "inv_type") {
  //             console.log(res[item]);
  //             break;
  //           } else {
  //             res[item] = "";
  //           }
  //         }
  //       }
  //     }
  //     if (state.SafetyData[item].constructor == Object) {
  //       for (let res in state.SafetyData[item]) {
  //         state.SafetyData[item][res] = "";
  //       }
  //     }
  //     //    for(let res in state.SafetyData[item]){
  //     //     state.SafetyData[item][res] = ""
  //     //    }
  //     console.log(state.SafetyData);
  //   }
  // },
};
