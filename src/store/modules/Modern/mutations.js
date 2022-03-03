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
  Modern_IsDisabledDataOpen(state) {
    state.isDisabledData = true;
  },
  Modern_IsDisabledDataClose(state) {
    state.isDisabledData = false;
  },

  Modern_IsDetailsContentClose(state) {
    state.isDetailsContent = false;
  },
  Modern_IsDetailsContentOpen(state) {
    state.isDetailsContent = true;
  },

  Modern_AllClearData(state, res) {
    state.ModernData = res.result;
    state.uploadUrlData = res.uploadUrlData;
  },

  // Modern_ClearAllData(state) {
  //   //console.log('aaaa')
  //   for (let item in state.ModernData) {
  //     if (state.ModernData[item].constructor == Array) {
  //       for (let res of state.ModernData[item]) {
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
  //     if (state.ModernData[item].constructor == Object) {
  //       for (let res in state.ModernData[item]) {
  //         state.ModernData[item][res] = "";
  //       }
  //     }
  //     //    for(let res in state.ModernData[item]){
  //     //     state.ModernData[item][res] = ""
  //     //    }
  //     console.log(state.ModernData);
  //   }
  // },
};
