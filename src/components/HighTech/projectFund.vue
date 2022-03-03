<template>
  <div class="HighFund">
    <el-row class="title"> 项目经费 </el-row>

    <el-form
      ref="ruleForm"
      label-width="150px"
      :rules="rules"
      :disabled="isDisabledData"
      class="demo-ruleForm"
    >
      <el-form-item label="项目总投资额:" prop="total_invest">
        <el-input v-model="total_invest"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item label="已获国家资助额:" prop="state_funding">
            <el-input v-model="state_funding"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请市财政资助额:" prop="city_support">
            <el-input v-model="city_support"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="box">
      <el-row class="title asterisk"> 项目总投资明细 </el-row>
      <el-row class="titleRow">
        <el-col :span="2"
          ><div class="grid-content bg-purple">序号</div></el-col
        >
        <el-col :span="7"
          ><div class="grid-content bg-purple">经费支出类别</div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">市财政资助申请额</div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">申请单位自筹经费</div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">小计</div></el-col
        >
      </el-row>

      <div class="dataRow">
        <el-row v-for="(item, index) in fundData" :key="index">
          <el-col :span="2"
            ><div class="grid-content bg-purple" style="text-align: center">
              {{ item.idx }}
            </div></el-col
          >
          <el-col :span="7"
            ><div
              class="grid-content bg-purple"
              style="padding-left: 2em"
              :class="boldFrom.includes(index) ? 'boldText' : ''"
            >
              {{ item.title }}
            </div>
          </el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                v-model="techFunds[0][item.data]"
                type="number"
              ></el-input></div
          ></el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                v-model="techFunds[1][item.data]"
                type="number"
              ></el-input></div
          ></el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                v-model="techFunds[2][item.data]"
                type="number"
              ></el-input></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="9"
            ><div
              class="grid-content bg-purple"
              style="text-align: center; font-weight: bold"
            >
              合计
            </div></el-col
          >
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                type="number"
                disabled
                v-model="totalExpends1"
              ></el-input></div
          ></el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                type="number"
                disabled
                v-model="totalExpends2"
              ></el-input></div
          ></el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <el-input
                type="number"
                disabled
                v-model="totalExpends3"
              ></el-input></div
          ></el-col>
        </el-row>
      </div>
    </div>

    <ProjectFundListing></ProjectFundListing>
  </div>
</template>

<script>
/* eslint-disable vue/no-side-effects-in-computed-properties */
import { mapState } from "vuex";
import ProjectFundListing from "./projectFundListing.vue";
import fundData from "../../static/HighTechData/fundData.js";
import { ModernSummarize } from "../../utils/validator";
export default {
  data() {
    return {
      rules: ModernSummarize,
      total_invest: "",
      state_funding: "",
      city_support: "",
      fundData: fundData,
      boldFrom: [0, 5, 16, 17],
    };
  },
  components: { ProjectFundListing },
  computed: {
    ...mapState(["HighTech"]),
    techFunds: {
      get() {
        //this.HighTech.HighTechData.techFunds['task_id'] = this.HighTech.userTaskId
        for (let item in this.HighTech.HighTechData.techFunds) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.HighTech.HighTechData.techFunds[item]["task_id"] =
            this.HighTech.userTaskId;
        }
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.techFunds;
      },
      set(val) {
        //console.log(val)
        this.techFunds = val;
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
    totalExpends1: {
      get() {
        let sum = 0;
        for (let item in this.techFunds[0]) {
          if (
            item != "funds_type" &&
            item != "total_expendt" &&
            item != "total_invest" &&
            item != "state_funding" &&
            item != "city_support"
          ) {
            sum += this.techFunds[0][item];
          }
        }

        return sum;
      },
      set(val) {
        this.totalExpends1 = val;
      },
    },
    totalExpends2: {
      get() {
        let sum = 0;
        for (let item in this.techFunds[1]) {
          if (
            item != "funds_type" &&
            item != "total_expendt" &&
            item != "total_invest" &&
            item != "state_funding" &&
            item != "city_support"
          ) {
            sum += this.techFunds[1][item];
          }
        }

        return sum;
      },
      set(val) {
        this.totalExpends2 = val;
      },
    },
    totalExpends3: {
      get() {
        let sum = 0;
        for (let item in this.techFunds[2]) {
          if (
            item != "funds_type" &&
            item != "total_expendt" &&
            item != "total_invest" &&
            item != "state_funding" &&
            item != "city_support"
          ) {
            sum += this.techFunds[2][item];
          }
        }

        return sum;
      },
      set(val) {
        this.totalExpends3 = val;
      },
    },
    // total_invest: {
    //   get() {
    //     return this.HighTech.isDisabledData;
    //   },
    //   set(val) {
    //     this.isDisabledData = val;
    //   },
    // },
    // state_funding: {
    //   get() {
    //     return this.HighTech.isDisabledData;
    //   },
    //   set(val) {
    //     this.isDisabledData = val;
    //   },
    // },
    // city_support: {
    //   get() {
    //     return this.HighTech.isDisabledData;
    //   },
    //   set(val) {
    //     this.isDisabledData = val;
    //   },
    // },
  },
  watch: {
    total_invest(val) {
      for (let item of this.techFunds) {
        item.total_invest = val;
      }
    },
    state_funding(val) {
      for (let item of this.techFunds) {
        item.state_funding = val;
      }
    },
    city_support(val) {
      for (let item of this.techFunds) {
        item.city_support = val;
      }
    },
    totalExpends1(val) {
      this.techFunds[0]["total_expendt"] = val;
    },
    totalExpends2(val) {
      this.techFunds[1]["total_expendt"] = val;
    },
    totalExpends3(val) {
      this.techFunds[2]["total_expendt"] = val;
    },
  },
};
</script>

<style>
.HighFund {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: overlay;
}
.HighFund .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.HighFund .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}

.HighFund .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
}
.HighFund .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.HighFund .el-form-item .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.HighFund .el-input__inner {
  border: none !important;
}
.HighFund .el-textarea__inner {
  border: none;
  height: 122px;
}
.HighFund .el-form-item__error {
  position: absolute;
  top: 80%;
}
/* .HighFund .demo-ruleForm{
  border: 1px solid #ccc;
}
.HighFund .el-form-item__content{
  border: 1px solid #ccc;
} */
.HighFund .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HighFund p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
.HighFund .box .el-row {
  line-height: 60px;
  /* padding: 8px; */
}
.HighFund .box .titleRow {
  text-align: center;
  line-height: 60px;
}
.HighFund .box .boldText {
  font-weight: bold;
  padding-left: 0 !important;
}
.HighFund .box .el-input__inner {
  /* width: 80%; */
  border: none;
  font-size: 18px;
}
.HighFund .box .rowColor .el-input__inner {
  background-color: rgb(235, 231, 231);
}
/* .HighFund #disabled .el-input__inner.disabled{
  opacity: 0.1;
} */
/* .HighFund .box .dataRow{
  height: 44vh;
  overflow: hidden;
  overflow-y: overlay;
} */
.HighFund .box .dataRow .el-row {
  border: 1px solid #ccc;
}
.HighFund .box .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
.HighFund .box .titleRow {
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.HighFund .box .titleRow .el-col {
  border-right: 1px solid #ccc;
}
.HighFund .box .dataRow .el-row .el-col-7 {
  padding-left: 2em;
}

.HighFund .dataRow input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.HighFund .dataRow input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

.HighFund .dataRow input[type="text"] {
  -moz-appearance: textfield;
}
.HighFund .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
