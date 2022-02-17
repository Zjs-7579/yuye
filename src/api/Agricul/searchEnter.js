import http from "../httpConfig";

export async function searchEnterInfo(page, limit) {
  const res = await http.get(`flow/ty/task?page=${page}&limit=${limit}`);
  //console.log(res)
  return res;
}
