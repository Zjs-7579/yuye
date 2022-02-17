import http from "../httpConfig";

// 获取审核查询信息
export function getFlowList(params) {
  return http({
    url: "/flow/ty/selectTask",
    method: "get",
    params,
  });
}

//审核获取详情 (农业贴息)
export function getDetailsFlowList(id) {
  return http({
    url: `/agricultural/ty/task/${id}`,
    method: "get",
  });
}

//审核获取详情 (现代)
export function getAdvanceDetails(id) {
  return http({
    url: `/modern/ty/apply/${id}`,
    method: "get",
  });
}

//审核提交 (通过)
export function flowPassSubmit(id, data) {
  return http({
    url: `/flow/ty/task/pass/${id}`,
    method: "put",
    data,
  });
}

//审核提交 (退回)
export function flowBackSubmit(id, data) {
  return http({
    url: `/flow/ty/task/back/${id}`,
    method: "put",
    data,
  });
}
