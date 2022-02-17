<template>
  <div class="MoVessel">
    
    <el-tabs
      type="border-card"
      class="box"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane label="单位基本情况" :disabled="isDataShow" name="UnitInfo">
        <UnitInfo ref="ModernUnitInfoValidate"></UnitInfo>
      </el-tab-pane>

      <el-tab-pane label="近三年财务状况" :disabled="isDataShow" name="InancialInfo">
        <InancialInfo></InancialInfo>
      </el-tab-pane>

      <el-tab-pane
        label="国家、省、市财政近三年全部支持情况"
        :disabled="isDataShow"
        name="HoldInfo"
      >
        <HoldInfo ref="ModernHoldInfoValidate"></HoldInfo>
      </el-tab-pane>

      <el-tab-pane label="项目承担单位基本情况" :disabled="isDataShow" name="ProjectUnitInfo">
        <ProjectUnitInfo></ProjectUnitInfo>
      </el-tab-pane>

      <el-tab-pane
        label="项目实施的背景、意义及实施内容"
        :disabled="isDataShow"
        name="ProjectContent"
      >
        <ProjectContent ref="ModernProjectContentValidate"></ProjectContent>
      </el-tab-pane>

      <el-tab-pane label="项目投资情况" :disabled="isDataShow" name="ProjectInvest">
        <ProjectInvest></ProjectInvest>
      </el-tab-pane>

      <el-tab-pane label="摘要" :disabled="isDataShow" name="SummarizeInfo">
        <SummarizeInfo  ref="ModernSummarizeInfoValidate"></SummarizeInfo>
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
import HoldInfo from "./holdInfo.vue";
import ProjectUnitInfo from "./projectUnitInfo.vue";
import ProjectContent from "./projectContent.vue";
import ProjectInvest from "./projectInvest.vue";
import SummarizeInfo from "./summarizeInfo.vue";
import UploadFiles from "./uploadFiles.vue";
import SubmitButton from "./submitButton.vue";
import {MOdetailsInspectData} from "../../../api/searchDetailsInspect"
import {userTaskid} from "../../../api/Modern/userInfo"
import { modernData,  modernClearData, modernFilesData } from "../../../utils/modernUpData"
import {mapState} from "vuex"
export default {
  data() {
    return {
      isDataShow: true,
      activeName: "UnitInfo",
    };
  },
  computed: {
		...mapState(['Modern'])
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
    HoldInfo,
    ProjectUnitInfo,
    ProjectContent,
    ProjectInvest,
    SummarizeInfo,
    UploadFiles,
    SubmitButton,
  },
  mounted() {
    this.$store.commit("Modern_IsDisabledDataClose");
		modernClearData(this.Modern)
    if(this.$route.query.id != undefined){
			MOdetailsInspectData(this.$route.query.id).then(res=>{
				console.log('-------------------------------', res)
				this.$store.commit('Modern_UserTaskId', this.$route.query.id)
        let result = modernData(res.data.data)
        console.log('000000', result)
        let uploadUrlData
        res.data.data.images?uploadUrlData = modernFilesData(res.data.data.images):uploadUrlData = []
        //console.log('result', result)
				//this.Modern.ModernData = result
        this.$store.commit('Modern_AllClearData', {result, uploadUrlData})
			})
		}else{
			userTaskid().then(res=>{
        //console.log(res)
        this.$store.commit('Modern_UserTaskId', res.data.data)
      });
		}
  },
};
</script>

<style>

.MoVessel .downText {
  outline: none;
}
.MoVessel {
  height: 100vh -60px;
  background-color: #fff;
}
.MoVessel .el-tabs__item {
  padding: 0 20px;
}
.MoVessel .submit {
  margin: 15px 0;
  display: flex;
}
.MoVessel .submitText {
  line-height: 40px;
  flex: 10;
}
.MoVessel .submitText span {
  margin: 0 15px;
}
.MoVessel .submitBtn {
  flex: 3;
}
.MoVessel .DataContent {
  height: 60vh;
  overflow: hidden;
  overflow-y: auto;
}
.MoVessel .DataContent .Mounit,
.MoVessel .DataContent .Motabel,
.MoVessel .DataContent .Moperson,
.MoVessel .DataContent .MoHold,
.MoVessel .DataContent .MoInvest,
.MoVessel .DataContent .MoSummarize,
.MoVessel .DataContent .MoContentTitle {
  height: auto;
  margin-bottom: 20px;
}

.MoVessel .DataContent .Moinancial .dataPanRow,
.MoVessel .DataContent .Moinancial .dataUnderRow,
.MoVessel .DataContent .MoUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>
