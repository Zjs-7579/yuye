<template>
  <div class="Mounit">
    <el-form
      :model="techCompany"
      ref="unitForm"
      :rules="rules"
      label-width="310px"
      :disabled="isDisabledData"
      class="demo-ruleForm"
    >
      <el-row class="title"> 单位基本情况 </el-row>
      <el-form-item label="项目名称:" prop="task_name">
        <el-input v-model="techCompany.task_name"></el-input>
      </el-form-item>

      <el-form-item label="单位名称:" prop="unit_name">
        <el-input v-model="techCompany.unit_name"></el-input>
      </el-form-item>

      <el-form-item label="单位地址:" prop="unit_address">
        <el-input v-model="techCompany.unit_address"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目地址：" prop="project_address">
            <el-input v-model="techCompany.project_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单位网址：" prop="unit_website">
            <el-input v-model="techCompany.unit_website"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目负责人：" prop="director">
            <el-input v-model="techCompany.director"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目负责人-电话：" prop="director_phone">
            <el-input v-model="techCompany.director_phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目联系人：" prop="contacts">
            <el-input v-model="techCompany.contacts"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目联系人-电话：" prop="phone">
            <el-input v-model="techCompany.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="传真：" prop="fax">
            <el-input v-model="techCompany.fax"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱：" prop="e_mail">
            <el-input v-model="techCompany.e_mail"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="单位注册资本(万元):" prop="unit_reg_capital">
            <el-input v-model="techCompany.unit_reg_capital"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="注册时间：" prop="register_time">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择注册时间"
              v-model="techCompany.register_time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <!-- <el-form-item label="注册时间:" prop="register_time">
          <el-input v-model="techCompany.register_time"></el-input>
        </el-form-item> -->
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="注册所在区:" prop="register_addr">
            <el-input v-model="techCompany.register_addr"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="注册所在街道:" prop="register_street">
            <el-input v-model="techCompany.register_street"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="统一社会信用代码：" prop="social_code">
            <el-input v-model="techCompany.social_code"></el-input>
          </el-form-item>
          <!-- <el-form-item label="组织机构代码:" prop="organization_code">
          <el-input v-model="techCompany.organization_code"></el-input>
        </el-form-item> -->
        </el-col>
        <el-col :span="12">
          <!-- <el-form-item label="登记注册类型:" prop="regist_type">
          <el-input v-model="techCompany.regist_type"></el-input>
        </el-form-item> -->
          <el-form-item label="登记注册类型：" prop="regist_type">
            <el-select
              v-model="techCompany.regist_type"
              placeholder="请选择登记注册类型"
              style="width: 100%"
            >
              <el-option label="企业" value="企业"></el-option>
              <el-option label="事业单位" value="事业单位"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- <el-row>
      <el-col :span="12">
        <el-form-item label="国税登记证号:" prop="national_tax_certificate">
          <el-input v-model="techCompany.national_tax_certificate"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="地税登记证号:" prop="local_tax_certificate">
          <el-input v-model="techCompany.local_tax_certificate"></el-input>
        </el-form-item>
        </el-col>
    </el-row>


   <el-form-item label="营业执照注册号或商事登记证号:" prop="business_no">
      <el-input v-model="techCompany.business_no"></el-input>
   </el-form-item> -->

      <el-form-item label="主要产品服务:" prop="major_products">
        <el-input v-model="techCompany.major_products"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="产品（服务）所属技术领域:"
            prop="technical_field"
            style="height: 122px; display: block"
          >
            <el-input
              type="textarea"
              resize="none"
              rows="5"
              v-model="techCompany.technical_field"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="办公所在区:" prop="work_place">
            <el-input v-model="techCompany.work_place"></el-input>
          </el-form-item>
          <el-form-item label="生产所在区:" prop="product_place">
            <el-input v-model="techCompany.product_place"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="单位资质:" prop="unit_professional">
        <el-input
          v-model="techCompany.unit_professional"
          placeholder="无此类情况则填无"
        ></el-input>
      </el-form-item>
    </el-form>

    <unitNotEmployed ref="HighTechUnitNotEmployed"></unitNotEmployed>
    <unitOwnership></unitOwnership>
  </div>
</template>

<script>
import { UnitInfoValidator } from "../../utils/validator";
import unitNotEmployed from "./unitNotEmployed.vue";
import unitOwnership from "./unitOwnership.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rules: UnitInfoValidator,
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techCompany: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techCompany["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.techCompany.creator = this.Modern.userName
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
  components: {
    unitNotEmployed,
    unitOwnership,
  },
  methods: {},
};
</script>

<style>
.Mounit {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}

.Mounit .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.Mounit .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}

.Mounit .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  margin-left: -1px;
  height: 60px;
  border-bottom: 1px solid #fff;
}
.Mounit .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.Mounit .el-form-item .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Mounit .el-input__inner {
  border: none !important;
}
.Mounit .el-textarea__inner {
  border: none;
  height: 122px;
}
.Mounit .el-form-item__error {
  position: absolute;
  top: 80%;
}
</style>
