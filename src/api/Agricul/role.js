import http from "../httpConfig";
// 获取系统角色所有权限
export function getAuthorityRoleId() {
  return http({
    url: "sysuser/ty/auths",
    method: "get",
  });
}
// 获取带指定角色权限
export function getRoleCheck(params) {
  return http({
    url: "sysuser/ty/auths/getcheck",
    method: "get",
    params,
  });
}

// 获取带指定角色权限2
export function getRoleCheck2(params) {
  return http({
    url: "/sysuser/ty/auths/getcheck",
    method: "get",
    params,
  });
}

// 获取用户信息
export function getUserList(params) {
  return http({
    url: "/system/ty/user/userstr",
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

// 编辑角色权限
export function editauth(id, data) {
  return http({
    url: `/sysuser/ty/auths/${id}`,
    method: "put",
    data,
  });
}

// 新建角色
export function newauth(data) {
  return http({
    url: `/sysrole/ty/role`,
    method: "post",
    data,
  });
}

// 删除角色
export function delauth(id) {
  return http({
    url: `/sysrole/ty/role/${id}`,
    method: "delete",
  });
}
