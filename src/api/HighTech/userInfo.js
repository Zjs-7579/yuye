import http from "../httpConfig";

export async function userTaskid() {
  const res = await http.get(`tech/ty/apply/createTaskId`);
  //console.log(res)
  return res;
}
