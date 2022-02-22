import { AGdetailsInspectData } from "../../api/searchDetailsInspect";
import { agriculData, agriculFilesData } from "./agriculUpData.js";

async function getAuricula(task_id, store) {
  //console.log(store);
  const res = await AGdetailsInspectData(task_id);
  if (res.data.code == 200) {
    //console.log("----------------------------", res);
    let result = agriculData(res.data.data);
    let uploadUrlData = agriculFilesData(res.data.data.images);
    console.log("----------------------------", uploadUrlData);
    store.commit("Agricul_AllClearData", { result, uploadUrlData });
    store.commit("Agricul_UserTaskId", task_id);
    return res.data.code;
  }

  //   AGdetailsInspectData(task_id).then((res) => {
  //     if (res.data.code == 200) {
  //       console.log("----------------------------", res);
  //       let result = agriculData(res.data.data);
  //       let uploadUrlData = agriculFilesData(res.data.data.images);
  //       console.log("----------------------------", uploadUrlData);
  //       store.commit("Agricul_AllClearData", { result, uploadUrlData });
  //       store.commit("Agricul_UserTaskId", task_id);
  //     }
  //   });
}

export async function AgJudge(row, router, store) {
  let status = await getAuricula(row.task_id, store);
  //console.log(status);
  if (status == 200) {
    if (row.task_source == "农业产业化贴息项目" && row.status == "待提交") {
      router.push({
        path: `/agriculInfo?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (row.task_source == "农业产业化贴息项目" && row.status != "待提交") {
      store.commit("Agricul_IsDetailsContentOpen");
      router.push({
        path: `/agriculInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  } else {
    status = 0;
  }

  return status;
}
