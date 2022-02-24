<template>
  <div class="DataContent">
    <div class="nav-tabs" :style="{ display: isDetailsContent }">
      <a
        href="#UnitInfo"
        @click="handleColorText('UnitInfo')"
        :class="colorText == 'UnitInfo' ? 'colorText' : ''"
        >单位基本情况</a
      >
      <a
        href="#InancialInfo"
        @click="handleColorText('InancialInfo')"
        :class="colorText == 'InancialInfo' ? 'colorText' : ''"
        >近三年财务状况</a
      >
      <a
        href="#ResearchInfo"
        @click="handleColorText('ResearchInfo')"
        :class="colorText == 'ResearchInfo' ? 'colorText' : ''"
        >近三年科研活动状况</a
      >
      <a
        href="#HoldInfo"
        @click="handleColorText('HoldInfo')"
        :class="colorText == 'HoldInfo' ? 'colorText' : ''"
        >国家、省、市财政近三年全部支持情况</a
      >
      <a
        href="#TeamInfo"
        @click="handleColorText('HoldInfo')"
        :class="colorText == 'TeamInfo' ? 'colorText' : ''"
        >团队基本情况</a
      >
      <a
        href="#ProjectUnitInfo"
        @click="handleColorText('ProjectUnitInfo')"
        :class="colorText == 'ProjectUnitInfo' ? 'colorText' : ''"
        >项目承担单位基本情况</a
      >

      <a
        v-if="regist_type == '企业'"
        href="#ProjectContent"
        @click="handleColorText('ProjectContent')"
        :class="colorText == 'ProjectContent' ? 'colorText' : ''"
        >项目实施的背景、意义及实施内容</a
      >
      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectImplement"
        @click="handleColorText('ProjectImplement')"
        :class="colorText == 'ProjectImplement' ? 'colorText' : ''"
        >项目实施背景及意义</a
      >
      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectBuild"
        @click="handleColorText('ProjectBuild')"
        :class="colorText == 'ProjectBuild' ? 'colorText' : ''"
        >项目建设内容</a
      >
      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectCondition"
        @click="handleColorText('ProjectCondition')"
        :class="colorText == 'ProjectCondition' ? 'colorText' : ''"
        >项目实施基础和条件</a
      >

      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectProgress"
        @click="handleColorText('ProjectProgress')"
        :class="colorText == 'ProjectProgress' ? 'colorText' : ''"
        >项目实施进度与管理</a
      >
      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectBenefit"
        @click="handleColorText('ProjectBenefit')"
        :class="colorText == 'ProjectBenefit' ? 'colorText' : ''"
        >项目效益</a
      >
      <a
        v-if="regist_type == '事业单位'"
        href="#ProjectFund"
        @click="handleColorText('ProjectFund')"
        :class="colorText == 'ProjectFund' ? 'colorText' : ''"
        >项目经费</a
      >

      <a
        v-if="regist_type == '企业'"
        href="#ProjectInvest"
        @click="handleColorText('ProjectInvest')"
        :class="colorText == 'ProjectInvest' ? 'colorText' : ''"
        >项目投资情况</a
      >
      <a
        href="#SummarizeInfo"
        @click="handleColorText('SummarizeInfo')"
        :class="colorText == 'SummarizeInfo' ? 'colorText' : ''"
        >摘要</a
      >
      <a
        href="#UploadFiles"
        @click="handleColorText('UploadFiles')"
        :class="colorText == 'UploadFiles' ? 'colorText' : ''"
        >上传附件</a
      >
    </div>
    <div
      :style="{
        display: this.HighTech.isDetailsContent
          ? 'none'
          : 'width: 100%; height: 55px',
      }"
    ></div>

    <div class="AllDataTable">
      <div id="UnitInfo"><UnitInfo /></div>
      <div id="InancialInfo"><InancialInfo /></div>
      <div id="ResearchInfo"><ResearchInfo /></div>
      <div id="HoldInfo"><HoldInfo /></div>
      <div id="TeamInfo"><TeamInfo /></div>
      <div id="ProjectUnitInfo"><ProjectUnitInfo /></div>
      <div id="ProjectContent" v-if="regist_type == '企业'">
        <ProjectContent />
      </div>
      <div id="ProjectImplement" v-if="regist_type == '事业单位'">
        <ProjectImplement />
      </div>
      <div id="ProjectBuild" v-if="regist_type == '事业单位'">
        <ProjectBuild />
      </div>
      <div id="ProjectCondition" v-if="regist_type == '事业单位'">
        <ProjectCondition />
      </div>
      <div id="ProjectProgress" v-if="regist_type == '事业单位'">
        <ProjectProgress />
      </div>
      <div id="ProjectBenefit" v-if="regist_type == '事业单位'">
        <ProjectBenefit />
      </div>
      <div id="ProjectFund" v-if="regist_type == '事业单位'">
        <ProjectFund />
      </div>
      <div id="ProjectInvest" v-if="regist_type == '企业'">
        <ProjectInvest />
      </div>
      <div id="SummarizeInfo"><SummarizeInfo /></div>
      <div id="UploadFiles"><UploadFiles /></div>

      <!-- <UploadFilesList></UploadFilesList> -->

      <div id="AuditInfo" v-if="this.$route.name == 'UserDetail'">
        <AuditInfo></AuditInfo>
      </div>
    </div>

    <div
      class="allBtn"
      :style="{ display: this.HighTech.isDetailsContent ? 'none' : 'block' }"
    >
      <el-button type="primary" @click="SubmitData">提交</el-button>
    </div>
  </div>
</template>

<script>
import UnitInfo from "./unitInfo.vue";
import InancialInfo from "./inancialInfo.vue";
import ResearchInfo from "./researchInfo.vue";
import HoldInfo from "./holdInfo.vue";
import TeamInfo from "./teamInfo.vue";
import ProjectUnitInfo from "./projectUnitInfo.vue";
import ProjectContent from "./projectContent.vue";

import ProjectImplement from "./projectImplement.vue";
import ProjectBuild from "./projectBuild.vue";
import ProjectCondition from "./projectCondition.vue";
import ProjectProgress from "./projectProgress.vue";
import ProjectBenefit from "./projectBenefit.vue";
import ProjectFund from "./projectFund.vue";

import ProjectInvest from "./projectInvest.vue";
import SummarizeInfo from "./summarizeInfo.vue";
import UploadFiles from "./uploadFiles.vue";
import AuditInfo from "../User/auditInfo.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      colorText: "UnitInfo",
      name: "",
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    isDetailsContent: {
      get() {
        if (this.HighTech.isDetailsContent) {
          return "block";
        } else {
          return "none";
        }
      },
      set(val) {
        this.isDetailsContent = val;
      },
    },
    regist_type() {
      return this.HighTech.HighTechData.techCompany.regist_type;
    },
  },
  components: {
    UnitInfo,
    InancialInfo,
    ResearchInfo,
    HoldInfo,
    TeamInfo,
    ProjectUnitInfo,
    ProjectContent,
    ProjectImplement,
    ProjectBuild,
    ProjectCondition,
    ProjectProgress,
    ProjectBenefit,
    ProjectFund,
    ProjectInvest,
    SummarizeInfo,
    UploadFiles,
    AuditInfo,
  },
  methods: {
    handleColorText(text) {
      console.log(this);
      this.colorText = text;
    },
    SubmitData() {
      this.$confirm("数据是否确认无误，是否上传提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //   createSubmit(this.Agricul).then((res) => {
          //     if (res.data.code == 400) {
          //       this.$message({
          //         type: "warning",
          //         message: res.data.msg,
          //       });
          //     }
          //     if (res.data.code == 200) {
          //       this.$message({
          //         type: "success",
          //         message: "表单提交成功!",
          //       }),
          //         setTimeout(
          //           this.$router.push({
          //             path: "/home",
          //           }),
          //           1000
          //         );
          //     }
          //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
  },
  mounted() {
    //agriculClearData(this.Agricul)
    //console.log(this.Agricul)
    console.log(this.$route);
    // if(!this.$router.query.id){
    //   agriculClearData(this.Agricul)
    // }
  },
};
</script>

<style>
.DataContent {
  width: 100%;
  position: relative;
  /* position: static;
 margin-top: 55px; */
}
.DataContent .allBtn {
  display: inline-block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 30px;
}
.DataContent .nav-tabs {
  box-sizing: border-box;
  background-color: #ece8e8;
  border: 1px solid #ccc;
  /* position: absolute; */
  /* position:sticky; */
  width: 100% !important;
  /* position: absolute;
  top: 55px; */
  position: fixed;
  /* width: calc(100% - 45px); */
  /* width: 100% !important; */
  /* padding: 15px 0; */
  z-index: 99;
  font-size: 15px;
}
.DataContent .nav-tabs a {
  padding: 0 15px;
}
.DataContent .nav-tabs a:hover {
  color: #409eff;
}

.DataContent .colorText {
  color: #409eff;
}
</style>
