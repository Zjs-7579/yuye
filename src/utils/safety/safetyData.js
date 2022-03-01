import { SafetyInspectData } from "../../api/searchDetailsInspect";
import { safetyData, safetyFilesData } from "./safetyUpData";

async function getSafety(task_id, store) {
  const res = await SafetyInspectData(task_id);
  if (res.data.code == 200) {
    store.commit("Safety_UserTaskId", task_id);
    let result = safetyData(res.data.data);
    let uploadUrlData = safetyFilesData(res.data.data.images);
    store.commit("Safety_AllClearData", { result, uploadUrlData });
    return res.data.code;
  }
}

export async function SaJudge(row, router, store) {
  let status = await getSafety(row.task_id, store);
  //console.log(status);
  if (status == 200) {
    // if (
    //   row.task_source == "农产品质量安全检测能力建设项目" &&
    //   row.deal_type == "待办" &&
    //   row.declare_status == "审核中" &&
    //   (row.status == "初审" || row.status == "复审")
    // ) {
    //   router.push({
    //     path: `${row.route}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    //   });
    // }
    if (
      row.task_source == "农产品质量安全检测能力建设项目" &&
      row.declare_status == "待提交"
    ) {
      router.push({
        path: `/safety?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (
      row.task_source == "农产品质量安全检测能力建设项目" &&
      row.declare_status == "审核中"
    ) {
      //store.commit("Agricul_IsDetailsContentOpen");
      router.push({
        path: `/safety/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  } else {
    status = 0;
  }

  return status;
}

export async function SaDetail(row, router, store) {
  let status = await getSafety(row.task_id, store);
  if (status == 200) {
    if (router.history.current.name != "UserDetail") {
      router.push({
        path: `${router.history.current.path}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    } else {
      router.push({
        path: `${router.history.current.path}?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  }

  return status;
}
