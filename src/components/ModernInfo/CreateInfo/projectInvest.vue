<template>
  <div class="MoInvest">
    <el-row class="title"> 项目投资情况 </el-row>
    <el-form
      :model="modernInvestTotal"
      ref="InvestTotal"
      :rules="rules"
      :disabled="isDisabledData"
      label-width="250px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目总投资:" prop="project_invest">
            <el-input v-model="modernInvestTotal.project_invest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请市财政资助额:" prop="support">
            <el-input v-model="modernInvestTotal.support"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <ProjectInvestDetailed
      title="建筑工程类投资明细"
      :data="modernInvestMent.jz"
    ></ProjectInvestDetailed>

    <ProjectInvestDetailed
      title="生产设施建设类投资明细"
      :data="modernInvestMent.sc"
    ></ProjectInvestDetailed>

    <ProjectInvestDetailed
      title="仪器、设备类投资明细"
      :data="modernInvestMent.yq"
    ></ProjectInvestDetailed>

    <ProjectInvestEquip></ProjectInvestEquip>
  </div>
</template>

<script>
import ProjectInvestDetailed from "./projectInvestDetailed.vue";
import ProjectInvestEquip from "./projectInvestEquip.vue";
import { ModernSummarize } from "../../../utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // InvestTotal: {
      //   project_invest: "",
      //   support: "",
      // }
      rules: ModernSummarize,
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernInvestTotal: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Modern.ModernData.modernInvestTotal["task_id"] =
          this.Modern.userTaskId;
        return this.Modern.ModernData.modernInvestTotal;
      },
      set(val) {
        this.modernInvestTotal = val;
      },
    },
    modernInvestMent: {
      get() {
        let jz = this.Modern.ModernData.modernInvestMent.filter((res) => {
          return res.inv_type == "建筑工程类投资明细";
        });
        let sc = this.Modern.ModernData.modernInvestMent.filter((res) => {
          return res.inv_type == "生产设施建设类投资明细";
        });
        let yq = this.Modern.ModernData.modernInvestMent.filter((res) => {
          return res.inv_type == "仪器、设备类投资明细";
        });
        return { jz, sc, yq };
      },
      set(val) {
        this.modernInvestMent = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Modern.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  components: {
    ProjectInvestDetailed,
    ProjectInvestEquip,
  },
  // watch:{
  //   modernInvestMent:{
  //     handler(val) {
  //       for(let item of val){
  //         item['project_invest'] = this.InvestTotal.project_invest
  //         item['support'] = this.InvestTotal.support
  //       }
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style>
.MoInvest {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.MoInvest .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.MoInvest .demo-ruleForm .el-form-item__label {
  text-align: center;
  height: 62px;
  line-height: 62px;
  border: 1px solid #ccc;
  font-weight: bold;
}
.MoInvest .demo-ruleForm .el-form-item__content {
  text-align: center;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.MoInvest .demo-ruleForm .el-form-item__content .el-input__inner {
  border: none;
}
</style>
