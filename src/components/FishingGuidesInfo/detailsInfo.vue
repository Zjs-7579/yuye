<template>
  <div class="DataContent">
    <ApplyInfo></ApplyInfo>
    <StatisticalInfo></StatisticalInfo>
    <UploadFiles></UploadFiles>
    <div class="allBtn">
      <el-button type="primary" @click="SubmitData">提交</el-button>
    </div>
  </div>
</template>

<script>
import ApplyInfo from "./applyInfo.vue";
import StatisticalInfo from "./statisticalInfo.vue";
import UploadFiles from "./uploadFiles.vue";
import { createSubmit } from "../../api/Fishing/createInfo";
//import UploadFilesList from "./UploadFilesList.vue"
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["Fishing"]),
  },
  components: {
    ApplyInfo,
    StatisticalInfo,
    UploadFiles,
  },
  methods: {
    SubmitData() {
      this.$confirm("数据是否确认无误，是否上传提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          createSubmit(this.Fishing).then(
            this.$message({
              type: "success",
              message: "表单提交成功!",
            }),
            this.$store.commit("Fishing_IsDisabledDataClose"),

            setTimeout(
              this.$router.push({
                path: "/home",
              }),
              1000
            )
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
  },
  mounted() {
    //agriculClearData(this.Agricul)
    //console.log(this.Agricul)
    //console.log(this.$router.query.id)
    if (!this.$router.query.id) {
      this.$store.commit("Fishing_ClearAllData");
    }
  },
};
</script>

<style></style>
