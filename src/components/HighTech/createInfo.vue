<template>
  <div class="HighTech">
    <el-tabs
      type="border-card"
      class="box"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane label="单位基本情况" :disabled="isDataShow" name="UnitInfo">
        <UnitInfo ref="HighTechUnitInfoValidate"></UnitInfo>
      </el-tab-pane>

      <el-tab-pane
        label="近三年财务状况"
        :disabled="isDataShow"
        name="InancialInfo"
      >
        <InancialInfo></InancialInfo>
      </el-tab-pane>

      <el-tab-pane
        label="近三年科研活动状况"
        :disabled="isDataShow"
        name="ResearchInfo"
      >
        <ResearchInfo></ResearchInfo>
      </el-tab-pane>

      <el-tab-pane
        label="国家、省、市财政近三年全部支持情况"
        :disabled="isDataShow"
        name="HoldInfo"
      >
        <HoldInfo ref="HighTechHoldInfoValidate"></HoldInfo>
      </el-tab-pane>

      <el-tab-pane label="团队基本情况" :disabled="isDataShow" name="TeamInfo">
        <TeamInfo ref="HighTechTeamInfoValidate"></TeamInfo>
      </el-tab-pane>

      <el-tab-pane
        label="项目承担单位基本情况"
        :disabled="isDataShow"
        name="ProjectUnitInfo"
      >
        <ProjectUnitInfo></ProjectUnitInfo>
      </el-tab-pane>

      <el-tab-pane
        v-if="regist_type == '企业'"
        label="项目实施的背景、意义及实施内容(企业)"
        :disabled="isDataShow"
        name="ProjectContent"
      >
        <ProjectContent ref="HighTechProjectContentValidate"></ProjectContent>
      </el-tab-pane>

      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目实施背景及意义(事业)"
        :disabled="isDataShow"
        name="ProjectImplement"
      >
        <ProjectImplement></ProjectImplement>
      </el-tab-pane>
      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目建设内容(事业)"
        :disabled="isDataShow"
        name="ProjectBuild"
      >
        <ProjectBuild></ProjectBuild>
      </el-tab-pane>
      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目实施基础和条件(事业)"
        :disabled="isDataShow"
        name="ProjectCondition"
      >
        <ProjectCondition></ProjectCondition>
      </el-tab-pane>
      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目实施进度与管理(事业)"
        :disabled="isDataShow"
        name="ProjectProgress"
      >
        <ProjectProgress></ProjectProgress>
      </el-tab-pane>
      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目效益(事业)"
        :disabled="isDataShow"
        name="ProjectBenefit"
      >
        <ProjectBenefit ref="HighTechBenefitValidate"></ProjectBenefit>
      </el-tab-pane>
      <el-tab-pane
        v-if="regist_type == '事业单位'"
        label="项目经费(事业)"
        :disabled="isDataShow"
        name="ProjectFund"
      >
        <ProjectFund ref="HighTechFundValidate"></ProjectFund>
      </el-tab-pane>

      <el-tab-pane
        v-if="regist_type == '企业'"
        label="项目投资情况(企业)"
        :disabled="isDataShow"
        name="ProjectInvest"
      >
        <ProjectInvest></ProjectInvest>
      </el-tab-pane>

      <el-tab-pane label="摘要" :disabled="isDataShow" name="SummarizeInfo">
        <SummarizeInfo ref="HighTechSummarizeInfoValidate"></SummarizeInfo>
      </el-tab-pane>

      <el-tab-pane label="上传附件" :disabled="isDataShow" name="UploadFiles">
        <UploadFiles></UploadFiles>
      </el-tab-pane>
    </el-tabs>

    <SubmitButton
      @handleActionNameText="handleActiveName"
      :activeName="activeName"
    ></SubmitButton>
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
import SubmitButton from "./submitButton.vue";
//import {MOdetailsInspectData} from "../../../api/searchDetailsInspect"
import { userTaskid } from "../../api/HighTech/userInfo";
//import { modernData,  modernClearData, modernFilesData } from "../../../utils/modernUpData"
import { HiJudge } from "../../utils/high/highData";
import { highClearData } from "../../utils/high/highUpData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isDataShow: true,
      activeName: "UnitInfo",
    };
  },

  beforeRouteEnter(to, from, next) {
    console.log("to", to, "from", from, to.query.id);
    if (from.path == "/" && to.query.id) {
      next(async (vm) => {
        let status = 0;
        if (to.query.id) {
          status = await HiJudge(
            {
              task_id: to.query.id,
            },
            vm.$router,
            vm.$store
          );
        } else {
          status = 200;
        }
        if (status != 200) {
          vm.$message.warning("数据出错");
        }
      });
    }
    if (from.path == "/" && !to.query.id) {
      next(async (vm) => {
        vm.$router.push({
          path: "/home",
        });
      });
    }
    next();
  },
  computed: {
    ...mapState(["HighTech"]),
    regist_type() {
      return this.HighTech.HighTechData.techCompany.regist_type;
    },
  },
  methods: {
    handleActiveName(name) {
      //console.log(name)
      if (name == "UploadFiles") {
        this.isDataShow = false;
      }
      this.activeName = name;
    },
    handleClick(tab) {
      console.log(tab);
      // this.index = tab.index
      // this.activeName = this.activeList[tab.index];
      // this.isLabelText = this.activeTextList[tab.index];
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
    SubmitButton,
  },
  mounted() {
    this.$store.commit("HighTech_IsDisabledData", false);
    if (this.$route.query.id == undefined) {
      //console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.Agricul);

      highClearData(this.HighTech);
      userTaskid().then((res) => {
        //console.log(res)
        this.$store.commit("HighTech_UserTaskId", res.data.data);
      });
    }
  },
};
</script>

<style>
.HighTech .downText {
  outline: none;
}
.HighTech {
  height: 100vh -60px;
  background-color: #fff;
}
.HighTech .el-tabs__item {
  padding: 0 20px;
}
.HighTech .submit {
  margin: 15px 0;
  display: flex;
}
.HighTech .submitText {
  line-height: 40px;
  flex: 8;
}
.HighTech .submitText span {
  margin: 0 15px;
}
.HighTech .submitBtn {
  flex: 3;
}
.HighTech .DataContent {
  height: 60vh;
  overflow: hidden;
  overflow-y: scroll;
}
.HighTech .DataContent .Mounit,
.HighTech .DataContent .Motabel,
.HighTech .DataContent .Moperson,
.HighTech .DataContent .MoHold,
.HighTech .DataContent .MoInvest,
.HighTech .DataContent .MoSummarize,
.HighTech .DataContent .MoContentTitle,
.HighTech .DataContent .MoboxTitle,
.HighTech .DataContent .HighFund,
.HighTech .DataContent .HighSummarize,
.HighTech .DataContent .HighProgress,
.HighTech .DataContent .ReInimical,
.HighTech .DataContent .Moinancial .PanInimical,
.HighTech .DataContent .Moinancial .PanInimical .dataPanRow,
.HighTech .DataContent .Moinancial .UnderInimical,
.HighTech .DataContent .Moinancial .UnderInimical .dataUnderRow {
  height: auto;
  margin-bottom: 20px;
}

/* .HighTech .DataContent .Moinancial .PanInimical {
  height: auto;
}
.HighTech .DataContent .Moinancial .PanInimical .dataPanRow {
  height: auto;
} */
/* .HighTech .DataContent .PanInimical .dataPanRow,
.HighTech .DataContent .UnderInimical .dataUnderRow, */
.HighTech .DataContent .ReInimical .dataRow,
.HighTech .DataContent .MoUpload .dataRow,
.HighTech .DataContent .HighProgress .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>
