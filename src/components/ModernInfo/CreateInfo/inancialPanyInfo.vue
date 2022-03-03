<template>
  <div class="Moinancial">
    <el-row class="title"> 单位近三年财务状况（企业类填报） </el-row>
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">项目类别</div></el-col
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

    <div class="dataPanRow">
      <el-row v-for="(item, index) in inancialPanyList" :key="item.id">
        <el-col :span="2"
          ><div class="grid-content bg-purple" style="text-align: center">
            {{ item.id }}
          </div></el-col
        >
        <el-col :span="7"
          ><div
            class="grid-content bg-purple asterisk"
            style="text-align: left; padding-left: 1em"
            :class="boldFrom.includes(index) ? 'boldText' : ''"
          >
            {{ item.type }}
          </div>
        </el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              :disabled="
                index == 6 || index == 12 || index == 18 ? true : isDisabledData
              "
              type="number"
              v-model="modernFinances[0][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              :disabled="
                index == 6 || index == 12 || index == 18 ? true : isDisabledData
              "
              type="number"
              v-model="modernFinances[1][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              :disabled="
                index == 6 || index == 12 || index == 18 ? true : isDisabledData
              "
              type="number"
              v-model="modernFinances[2][item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import inancialPanyList from "../../../static/ModernData/inancialPanyData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      inancialPanyList: inancialPanyList,
      dataYear: new Date().getFullYear(),
      boldFrom: [0, 3, 4, 6, 9, 12, 18, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernFinances: {
      get() {
        return this.Modern.ModernData.modernFinances;
      },
      set(val) {
        this.modernFinances = val;
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
  methods: {},
  watch: {
    modernFinances: {
      handler(val) {
        let year = 3;
        for (let item of val) {
          item["task_id"] = this.Modern.userTaskId;
          //item.creator = this.Modern.userName

          item.pro_year = this.dataYear - year;
          //13=14+15+16+17+18
          let income_tax = item.income_tax * 1;
          let personal_tax = item.personal_tax * 1;
          let value_added_tax = item.value_added_tax * 1;
          let turnover = item.turnover * 1;
          let other_taxes = item.other_taxes * 1;
          item.taxes_payable =
            (income_tax * 1000 +
              personal_tax * 1000 +
              value_added_tax * 1000 +
              turnover * 1000 +
              other_taxes * 1000) /
            1000;

          //19=20+21+22+23
          let income_tax_pref = item.income_tax_pref * 1;
          let value_added_pref = item.value_added_pref * 1;
          let business_tax_pref = item.business_tax_pref * 1;
          let other_pref = item.other_pref * 1;
          item.actual_pref_taxes =
            (income_tax_pref * 1000 +
              value_added_pref * 1000 +
              business_tax_pref * 1000 +
              other_pref * 1000) /
            1000;

          //let nterprise_added = val.nterprise_added;
          //7=8+9+10+13
          let wages = item.wages * 1;
          let depreciation = item.depreciation * 1;
          let profit = item.profit * 1;
          let taxes_payable = item.taxes_payable * 1;
          item.nterprise_added =
            (wages * 1000 +
              depreciation * 1000 +
              profit * 1000 +
              taxes_payable * 1000) /
            1000;
          year--;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
/* .Moinancial .el-tabs__content{
  position: relative;
} */
.Moinancial {
  width: 100%;
  height: 75vh;
}
.Moinancial .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px !important;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
  text-align: left;
}

.Moinancial .el-row {
  line-height: 40px;
  /* padding: 8px; */
}
.Moinancial .titleRow {
  text-align: center;
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

.Moinancial .asterisk::before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

.Moinancial .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
.Moinancial #disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.Moinancial .dataPanRow {
  height: 62vh;
  overflow: hidden;
  overflow-y: auto;
}
.Moinancial .dataPanRow .el-row {
  border: 1px solid #ccc;
}
.Moinancial .dataPanRow .el-col {
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
.Moinancial .dataPanRow .el-row:nth-child(3) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(9) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(11) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(12) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(15) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(16) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(17) .el-col:nth-child(2),
.Moinancial .dataPanRow .el-row:nth-child(18) .el-col:nth-child(2) {
  padding-left: 3em;
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
