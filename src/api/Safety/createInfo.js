import http from "../httpConfig";

export async function createInfoData(name, parmse) {
  let res;
  // safetyCompany: {
  // safetyShareholders:[
  // safetyFinances:[
  // safetyCauses:[
  // safetySupport:[
  // basic_info: '',
  // safetyImplement:{
  // safetyInvestMent:[
  // safetyEquipment: [{
  // safetyAbstract:

  //单位基本情况
  if (name == "UnitInfo") {
    res = await http.post("safety/ty/task/createCompany", parmse.safetyCompany);
    if (res.status == 200) {
      res = await http.post(
        "safety/ty/apply/createShareholders",
        parmse.safetyShareholders
      );
    }
  }

  //财务状况
  if (name == "InancialInfo") {
    if (parmse.safetyCompany.regist_type == "企业") {
      console.log("企业类");
      res = await http.post(
        "safety/ty/apply/createFinances",
        parmse.safetyFinances
      );
    }
    if (parmse.safetyCompany.regist_type == "事业单位") {
      console.log("事业单位");
      res = await http.post(
        "safety/ty/apply/createCauses",
        parmse.safetyCauses
      );
    }
  }

  //支持情况
  if (name == "HoldInfo") {
    res = await http.post(
      "safety/ty/apply/createSupport",
      parmse.safetySupport
    );
  }
  //项目实施的背景、意义及实施内容（限1500字之内)
  if (name == "ProjectContent") {
    res = await http.post(
      "safety/ty/apply/createImplement",
      parmse.safetyImplement
    );
  }

  //项目承担单位基本情况
  if (name == "ProjectUnitInfo") {
    res = await http.post("safety/ty/apply/createBasicInfo", parmse.basic_info);
  }

  //项目投资情况
  if (name == "ProjectInvest") {
    for (let item of parmse.safetyEquipment) {
      item["project_invest"] = parmse.safetyInvestTotal.project_invest;
      item["support"] = parmse.safetyInvestTotal.support;
    }
    //投资明细
    // console.log(parmse.safetyInvestMent, parmse.safetyEquipment);
    res = await http.post(
      "safety/ty/apply/createInvestment",
      parmse.safetyInvestment
    );
    if (res.status == 200) {
      //设备
      res = await http.post(
        "safety/ty/apply/createEquipment",
        parmse.safetyEquipment
      );
    }
  }

  if (name == "SummarizeInfo") {
    res = await http.post(
      "safety/ty/apply/createAbstract",
      parmse.safetyAbstract
    );
  }

  //console.log(res)
  return res;
  //const res = await http.post("agricultural/ty/task", parmse)
  //return res
}

//总提交接口
export async function createSubmit(parmse) {
  //console.log(parmse)
  const res = await http.put(`flow/ty/submit/${parmse.userTaskId}`);
  return res;
}
