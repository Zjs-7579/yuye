<template>
  <div class="fishingGuides">
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane
        label="远洋渔业项目申报表"
        name="ApplyInfo"
        :disabled="isDataShow"
      >
        <ApplyInfo ref="ApplyInfo"></ApplyInfo>
      </el-tab-pane>
      <el-tab-pane
        label="远洋渔业项目统计表"
        name="StatisticalInfo"
        :disabled="isDataShow"
      >
        <StatisticalInfo></StatisticalInfo>
      </el-tab-pane>
      <el-tab-pane label="上传附件" name="UploadFiles" :disabled="isDataShow">
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
import ApplyInfo from "./applyInfo.vue";
import StatisticalInfo from "./statisticalInfo.vue";
import SubmitButton from "./submitButton.vue";
import UploadFiles from "./uploadFiles.vue";
import { userTaskid } from "../../api/Fishing/userInfo";
import { FiJudge } from "../../utils/fishing/fishingData";
//import { FishingDetailsInspectData } from "../../api/searchDetailsInspect";
import { FishingClearData } from "../../utils/fishing/fishingUpData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isDataShow: true,
      activeName: "ApplyInfo",
    };
  },
  beforeRouteEnter(to, from, next) {
    if (from.path == "/" && to.query.id) {
      next(async (vm) => {
        let status = 0;
        if (to.query.id) {
          status = await FiJudge(
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
    ...mapState(["Fishing"]),
  },
  methods: {
    handleActiveName(name) {
      if (name == "UploadFiles") {
        this.isDataShow = false;
      }
      this.activeName = name;
    },
  },
  components: {
    ApplyInfo,
    StatisticalInfo,
    SubmitButton,
    UploadFiles,
  },
  mounted() {
    this.$store.commit("Agricul_IsDisabledData", false);

    if (this.$route.query.id == undefined) {
      FishingClearData(this.Fishing);
      userTaskid().then((res) => {
        //console.log(res)
        this.$store.commit("Fishing_UserTaskId", res.data.data);
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
  flex: 8;
}
.fishingGuides .submitText span {
  margin: 0 15px;
}
.fishingGuides .submitBtn {
  flex: 3;
}
.fishingGuides .fishingApply {
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
