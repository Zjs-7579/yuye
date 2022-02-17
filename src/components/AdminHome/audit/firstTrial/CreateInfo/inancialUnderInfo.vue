<template>
  <div class="Moinancial">
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

    <div class="dataRow">
      <el-row v-for="item in inancialUnderData" :key="item.id">
        <el-col :span="2"
          ><div class="grid-content bg-purple">{{ item.id }}</div></el-col
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
              disabled
              type="number"
              v-model="modernCauses[2][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              disabled
              v-model="modernCauses[1][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="modernCauses[0][item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import inancialUnderData from "@/static/ModernData/inancialUnderData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      inancialUnderData: inancialUnderData,
      dataYear: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernCauses: {
      get() {
        return this.Modern.ModernData.modernCauses;
      },
      set(val) {
        this.modernCauses = val;
      },
    },
  },
};
</script>

<style>
.Moinancial .el-tabs__content {
  position: relative;
}
.Moinancial {
  width: 100%;
  height: 75vh;
}

.Moinancial .el-row {
  text-align: center;
  line-height: 40px;
  /* padding: 8px; */
}
.Moinancial .titleRow {
  line-height: 60px;
}
.Moinancial .boldText {
  font-weight: bold;
}
.Moinancial .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}
.Moinancial .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
.Moinancial #disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.Moinancial .dataRow {
  height: 70vh;
  overflow: hidden;
  overflow-y: overlay;
}
.Moinancial .dataRow .el-row {
  border: 1px solid #ccc;
}
.Moinancial .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.Moinancial .titleRow {
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.Moinancial .titleRow .el-col {
  border-right: 1px solid #ccc;
}

.Moinancial input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.Moinancial input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.Moinancial input[type="number"] {
  -moz-appearance: textfield;
}
</style>
