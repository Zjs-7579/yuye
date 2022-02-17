<template>
  <div class="Aginancial">
    <el-row class="titleRow">
      <el-col :span="4"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="5"
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

    <div class="dataRow">
      <el-row v-for="(item, index) in inancialList" :key="item.id">
        <el-col :span="4"
          ><div class="grid-content bg-purple">{{ item.id }}</div></el-col
        >
        <el-col :span="5"
          ><div
            class="grid-content bg-purple"
            style="text-align: left; padding-left: 8px"
            :class="boldFrom.includes(index) ? 'boldText' : ''"
          >
            {{ item.type }}
          </div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="agriculturalFinance[0][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="agriculturalFinance[1][item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="agriculturalFinance[2][item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import inancialList from "@/static/AgriculData/inancialData";
import { mapState } from "vuex";
export default {
  props: {
    agriculturalFinanceDetails: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      inancialList: inancialList,
      dataYear: new Date().getFullYear(),
      boldFrom: [0, 3, 4, 6, 9, 12, 18, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    agriculturalFinance: {
      get() {
        return this.Agricul.AgriculData.agriculturalFinance;
      },
      set(val) {
        console.log(val, "val------");
        this.agriculturalFinance = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Agricul.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  created() {
    console.log(inancialList, "inancialList------");
  },
  methods: {},
  watch: {
    agriculturalFinanceDetails(n) {
      if (n != null) {
        this.Agricul.AgriculData.agriculturalFinance = n;
      }
      console.log(n, "父类传9999值------");
    },
    agriculturalFinance: {
      handler(val) {
        console.log(val, "val-----");
        let year = 1;
        for (let item of val) {
          item.task_id = this.Agricul.userTaskId;

          item.pro_year = this.dataYear - year;
          //13=14+15+16+17+18
          let income_tax = item.income_tax * 1;
          let personal_tax = item.personal_tax * 1;
          let value_added_tax = item.value_added_tax * 1;
          let turnover = item.turnover * 1;
          let other_taxes = item.other_taxes * 1;
          item.taxes_payable =
            income_tax +
            personal_tax +
            value_added_tax +
            turnover +
            other_taxes;

          //19=20+21+22+23
          let income_tax_pref = item.income_tax_pref * 1;
          let value_added_pref = item.value_added_pref * 1;
          let business_tax_pref = item.business_tax_pref * 1;
          let other_pref = item.other_pref * 1;
          item.actual_pref_taxes =
            income_tax_pref + value_added_pref + business_tax_pref + other_pref;
          //let nterprise_added = val.nterprise_added;
          //7=8+9+10+13
          let wages = item.wages * 1;
          let depreciation = item.depreciation * 1;
          let profit = item.profit * 1;
          let taxes_payable = item.taxes_payable * 1;
          item.nterprise_added = wages + depreciation + profit + taxes_payable;
          year++;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
/* .Aginancial .el-tabs__content{
  position: relative;
} */
.Aginancial {
  width: 100%;
  height: 75vh;
}

.Aginancial .el-row {
  text-align: center;
  line-height: 40px;
  /* padding: 8px; */
}
.Aginancial .titleRow {
  line-height: 60px;
}
.Aginancial .boldText {
  font-weight: bold;
}
.Aginancial .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}
.Aginancial .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
.Aginancial #disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.Aginancial .dataRow {
  height: 70vh;
  overflow: hidden;
  overflow-y: overlay;
}
.Aginancial .dataRow .el-row {
  border: 1px solid #ccc;
}
.Aginancial .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.Aginancial .titleRow {
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.Aginancial .titleRow .el-col {
  border-right: 1px solid #ccc;
}

.Aginancial input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.Aginancial input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.Aginancial input[type="number"] {
  -moz-appearance: textfield;
}
</style>
