import http from "../httpConfig";

// export async function createInfoData(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task", parmse)
//     return res
// }

export async function createInfoData(name, parmse) {
  let res;
  //console.log(name, parmse)
  //['UnitInfo', 'InancialInfo', 'PersonInfo', 'HoldInfo', 'CountableInfo', 'UploadFiles']
  //agriculturalCompany: Object
  //agriculturalFinance: Array(3)
  //agriculturalLoan: Array(1)
  //agriculturalPers: (...)
  //agriculturalShareholder: (...)
  //agriculturalSupport:
  //单位基本情况
  if (name == "UnitInfo") {
    res = await http.post(
      "agricultural/ty/task/createCompany",
      parmse.agriculturalCompany
    );
  }
  //财务状况
  if (name == "InancialInfo") {
    res = await http.post(
      "agricultural/ty/task/createFinance",
      parmse.agriculturalFinance
    );
  }
  //人员基本情况
  if (name == "PersonInfo") {
    let Share = await http.post(
      "agricultural/ty/task/createShareholder",
      parmse.agriculturalShareholder
    );
    if (Share.status == 200) {
      res = await http.post(
        "agricultural/ty/task/createPers",
        parmse.agriculturalPers
      );
    }
  }
  //股东情况
  // if(name == 'PersonShareholder'){

  // }
  //支持情况
  if (name == "HoldInfo") {
    res = await http.post(
      "agricultural/ty/task/createSupport",
      parmse.agriculturalSupport
    );
  }
  //贷款情况
  if (name == "CountableInfo") {
    res = await http.post(
      "agricultural/ty/task/createLoan",
      parmse.agriculturalLoan
    );
  }

  console.log(res);
  return res;
  //const res = await http.post("agricultural/ty/task", parmse)
  //return res
}

//总提交接口
export async function createSubmit(parmse) {
  //console.log(parmse)
  const res = await http.put(`flow/ty/task/submit/${parmse.userTaskId}`);
  return res;
}

// export async function createFinance(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task/createFinance", parmse)
//     return res
// }

// export async function createPers(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task/createPers", parmse)
//     return res
// }

// export async function createShareholder(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task/createShareholder", parmse)
//     return res
// }

// export async function createSupport(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task/createSupport", parmse)
//     return res
// }

// export async function createLoan(parmse){
//     console.log(parmse)
//     const res = await http.post("agricultural/ty/task/createLoan", parmse)
//     return res
// }
