import http from "../httpConfig";

// UnitInfo,
// InancialInfo,
// ResearchInfo,
// HoldInfo,
// TeamInfo,
// ProjectUnitInfo,
// ProjectContent,

// ProjectImplement,
// ProjectBuild,
// ProjectCondition,
// ProjectProgress,
// ProjectBenefit,
// ProjectFund,
// ProjectInvest,
// SummarizeInfo,
// UploadFiles,
// SubmitButton,

export async function createInfoData(name, parmse) {
  let res;

  //单位基本情况
  if (name == "UnitInfo") {
    res = await http.post("tech/ty/apply/createCompany", parmse.techCompany);
    if (res.data.code == 200) {
      res = await http.post(
        "tech/ty/apply/createShareholders",
        parmse.techShareholders
      );
    }
  }

  //财务状况
  if (name == "InancialInfo") {
    if (parmse.techCompany.regist_type == "企业") {
      console.log("企业类");
      res = await http.post(
        "tech/ty/apply/createFinances",
        parmse.techFinances
      );
    }
    if (parmse.techCompany.regist_type == "事业单位") {
      console.log("事业单位");
      res = await http.post("tech/ty/apply/createCauses", parmse.techCauses);
    }
  }

  //三年科研
  if (name == "ResearchInfo") {
    res = await http.post(
      "tech/ty/apply/createScientific",
      parmse.techScientific
    );
  }

  //支持情况
  if (name == "HoldInfo") {
    res = await http.post("tech/ty/apply/createSupport", parmse.techSupport);
  }

  //团队基本情况
  if (name == "TeamInfo") {
    let team = await http.post("tech/ty/apply/createTeam", parmse.techTeam);
    if (team.data.code == 200) {
      res = await http.post(
        "tech/ty/apply/createMember",
        parmse.techMemberList
      );
    }
  }

  //项目实施背景及意义
  if (name == "ProjectUnitInfo") {
    res = await http.post("tech/ty/apply/createBasicInfo", parmse.basic_info);
  }

  //项目实施的背景、意义及实施内容
  if (name == "ProjectContent") {
    res = await http.post(
      "tech/ty/apply/createImplement",
      parmse.techImplement
    );
  }

  //项目实施背景及意义
  if (name == "ProjectImplement") {
    res = await http.post(
      "tech/ty/apply/updatePrjBackground",
      parmse.techImplement
    );
  }

  //项目建设内容
  if (name == "ProjectBuild") {
    res = await http.post(
      "tech/ty/apply/updateConstruction",
      parmse.techImplement
    );
  }

  //项目实施基础和条件
  if (name == "ProjectCondition") {
    res = await http.post(
      "tech/ty/apply/updateBasisCondition",
      parmse.techImplement
    );
  }
  //项目实施进度与管理
  if (name == "ProjectProgress") {
    res = await http.post("tech/ty/apply/createStage", parmse.techStage);
  }

  //项目效益
  if (name == "ProjectBenefit") {
    res = await http.post("tech/ty/apply/createBenefit", parmse.techBenefit);
  }

  //项目效益
  //项目经费-拟购或租赁主要设备清单
  if (name == "ProjectFund") {
    let fund = await http.post("tech/ty/apply/createFunds", parmse.techFunds);
    if (fund.data.code == 200) {
      res = await http.post("tech/ty/apply/createLease", parmse.techLease);
    }
  }

  //项目投资情况
  if (name == "ProjectInvest") {
    for (let item of parmse.techEquipment) {
      item["project_invest"] = parmse.techInvestTotal.project_invest;
      item["support"] = parmse.techInvestTotal.support;
    }
    //投资明细
    console.log(parmse.techInvestMent, parmse.techEquipment);

    res = await http.post(
      "tech/ty/apply/createInvestment",
      parmse.techInvestMent
    );
    if (res.status == 200) {
      //设备
      res = await http.post(
        "tech/ty/apply/createEquipment",
        parmse.techEquipment
      );
    }
  }

  if (name == "SummarizeInfo") {
    res = await http.post("tech/ty/apply/createAbstract", parmse.techAbstract);
  }

  //console.log(res)
  return res;
  //const res = await http.post("agricultural/ty/task", parmse)
  //return res
}
