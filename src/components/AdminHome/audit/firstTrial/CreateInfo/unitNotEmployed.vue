<template>
  <div>
    <el-form
      :model="unitEmpForm"
      ref="ruleForm"
      label-width="250px"
      :rules="rules"
      class="demo-ruleForm"
      disabled
    >
      <el-row class="title"> 上年末从业人员情况 </el-row>
      <el-row>
        <el-col
          :span="4"
          style="
            text-align: center;
            font-size: 25px;
            line-height: 120px;
            width: 250px;
          "
        >
          法人代表
        </el-col>
        <el-col :span="10">
          <el-form-item label="姓名:" prop="legal_name">
            <el-input v-model="unitEmpForm.legal_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="学历:" prop="education">
            <el-input v-model="unitEmpForm.education" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="移动电话:" prop="mobile_phone">
            <el-input v-model="unitEmpForm.mobile_phone" disabled></el-input>
          </el-form-item>
          <el-form-item label="身份证号:" prop="identity">
            <el-input v-model="unitEmpForm.identity" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="从业人员总数:" prop="employees_num">
            <el-input v-model="unitEmpForm.employees_num" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="其中女职工数:" prop="female_workerss_num">
            <el-input
              v-model="unitEmpForm.female_workerss_num"
              disabled
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="留学归国人员数:" prop="overseas_num">
            <el-input v-model="unitEmpForm.overseas_num" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="参加社保人数:" prop="social_security_num">
            <el-input
              v-model="unitEmpForm.social_security_num"
              disabled
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="外籍专家人数:" prop="foreign_experts_num">
            <el-input
              v-model="unitEmpForm.foreign_experts_num"
              disabled
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="新增高校毕业生:" prop="graduate_num">
            <el-input v-model="unitEmpForm.graduate_num" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="行政管理/市场营销/研发设计/加工制造/其他从业人数:"
        prop="num_1"
        class="Tlabel"
      >
        <el-input v-model="sum1[0]" placeholder="行政管理" disabled></el-input>
        <el-input v-model="sum1[1]" placeholder="市场营销" disabled></el-input>
        <el-input v-model="sum1[2]" placeholder="研发设计" disabled></el-input>
        <el-input v-model="sum1[3]" placeholder="加工制造" disabled></el-input>
        <el-input
          v-model="sum1[4]"
          placeholder="其他从业人数"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item
        label="博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:"
        prop="num_2"
        class="Tlabel"
      >
        <el-input v-model="sum2[0]" placeholder="博士毕业" disabled></el-input>
        <el-input v-model="sum2[1]" placeholder="硕士毕业" disabled></el-input>
        <el-input v-model="sum2[2]" placeholder="本科毕业" disabled></el-input>
        <el-input v-model="sum2[3]" placeholder="专科毕业" disabled></el-input>
        <el-input
          v-model="sum2[4]"
          placeholder="其他从业人数"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item
        label="高级职称/中级职称/初级职称/其他从业人数:"
        prop="num_3"
        class="Tlabel"
      >
        <el-input v-model="sum3[0]" placeholder="高级职称" disabled></el-input>
        <el-input v-model="sum3[1]" placeholder="中级职称" disabled></el-input>
        <el-input v-model="sum3[2]" placeholder="初级职称" disabled></el-input>
        <el-input
          v-model="sum3[3]"
          placeholder="其他从业人数"
          disabled
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ModernUnitEmpForm } from "@/utils/validator";
export default {
  data() {
    return {
      // unitEmpForm:{
      //     legal_name: "", //法定代表人姓名
      //     education: "", //法定代表人学历
      //     mobile_phone: "", //移动电话
      //     identity: "", //身份证号
      //     employees_num: "", //从业人员总数
      //     female_workerss_num: "", //女员工数量
      //     overseas_num: "", //留学归国数量
      //     social_security_num: "", //参加社保数量
      //     foreign_experts_num: "", //外籍专家人数
      //     graduate_num: "", //高效毕业生数量
      //     num_1: "", //行政管理∕市场营销∕研发设计∕加工制造∕其他从业人数
      //     num_2: "", //博士毕业∕硕士毕业∕本科毕业∕大专毕业∕其他从业人数
      //     num_3: "", //高级职称∕中级职称∕初级职称∕其他从业人数

      // }'
      sum1: [],
      sum2: [],
      sum3: [],
      rules: ModernUnitEmpForm,
    };
  },
  computed: {
    ...mapState(["Modern"]),
    unitEmpForm: {
      get() {
        return this.Modern.ModernData.modernCompany;
      },
      set(val) {
        this.unitEmpForm = val;
      },
    },
  },
};
</script>

<style>
.Tlabel .el-form-item__label {
  line-height: 30px !important;
}
.Tlabel .el-input {
  width: 20%;
  display: inline-block;
}
</style>
