import http from "../httpConfig";

//上传附件
export async function UploadFiles(parmse) {
  //console.log(parmse)
  const res = await http.post("ocean/ty/task/upload", parmse);
  return res;
}

//删除附件
export async function DeleteFiles(id) {
  console.log(id);
  const res = await http.delete("ocean/ty/task/file/" + id);
  return res;
}

//下载附件
export async function DownContentText(id) {
  //console.log(parmse)
  const res = await http.get(`ocean/ty/task/report/${id}`);
  return res;
}
