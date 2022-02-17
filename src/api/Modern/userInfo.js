import http from "../httpConfig";

export async function userTaskid() {
  const res = await http.get(`modern/ty/apply/createTaskId`);
  //console.log(res)
  return res;
}
