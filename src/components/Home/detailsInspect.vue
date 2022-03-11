<template>
  <div class="Details">
    <div class="DetailsInfo">
      <AgDetailsInfo
        v-if="this.$route.query.type == '农业产业化贴息项目'"
      ></AgDetailsInfo>
      <MoDetailsInfo
        v-if="this.$route.query.type == '现代农业项目'"
      ></MoDetailsInfo>
      <HiDetailsInfo
        v-if="this.$route.query.type == '农业高新技术项目'"
      ></HiDetailsInfo>

      <SaDetailsInfo
        v-if="this.$route.query.type == '农产品质量安全检测能力建设项目'"
      ></SaDetailsInfo>
      <FiDetailsInfo
        v-if="this.$route.query.type == '远洋渔业项目'"
      ></FiDetailsInfo>
    </div>
  </div>
</template>

<script>
// import {
//   AGdetailsInspectData,
//   MOdetailsInspectData,
// } from "../../api/searchDetailsInspect";
import AgDetailsInfo from "../AgriculInfo/CreateInfo/detailsInfo.vue";
import MoDetailsInfo from "../ModernInfo/CreateInfo/detailsInfo.vue";
import FiDetailsInfo from "../FishingGuidesInfo/detailsInfo.vue";
import HiDetailsInfo from "../HighTech/detailsInfo.vue";
import SaDetailsInfo from "../Safety/detailsInfo.vue";
//import { agriculFilesData } from "../../utils/agricul/agriculUpData";
//import { modernFilesData } from "../../utils/modern/modernUpData";
import { judge, Detail } from "../../utils/Todo";
//import { mapState } from "vuex";
export default {
  data() {
    return {
      data: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("to", to, "from", from);

    // if (to.name.includes("DetailInspect") && from.path == "/") {
    //   next((vm) => {
    //     let status = judge(
    //       {
    //         task_source: to.query.type,
    //         task_id: to.query.id,
    //         declare_status: "审核中",
    //       },
    //       vm.$router,
    //       vm.$store
    //     );
    //     if (status == 0) {
    //       vm.$message.warning("数据出错");
    //     }
    //   });
    // }
    if (to.name == "UserDetail" && from.path == "/") {
      next((vm) => {
        let status = Detail(
          {
            task_source: to.query.type,
            task_id: to.query.id,
          },
          vm.$router,
          vm.$store
        );
        if (status == 0) {
          vm.$message.warning("数据出错");
        }
      });
    } else if (to.name.includes("DetailInspect") && from.path == "/") {
      next((vm) => {
        let status = judge(
          {
            task_source: to.query.type,
            task_id: to.query.id,
            declare_status: "审核中",
          },
          vm.$router,
          vm.$store
        );
        if (status == 0) {
          vm.$message.warning("数据出错");
        }
      });
    }
    next();
  },
  computed: {
    //...mapState(["Agricul", "Modern"]),
  },
  mounted() {},
  components: {
    AgDetailsInfo,
    MoDetailsInfo,
    SaDetailsInfo,
    FiDetailsInfo,
    HiDetailsInfo,
  },
};
</script>

<style>
.Details {
  position: relative;
}
.Details .DetailsInfo {
  overflow: hidden;
  overflow-y: auto;
  height: 94vh;
  background-color: #fff;
}
/* .Details .DataContent {
  height: 100%;
  background-color: rgb(109, 16, 16);
} */
/* .Details .DataContent .AllDataTable {
  /* height: calc(100% - 10px);
  overflow: hidden;
  overflow-y: auto; */
/* } */
.Details .DataContent .Agtabel,
.Details .DataContent .AgPerson,
.Details .DataContent .AgHold,
.Details .DataContent .AgCountable {
  height: auto;
  margin-bottom: 20px;
}

.Details .DataContent .Aginancial .dataRow,
.Details .DataContent .AgUpload .dataRow {
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
.Details .DataContent .MoUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
.Details .DataContent .Moinancial .dataPanRow,
.Details .DataContent .Moinancial .dataUnderRow,
.Details .DataContent .MoUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>
