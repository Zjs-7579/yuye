import http from "./httpConfig";

//附件详情
export async function fileData(id) {
  const res = await http.get(`flow/ty/task/material/${id}`);
  // TODO
  console.log(res, "查看材料");
  return res;
}
