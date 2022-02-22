import http from "./httpConfig";

export async function login() {
  const userData = await http.get("system/ty/loginAction/loginAuth");
  //console.log(user)
  const user = JSON.parse(userData.data.userStr);
  const res = await http.post("system/ty/login/account", userData.data);
  //console.log(res)
  window.localStorage.setItem("token", res.data.data);
  window.localStorage.setItem("name", user.user_name);
  return res;
}

export async function userToken() {
  const token = window.localStorage.getItem("token");
  const userInfo = await http.get("system/ty/login/" + token);
  //console.log(userInfo)
  return userInfo;
}

export async function policyData(id) {
  const res = await http.get("notice/ty/info?notice_type=" + id);
  //console.log(user)

  //console.log(res)
  return res.data.data;
}
//首页条数
export async function searchData(page, limit) {
  const res = await http.get(`flow/ty/task?page=${page}&limit=${limit}`);
  //console.log(res)
  return res.data.data;
}

//首页查询
export async function searchDataTitle(title, params) {
  const res = await http.get(`flow/ty/task?${title}=${params}`);
  //console.log(res)
  return res.data.data;
}

//删除数据
export async function deleteData(id) {
  const res = await http.delete(`flow/ty/task/delete/${id}`);
  //console.log(res)
  return res;
}

// 审核  type： 1 初审A，2 初审B，3 复审A，4 复审B
export async function flowType(type) {
  const resType = await http.get(
    `system/ty/loginAction/loginAuth?type=${type}`
  );
  const res = await http.post("system/ty/login/account", resType.data);
  console.log(res);
  window.localStorage.setItem("token", res.data.data);

  return res;
}
