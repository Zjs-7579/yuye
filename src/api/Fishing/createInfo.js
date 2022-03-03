import http from "../httpConfig";

//远洋申请表
export async function createInfoApplyData(params) {
  const res = await http.post(
    "ocean/ty/pelagic/createOceanDeclaration",
    params
  );

  //console.log(res)
  return res;
  //const res = await http.post("agricultural/ty/task", parmse)
  //return res
}

//远洋统计表
export async function createInfoStatisticsData(title, params) {
  let res;
  if (title == "建造远洋渔船" || title == "购买远洋渔船") {
    res = await http.post(
      "ocean/ty/pelagic/createOceanSituation",
      params.oceanSituationList
    );
  }
  // TODO
  if (title == "建造南沙骨干渔船") {
    res = await http.post(
      "ocean/ty/pelagic/createOceanPurchase",
      params.oceanPurchases
    );
  }
  if (title == "境外渔业资源使用费") {
    res = await http.post(
      "ocean/ty/pelagic/createOceanCost",
      params.oceanCostList
    );
  }
  if (title == "自捕远洋海产品回运费") {
    res = await http.post(
      "ocean/ty/pelagic/createOceanVolume",
      params.oceanVolumes
    );
  }

  if (title == "自捕南沙海产品回运费") {
    res = await http.post(
      "ocean/ty/pelagic/createOceanReturn",
      params.oceanReturns
    );
  }

  //console.log(res)
  return res;
  //const res = await http.post("agricultural/ty/task", parmse)
  //return res
}

//总提交按钮
export async function createSubmit(parmse) {
  //console.log(parmse)
  const res = await http.put(`flow/ty/task/submit/${parmse.userTaskId}`);
  return res;
}
