import http from "../httpConfig";

export async function UnitInfoData(text) {
  const res = await http.get(
    "dictionaries/ty/dictionarieslist?dic_type=" + text
  );
  return res.data.data;
}
