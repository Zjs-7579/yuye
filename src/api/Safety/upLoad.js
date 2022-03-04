import http from "../httpConfig";

//上传附件
export async function UploadFiles(params) {
  //console.log(parmse)
  const res = await http.post("safety/ty/apply/upload", params);
  return res;
}

//删除附件
export async function DeleteFiles(id) {
  console.log(id);
  const res = await http.delete("safety/ty/apply/file/" + id);
  return res;
}

//下载附件
// export async function DownContentText(id) {
//   //console.log(parmse)
//   const res = await http.get(`safety/ty/apply/file/${id}`);
//   return res;
// }

//下载申请书
export async function DownContentText(id) {
  const res = await http.get(`safety/ty/task/report/${id}`);
  return res;
}
