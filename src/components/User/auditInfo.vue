<template>
  <div class="audit" v-if="this.$route.params.event == 'todo'">
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row class="titleAudit">审核</el-row>
      <br />
      <el-form-item label="审核结果：">
        <el-select
          v-model="trial.note"
          placeholder="请选择审核结果"
          style="width: 15%"
        >
          <el-option label="通过" value="pass"></el-option>
          <el-option label="不通过" value="notPass"></el-option>
          <el-option label="驳回" value="not"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简单意见：">
        <el-input
          v-model="trial.remark"
          type="textarea"
          rows="5"
          resize="none"
          style="width: 50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细意见：">
        <el-input
          v-model="trial.reason"
          type="textarea"
          rows="5"
          resize="none"
          style="width: 50%"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onFlowSubmit">提交</el-button>
        <el-button @click="clearFrom">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  flowPassSubmit,
  flowNotPassSubmit,
  flowBackSubmit,
} from "../../api/User/createInfo";
export default {
  data() {
    return {
      trial: {
        note: "",
        remark: "",
        reason: "",
      },
    };
  },
  methods: {
    onFlowSubmit() {
      //console.log(this.$route.query.id)
      //console.log(this.$route.params.id)
      if (this.trial.note == "pass") {
        flowPassSubmit(this.$route.query.id, this.trial).then(() => {
          this.$message({
            message: "提交成功",
            type: "success",
          });
          this.$router.push({
            path: `/user/${this.$route.params.id}`,
          });
        });
      }
      if (this.trial.note == "notPass") {
        flowNotPassSubmit(this.$route.query.id, this.trial).then(() => {
          this.$message({
            message: "提交成功",
            type: "success",
          });
          this.$router.push({
            path: `/user/${this.$route.params.id}`,
          });
        });
      }
      if (this.trial.note == "not") {
        flowBackSubmit(this.$route.query.id, this.trial).then(() => {
          this.$message({
            message: "驳回成功",
            type: "success",
          });
          this.$router.push({
            path: `/user/${this.$route.params.id}`,
          });
        });
      }
    },
    clearFrom() {
      this.trial.note = "";
      this.trial.remark = "";
      this.trial.reason = "";
    },
  },
  mounted() {
    console.log(this.$route.params.event);
  },
};
</script>

<style>
.audit {
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
}
.audit .titleAudit {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
}
</style>
