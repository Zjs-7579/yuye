<template>
  <div class="Mounit">
    <div class="Mounitmenu">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="单位基本情况" name="dwjbqk"></el-tab-pane>
        <el-tab-pane label="上年末从业人员情况" name="ryzk"></el-tab-pane>
        <el-tab-pane label="公司股权结构" name="gqjg"></el-tab-pane>
        <el-tab-pane label="近三年财务状况(企业类)" name="qyl"></el-tab-pane>
        <el-tab-pane label="近三年财务状况(事业类)" name="syl"></el-tab-pane>
        <el-tab-pane label="支持情况" name="zcqk"></el-tab-pane>
        <el-tab-pane label="项目承担单位基本情况" name="dwjb"></el-tab-pane>
        <el-tab-pane label="单位背景情况" name="dwbj"></el-tab-pane>
        <el-tab-pane label="项目投资情况" name="xmtz"></el-tab-pane>
      </el-tabs>
    </div>
    <div id="test">
      <el-form
        :model="modernCompany"
        ref="ruleForm"
        :rules="rules"
        label-width="250px"
        class="demo-ruleForm"
        disabled="true"
      >
        <el-row class="title dwjbqk"> 单位基本情况 </el-row>

        <el-form-item label="单位名称:" prop="unit_name">
          <el-input v-model="modernCompany.unit_name"></el-input>
        </el-form-item>

        <el-form-item label="单位地址:" prop="unit_address">
          <el-input v-model="modernCompany.unit_address"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="单位注册资本:" prop="unit_reg_capital">
              <el-input v-model="modernCompany.unit_reg_capital"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="注册时间:" prop="register_time">
              <el-input v-model="modernCompany.register_time"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="注册所在区:" prop="register_addr">
              <el-input v-model="modernCompany.register_addr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="注册所在街道:" prop="register_street">
              <el-input v-model="modernCompany.register_street"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="统一社会信用代码：" prop="social_code">
              <el-input v-model="modernCompany.social_code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记注册类型:" prop="regist_type">
              <el-input v-model="modernCompany.regist_type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="主要产品服务:" prop="major_products">
          <el-input v-model="modernCompany.major_products"></el-input>
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
                v-model="modernCompany.technical_field"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="办公所在区:" prop="work_place">
              <el-input v-model="modernCompany.work_place"></el-input>
            </el-form-item>
            <el-form-item label="生产所在区:" prop="product_place">
              <el-input v-model="modernCompany.product_place"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="单位资质:" prop="unit_professional">
          <el-input v-model="modernCompany.unit_professional"></el-input>
        </el-form-item>

        <el-form-item label="单位网址:" prop="unit_website">
          <el-input v-model="modernCompany.unit_website"></el-input>
        </el-form-item>
      </el-form>
      <div class="ryzk">
        <unitNotEmployed></unitNotEmployed>
      </div>
      <div class="gqjg">
        <unitOwnership></unitOwnership>
      </div>
      <el-row class="title qyl"> 近三财务状况(企业类) </el-row>
      <InancialPanyInfo :panyInfo="modernFinance"></InancialPanyInfo>
      <el-row class="title syl"> 近三年财务状况(事业类) </el-row>
      <inancialUnderInfo></inancialUnderInfo>
      <el-row class="title zcqk"> 支持情况 </el-row>
      <HoldInfo></HoldInfo>
      <el-row class="title dwjb">项目承担单位基本情况</el-row>
      <ProjectUnitInfo></ProjectUnitInfo>
      <el-row class="title dwbj">单位背景情况</el-row>
      <ProjectContet></ProjectContet>
      <el-row class="title xmtz">项目投资情况</el-row>
      <ProjectInvest></ProjectInvest>
    </div>
  </div>
</template>

<script>
import { UnitInfoValidator } from "@/utils/validator";
import { getAdvanceDetails } from "@/api/Agricul/flowTask";
import unitNotEmployed from "@/components/AdminHome/audit/firstTrial/CreateInfo/unitNotEmployed.vue";
import unitOwnership from "@/components/AdminHome/audit/firstTrial/CreateInfo/unitOwnership.vue";
import InancialPanyInfo from "@/components/AdminHome/audit/firstTrial/CreateInfo/inancialPanyInfo.vue";
import inancialUnderInfo from "@/components/AdminHome/audit/firstTrial/CreateInfo/inancialUnderInfo.vue";
import HoldInfo from "@/components/AdminHome/audit/firstTrial/CreateInfo/holdInfo.vue";
import ProjectUnitInfo from "@/components/AdminHome/audit/firstTrial/CreateInfo/projectUnitInfo.vue";
import ProjectContet from "@/components/AdminHome/audit/firstTrial/CreateInfo/projectContet.vue";
import ProjectInvest from "@/components/AdminHome/audit/firstTrial/CreateInfo/projectInvest.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      modernCompany: {}, //单位基本情况
      modernFinance: [], //财务情况(企业)
      rules: UnitInfoValidator,
      activeName: "dwjbqk",
    };
  },
  computed: {
    ...mapState(["Modern"]),
    // modernCompany: {
    //   get() {
    //     return this.Modern.ModernData.modernCompany;
    //   },
    //   set(val) {
    //     this.modernCompany = val;
    //   },
    // },
  },
  watch: {
    activeName(n) {
      console.log(1111111111111111);
      console.log(document.getElementsByClassName(n)[0].offsetTop, "top");
      const height = document.getElementsByClassName(n)[0].offsetTop;
      document.getElementsByClassName("Mounit")[0].scrollTop = height - 50;
    },
  },
  components: {
    unitNotEmployed,
    unitOwnership,
    InancialPanyInfo,
    inancialUnderInfo,
    HoldInfo,
    ProjectUnitInfo,
    ProjectContet,
    ProjectInvest,
  },
  mounted() {
    this.getAdvanceDetail();
    // document.getElementsByClassName('Mounit')[0].scrollTop = 50
    // console.log(document.getElementsByClassName('title')[0].offsetTop, 'top')
  },
  methods: {
    getAdvanceDetail() {
      getAdvanceDetails(this.$route.query.task_id).then((res) => {
        this.modernCompany = res.data.data.modernCompany;
        this.modernFinance = res.data.data.modernFinances; //财务情况(企业类)
        console.log(this.modernFinance, "现代详情接口数据------");
      });
    },
  },
};
</script>

<style>
.Mounit {
  width: 100%;
  height: calc(95vh - 50px);
  /* height: 95vh; */
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
  position: relative;
  padding-top: 50px;
}
.Mounit .Mounitmenu {
  position: fixed;
  height: 40px;
  top: 60px;
  left: 202px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  background: #fff;
  z-index: 9999;
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
}
</style>
