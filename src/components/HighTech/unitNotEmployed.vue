<template>
  <div>
    <el-form
      :model="techCompany"
      ref="ruleForm"
      label-width="310px"
      :rules="rules"
      :disabled="isDisabledData"
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
                  <el-input v-model="techCompany.legal_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"><p class="spanFont">学历:</p></el-col>
              <el-col :span="12">
                <el-form-item label-width="0" prop="education">
                  <el-input v-model="techCompany.education"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="height: 120px">
            <el-row>
              <el-col :span="8"><p class="spanFont">移动电话:</p></el-col>
              <el-col :span="16">
                <el-form-item label-width="0" prop="mobile_phone">
                  <el-input v-model="techCompany.mobile_phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8"><p class="spanFont">身份证号:</p></el-col>
              <el-col :span="16">
                <el-form-item label-width="0" prop="identity">
                  <el-input v-model="techCompany.identity"></el-input>
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
            <el-input v-model="techCompany.employees_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">其中女职工数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="female_workerss_num">
            <el-input v-model="techCompany.female_workerss_num"></el-input>
          </el-form-item> </el-col
        ><el-col :span="4"><p class="spanFont">留学归国人员数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="overseas_num">
            <el-input v-model="techCompany.overseas_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">参加社保人数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="social_security_num">
            <el-input v-model="techCompany.social_security_num"></el-input>
          </el-form-item> </el-col
        ><el-col :span="4"><p class="spanFont">外籍专家人数:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="foreign_experts_num">
            <el-input v-model="techCompany.foreign_experts_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4"><p class="spanFont">新增高校毕业生:</p></el-col>
        <el-col :span="4">
          <el-form-item label-width="0" prop="graduate_num">
            <el-input v-model="formData.graduate_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- <el-row>
            <el-col :span="4">
                 <el-form-item label="行政管理人数:" prop="num_1">
                    <el-input v-model="sum1[0]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="市场营销人数:" prop="num_1">
                    <el-input v-model="sum1[1]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="研发设计人数:" prop="num_1">
                    <el-input v-model="sum1[2]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                 <el-form-item label="加工制造人数:" prop="num_1">
                    <el-input v-model="sum1[0]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="其他从业人数:" prop="num_1">
                    <el-input v-model="sum1[1]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="研发设计人数:" prop="num_1">
                    <el-input v-model="sum1[2]"></el-input>
                </el-form-item>
            </el-col>
        </el-row> -->

      <!-- <el-form-item label="行政管理/市场营销/研发设计/加工制造/其他从业人数:" prop="num_1" class="Tlabel" >
            <el-input v-model="sum1[3]" placeholder="加工制造"></el-input>
            <el-input v-model="sum1[4]" placeholder="其他从业人数"></el-input>
        </el-form-item>
        <el-form-item label="博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:" prop="num_2" class="Tlabel">
            <el-input v-model="sum2[0]" placeholder="博士毕业"></el-input>
            <el-input v-model="sum2[1]" placeholder="硕士毕业"></el-input>
            <el-input v-model="sum2[2]" placeholder="本科毕业"></el-input>
            <el-input v-model="sum2[3]" placeholder="专科毕业"></el-input>
            <el-input v-model="sum2[4]" placeholder="其他从业人数"></el-input>
        </el-form-item>
        <el-form-item label="高级职称/中级职称/初级职称/其他从业人数:" prop="num_3" class="Tlabel">
            <el-input v-model="sum3[0]" placeholder="高级职称"></el-input>
            <el-input v-model="sum3[1]" placeholder="中级职称"></el-input>
            <el-input v-model="sum3[2]" placeholder="初级职称"></el-input>
            <el-input v-model="sum3[3]" placeholder="其他从业人数"></el-input>
        </el-form-item> -->
      <!-- 
-->
    </el-form>
    <el-form
      :model="techCompany"
      ref="ruleFormPerson"
      label-width="150px"
      :rules="rules"
      :disabled="isDisabledData"
      class="demo-ruleForm"
    >
      <el-row class="titleSmall">
        行政管理/市场营销/研发设计/加工制造/其他从业人数:
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="行政管理人数:" prop="admin_num">
            <el-input v-model="techCompany.admin_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="市场营销人数:" prop="market_num">
            <el-input v-model="techCompany.market_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="研发设计人数:" prop="develop_num">
            <el-input v-model="techCompany.develop_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="加工制造人数:" prop="manuf_num">
            <el-input v-model="techCompany.manuf_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="其他从业人数:" prop="admin_other_num">
            <el-input v-model="techCompany.admin_other_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row class="titleSmall">
        博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="博士毕业人数:" prop="doctoral_num">
            <el-input v-model="techCompany.doctoral_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="硕士毕业人数:" prop="master_num">
            <el-input v-model="techCompany.master_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="本科毕业人数:" prop="under_num">
            <el-input v-model="techCompany.under_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="专科毕业人数:" prop="speci_num">
            <el-input v-model="techCompany.speci_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="其他从业人数:" prop="edu_other_num">
            <el-input v-model="techCompany.edu_other_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row class="titleSmall">
        高级职称/中级职称/初级职称/其他从业人数:
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="正高级职称人数:" prop="senior_num">
            <el-input v-model="techCompany.senior_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="副高级职称人数:" prop="deputy_num">
            <el-input v-model="techCompany.deputy_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="中级职称人数:" prop="middle_num">
            <el-input v-model="techCompany.middle_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="初级职称人数:" prop="primary_num">
            <el-input v-model="techCompany.primary_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="其他从业人数:" prop="title_other_num">
            <el-input v-model="techCompany.title_other_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
      // sum1: [],
      // sum2: [],
      // sum3: [],
      rules: ModernUnitEmpForm,
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techCompany: {
      get() {
        //12/12/124/
        return this.HighTech.HighTechData.techCompany;
      },
      set(val) {
        this.techCompany = val;
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
  },
  // mounted() {
  //     console.log(this.$refs.behalf)
  //     console.log(this.$refs.name)
  // },
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
.name {
  /* display: inline-block; */
  height: 122px;
  font-size: 20px;
  line-height: 122px;
  text-align: center;
}
</style>
