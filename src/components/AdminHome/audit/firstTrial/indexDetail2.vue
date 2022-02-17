<template>
  <div class="Agtabel">
    <div class="Mounitmenu">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="基本信息" name="jbxx"></el-tab-pane>
        <el-tab-pane label="单位近三年财务状况" name="cwzk"></el-tab-pane>
        <el-tab-pane label="人员基本情况" name="ryqk"></el-tab-pane>
        <!-- <el-tab-pane label="法定代表人基本情况及主要个人简历" name="grjl"></el-tab-pane> -->
        <el-tab-pane
          label="国家、省、市财政近三年全部支持情况"
          name="zcqk"
        ></el-tab-pane>
        <!-- <el-tab-pane label="项目基本情况" name="xmqk"></el-tab-pane> -->
        <el-tab-pane label="贷款情况" name="dkqk"></el-tab-pane>
        <el-tab-pane label="上传附件" name="scfj"></el-tab-pane>
        <el-tab-pane label="审核" name="sh"></el-tab-pane>
      </el-tabs>
    </div>
    <el-form
      :model="agriculturalCompany"
      :rules="rules"
      ref="ruleForm"
      label-width="250px"
      class="demo-ruleForm"
      disabled
    >
      <el-row class="title jbxx"> 基本信息 </el-row>
      <el-form-item label="项目名称：" prop="task_name">
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
          <el-form-item label="网址：" prop="website">
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
            <!-- <el-input v-model="unitForm.register_addr"></el-input> 
          </el-form-item> -->
            <el-select
              v-model="agriculturalCompany.register_addr"
              placeholder="请选择注册所在区"
              style="width: 100%"
            >
              <el-option
                v-for="item in xzq_type"
                :key="item.id"
                :label="item.content"
                :value="item.content"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="统一社会信用代码：" prop="social_code">
            <el-input v-model="agriculturalCompany.social_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"
          ><el-form-item label="行业码：" prop="industry_code">
            <el-input v-model="agriculturalCompany.industry_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"
          ><el-form-item label="所属行业：" prop="prototype_type">
            <el-input
              v-model="agriculturalCompany.prototype_type"
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
          placeholder="没有则填无"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-row class="title cwzk"> 单位近三年财务状况 </el-row>
    <InancialInfo
      :agriculturalFinanceDetails="agriculturalFinance"
    ></InancialInfo>
    <el-row class="title ryqk"> 人员基本情况 </el-row>
    <PersonInfo
      :agriculturalPersDetails="agriculturalPers"
      :agriculturalShareholderDetails="agriculturalShareholder"
      :taskType="taskType"
    ></PersonInfo>
    <el-row class="title zcqk"> 国家、省、市财政近三年全部支持情况 </el-row>
    <HoldInfo
      :agriculturalSupportDetails="agriculturalSupport"
      :taskType="taskType"
    ></HoldInfo>
    <el-row class="title dkqk"> 贷款情况 </el-row>
    <CountableInfo
      :agriculturalLoanDeatils="agriculturalLoan"
      :taskType="taskType"
    ></CountableInfo>
    <el-row class="title scfj"> 上传附件 </el-row>
    <UploadFiles></UploadFiles>
    <el-row class="title sh"> 审核 </el-row>
    <div
      class="Agupload"
      style="height: 100px; border: 1px solid #ccc; border-bottom: none"
    >
      <el-row class="titleRows">
        <el-col :span="2"
          ><div class="grid-content bg-purple">审核结果</div></el-col
        >
        <el-col :span="7"
          ><div class="grid-content bg-purple">
            <el-select
              v-model="note"
              placeholder="请选择"
              style="width: 50%; color: #003366"
              @change="onNoteChange"
            >
              <el-option label="通过" value="通过"></el-option>
              <el-option label="退回" value="退回"></el-option>
            </el-select></div
        ></el-col>
      </el-row>
    </div>
    <div
      class="Agupload"
      style="height: 100px; border: 1px solid #ccc; border-top: none"
    >
      <el-row class="titleRows">
        <el-col :span="2"
          ><div class="grid-content bg-purple">审核意见</div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="reason"
              rows="5"
              resize="none"
              style="width: 100%; color: #003366"
              maxlength="300"
              show-word-limit
            >
            </el-input></div
        ></el-col>
      </el-row>
    </div>
    <el-row style="padding: 10px" v-if="taskType == '待办'">
      <el-button
        size="small"
        type="primary"
        style="float: right; margin-right: 2%"
        @click="onFlowSubmit"
        >提交</el-button
      >
      <el-button
        type="info"
        size="small"
        style="float: right; margin-right: 2%; margin-bottom: 2%"
        @click="onCancelClick"
        >取消</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { UnitInfoValidator } from "@/utils/validator";
import { UnitInfoData } from "@/api/Agricul/unitInfo";
import {
  getDetailsFlowList,
  flowPassSubmit,
  flowBackSubmit,
} from "@/api/Agricul/flowTask";
import InancialInfo from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/inancialInfo.vue";
import PersonInfo from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/personInfo.vue";
import HoldInfo from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/holdInfo.vue";
import CountableInfo from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/countableInfo.vue";
import UploadFiles from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/uploadFiles.vue";
import { mapState } from "vuex";
export default {
  props: ["isDisabledData"],
  data() {
    return {
      hy_type: "",
      xzq_type: "",
      reason: "", //审核意见
      note: "", //审核结果
      taskType: "",
      agriculturalCompany: {}, //基本情况
      agriculturalFinance: [], //财务情况
      agriculturalPers: {}, //人员情况
      agriculturalShareholder: [], //股东情况
      agriculturalSupport: [], //支持情况
      agriculturalLoan: [], //贷款情况
      rules: UnitInfoValidator,
      activeName: "jbxx",
    };
  },
  components: {
    InancialInfo,
    PersonInfo,
    HoldInfo,
    CountableInfo,
    UploadFiles,
  },
  watch: {
    activeName(n) {
      console.log(1111111111111111);
      console.log(document.getElementsByClassName(n)[0].offsetTop, "top");
      const height = document.getElementsByClassName(n)[0].offsetTop;
      document.getElementsByClassName("Agtabel")[0].scrollTop = height - 50;
    },
  },
  computed: {
    ...mapState(["Agricul"]),
  },
  methods: {
    getDetailsFlowLists() {
      getDetailsFlowList(this.$route.query.task_id).then((res) => {
        console.log(res, "asdasdasdasda");
        this.agriculturalCompany = res.data.data.agriculturalCompany
          ? res.data.data.agriculturalCompany
          : {}; //基本信息
        if (res.data.data.agriculturalFinance.length > 0) {
          this.agriculturalFinance = res.data.data.agriculturalFinance; //财务信息
        }
        this.agriculturalPers = res.data.data.agriculturalPers; //人员情况信息
        this.agriculturalShareholder = res.data.data.agriculturalShareholder; //股权信息
        this.agriculturalSupport = res.data.data.agriculturalSupport; //支持情况
        this.agriculturalLoan = res.data.data.agriculturalLoan; //贷款情况
        console.log(this.agriculturalCompany, "基本信息-----");
        console.log(this.agriculturalFinance, "财务信息-----");
        console.log(this.agriculturalPers, "人员情况信息-----");
        console.log(this.agriculturalSupport, "支持情况-----");
        console.log(this.agriculturalLoan, "贷款情况-----");
      });
    },
    //审核结果下拉框
    onNoteChange() {
      // this.onFlowSubmit()
    },
    //提交按钮
    onFlowSubmit() {
      console.log(this.note, "审核结果----");
      const data = {
        note: this.note,
        reason: this.reason,
      };
      if (this.note == "通过") {
        this.$confirm("您确认要提交吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          flowPassSubmit(this.$route.query.task_id, data).then((res) => {
            if (res.data == 200) {
              this.$message({
                message: "提交成功",
                type: "success",
              });
              this.$router.push({
                name: "FirstIndex",
                query: {
                  authName: this.$route.query.authName,
                  taskType: this.$route.query.taskType,
                },
              });
            }
          });
        });
      } else {
        this.$confirm("您确认要提交吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          flowBackSubmit(this.$route.query.task_id, data).then((res) => {
            if (res.data == 200) {
              this.$message({
                message: "退回成功",
                type: "success",
              });
              this.$router.push({
                name: "FirstIndex",
                query: {
                  authName: this.$route.query.authName,
                  taskType: this.$route.query.taskType,
                },
              });
            }
          });
        });
      }
    },
    //取消按钮
    onCancelClick() {
      this.$router.push({
        name: "FirstIndex",
        query: {
          authName: this.$route.query.authName,
          taskType: this.$route.query.taskType,
        },
      });
    },
  },
  mounted() {
    UnitInfoData("行政区").then((res) => {
      this.xzq_type = res;
    });
    this.taskType = this.$route.query.taskType;
    this.getDetailsFlowLists();
  },
  // watch: {},
};
</script>

<style>
.Agtabel {
  width: 100%;
  /* height: 95vh; */
  height: calc(95vh - 50px);
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
  position: relative;
  padding-top: 50px;
}

.Agtabel .Mounitmenu {
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
}
.Agtabel .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.Agtabel .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Agtabel .el-input__inner {
  border: none;
}
.Agtabel .el-textarea__inner {
  border: none;
  line-height: 1;
}
.Agtabel .el-form-item__error {
  position: absolute;
  top: 80%;
}
.Agupload .titleRows {
  background-color: #fff;
  line-height: 60px;
}
</style>
