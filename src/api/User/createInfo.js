import http from "../httpConfig";

// 审核  type： 1 初审A，2 初审B，3 复审A，4 复审B
export async function flowType(type) {
  const resType = await http.get(
    `system/ty/loginAction/loginAuth?type=${type}`
  );
  const res = await http.post("system/ty/login/account", resType.data);
  //console.log(res);
  window.localStorage.setItem("token", res.data.data);

  return res;
}

//token
export async function userToken() {
  const token = window.localStorage.getItem("token");
  const userInfo = await http.get("system/ty/login/" + token);
  //console.log(userInfo)
  return userInfo;
}

//权限
export async function getRouters(role) {
  const res = await http.get("sysuser/ty/auths/menus?role=" + role);
  return res.data.data;
}

// 获取审核查询信息
export function getFlowList(params) {
  // const res = await http.get("flow/ty/selectTask", params);
  //   return res.data.data;
  //console.log(params)
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
//审核提交 (不通过)
export function flowNotPassSubmit(id, data) {
  return http({
    url: `/flow/ty/task/cancel/${id}`,
    method: "put",
    data,
  });
}

//审核提交 (驳回)
export function flowBackSubmit(id, data) {
  return http({
    url: `/flow/ty/task/back/${id}`,
    method: "put",
    data,
  });
}
