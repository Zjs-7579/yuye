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

  if (status == 200) {
    // if (
    //   row.task_source == "现代农业项目" &&
    //   row.deal_type == "待办" &&
    //   row.declare_status == "审核中" &&
    //   (row.status == "初审" || row.status == "复审")
    // ) {
    //   router.push({
    //     path: `${row.route}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    //   });
    // }
    if (row.task_source == "现代农业项目" && row.declare_status == "待提交") {
      router.push({
        path: `/modernInfo?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (row.task_source == "现代农业项目" && row.declare_status == "审核中") {
      store.commit("Modern_IsDetailsContentOpen");
      router.push({
        path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  } else {
    status = 0;
  }
  console.log(row, router.history.current.path, store, status);
  return status;
}

export async function MoDetail(row, router, store) {
  console.log(router);
  let status = await getModern(row.task_id, store);
  if (status == 200) {
    if (router.history.current.name == "UserDetail") {
      router.push({
        path: `${router.history.current.path}?&type=${row.task_source}&id=${row.task_id}`,
        //path: `${router.history.current.fullPath}`,
        //path: `${router.history.current.path}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (router.history.current.name == null) {
      router.push({
        path: `${router.history.current.path}?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  }

  return status;
}
