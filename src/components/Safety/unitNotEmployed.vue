<template>
  <div>
    <el-form
      ref="ruleForm1"
      :model="formData"
      :disabled="isDisabledData"
      :rules="rules"
      label-width="310px"
      class="demo-ruleForm"
    >
      <el-row class="title"> 上年末从业人员情况 </el-row>
      <el-row type="flex">
        <el-row style="width: 100%; height: 120px" class="rowLayout">
          <el-col
            :span="4"
            style="
              display: inline-block;
              line-height: 120px;
              text-align: center;
              font-size: 16px;
            "
            ><p class="spanFont" style="height: 120px; line-height: 120px">
              法定代表人
            </p></el-col
          >
          <el-col :span="8" style="height: 120px">
            <el-row>
              <el-col :span="12"><p class="spanFont">姓名:</p></el-col>
              <el-col :span="12">
                <el-form-item label-width="0" prop="legal_name">
                  <el-input v-model="formData.legal_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"><p class="spanFont">学历:</p></el-col>
              <el-col :span="12">
                <el-form-item label-width="0" prop="education">
                  <el-input v-model="formData.education"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="height: 120px">
            <el-row>
              <el-col :span="8"><p class="spanFont">移动电话:</p></el-col>
              <el-col :span="16">
                <el-form-item label-width="0" prop="mobile_phone">
                  <el-input v-model="formData.mobile_phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8"><p class="spanFont">身份证号:</p></el-col>
              <el-col :span="16">
                <el-form-item label-width="0" prop="identity">
                  <el-input v-model="formData.identity"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>

      <el-row style="width: 100%; height: 120px" class="rowLayout">
        <el-col :span="4"><p class="spanFont">从业人员总数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="employees_num">
            <el-input v-model="formData.employees_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">其中女职工数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="female_workerss_num">
            <el-input v-model="formData.female_workerss_num"></el-input>
          </el-form-item> </el-col
        ><el-col :span="4"><p class="spanFont">留学归国人员数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="overseas_num">
            <el-input v-model="formData.overseas_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">参加社保人数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="social_security_num">
            <el-input v-model="formData.social_security_num"></el-input>
          </el-form-item> </el-col
        ><el-col :span="4"><p class="spanFont">外籍专家人数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="foreign_experts_num">
            <el-input v-model="formData.foreign_experts_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">新增高校毕业生:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="graduate_num">
            <el-input v-model="formData.graduate_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form
        :model="formData"
        ref="ruleForm2"
        :rules="rules"
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
import { ModernUnitEmpForm } from "../../utils/validator";
export default {
  data() {
    return {
      numOne: [],
      numTwo: [],
      numThree: [],
      rules: ModernUnitEmpForm,
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
        return this.Safety.SafetyData.safetyCompany;
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
.rowLayout .el-form-item__content {
  border-left: none !important;
}
.spanFont {
  font-size: 14px;
  text-align: center;
  line-height: 60px;
  /* border: 1px solid #ccc; */
  /* border-bottom: 1px solid #ccc; */
  /* margin-bottom: -1px; */
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  /* box-shadow: 0 0 1px 0 #000; */
  /* box-sizing: content-box; */
  color: #606266;
}
.spanFont::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
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
