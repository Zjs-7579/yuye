import {
  AGdetailsInspectData,
  MOdetailsInspectData,
  FishingDetailsInspectData,
  SadetailsInspectData,
} from "../api/searchDetailsInspect";
import { agriculData, agriculFilesData } from "./agriculUpData";
import { modernData, modernFilesData } from "./modernUpData";
// import { fishingData, modernFilesData } from "../fishingUpData";

export function agriculTodo(row, router, store) {
  AGdetailsInspectData(row.task_id).then((res) => {
    let result = agriculData(res.data.data);
    let uploadUrlData = agriculFilesData(res.data.data.images);

    store.commit("Agricul_AllClearData", { result, uploadUrlData });
    store.commit("Agricul_UserTaskId", row.task_id);
    if (res.data.code == 200) {
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
    }
  });
}

export function modernTodo(row, router, store) {
  MOdetailsInspectData(row.task_id).then((res) => {
    let result = modernData(res.data.data);
    let uploadUrlData = modernFilesData(res.data.data.images);

    store.commit("Modern_AllClearData", { result, uploadUrlData });
    store.commit("Modern_UserTaskId", row.task_id);
    if (row.task_source == "现代农业项目" && row.status == "待提交") {
      router.push({
        path: `/modernInfo?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
    if (row.task_source == "现代农业项目" && row.status != "待提交") {
      router.push({
        path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      });
    }
  });
}

// export function fishingTodo(row, router, store) {
//   FishingDetailsInspectData(row.task_id).then((res) => {
//     let result = fishingData(res.data.data);
//     let uploadUrlData = modernFilesData(res.data.data.images);

//     store.commit("Modern_AllClearData", { result, uploadUrlData });
//     store.commit("Modern_UserTaskId", row.task_id);
//     if (row.task_source == "现代农业项目" && row.status == "待提交") {
//       router.push({
//         path: `/modernInfo?&type=${row.task_source}&id=${row.task_id}`,
//       });
//     }
//     if (row.task_source == "现代农业项目" && row.status != "待提交") {
//       router.push({
//         path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
//       });
//     }
//   });
// }
