<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="formData"
      :disabled="isDisabledData"
      label-width="310px"
      class="demo-ruleForm"
    >
      <el-row class="title"> 上年末从业人员情况 </el-row>
      <el-row type="flex">
        <el-col :span="12">
          <el-col :span="12" style="width: 310px" class="name">
            法人代表
          </el-col>
          <el-col :span="12" style="width: calc(100% - 310px)">
            <el-form-item label="姓名" prop="legal_name" ref="name">
              <el-input v-model="formData.legal_name" />
            </el-form-item>
            <el-form-item label="学历" prop="education">
              <el-input v-model="formData.education" />
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="12">
          <el-form-item label="移动电话" prop="mobile_phone" label-width="30%">
            <el-input v-model="formData.mobile_phone" />
          </el-form-item>
          <el-form-item label="身份证号" prop="identity" label-width="30%">
            <el-input v-model="formData.identity" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex">
        <el-col :span="8">
          <el-form-item label="从业人员总数:" prop="employees_num">
            <el-input v-model="formData.employees_num" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="其中女职工数:" prop="female_workerss_num">
            <el-input v-model="formData.female_workerss_num" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="留学归国人员数:" prop="overseas_num">
            <el-input v-model="formData.overseas_num" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex">
        <el-col :span="8">
          <el-form-item label="参加社保人数:" prop="social_security_num">
            <el-input v-model="formData.social_security_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="外籍专家人数:" prop="foreign_experts_num">
            <el-input v-model="formData.foreign_experts_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="新增高校毕业生:" prop="graduate_num">
            <el-input v-model="formData.graduate_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form
        :model="formData"
        ref="ruleForm"
        label-width="150px"
        :disabled="isDisabledData"
        class="demo-ruleForm"
      >
        <el-row class="titleSmall">
          行政管理/市场营销/研发设计/加工制造/其他从业人数:
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="行政管理人数:" prop="admin_num">
              <el-input v-model="formData.admin_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="市场营销人数:" prop="market_num">
              <el-input v-model="formData.market_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="研发设计人数:" prop="develop_num">
              <el-input v-model="formData.develop_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="加工制造人数:" prop="manuf_num">
              <el-input v-model="formData.manuf_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="其他从业人数:" prop="admin_other_num">
              <el-input v-model="formData.admin_other_num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="titleSmall">
          博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="博士毕业人数:" prop="doctoral_num">
              <el-input v-model="formData.doctoral_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="硕士毕业人数:" prop="master_num">
              <el-input v-model="formData.master_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="本科毕业人数:" prop="under_num">
              <el-input v-model="formData.under_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="专科毕业人数:" prop="speci_num">
              <el-input v-model="formData.speci_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="其他从业人数:" prop="edu_other_num">
              <el-input v-model="formData.edu_other_num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="titleSmall">
          高级职称/中级职称/初级职称/其他从业人数:
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="正高级职称人数:" prop="senior_num">
              <el-input v-model="formData.senior_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="副高级职称人数:" prop="deputy_num">
              <el-input v-model="formData.deputy_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="中级职称人数:" prop="middle_num">
              <el-input v-model="formData.middle_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="初级职称人数:" prop="primary_num">
              <el-input v-model="formData.primary_num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="其他从业人数:" prop="title_other_num">
              <el-input v-model="formData.title_other_num"></el-input>
              <!-- 没有这个参数 -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      numOne: [],
      numTwo: [],
      numThree: [],
      // sum1: [],
      // sum2: [],
      // sum3: [],
    };
  },
  computed: {
    ...mapState(["Safety"]),
    formData: {
      get() {
        //12/12/124/
        return this.Safety.safetyCompany;
      },
      set(val) {
        this.formData = val;
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
  // mounted() {
  //     console.log(this.$refs.behalf)
  //     console.log(this.$refs.name)
  // },
  // watch: {
  //     formData:{
  //         handler(val){
  //             // if(val.numOne.length && val.numTwo.length && val.numThree.length){

  //             // }

  //                 let sum1 = this.numOne.join("/")
  //                 let sum2 = this.numTwo.join("/")
  //                 let sum3 = this.numThree.join("/")
  //                 val['sum_1'] = sum1
  //                 val['sum_2'] = sum2
  //                 val['sum_3'] = sum3
  //             // val.sum_1 = sum1
  //             // val.sum_2 = sum2
  //             // val.sum_3 = sum3
  //             console.log(val)
  //         },
  //         deep: true
  //     }
  // }
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
.titleSmall {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  background-color: #ece8e8;
  padding-left: 15px;
}
.name {
  /* display: inline-block; */
  height: 122px;
  font-size: 20px;
  line-height: 122px;
  text-align: center;
}
</style>
