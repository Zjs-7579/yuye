<template>
  <div class="SafetyInfo">
    <el-tabs
      type="border-card"
      class="box"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane label="单位基本情况" :disabled="isDataShow" name="UnitInfo">
        <UnitInfo ref="SafetyUnitInfoValidate" />
      </el-tab-pane>

      <el-tab-pane
        label="近三年财务状况"
        :disabled="isDataShow"
        name="InancialInfo"
      >
        <InancialInfo ref="SafetyInancialInfoValidate" />
      </el-tab-pane>

      <el-tab-pane
        label="国家、省、市财政近三年全部支持情况"
        :disabled="isDataShow"
        name="HoldInfo"
      >
        <HoldInfo ref="SafetyHoldInfoValidate" />
      </el-tab-pane>

      <el-tab-pane
        label="项目承担单位基本情况"
        :disabled="isDataShow"
        name="ProjectUnitInfo"
      >
        <ProjectUnitInfo />
      </el-tab-pane>

      <el-tab-pane
        label="项目实施的背景、意义及实施内容"
        :disabled="isDataShow"
        name="ProjectContent"
      >
        <ProjectContent ref="SafetyProjectContentValidate" />
      </el-tab-pane>

      <el-tab-pane
        label="项目投资情况"
        :disabled="isDataShow"
        name="ProjectInvest"
      >
        <ProjectInvest ref="SafetyProjectInvestValidate" />
      </el-tab-pane>

      <el-tab-pane label="摘要" :disabled="isDataShow" name="SummarizeInfo">
        <SummarizeInfo ref="SafetySummarizeInfoValidate" />
      </el-tab-pane>

      <el-tab-pane label="上传附件" :disabled="isDataShow" name="UploadFiles">
        <UploadFiles ref="SafetyUploadFilesValidate" />
      </el-tab-pane>
    </el-tabs>
    <SubmitButton
      @handleActionNameText="handleActiveName"
      :activeName="activeName"
      ref="SafetyValiefdate"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UnitInfo from "./unitInfo.vue";
import SubmitButton from "./submitButton.vue";
import HoldInfo from "./holdInfo.vue";
import ProjectUnitInfo from "./projectUnitInfo.vue";
import ProjectContent from "./projectContent.vue";
import ProjectInvest from "./projectInvest.vue";
import SummarizeInfo from "./summarizeInfo.vue";
import UploadFiles from "./uploadFiles.vue";
// import MaterialList from "./MaterialList.vue";
import InancialInfo from "./inancialInfo.vue";
import { userTaskid } from "../../api/Safety/userInfo";
import { SaJudge } from "../../utils/safety/safetyData";
import { safetyClearData } from "../../utils/safety/safetyUpData";

export default {
  data() {
    return {
      isDataShow: false,
      activeName: "UnitInfo",
      lastActiveName: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    if (from.path == "/") {
      next(async (vm) => {
        let status;
        if (!to.query.id) {
          status = 200;
        } else {
          status = await SaJudge(
            {
              task_id: to.query.id,
            },
            vm.$router,
            vm.$store
          );
        }
        if (status != 200) {
          vm.$message.warning("数据出错");
        }
      });
    }
    next();
  },
  computed: {
    ...mapState(["Safety"]),
  },
  components: {
    UnitInfo,
    HoldInfo,
    ProjectUnitInfo,
    ProjectContent,
    ProjectInvest,
    SummarizeInfo,
    SubmitButton,
    UploadFiles,
    InancialInfo,
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
      if (this.lastActiveName) {
        // console.log(this.lastActiveName, "-->", tab.name);
        ("");
      }
      this.lastActiveName = tab.name;
      // this.validationDataTab(tab.name);
      // this.index = tab.index
      // this.activeName = this.activeList[tab.index];
      // this.isLabelText = this.activeTextList[tab0.index];
    },
  },
  mounted() {
    if (this.$route.query.id == undefined) {
      safetyClearData(this.Safety);
      userTaskid().then((res) => {
        this.$store.commit("Safety_UserTaskId", res.data.data);
      });
    }
  },
};
</script>

<style>
.SafetyInfo {
  height: 100vh -60px;
  background-color: #fff;
}
.submit {
  margin: 15px 0;
  display: flex;
}
.submitText {
  line-height: 40px;
  flex: 10;
}
.submitText span {
  margin: 0 15px;
}
.submitBtn {
  flex: 3;
}
</style>
