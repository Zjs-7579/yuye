export default {
  Fishing_UserName(state, res) {
    state.userName = res.user_name;
  },
  Fishing_UserTaskId(state, res) {
    //console.log(res)
    state.userTaskId = res;
  },

  Fishing_IsDisabledDataOpen(state) {
    state.isDisabledData = true;
  },
  Fishing_IsDisabledDataClose(state) {
    state.isDisabledData = false;
  },

  Fishing_ClearAllData(state) {
    for (let item in state.OceanParam) {
      if (
        Object.prototype.toString.call(state.OceanParam[item]) ===
        "[object Array]"
      ) {
        for (let res of state.OceanParam[item]) {
          for (let item in res) {
            res[item] = "";
          }
        }
      }
      // if(Object.prototype.toString.call(Data.AgriculData[item]) === '[object Object]'){
      //      for(let res in Data.AgriculData[item]){
      //         Data.AgriculData[item][res] = ""
      //     }
      //  }
    }

    for (let item in state.OceanDeclaration) {
      //console.log(Object.prototype.toString.call(state.OceanDeclaration[item]))
      if (
        Object.prototype.toString.call(state.OceanDeclaration[item]) ===
        "[object String]"
      ) {
        console.log(state.OceanDeclaration[item]);
        state.OceanDeclaration[item] = "";
      }

      if (
        Object.prototype.toString.call(state.OceanDeclaration[item]) ===
        "[object Object]"
      ) {
        for (let res in state.OceanDeclaration[item]) {
          state.OceanDeclaration[item][res] = "";
        }
      }
    }
  },
  Fishing_upAllData(state, result) {
    state.OceanDeclaration = result.declaration;

    state.OceanParam.oceanCostList = result.oceanCostList;
    state.OceanParam.oceanSituationList = result.oceanSituationList;
    state.OceanParam.oceanReturns = result.oceanReturns;
    state.OceanParam.oceanPurchases = result.oceanPurchases;
    state.OceanParam.oceanVolumes = result.oceanVolumes;
  },
};
