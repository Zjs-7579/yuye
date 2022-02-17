<template>
  <div class="Agtabel">
    <el-form
      :model="agriculturalCompany"
      :rules="rules"
      ref="unitForm"
      :disabled="isDisabledData"
      label-width="250px"
      class="demo-ruleForm"
    >
      <el-row class="title"> 单位基本信息 </el-row>
      <el-form-item label="项目名称：" prop="unit_name">
        <el-input v-model="agriculturalCompany.task_name"></el-input>
      </el-form-item>
      <el-form-item label="单位名称：" prop="unit_name">
        <el-input v-model="agriculturalCompany.unit_name"></el-input>
      </el-form-item>

      <el-form-item label="单位地址：" prop="unit_address">
        <el-input v-model="agriculturalCompany.unit_address"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目地址：" prop="project_address">
            <el-input v-model="agriculturalCompany.project_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单位网址：" prop="website">
            <el-input v-model="agriculturalCompany.website"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目负责人：" prop="director">
            <el-input v-model="agriculturalCompany.director"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目负责人-电话：" prop="director_phone">
            <el-input v-model="agriculturalCompany.director_phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="传真：" prop="fax">
            <el-input v-model="agriculturalCompany.fax"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱：" prop="e_mail">
            <el-input v-model="agriculturalCompany.e_mail"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="注册时间：" prop="register_time">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择注册时间"
              v-model="agriculturalCompany.register_time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="注册所在区：" prop="register_addr">
            <el-input v-model="agriculturalCompany.register_addr"></el-input>
            <!-- <el-select v-model="agriculturalCompany.register_addr" placeholder="请选择注册所在区" style="width: 100%">
            <el-option v-for="item in xzq_type" :key="item.id" :label="item.content" :value="item.content"></el-option>
          </el-select> -->
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="统一社会信用代码：" prop="social_code">
            <el-input v-model="agriculturalCompany.social_code"></el-input>
          </el-form-item>
          <!-- <el-form-item label="组织机构代码：" prop="organization_code">
          <el-input
            v-model="agriculturalCompany.organization_code"
          ></el-input> </el-form-item> -->
        </el-col>
        <el-col :span="12"
          ><el-form-item label="行业码：" prop="industry_code">
            <el-input v-model="agriculturalCompany.industry_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"
          ><el-form-item label="所属行业：" prop="industry">
            <el-input
              v-model="agriculturalCompany.industry"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12"
          ><el-form-item label="所有制性质：" prop="proprietary">
            <el-input v-model="agriculturalCompany.proprietary"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"
          ><el-form-item label="注册资本：" prop="registered_capital">
            <el-input
              v-model="agriculturalCompany.registered_capital"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12"
          ><el-form-item label="实收资本：" prop="paid_capital">
            <el-input
              v-model="agriculturalCompany.paid_capital"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <!-- <el-row>
      <el-col :span="12">
        <el-form-item label="国税登记账号：" prop="national_tax_certificate">
          <el-input
            v-model="agriculturalCompany.national_tax_certificate"
          ></el-input> </el-form-item
      ></el-col>
      <el-col :span="12"
        ><el-form-item label="地税登记账号：" prop="local_tax_certificate">
          <el-input
            v-model="agriculturalCompany.local_tax_certificate"
          ></el-input> </el-form-item
      ></el-col>
      </el-row> -->
      <!-- <el-form-item label="营业执照注册号或商事登记证号：" prop="business_no">
        <el-input v-model="agriculturalCompany.business_no"></el-input>
      </el-form-item> -->

      <el-form-item label="经营范围：" prop="business_range">
        <el-input
          type="textarea"
          resize="none"
          rows="6"
          v-model="agriculturalCompany.business_range"
        ></el-input>
      </el-form-item>

      <el-form-item label="主要产品或服务：" prop="major_products">
        <el-input
          type="textarea"
          resize="none"
          rows="6"
          v-model="agriculturalCompany.major_products"
        ></el-input>
      </el-form-item>
      <el-form-item label="单位专业资质：" prop="unit_professional">
        <el-input
          v-model="agriculturalCompany.unit_professional"
          placeholder="无此类情况则填无"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { UnitInfoValidator } from "../../../utils/validator";
import { UnitInfoData } from "../../../api/Agricul/unitInfo";
import { mapState } from "vuex";
export default {
  data() {
    return {
      hy_type: "",
      xzq_type: "",

      rules: UnitInfoValidator,
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    agriculturalCompany: {
      get() {
        this.Agricul.AgriculData.agriculturalCompany["task_id"] =
          this.Agricul.userTaskId;
        return this.Agricul.AgriculData.agriculturalCompany;
      },
      set(val) {
        this.agriculturalCompany = val;
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
  methods: {},
  mounted() {
    // UnitInfoData('行业').then(res=>{
    //   this.hy_type = res
    // })
    UnitInfoData("行政区").then((res) => {
      this.xzq_type = res;
    });
  },
  watch: {
    // unitForm:{
    //   handler(val){
    //     this.$emit('myUnitInfo', val)
    //   },
    //   deep: true
    // }
  },
};
</script>

<style>
.Agtabel {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
/* .tabel .el-form-item{
  border:1px solid #ccc;
  margin: 0;
  padding: 8px 0;
  border-bottom: none;
}
.tabel .el-input__inner ,
.tabel .el-textarea__inner{
  border: none;
} */
.Agtabel .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.Agtabel .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.Agtabel .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.Agtabel .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
  /* line-height: 60px; */
  /* border: 1px solid #ccc; */
}
/* .el-input{
  height: 60px;
  line-height: ;
} */
.Agtabel .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Agtabel .el-input__inner {
  border: none;
}
.Agtabel .el-textarea__inner {
  border: none;
}
.el-form-item__error {
  position: absolute;
  top: 80%;
}
</style>
