import http from "../httpConfig";

// 获取用户信息
export function getUserList(params) {
  return http({
    url: "/system/ty/user/userstr",
    // url: "/sysrole/ty/role/getLike",
    method: "get",
    params,
  });
}
// 获取用户信息2
export function getUserList2(params) {
  return http({
    // url: "/system/ty/user/userstr",
    url: "/sysrole/ty/role/getLike",
    method: "get",
    params,
  });
}

// 添加用户信息
export function createUser(data) {
  return http({
    url: "/sysuser/ty/user",
    method: "post",
    data,
  });
}

// 删除当前用户信息
export function deleteUser(id) {
  return http({
    url: `/sysuser/ty/user/${id}`,
    method: "delete",
  });
}

//更新当前用户信息
export function updateUser(id, data) {
  return http({
    url: `/sysuser/ty/user/${id}`,
    method: "put",
    data,
  });
}
