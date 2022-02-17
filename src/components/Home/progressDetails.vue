<template>
  <div>
    <el-table
      height="320"
      max-height="320"
      :data="progressData"
      border
      :header-cell-style="{
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        color: '#000',
      }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column label="当前环节" prop="flow_name"> </el-table-column>
      <el-table-column label="办理结果" prop="node_name"> </el-table-column>

      <el-table-column label="办理意见" prop="remark"> </el-table-column>

      <el-table-column label="办理时间" prop="create_time"> </el-table-column>

      <!-- <el-table-column
      width="140"
      label="审核意见"
      prop="note">
    </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { progressDetailData } from "../../api/progressDetail";
export default {
  props: ["task_id"],
  data() {
    return {
      progressData: [],
    };
  },
  mounted() {
    progressDetailData(this.task_id).then((res) => {
      //console.log(res)
      this.progressData = res.data.data;
      //this.progressData = res.data.data.nodeList
    });
  },
};
</script>

<style></style>
