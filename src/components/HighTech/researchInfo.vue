<template>
  <div class="ReInimical">
    <el-row class="title"> 单位近三年科研活动情况 </el-row>
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">项目名称</div></el-col
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

    <div class="dataRow">
      <el-row v-for="item in researchDataList" :key="item.id">
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
              v-model="techScientific[0][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              :disabled="isDisabledData"
              v-model="techScientific[1][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              :disabled="isDisabledData"
              v-model="techScientific[2][item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import researchDataList from "../../static/HighTechData/researchData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      researchDataList: researchDataList,
      dataYear: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techScientific: {
      get() {
        return this.HighTech.HighTechData.techScientific;
      },
      set(val) {
        this.techScientific = val;
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
    techScientific: {
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
.ReInimical .el-tabs__content {
  position: relative;
}
.ReInimical {
  width: 100%;
  height: 75vh;
  display: block;
}
.ReInimical .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px !important;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.ReInimical .titleRow {
  text-align: center;
  line-height: 60px;
}
.ReInimical .boldText {
  font-weight: bold;
}
.ReInimical .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}
.ReInimical .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
.ReInimical #disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.ReInimical .dataRow {
  height: 62vh;
  overflow: hidden;
  overflow-y: overlay;
}
.ReInimical .dataRow .el-row {
  border: 1px solid #ccc;
  line-height: 40px;
}
.ReInimical .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.ReInimical .titleRow {
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.ReInimical .titleRow .el-col {
  border-right: 1px solid #ccc;
}

.ReInimical input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.ReInimical input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.ReInimical input[type="number"] {
  -moz-appearance: textfield;
}
</style>
