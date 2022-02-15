import http from "../httpConfig";

export async function createInfoData(name, parmse) {
  let res;
  // modernCompany: {
  // modernShareholders:[
  // modernFinances:[
  // modernCauses:[
  // modernSupport:[
  // basic_info: '',
  // modernImplement:{
  // modernInvestMent:[
  // modernEquipment: [{
  // modernAbstract:

  //单位基本情况
  if (name == "UnitInfo") {
    res = await http.post(
      "modern/ty/apply/createCompany",
      parmse.modernCompany
    );
    if (res.status == 200) {
      res = await http.post(
        "modern/ty/apply/createShareholders",
        parmse.modernShareholders
      );
    }
  }

  //财务状况
  if (name == "InancialInfo") {
    if (parmse.modernCompany.regist_type == "企业") {
      console.log("企业类");
      res = await http.post(
        "modern/ty/apply/createFinances",
        parmse.modernFinances
      );
    }
    if (parmse.modernCompany.regist_type == "事业单位") {
      console.log("事业单位");
      res = await http.post(
        "modern/ty/apply/createCauses",
        parmse.modernCauses
      );
    }
  }

  //支持情况
  if (name == "HoldInfo") {
    res = await http.post(
      "modern/ty/apply/createSupport",
      parmse.modernSupport
    );
  }
  //项目实施的背景、意义及实施内容（限1500字之内)
  if (name == "ProjectContent") {
    res = await http.post(
      "modern/ty/apply/createImplement",
      parmse.modernImplement
    );
  }

  //项目承担单位基本情况
  if (name == "ProjectUnitInfo") {
    res = await http.post("modern/ty/apply/createBasicInfo", parmse.basic_info);
  }

  //项目投资情况
  if (name == "ProjectInvest") {
    for (let item of parmse.modernEquipment) {
      item["project_invest"] = parmse.modernInvestTotal.project_invest;
      item["support"] = parmse.modernInvestTotal.support;
    }
    //投资明细
    console.log(parmse.modernInvestMent, parmse.modernEquipment);

    res = await http.post(
      "modern/ty/apply/createInvestMent",
      parmse.modernInvestMent
    );
    if (res.status == 200) {
      //设备
      res = await http.post(
        "modern/ty/apply/createEquipment",
        parmse.modernEquipment
      );
    }
  }

  if (name == "SummarizeInfo") {
    res = await http.post(
      "modern/ty/apply/createAbstart",
      parmse.modernAbstract
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
  const res = await http.put(`flow/ty/task/submit/${parmse.userTaskId}`);
  return res;
}
