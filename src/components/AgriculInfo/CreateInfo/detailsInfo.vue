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
        href="#PersonInfo"
        @click="handleColorText('PersonInfo')"
        :class="colorText == 'PersonInfo' ? 'colorText' : ''"
        >人员基本情况</a
      >
      <a
        href="#HoldInfo"
        @click="handleColorText('HoldInfo')"
        :class="colorText == 'HoldInfo' ? 'colorText' : ''"
        >国家、省、市财政近三年全部支持情况</a
      >
      <a
        href="#CountableInfo"
        @click="handleColorText('CountableInfo')"
        :class="colorText == 'CountableInfo' ? 'colorText' : ''"
        >贷款情况</a
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
      <div id="PersonInfo"><PersonInfo></PersonInfo></div>
      <div id="HoldInfo"><HoldInfo></HoldInfo></div>
      <div id="CountableInfo"><CountableInfo></CountableInfo></div>
      <div id="UploadFiles"><UploadFiles></UploadFiles></div>
      <!-- <UploadFilesList></UploadFilesList> -->

      <div id="AuditInfo" v-if="this.$route.name == 'UserDetail'">
        <AuditInfo></AuditInfo>
      </div>
    </div>

    <div
      class="allBtn"
      :style="{ display: this.Agricul.isDetailsContent ? 'none' : 'block' }"
    >
      <el-button type="primary" @click="SubmitData">提交</el-button>
    </div>
  </div>
</template>

<script>
import UnitInfo from "./unitInfo.vue";
import InancialInfo from "./inancialInfo.vue";
import PersonInfo from "./personInfo.vue";
import HoldInfo from "./holdInfo.vue";
import CountableInfo from "./countableInfo.vue";
import UploadFiles from "./uploadFiles.vue";
import AuditInfo from "../../User/auditInfo.vue";
//import UploadFilesList from "./UploadFilesList.vue"
import { createSubmit } from "../../../api/Agricul/createInfo";
//import { agriculClearData} from "../../../utils/agriculUpData"
import { mapState } from "vuex";
export default {
  data() {
    return {
      colorText: "UnitInfo",
      name: "",
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    isDetailsContent: {
      get() {
        if (this.Agricul.isDetailsContent) {
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
  components: {
    UnitInfo,
    InancialInfo,
    PersonInfo,
    HoldInfo,
    CountableInfo,
    //UploadFilesList
    UploadFiles,
    AuditInfo,
  },
  methods: {
    handleColorText(text) {
      console.log(this);
      this.colorText = text;
    },
    SubmitData() {
      this.$confirm("数据是否确认无误，是否上传提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          createSubmit(this.Agricul).then((res) => {
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
    //agriculClearData(this.Agricul)
    //console.log(this.Agricul)
    console.log(this.$route);
    // if(!this.$router.query.id){
    //   agriculClearData(this.Agricul)
    // }
  },
};
</script>

<style>
.DataContent {
  width: 100%;
  /* position: static;
 margin-top: 55px; */
}
.DataContent .allBtn {
  display: inline-block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 30px;
}
.DataContent .nav-tabs {
  box-sizing: border-box;
  background-color: #ece8e8;
  border: 1px solid #ccc;
  /* position: absolute; */
  /* position:sticky; */
  width: 100% !important;
  /* position: absolute;
  top: 55px; */
  position: fixed;
  /* width: calc(100% - 45px); */
  /* width: 100% !important; */
  /* padding: 15px 0; */
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
