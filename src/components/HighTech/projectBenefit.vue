<template>
  <div class="MoboxTitle">
    <el-row class="title"> 项目效益 （事业）</el-row>
    <p>1、项目预期技术指标、经济和社会效益;</p>
    <p>
      2、技术指标：项目预期达到的技术标准、技术水平、填补空白、知识产权成果（专利、著作、软件、标准等）;
    </p>
    <p>
      3、经济效益：项目实施、推广、应用实现的业务量增长，年产量、销售收入、利润、纳税额、行业引领、产业化前景、示范带动等方面作用）;
    </p>
    <br />
    <p>4、社会效益（增加就业、节约能源、促进民生等）。</p>
    <el-form
      :model="techBenefit"
      ref="unitForm"
      :rules="rules"
      label-width="400px"
      :disabled="isDisabledData"
      class="demo-ruleForm"
      label-position="top"
    >
      <el-form-item label="项目预期成果的表现形式：" prop="prj_expression">
        <el-input v-model="techBenefit.prj_expression"></el-input>
      </el-form-item>

      <el-form-item label="项目执行期内新增的就业人数：" prop="employment_num">
        <el-input v-model="techBenefit.employment_num"></el-input>
      </el-form-item>

      <el-form-item
        label="项目执行期内培养的人才数（博士/硕士/工程师/技术工人）:"
        prop="talents_num"
      >
        <el-input v-model="techBenefit.talents_num"></el-input>
      </el-form-item>

      <el-form-item
        label="项目执行期内产生的累计净利润/累计产品销售收入（万元）:"
        prop="revenue"
      >
        <el-input v-model="techBenefit.revenue"></el-input>
      </el-form-item>

      <el-form-item
        label="项目执行期内产生的累计纳税额/带动的资金投入（万元）:"
        prop="investment"
      >
        <el-input v-model="techBenefit.investment"></el-input>
      </el-form-item>
      <el-form-item
        label="项目执行期内申请的专利数（发明专利/实用新型/外观设计）:"
        prop="patent_num"
      >
        <el-input v-model="techBenefit.patent_num"></el-input>
      </el-form-item>
      <el-form-item
        label="项目执行期内发表的论文数（论文总数/SCI检索数/EI检索数）:"
        prop="paper_num"
      >
        <el-input v-model="techBenefit.paper_num"></el-input>
      </el-form-item>
      <el-form-item
        label="项目执行期内实现的主要经济指标、学术指标、技术指标："
        prop="prj_index"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="15"
          :disabled="isDisabledData"
          v-model="techBenefit.prj_index"
        ></el-input>
      </el-form-item>
      <el-form-item label="项目预期目标:" prop="prj_goal">
        <el-input
          type="textarea"
          resize="none"
          rows="15"
          :disabled="isDisabledData"
          v-model="techBenefit.prj_goal"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ProjectBenefitVaild } from "./../../utils/validator";
export default {
  data() {
    return {
      rules: ProjectBenefitVaild,
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techBenefit: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techBenefit["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.techBenefit.creator = this.Modern.userName
        return this.HighTech.HighTechData.techBenefit;
      },
      set(val) {
        this.techBenefit = val;
      },
    },
    isDisabledData: {
      get() {
        return this.HighTech.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
};
</script>

<style>
.MoboxTitle {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.MoboxTitle .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.MoboxTitle p {
  font-weight: bold;
  font-size: 20px;
  /* padding: 15px 0; */
}
</style>
