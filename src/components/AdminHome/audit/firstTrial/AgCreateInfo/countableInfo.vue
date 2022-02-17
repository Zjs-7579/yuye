<template>
  <div class="AgCountable">
    <h1>2021年度深圳市农业产业化重点龙头企业贷款贴息项目申请表</h1>
    <el-row class="titleRow">
      <el-col :span="4"
        ><div class="grid-content bg-purple">贷款银行名称</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">贷款项目及用途</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">申报贷款金额（万元）</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">还款金额（万元）</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          实际支付贷款利息（万元）
        </div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          申请财政贴息金额（万元）
        </div></el-col
      >
    </el-row>

    <div class="dataRow">
      <el-row v-for="(item, index) in agriculturalLoan" :key="index">
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="text"
              v-model="item.loan_bank"
              disabled
            ></el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="text"
              v-model="item.loan_purpose"
              disabled
            ></el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              v-model="item.loan_amount"
              disabled
            ></el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              v-model="item.repayment_amount"
              disabled
            ></el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              v-model="item.loan_interest"
              disabled
            ></el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              type="number"
              v-model="item.discount_amount"
              disabled
            ></el-input></div
        ></el-col>
      </el-row>
    </div>

    <el-row class="footRow">
      <el-col :span="8"><div class="grid-content bg-purple">合计</div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-input type="number" disabled v-model="total_loan"></el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-input
            type="number"
            disabled
            v-model="total_repay"
          ></el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-input
            type="number"
            disabled
            v-model="total_interest"
          ></el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-input
            type="number"
            disabled
            v-model="total_discount"
          ></el-input></div
      ></el-col>
    </el-row>

    <div class="handle" style="display: none" v-if="taskTypeVisible == '待办'">
      <el-button class="add" @click="handleDeleteHtml">删除一条</el-button>
      <el-button type="primary" class="add" @click="handleAddHtml"
        >添加一条</el-button
      >
    </div>
  </div>
</template>

<script>
// import CountableList from "../../../static/CountableData"
//import time from "../../../utils/dateFormat"
import { mapState } from "vuex";
export default {
  props: {
    agriculturalLoanDeatils: {
      type: Array,
      default: function () {
        return {};
      },
    },
    taskType: {
      type: String,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      taskTypeVisible: "",
    };
  },
  computed: {
    ...mapState(["Agricul", "Total"]),
    agriculturalLoan: {
      get() {
        return this.Agricul.AgriculData.agriculturalLoan;
      },
      set(val) {
        this.agriculturalLoan = val;
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
    total_loan: {
      get() {
        let sum = 0;
        for (let item of this.agriculturalLoan) {
          sum += item.loan_amount * 1;
        }
        return sum;
      },
      set(val) {
        this.total_loan = val;
      },
    },
    total_repay: {
      get() {
        let sum = 0;
        for (let item of this.agriculturalLoan) {
          sum += item.repayment_amount * 1;
        }
        return sum;
      },
      set(val) {
        this.total_loan = val;
      },
    },
    total_interest: {
      get() {
        let sum = 0;
        for (let item of this.agriculturalLoan) {
          sum += item.loan_interest * 1;
        }
        return sum;
      },
      set(val) {
        this.total_loan = val;
      },
    },
    total_discount: {
      get() {
        let sum = 0;
        for (let item of this.agriculturalLoan) {
          sum += item.discount_amount * 1;
        }
        return sum;
      },
      set(val) {
        this.total_loan = val;
      },
    },
  },
  methods: {
    handleAddHtml() {
      let str = {
        //task_id: this.Agricul.userTaskId,
        loan_bank: "",
        loan_purpose: "",
        loan_amount: "",
        repayment_amount: "",
        loan_interest: "",
        discount_amount: "",
        // total_loan: '',
        // total_repay: '',
        // total_interest: '',
        // total_discount: '',
        // creator: '',
        // create_time: '',
        // modifier: '',
        // update_time: ''
      };
      this.agriculturalLoan.push(str);
    },
    handleDeleteHtml() {
      let len = this.agriculturalLoan.length;
      if (len == 1) {
        this.$message({
          message: "不能删除更多了",
          type: "warning",
        });
      } else {
        this.agriculturalLoan.splice(len - 1, 1);
      }
    },
  },
  watch: {
    taskType(n) {
      if (n != null) {
        this.taskTypeVisible = n;
      }
    },
    agriculturalLoanDeatils(n) {
      if (n != null) {
        this.Agricul.AgriculData.agriculturalLoan = n;
      }
    },
    agriculturalLoan: {
      handler(val) {
        for (let item of val) {
          //console.log(item)
          // item['creator'] = this.$store.state.userInfo.userName;
          item["creator"] = this.Total.userName;
          item["task_id"] = this.Agricul.userTaskId;
          item["total_loan"] = this.total_loan;
          item["total_repay"] = this.total_repay;
          item["total_interest"] = this.total_interest;
          item["total_discount"] = this.total_discount;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.AgCountable {
  width: 100%;
  height: 75vh;
}
.AgCountable h1 {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 35px 0;
}
.AgCountable .titleRow {
  text-align: center;
  height: 60px;
  border: 1px solid #ccc;
  line-height: 60px;
  background-color: #ece8e8;
}
.AgCountable .el-col {
  border-right: 1px solid #ccc;
}
.AgCountable .el-input__inner {
  display: flex;
  margin: 0 auto;
  width: 80%;
  border: none;
  font-size: 18px;
}
.AgCountable .el-row {
  border: 1px solid #ccc;
}
.AgCountable .dataRow .el-col {
  padding: 8px 0;
}
.AgCountable .footRow {
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.AgCountable input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.AgCountable input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.AgCountable input[type="number"] {
  -moz-appearance: textfield;
}
</style>
