import { MOdetailsInspectData } from "../../api/searchDetailsInspect";
import { modernData, modernFilesData } from "./modernUpData.js";

async function getModern(task_id, store) {
  //console.log(store);
  const res = await MOdetailsInspectData(task_id);
  if (res.data.code == 200) {
    //console.log("----------------------------", res);
    let result = modernData(res.data.data);
    //console.log("000000", result);
    let uploadUrlData = modernFilesData(res.data.data.images);
    //this.Modern.ModernData = result
    store.commit("Modern_UserTaskId", task_id);
    store.commit("Modern_AllClearData", { result, uploadUrlData });
    return res.data.code;
  }
}

export async function MoJudge(row, router, store) {
  let status = await getModern(row.task_id, store);
  //console.log(status);
  if (status == 200) {
    if (row.task_source == "现代农业项目" && row.status == "待提交") {
      router.push({
        path: `/modernInfo?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (row.task_source == "现代农业项目" && row.status != "待提交") {
      store.commit("Modern_IsDetailsContentOpen");
      router.push({
        path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  } else {
    status = 0;
  }

  return status;
}
