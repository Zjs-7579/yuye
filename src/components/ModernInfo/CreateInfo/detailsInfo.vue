<template>
  <div class="DataContent">
    <div class="nav-tabs" :style="{ display: isDetailsContent }">
      <a
        href="#UnitInfo"
        @click="handleColorText('UnitInfo')"
        :class="colorText == 'UnitInfo' ? 'colorText' : ''"
        >单位基本情况</a
      >
      <a
        href="#InancialInfo"
        @click="handleColorText('InancialInfo')"
        :class="colorText == 'InancialInfo' ? 'colorText' : ''"
        >单位近三年财务状况</a
      >
      <a
        href="#HoldInfo"
        @click="handleColorText('HoldInfo')"
        :class="colorText == 'HoldInfo' ? 'colorText' : ''"
        >国家、省、市财政近三年全部支持情况</a
      >
      <a
        href="#ProjectUnitInfo"
        @click="handleColorText('ProjectUnitInfo')"
        :class="colorText == 'ProjectUnitInfo' ? 'colorText' : ''"
        >项目承担单位基本情况</a
      >
      <a
        href="#ProjectContent"
        @click="handleColorText('ProjectContent')"
        :class="colorText == 'ProjectContent' ? 'colorText' : ''"
        >项目实施的背景、意义及实施内容</a
      >

      <a
        href="#ProjectInvest"
        @click="handleColorText('ProjectInvest')"
        :class="colorText == 'ProjectInvest' ? 'colorText' : ''"
        >项目投资情况</a
      >

      <a
        href="#SummarizeInfo"
        @click="handleColorText('SummarizeInfo')"
        :class="colorText == 'SummarizeInfo' ? 'colorText' : ''"
        >摘要</a
      >

      <a
        href="#UploadFiles"
        @click="handleColorText('UploadFiles')"
        :class="colorText == 'UploadFiles' ? 'colorText' : ''"
        >上传附件</a
      >
    </div>
    <div style="width: 100%; height: 55px"></div>

    <div class="AllDataTable">
      <div id="UnitInfo"><UnitInfo></UnitInfo></div>
      <div id="InancialInfo"><InancialInfo></InancialInfo></div>
      <div id="HoldInfo"><HoldInfo></HoldInfo></div>
      <div id="ProjectUnitInfo"><ProjectUnitInfo></ProjectUnitInfo></div>
      <div id="ProjectContent"><ProjectContent></ProjectContent></div>
      <div id="ProjectInvest"><ProjectInvest></ProjectInvest></div>
      <div id="SummarizeInfo"><SummarizeInfo></SummarizeInfo></div>
      <div id="UploadFiles"><UploadFiles></UploadFiles></div>
      <div id="AuditInfo" v-if="this.$route.name == 'UserDetail'">
        <AuditInfo></AuditInfo>
      </div>
    </div>
    <div class="allBtn" :style="{ display: !isDetailsContent }">
      <el-button type="primary" @click="SubmitData">提交</el-button>
    </div>
  </div>
</template>

<script>
import UnitInfo from "./unitInfo.vue";
import InancialInfo from "./inancialInfo.vue";
import HoldInfo from "./holdInfo.vue";
import ProjectContent from "./projectContent.vue";
import ProjectUnitInfo from "./projectUnitInfo.vue";
import ProjectInvest from "./projectInvest.vue";
import SummarizeInfo from "./summarizeInfo.vue";
import UploadFiles from "./uploadFiles.vue";
import AuditInfo from "../../User/auditInfo.vue";
import { createSubmit } from "../../../api/Modern/createInfo";
//import { modernClearData } from "../../../utils/modern/modernUpData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      colorText: "UnitInfo",
    };
  },
  components: {
    UnitInfo,
    InancialInfo,
    HoldInfo,
    ProjectContent,
    ProjectUnitInfo,
    ProjectInvest,
    SummarizeInfo,
    UploadFiles,
    AuditInfo,
  },
  computed: {
    ...mapState(["Modern"]),
    isDetailsContent: {
      get() {
        if (this.Modern.isDetailsContent) {
          return "block";
        } else {
          return "none";
        }
      },
      set(val) {
        this.isDetailsContent = val;
      },
    },
  },
  methods: {
    handleColorText(text) {
      this.colorText = text;
    },
    SubmitData() {
      this.$confirm("数据是否确认无误，是否上传提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          createSubmit(this.Modern).then((res) => {
            if (res.data.code == 400) {
              this.$message({
                type: "warning",
                message: res.data.msg,
              });
            }

            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "表单提交成功!",
              }),
                this.$store.commit("Modern_IsDisabledDataClose"),
                setTimeout(
                  this.$router.push({
                    path: "/home",
                  }),
                  1000
                );
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
  },
  mounted() {
    console.log("000000000000000000000000", this.$route);

    //console.log(this.Agricul)
    // console.log(this.$router.query.id);
    // if (!this.$router.query.id) {
    //   modernClearData(this.Modern);
    // }
  },
};
</script>

<style>
/* .DataContent{
  position: fixed;
} */
.DataContent .allBtn {
  display: inline-block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 30px;
  position: relative;
}
.DataContent .nav-tabs {
  box-sizing: border-box;
  background-color: #ece8e8;
  border: 1px solid #ccc;
  position: fixed;
  /* position: absolute;
  top: 55px; */
  width: 100%;
  /* position: fixed; */
  /* width: calc(100% - 45px); */
  padding: 15px 0;
  z-index: 99;
  font-size: 15px;
}
.DataContent .nav-tabs a {
  padding: 0 15px;
}
.DataContent .nav-tabs a:hover {
  color: #409eff;
}

.DataContent .colorText {
  color: #409eff;
}
</style>
