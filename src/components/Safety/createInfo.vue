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
import { SadetailsInspectData } from "../../api/searchDetailsInspect";
import {
  safetyData,
  safetyClearData,
  safetyFilesData,
} from "../../utils/safetyUpData";
// import { safetyClearData } from "../../../utils/safetyUpData";
export default {
  data() {
    return {
      isDataShow: false,
      activeName: "UnitInfo",
      lastActiveName: "",
    };
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
        console.log(this.lastActiveName, "-->", tab.name);
      }
      this.lastActiveName = tab.name;
      // this.validationDataTab(tab.name);
      // this.index = tab.index
      // this.activeName = this.activeList[tab.index];
      // this.isLabelText = this.activeTextList[tab0.index];
    },
  },
  mounted() {
    this.$store.commit("Safety_IsDisabledDataClose"); // 打开禁用
    safetyClearData(this.Safety); // 清除数据
    if (this.$route.query.id != undefined) {
      SadetailsInspectData(this.$route.query.id).then((res) => {
        if (res.data.code == 200) {
          this.$store.commit("Safety_UserTaskId", this.$route.query.id);
          let result = safetyData(res.data.data);
          let uploadUrlData = safetyFilesData(res.data.data.images);
          this.$store.commit("Safety_AllClearData", { result, uploadUrlData });
        }
      });
    } else {
      userTaskid().then((res) => {
        //console.log(res)
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
