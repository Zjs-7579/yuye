import http from "../httpConfig";

export async function userTaskid() {
  const res = await http.get(`ocean/ty/pelagic/createTaskId`);
  //console.log(res)
  return res;
}
