<template>
  <div class="fishingGuides">

    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="远洋渔业项目申报表" name="ApplyInfo">
        <ApplyInfo ref="ApplyInfo"></ApplyInfo>
      </el-tab-pane>
      <el-tab-pane label="远洋渔业项目统计表" name="StatisticalInfo">
        <StatisticalInfo></StatisticalInfo>
      </el-tab-pane>
      <el-tab-pane label="上传附件" name="UploadFiles">
        <UploadFiles></UploadFiles>
      </el-tab-pane>
    </el-tabs>

		<SubmitButton @handleActionNameText = "handleActiveName" :activeName="activeName"></SubmitButton>
  </div>
</template>

<script>
import ApplyInfo from "./applyInfo.vue"
import StatisticalInfo from "./statisticalInfo.vue"
import SubmitButton from "./submitButton.vue"
import UploadFiles from "./uploadFiles.vue"
import {userTaskid} from "../../api/Fishing/userInfo"
import { FishingDetailsInspectData } from "../../api/searchDetailsInspect"
import {fishingData} from "../../utils/fishingUpData"
import {mapState} from "vuex"
export default {
  data(){
    return {
      activeName: 'UploadFiles'
    }
  },
  computed: {
    ...mapState(['Fishing'])
  },
 methods: {
  handleActiveName(name){
			this.activeName = name
		},
 },
 components: {
   ApplyInfo,
   StatisticalInfo,
   SubmitButton,
   UploadFiles
 },
 mounted() {

   this.$store.commit('Fishing_ClearAllData')
   if(this.$route.query.id != undefined){
     console.log("id")
			FishingDetailsInspectData(this.$route.query.id).then(res=>{
				
				this.$store.commit('Fishing_UserTaskId', this.$route.query.id)
        console.log(res)
				let result = fishingData(res.data.data)
				this.Fishing.OceanDeclaration = result.declaration

				this.Fishing.OceanParam.oceanCostList = result.oceanCostList
        this.Fishing.OceanParam.oceanSituationList = result.oceanSituationList
        this.Fishing.OceanParam.oceanVolumes = result.oceanVolumes
        
        //console.log(this.Agricul.AgriculData)
				//console.log(this.Agricul.userTaskId)
			})
		}else{
      console.log("000000000000000000000")
      userTaskid().then(res=>{
        this.$store.commit('Fishing_UserTaskId', res.data.data)
      });
		}

    
  },
};
</script>

<style>
.fishingGuides {
  height: 100vh -60px;
  background-color: #fff;
 
}
.fishingGuides .submit {
  margin: 15px 0;
  display: flex;
}
/* .fishingGuides .submitBtn {
  display: flex;
  background-color: saddlebrown;
} */
.fishingGuides .submitText {
  line-height: 40px;
  flex: 10;
}
.fishingGuides .submitText span {
  margin: 0 15px;
}
.fishingGuides .submitBtn {
  flex: 3;
}
.fishingGuides .fishingApply{
  overflow: none;
}
.fishingGuides .DataContent {
	height: 60vh;
	overflow: hidden;
	overflow-y: auto;
}
.fishingGuides .DataContent .fishingApply {
	height: auto;
	/* margin-bottom: 20px; */
}
.fishingGuides .DataContent .allBtn {
  display: inline-block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 30px;
  position: relative;
}
.fishingGuides .DataContent .FiUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>