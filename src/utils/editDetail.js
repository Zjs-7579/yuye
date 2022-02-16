export function defaultTodo(row) {
  if (row.task_source == "农业产业化贴息项目" && row.status == "待提交") {
    this.$router.push({
      path: `/agriculInfo?&type=${row.task_source}&id=${row.task_id}`,
    });
  }
  if (row.task_source == "农业产业化贴息项目" && row.status != "待提交") {
    this.$store.commit("Agricul_IsDetailsContentOpen");
    this.$router.push({
      path: `/agriculInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    });
  }

  if (row.task_source == "现代农业项目" && row.status == "待提交") {
    this.$router.push({
      path: `/modernInfo?&type=${row.task_source}&id=${row.task_id}`,
    });
  }
  if (row.task_source == "现代农业项目" && row.status != "待提交") {
    //this.$store.commit("Modern_IsDetailsContentOpen");
    this.$router.push({
      path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    });
  }

  if (
    row.task_source == "农产品质量安全检测能力建设项目" &&
    row.status == "待提交"
  ) {
    this.$router.push({
      path: `/safetyInfo?&type=${row.task_source}&id=${row.task_id}`,
    });
  }
  if (
    row.task_source == "农产品质量安全检测能力建设项目" &&
    row.status != "待提交"
  ) {
    //this.$store.commit("Modern_IsDetailsContentOpen");
    this.$router.push({
      path: `/safetyInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    });
  }

  if (row.task_source == "远洋渔业项目" && row.status == "待提交") {
    this.$router.push({
      path: `/fishingGuidesInfo?&type=${row.task_source}&id=${row.task_id}`,
    });
  }
  if (row.task_source == "远洋渔业项目" && row.status != "待提交") {
    //this.$store.commit("Modern_IsDetailsContentOpen");
    this.$router.push({
      path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
    });
  }
}

// 农业产业化贴息项目
export function agriculTodo() {}
// 现代农业项目
export function modernTodo() {}
// 农产品质量安全检测能力建设项目
export function safetyTodo() {}
// 远洋渔业项目
export function fishingGuidesTodo() {}
