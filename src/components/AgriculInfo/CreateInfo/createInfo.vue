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
import { AGdetailsInspectData } from "../../../api/searchDetailsInspect";
import { userTaskid } from "../../../api/Agricul/userInfo";
import {
  agriculData,
  agriculClearData,
  agriculFilesData,
} from "../../../utils/agriculUpData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isDataShow: true,
      isData: true,
      activeName: "UnitInfo",
    };
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
  created() {
    // this.$store.commit("Agricul_IsDisabledDataClose");
    // agriculClearData(this.Agricul);
    // if (this.$route.query.id != undefined) {
    //   AGdetailsInspectData(this.$route.query.id).then((res) => {
    //     //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',res)
    //     let result = agriculData(res.data.data);
    //     let uploadUrlData = agriculFilesData(res.data.data.images);
    //     this.$store.commit("Agricul_AllClearData", { result, uploadUrlData });
    //     this.$store.commit("Agricul_UserTaskId", this.$route.query.id);
    //     //this.Agricul.AgriculData = result
    //     //this.Agricul.uploadUrlData = uploadUrlData
    //     //console.log("1111111111111111111111111111111111111111111111111111111",this.Agricul)
    //     //console.log(this.Agricul.userTaskId)
    //   });
    //   this.isShow = true;
    //   //this.isData = false
    // } else {
    //   userTaskid().then((res) => {
    //     //console.log(res)
    //     this.$store.commit("Agricul_UserTaskId", res.data.data);
    //   });
    // }
  },
  mounted() {
    this.$store.commit("Agricul_IsDisabledDataClose"); // 打开禁用
    agriculClearData(this.Agricul); // 清除数据
    if (this.$route.query.id != undefined) {
      AGdetailsInspectData(this.$route.query.id).then((res) => {
        //console.log('data', res)
        // if (res.data.code == 200) {}
        this.$store.commit("Agricul_UserTaskId", this.$route.query.id);
        let result = agriculData(res.data.data);
        let uploadUrlData;
        res.data.data.images
          ? (uploadUrlData = agriculFilesData(res.data.data.images))
          : (uploadUrlData = []);
        //console.log('result', result)
        //this.Modern.ModernData = result
        this.$store.commit("Agricul_AllClearData", { result, uploadUrlData });
      });
    } else {
      userTaskid().then((res) => {
        //console.log(res)
        this.$store.commit("Agricul_UserTaskId", res.data.data);
      });
    }
  },

  // mounted() {
  // 	this.$store.commit("Agricul_IsDisabledDataClose");
  // 	agriculClearData(this.Agricul)
  // 	if(this.$route.query.id != undefined){
  // 		AGdetailsInspectData(this.$route.query.id).then(res=>{
  // 			//console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',res)
  // 			this.$store.commit('Agricul_UserTaskId', this.$route.query.id)
  // 			let result = agriculData(res.data.data)
  // 			let uploadUrlData = agriculFilesData(res.data.data.images)

  // 			this.$store.commit('Agricul_AllClearData', {result, uploadUrlData})
  // 			//this.Agricul.AgriculData = result
  // 			//this.Agricul.uploadUrlData = uploadUrlData
  // 			//console.log("1111111111111111111111111111111111111111111111111111111",this.Agricul)
  // 			//console.log(this.Agricul.userTaskId)
  // 		})
  // 	}else{
  // 		userTaskid().then(res=>{
  // 			//console.log(res)
  // 			this.$store.commit('Agricul_UserTaskId', res.data.data)
  // 		});
  // 	}
  // },
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
