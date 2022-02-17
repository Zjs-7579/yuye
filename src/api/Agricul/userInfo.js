import http from "../httpConfig";

export async function userTaskid() {
  const res = await http.get(`agricultural/ty/task/createTaskId`);
  //console.log(res)
  return res;
}
