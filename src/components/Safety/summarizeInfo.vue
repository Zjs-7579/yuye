<template>
  <div class="MoSummarize">
    <!-- <el-form
      :model="safetyAbstract"
      ref="ruleForm"
      :disabled="isDisabledData"
      label-width="250px"
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-row class="title"> 单位银行开户信息：（下达资助金额使用） </el-row>
      <el-form-item label="银行账户名称:" prop="bank_name">
        <el-input v-model="safetyAbstract.bank_name"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="基本账户开户行:" prop="bank">
            <el-input v-model="safetyAbstract.bank"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户账号:" prop="account">
            <el-input v-model="safetyAbstract.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-form
      :model="safetyAbstract"
      :disabled="isDisabledData"
      class="demo-form-inline"
      :rules="rules"
      label-width="100px"
    >
      <el-row class="title"> 企业需提供项目现场考察的实际地址： </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="省份">
            <el-input v-model="safetyAbstract.province"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="城市">
            <el-input v-model="safetyAbstract.city"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="地区">
            <el-input v-model="safetyAbstract.area"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="具体地址">
            <el-input v-model="safetyAbstract.sp_address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form> -->

    <div class="SummarizeBase">
      <el-form
        :model="safetyAbstract"
        ref="ruleForm"
        :disabled="isDisabledData"
        :rules="rules"
        label-width="250px"
        class="demo-ruleForm"
      >
        <el-row class="title"> 单位银行开户信息：（下达资助金额使用） </el-row>
        <el-form-item label="银行账户名称:" prop="bank_name">
          <el-input v-model="safetyAbstract.bank_name"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="基本账户开户行:" prop="bank">
              <el-input v-model="safetyAbstract.bank"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开户账号:" prop="account">
              <el-input v-model="safetyAbstract.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="title"> 企业需提供项目现场考察的实际地址： </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="省份:" prop="province">
              <el-input v-model="safetyAbstract.province"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="城市:" prop="city">
              <el-input v-model="safetyAbstract.city"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地区:" prop="area">
              <el-input v-model="safetyAbstract.area"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="具体地址:" prop="sp_address">
              <el-input v-model="safetyAbstract.sp_address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-form
      label-position="top"
      :model="safetyAbstract"
      ref="ruleForm"
      :disabled="isDisabledData"
      :rules="rules"
    >
      <el-row class="title"> 企业需提供如下内容摘要（限800字以内） </el-row>
      <p class="subTitle">主要建设内容和项目目标（限300字以内）</p>
      <el-form-item label="1、实际投入资金:" prop="act_investment">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          :disabled="isDisabledData"
          v-model="safetyAbstract.act_investment"
        ></el-input>
      </el-form-item>

      <el-form-item label="2、建设完成率：" prop="com_rate">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          :disabled="isDisabledData"
          v-model="safetyAbstract.com_rate"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="3、经济指标（年销量、年营业收入、年纳税额、年增长率等）："
        prop="eco_indi"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          :disabled="isDisabledData"
          v-model="safetyAbstract.eco_indi"
        ></el-input>
      </el-form-item>

      <el-form-item label="4、其它：" prop="other">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          :disabled="isDisabledData"
          v-model="safetyAbstract.other"
        ></el-input>
      </el-form-item>

      <p class="subTitle">主要建设内容和项目目标（限300字以内）</p>
      <el-form-item label="" prop="cons_basis">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          :disabled="isDisabledData"
          v-model="safetyAbstract.cons_basis"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ModernSummarize } from "../../utils/validator";
export default {
  data() {
    return {
      rules: ModernSummarize,
    };
  },
  computed: {
    ...mapState(["Safety"]),
    safetyAbstract: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Safety.SafetyData.safetyAbstract["task_id"] =
          this.Safety.userTaskId;
        //this.Safety.safetyAbstract.creator = this.Safety.userName
        return this.Safety.SafetyData.safetyAbstract;
      },
      set(val) {
        this.SafetyAbstract = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Safety.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  methods: {},
};
</script>

<style>
.MoSummarize {
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.el-form-item__error {
  top: 80%;
}
.MoSummarize .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.MoSummarize .SummarizeBase .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
}
.MoSummarize .SummarizeBase .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.MoSummarize .SummarizeBase .el-form-item .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}
.MoSummarize .SummarizeBase .el-input__inner {
  border: none;
}
.MoSummarize p {
  font-weight: bold;
  margin: 15px 0;
}
.MoSummarize .subTitle {
  font-size: 20px;
}
</style>
