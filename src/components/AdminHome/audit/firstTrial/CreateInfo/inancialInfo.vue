<template>
  <div class="inancial">
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

    <div class="dataRow">
      <el-row v-for="item in inancialList" :key="item.id">
        <el-col :span="2"
          ><div class="grid-content bg-purple">{{ item.id }}</div></el-col
        >
        <el-col :span="7"
          ><div class="grid-content bg-purple">{{ item.type }}</div>
        </el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="beforeFrom[item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="lastFrom[item.Model]"
            ></el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              disabled
              type="number"
              v-model="yearFrom[item.Model]"
            ></el-input></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import inancialList from "../../../static/inancialRouter";
export default {
  props: {
    panyInfo: {
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
      yearFrom: {
        task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnjver: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amunt: "",
        technology_inv: "",
        goverrwent_loan: "",
        overdue: "",
      },
      lastFrom: {
        task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnjver: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amunt: "",
        technology_inv: "",
        goverrwent_loan: "",
        overdue: "",
      },
      beforeFrom: {
        task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnjver: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amunt: "",
        technology_inv: "",
        goverrwent_loan: "",
        overdue: "",
      },
    };
  },
  methods: {},
  watch: {
    panyInfo(n) {
      console.log(aa, "父类传9999值------");
      if (n != null) {
        const aa = Object.assign(this.beforeFrom, n);
      }
    },
    beforeFrom: {
      handler(val) {
        val.pro_year = this.dataYear - 3;
        //13=14+15+16+17+18
        let income_tax = val.income_tax * 1;
        let personal_tax = val.personal_tax * 1;
        let value_added_tax = val.value_added_tax * 1;
        let turnjver = val.turnjver * 1;
        let other_taxes = val.other_taxes * 1;
        val.taxes_payable =
          income_tax + personal_tax + value_added_tax + turnjver + other_taxes;

        //19=20+21+22+23
        let income_tax_pref = val.income_tax_pref * 1;
        let value_added_pref = val.value_added_pref * 1;
        let business_tax_pref = val.business_tax_pref * 1;
        let other_pref = val.other_pref * 1;
        val.actual_pref_taxes =
          income_tax_pref + value_added_pref + business_tax_pref + other_pref;

        //let nterprise_added = val.nterprise_added;
        //7=8+9+10+13
        let wages = val.wages * 1;
        let depreciation = val.depreciation * 1;
        let profit = val.profit * 1;
        let taxes_payable = val.taxes_payable * 1;
        val.nterprise_added = wages + depreciation + profit + taxes_payable;

        this.$emit("myInancialInfo", { beforFrom: val });
      },
      deep: true,
    },
    lastFrom: {
      handler(val) {
        val.pro_year = this.dataYear - 2;
        //13=14+15+16+17+18
        let income_tax = val.income_tax * 1;
        let personal_tax = val.personal_tax * 1;
        let value_added_tax = val.value_added_tax * 1;
        let turnjver = val.turnjver * 1;
        let other_taxes = val.other_taxes * 1;
        val.taxes_payable =
          income_tax + personal_tax + value_added_tax + turnjver + other_taxes;

        //19=20+21+22+23
        let income_tax_pref = val.income_tax_pref * 1;
        let value_added_pref = val.value_added_pref * 1;
        let business_tax_pref = val.business_tax_pref * 1;
        let other_pref = val.other_pref * 1;
        val.actual_pref_taxes =
          income_tax_pref + value_added_pref + business_tax_pref + other_pref;

        //let nterprise_added = val.nterprise_added;
        //7=8+9+10+13
        let wages = val.wages * 1;
        let depreciation = val.depreciation * 1;
        let profit = val.profit * 1;
        let taxes_payable = val.taxes_payable * 1;
        val.nterprise_added = wages + depreciation + profit + taxes_payable;

        this.$emit("myInancialInfo", { lastFrom: val });
      },
      deep: true,
    },
    yearFrom: {
      handler(val) {
        val.pro_year = this.dataYear - 1;

        //13=14+15+16+17+18
        let income_tax = val.income_tax * 1;
        let personal_tax = val.personal_tax * 1;
        let value_added_tax = val.value_added_tax * 1;
        let turnjver = val.turnjver * 1;
        let other_taxes = val.other_taxes * 1;
        val.taxes_payable =
          income_tax + personal_tax + value_added_tax + turnjver + other_taxes;

        //19=20+21+22+23
        let income_tax_pref = val.income_tax_pref * 1;
        let value_added_pref = val.value_added_pref * 1;
        let business_tax_pref = val.business_tax_pref * 1;
        let other_pref = val.other_pref * 1;
        val.actual_pref_taxes =
          income_tax_pref + value_added_pref + business_tax_pref + other_pref;

        //let nterprise_added = val.nterprise_added;
        //7=8+9+10+13
        let wages = val.wages * 1;
        let depreciation = val.depreciation * 1;
        let profit = val.profit * 1;
        let taxes_payable = val.taxes_payable * 1;
        val.nterprise_added = wages + depreciation + profit + taxes_payable;

        this.$emit("myInancialInfo", { yearFrom: val });
      },
      deep: true,
    },
  },
};
</script>

<style>
.el-tabs__content {
  position: relative;
}
.inancial {
  width: 100%;
  height: 75vh;
}
.inancial .el-row {
  text-align: center;
  line-height: 40px;
  /* padding: 8px; */
}
.rowColor {
  background-color: rgb(231, 231, 231);
}
.inancial .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}
.rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
#disabled .el-input__inner.disabled {
  opacity: 0.1;
}
.inancial .dataRow {
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
}
.inancial .dataRow .el-row {
  border: 1px solid #ccc;
}
.inancial .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.inancial .titleRow {
  background-color: rgb(203, 204, 204);
}

.inancial input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.inancial input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.inancial input[type="number"] {
  -moz-appearance: textfield;
}
</style>
