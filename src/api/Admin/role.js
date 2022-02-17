import http from "../httpConfig";

// 获取管理员列表
export function getAdminList(params) {
  return http({
    // url: "/system/ty/user/userstr",
    url: "/sysrole/ty/role/getLike",
    method: "get",
    params,
  });
}

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
// export function getRoleCheck2(params) {
//   return http({
//     url: "/sysuser/ty/auths/getcheck",
//     method: "get",
//     params,
//   });
// }

// 编辑角色权限
export function editAuth(id, data) {
  return http({
    url: `/sysuser/ty/auths/${id}`,
    method: "put",
    data,
  });
}

// 新建角色
export function newAuth(data) {
  return http({
    url: `/sysrole/ty/role`,
    method: "post",
    data,
  });
}

// 删除角色
export function delAuth(id) {
  return http({
    url: `/sysrole/ty/role/${id}`,
    method: "delete",
  });
}
