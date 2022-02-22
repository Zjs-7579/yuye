import http from "../httpConfig";

//上传附件
export async function UploadFiles(params) {
  //console.log(parmse)
  const res = await http.post("tech/ty/apply/upload", params);
  return res;
}

//删除附件
export async function DeleteFiles(id) {
  console.log(id);
  const res = await http.delete("tech/ty/apply/file/" + id);
  return res;
}

//下载附件
export async function DownContentFiles(id) {
  //console.log(parmse)
  const res = await http.get(`common/ty/download/${id}`);
  return res;
}

//下载申请书
export async function DownContentText(id) {
  //console.log(parmse)
  const res = await http.get(`tech/ty/apply/report/${id}`);
  return res;
}
