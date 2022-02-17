<template>
  <div class="Moinvest">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="250px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目总投资:">
            <el-input disabled v-model="ruleForm.project_invest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请市财政资助额:">
            <el-input disabled v-model="ruleForm.user"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <ProjectInvestDetailed
      title="建筑工程类投资明细"
      dataForm="constructForm"
    ></ProjectInvestDetailed>

    <ProjectInvestDetailed
      title="生产设施建设类投资明细"
      dataForm="effectForm"
    ></ProjectInvestDetailed>

    <ProjectInvestDetailed
      title="仪器、设备类投资明细"
      dataForm="equipForm"
    ></ProjectInvestDetailed>

    <ProjectInvestEquip></ProjectInvestEquip>
  </div>
</template>

<script>
import ProjectInvestDetailed from "./projectInvestDetailed.vue";
import ProjectInvestEquip from "./projectInvestEquip.vue";
export default {
  data() {
    return {
      ruleForm: {
        project_invest: "",
        support: "",
      },
    };
  },
  components: {
    ProjectInvestDetailed,
    ProjectInvestEquip,
  },
};
</script>

<style>
.Moinvest {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}

.Moinvest .demo-ruleForm .el-form-item__label {
  text-align: center;
  height: 62px;
  line-height: 62px;
  border: 1px solid #ccc;
  font-weight: bold;
}
.Moinvest .demo-ruleForm .el-form-item__content {
  text-align: center;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.Moinvest .demo-ruleForm .el-form-item__content .el-input__inner {
  border: none;
}
</style>
