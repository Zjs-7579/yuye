import http from "./httpConfig";

export async function progressDetailData(id) {
  //const res = await http.get(`flow/ty/task/advance/${id}`)
  const res = await http.get(`flow/ty/task/speed/${id}`);
  //console.log(res)
  return res;
}

export async function downProgressDetailData(id) {
  const res = await http.get(`common/ty/download/${id}`);
  //console.log(res)
  return res;
}
