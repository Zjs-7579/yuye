<template>
  <div class="MoboxTitle">
    <el-row class="title">
            项目实施基础和条件
        </el-row>
    <p>
      1．简述项目实施具体的支持条件，包括：项目建设场地、已有主要设备、研究平台、
      获得过的与项目相关的知识产权成果、承担过与项目相关的项目和产品以及人员保障等；
    </p>
    <p>
      2．资金筹集方案（说明资金来源）；
    </p>
    <p>
      3．项目的现有进展情况，项目已完成的前期工作（如研发、中试、已签订合同等情况）。
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="25"
      :disabled="isDisabledData"
      v-model="techImplement.basis_condition"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["HighTech"]),
    techImplement: {
      get() {
        this.HighTech.HighTechData.techImplement['task_id'] = this.HighTech.userTaskId
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.techImplement;
      },
      set(val) {
        this.basic_info = val;
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
}
.MoboxTitle .title{
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
  padding: 35px 0;
}
</style>