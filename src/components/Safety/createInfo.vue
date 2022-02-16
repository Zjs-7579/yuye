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
        <ProjectUnitInfo ref="SafetyProjectUnitInfoValidate" />
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
      <!--
        一、单位基本情况
        二、单位近三年财务状况（企业类填报）
        二、单位近三年财务状况（事业类填报）
        三、国家、省、市财政近三年全部支持情况
        四、项目承担单位基本情况（限500字之内）
        五、项目实施的背景、意义及实施内容（限1500字之内)
        六、项目投资情况(单位：万元)
        七、本项目所附材料清单
        八、摘要（便于项目现场考察和专家评审时需要相关信息、数据）
       -->
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
// import { safetyClearData } from "../../../utils/safetyUpData";
export default {
  data() {
    return {
      isDataShow: false,
      activeName: "UnitInfo",
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
      console.log(tab);
      // this.index = tab.index
      // this.activeName = this.activeList[tab.index];
      // this.isLabelText = this.activeTextList[tab.index];
    },
  },
  mounted() {
    {
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
