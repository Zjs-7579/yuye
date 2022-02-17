<template>
  <div class="Agupload">
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">文件类型</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">样本下载</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">文件上传</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">已上传</div></el-col
      >
    </el-row>
    <div class="dataRow">
      <el-row v-for="(item, index) in tabList" :key="index">
        <el-col :span="2"
          ><div class="grid-content bg-purple">{{ index + 1 }}</div></el-col
        >
        <el-col :span="7"
          ><div class="grid-content bg-purple" style="width: 700px">
            {{ item.title }}
          </div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            示例样本
            <i class="el-icon-download" style="color: #409eff"></i></div
        ></el-col>
        <!-- <el-col :span="4" ><div class="grid-content bg-purple"><el-button type="primary" round>上传</el-button></div></el-col>
        <el-col :span="5" ><div class="grid-content bg-purple box"><p>dsadas</p><p>dsadsad</p></div></el-col> -->
        <el-col :span="10">
          <upload :isFile="item.title"></upload>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import upload from "./upload.vue";
export default {
  components: { upload },
  data() {
    return {
      fileList: [],
      tabList: [
        { title: "项目申请书" },
        { title: "承诺书" },
        { title: "企业法定代表人或主要负责人及身份证复印件" },
        { title: "近3个年度的会计报表：资产负债表、损益表、现金流量表" },
        { title: "税务部门提供的单位上年度完税证明复印件" },
        {
          title:
            "企业与银行签订的贷款合同和有关银行贷款有效凭据(银行拨款单)复印件",
        },
        { title: "企业归还银行贷款利息清单" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.Agupload {
  width: 100%;
  height: 75vh;
}
.Agupload .titleRow {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
}
.Agupload .dataRow {
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
}
.Agupload .dataRow .el-row {
  height: 120px;
  line-height: 120px;
  border: 1px solid #ccc;
}
.Agupload .el-col {
  text-align: center;
}
.Agupload .el-row .el-col:nth-child(2) {
  text-align: left;
}

.Agupload .upload-demo {
  width: 99%;
  margin-left: 1%;
  display: flex;
}
.Agupload .el-upload--text {
  /* background-color: brown; */
  flex: 1;
}
.Agupload .el-upload-list {
  flex: 1;
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.Agupload .el-upload-list--text {
  text-align: left;
}
</style>
