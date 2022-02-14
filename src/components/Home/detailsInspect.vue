<template>
  <div class="Details">
      <AgDetailsInfo v-if="this.$route.query.type == '农业产业化贴息项目'"></AgDetailsInfo>
      <MoDetailsInfo v-if="this.$route.query.type == '现代农业项目'"></MoDetailsInfo>
  </div>
</template>

<script>
import {AGdetailsInspectData, MOdetailsInspectData} from "../../api/searchDetailsInspect"
import AgDetailsInfo from "../AgriculInfo/CreateInfo/detailsInfo.vue"
import MoDetailsInfo from "../ModernInfo/CreateInfo/detailsInfo.vue"
import { agriculFilesData } from "../../utils/agriculUpData"
import { modernFilesData } from "../../utils/modernUpData"
import { mapState } from 'vuex'
export default {
  data(){
    return{
      data: ''
    }
  },
  computed: {
    ...mapState(['Agricul', 'Modern']),
    
  },
  mounted() {
    console.log(this.$route.query.type);
    if(this.$route.query.type == "农业产业化贴息项目"){
      AGdetailsInspectData(this.$route.query.id).then(res=>{
        console.log(res)
        agriculFilesData(this.Agricul.uploadUrlData ,res.data.data)
        // let result = agriculFilesData(this.Agricul ,res.data.data)
        // console.log(result)
        this.$store.commit("Agricul_IsDisabledDataOpen");
        this.Agricul.AgriculData = res.data.data
      })
    }
    if(this.$route.query.type == "现代农业项目"){
      MOdetailsInspectData(this.$route.query.id).then(res=>{
        modernFilesData(this.Modern ,res.data.data)
        // let result = modernFilesData(this.Modern ,res.data.data)
        // console.log(result)
        this.$store.commit("Modern_IsDisabledDataOpen");
        this.Modern.ModernData = res.data.data
        //console.log(this.Modern.ModernData)
      })
    }
    
  },
  components: {
    AgDetailsInfo,
    MoDetailsInfo
  }
}
</script>

<style>
.Details{
  position: relative;
}
.Details .DataContent {
  
  height: 90vh;
  
  
  background-color: #fff;
}
.Details .DataContent .AllDataTable{
  height: calc(100% - 10px);
  overflow: hidden;
  overflow-y: auto;
}
.Details .DataContent .Agtabel,
.Details .DataContent .AgPerson,
.Details .DataContent .AgHold,
.Details .DataContent .AgCountable {
  height: auto;
  margin-bottom: 20px;
}

.Details .DataContent .Aginancial .dataRow,
.Details .DataContent .AgUpload .dataRow{
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}

.Details .DataContent .Mounit,
.Details .DataContent .MoboxTitle,
.Details .DataContent .MoInvest,
.Details .DataContent .MoSummarize,
.Details .DataContent .MoPerson,
.Details .DataContent .MoHold,
.Details .DataContent .MoContentTitle,
.Details .DataContent .audit {
  height: auto;
  margin-bottom: 20px;
}

.Details .DataContent .Moinancial .dataRow,
.Details .DataContent .MoUpload .dataRow{
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>