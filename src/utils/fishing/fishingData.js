import { FishingInspectData } from "../../api/searchDetailsInspect";
import { fishingData } from "./fishingUpData";

async function getFishing(task_id, store) {
  //console.log(store);
  const res = await FishingInspectData(task_id);
  if (res.data.code == 200) {
    //console.log("----------------------------", res);
    store.commit("Fishing_UserTaskId", task_id);
    let result = fishingData(res.data.data);

    store.commit("Fishing_upAllData", result);

    // this.Fishing.OceanDeclaration = result.declaration;

    // this.Fishing.OceanParam.oceanCostList = result.oceanCostList;
    // this.Fishing.OceanParam.oceanSituationList = result.oceanSituationList;
    // this.Fishing.OceanParam.oceanVolumes = result.oceanVolumes;
    return res.data.code;
  }
}

export async function FiJudge(row, router, store) {
  let status = await getFishing(row.task_id, store);
  //console.log(status);
  if (status == 200) {
    // if (
    //   row.task_source == "远洋渔业项目" &&
    //   row.deal_type == "待办" &&
    //   row.declare_status == "审核中" &&
    //   (row.status == "初审" || row.status == "复审")
    // ) {
    //   router.push({
    //     path: `${row.route}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    //   });
    // }
    if (row.task_source == "远洋渔业项目" && row.declare_status == "待提交") {
      router.push({
        path: `/fishingGuidesInfo?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (row.task_source == "远洋渔业项目" && row.declare_status == "审核中") {
      //store.commit("Agricul_IsDetailsContentOpen");
      router.push({
        path: `/fishingGuidesInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  } else {
    status = 0;
  }

  return status;
}

export async function FiDetail(row, router, store) {
  let status = await getFishing(row.task_id, store);
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
