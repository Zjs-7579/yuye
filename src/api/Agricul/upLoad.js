import http from "../httpConfig";

//上传附件
export async function UploadFiles(parmse) {
  //console.log(parmse)
  const res = await http.post("agricultural/ty/task/upload", parmse);
  return res;
}

//删除附件
export async function DeleteFiles(id) {
  console.log(id);
  const res = await http.delete("agricultural/ty/task/file/" + id);
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
  const res = await http.get(`agricultural/ty/task/report/${id}`);
  return res;
}
