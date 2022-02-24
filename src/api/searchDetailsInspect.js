import http from "./httpConfig";

//贴息详情
export async function AGdetailsInspectData(id) {
  const res = await http.get(`agricultural/ty/task/${id}`);
  //console.log(res)
  return res;
}
//现代详情
export async function MOdetailsInspectData(id) {
  const res = await http.get(`modern/ty/apply/${id}`);
  //console.log(res)
  return res;
}

//高新技术
export async function HighTechInspectData(id) {
  const res = await http.get(`tech/ty/apply/${id}`);
  //console.log(res)
  return res;
}

//渔业详情
export async function FishingInspectData(id) {
  const res = await http.get(`ocean/ty/pelagic/${id}`);
  //console.log(res)
  return res;
}

//安全详情
export async function SafetyInspectData(id) {
  const res = await http.get(`safety/ty/apply/${id}`);
  return res;
}
