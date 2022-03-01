<template>
  <div class="AgVessel">
    <el-tabs
      type="border-card"
      class="box"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane label="单位基本情况" name="UnitInfo" :disabled="isDataShow"
        ><UnitInfo ref="AgriculUnitInfoValidate"></UnitInfo
      ></el-tab-pane>
      <el-tab-pane
        label="单位近三年财务状况"
        name="InancialInfo"
        :disabled="isDataShow"
        ><InancialInfo></InancialInfo
      ></el-tab-pane>
      <el-tab-pane label="人员基本情况" name="PersonInfo" :disabled="isDataShow"
        ><PersonInfo ref="AgriculPersonInfoValidate"></PersonInfo
      ></el-tab-pane>
      <el-tab-pane
        label="国家、省、市财政近三年全部支持情况"
        name="HoldInfo"
        :disabled="isDataShow"
        ><HoldInfo ref="AgriculHoldInfoValidate"></HoldInfo
      ></el-tab-pane>
      <el-tab-pane label="贷款情况" name="CountableInfo" :disabled="isDataShow"
        ><CountableInfo></CountableInfo
      ></el-tab-pane>
      <el-tab-pane label="上传附件" name="UploadFiles" :disabled="isDataShow"
        ><UploadFiles></UploadFiles
      ></el-tab-pane>
      <!-- <el-tab-pane  disabled>
        <button slot="label" @click="downText" class="downText">下载申请书</button>
      </el-tab-pane> -->
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
import PersonInfo from "./personInfo.vue";
import HoldInfo from "./holdInfo.vue";
import CountableInfo from "./countableInfo.vue";
import UploadFiles from "../CreateInfo/uploadFiles.vue";
import SubmitButton from "./submitButton.vue";
//import { AGdetailsInspectData } from "../../../api/searchDetailsInspect";
import { userTaskid } from "../../../api/Agricul/userInfo";
import { AgJudge } from "../../../utils/agricul/agriculData";
import { agriculClearData } from "../../../utils/agricul/agriculUpData";
// import {
//   agriculData,
//   agriculClearData,
//   agriculFilesData,
// } from "../../../utils/agricul/agriculUpData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isDataShow: true,
      //isData: true,
      activeName: "UnitInfo",
    };
  },
  beforeRouteEnter(to, from, next) {
    if (from.path == "/") {
      next(async (vm) => {
        let status = await AgJudge(
          {
            task_id: to.query.id,
          },
          vm.$router,
          vm.$store
        );
        // console.log(
        //   "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        //   status
        //   //this.$route.query.id
        // );
        if (status != 200) {
          vm.$message.warning("数据出错");
        }
      });
    }
    next();
  },
  computed: {
    ...mapState(["Agricul"]),
  },
  methods: {
    handleActiveName(name) {
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
    if (this.$route.query.id == undefined) {
      //console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.Agricul);

      agriculClearData(this.Agricul);
      userTaskid().then((res) => {
        //console.log(res)
        this.$store.commit("Agricul_UserTaskId", res.data.data);
      });
    }
  },
  components: {
    UnitInfo,
    InancialInfo,
    PersonInfo,
    UploadFiles,
    HoldInfo,
    CountableInfo,
    SubmitButton,
  },
};
</script>
<style>
.AgVessel {
  height: 100vh-60px;
  background-color: #fff;
}
.AgVessel .el-tabs__item {
  padding: 0 20px;
}
.AgVessel .submit {
  margin: 15px 0;
  display: flex;
}
.AgVessel .submitText {
  line-height: 40px;
  flex: 10;
}
.AgVessel .submitText span {
  margin: 0 15px;
}
.AgVessel .submitBtn {
  flex: 3;
}
.AgVessel .DataContent {
  height: 60vh;
  overflow: hidden;
  overflow-y: auto;
}
.AgVessel .DataContent .Agtabel,
.AgVessel .DataContent .Agperson,
.AgVessel .DataContent .Aghold,
.AgVessel .DataContent .AgCountable {
  height: auto;
  margin-bottom: 20px;
}
.AgVessel .DataContent .Aginancial .dataRow,
.AgVessel .DataContent .AgUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
.AgVessel .DataContent .AgUpload .dataRow {
  border: none;
}
</style>
