<template>
  <div class="UnderInimical">
    <el-row class="title"> 单位近三年财务状况（事业类填报） </el-row>
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">指标名称</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">{{ dataYear - 3 }}年</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">{{ dataYear - 2 }}年</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">{{ dataYear - 1 }}年</div></el-col
      >
    </el-row>

    <div class="dataUnderRow">
      <el-row v-for="item in inancialUnderData" :key="item.id">
        <el-col :span="2"
          ><div class="grid-content bg-purple" style="text-align: center">
            {{ item.id }}
          </div></el-col
        >
        <el-col :span="7"
          ><div
            class="grid-content bg-purple"
            style="text-align: left; padding-left: 8px"
          >
            {{ item.type }}
          </div>
        </el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              :disabled="isDisabledData"
              v-model="techCauses[2][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              :disabled="isDisabledData"
              v-model="techCauses[1][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              :disabled="isDisabledData"
              v-model="techCauses[0][item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import inancialUnderData from "../../static/ModernData/inancialUnderData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      inancialUnderData: inancialUnderData,
      dataYear: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techCauses: {
      get() {
        return this.HighTech.HighTechData.techCauses;
      },
      set(val) {
        this.techCauses = val;
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
  watch: {
    techCauses: {
      handler(val) {
        let year = 3;
        for (let item of val) {
          item["task_id"] = this.HighTech.userTaskId;
          //item.creator = this.Modern.userName

          item.pro_year = this.dataYear - year;
          year--;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.UnderInimical .el-tabs__content {
  position: relative;
}
.UnderInimical {
  width: 100%;
  height: 75vh;
}
.UnderInimical .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px !important;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.UnderInimical .titleRow {
  text-align: center;
  line-height: 60px;
}
.UnderInimical .boldText {
  font-weight: bold;
}
.UnderInimical .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}
.UnderInimical .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
.UnderInimical #disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.UnderInimical .dataUnderRow {
  height: 62vh;
  overflow: hidden;
  overflow-y: overlay;
}
.UnderInimical .dataUnderRow .el-row {
  border: 1px solid #ccc;
  line-height: 40px;
}
.UnderInimical .dataUnderRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.UnderInimical .titleRow {
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.UnderInimical .titleRow .el-col {
  border-right: 1px solid #ccc;
}
.UnderInimical .dataUnderRow .el-row:nth-child(5) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(6) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(7) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(11) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(12) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(13) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(16) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(17) .el-col:nth-child(2),
.UnderInimical .dataUnderRow .el-row:nth-child(18) .el-col:nth-child(2) {
  padding-left: 2em;
}

.UnderInimical input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.UnderInimical input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.UnderInimical input[type="number"] {
  -moz-appearance: textfield;
}
</style>
