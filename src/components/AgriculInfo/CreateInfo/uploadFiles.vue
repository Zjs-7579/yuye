<template>
  <div class="AgUpload">
    <el-row class="title"> 项目所附材料清单 </el-row>
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">文件类型</div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple">提示</div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">样本下载</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">文件上传</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">已上传</div></el-col
      >
    </el-row>

    <div class="dataRow">
      <el-row v-for="(item, index) in uploadUrlData" :key="index">
        <el-col :span="2"
          ><div class="grid-content bg-purple">{{ index + 1 }}</div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <span :class="index == 5 ? 'boldText' : ''">{{ item.title }}</span>
          </div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            {{
              ["项目申请书", "承诺书"].includes(item.title)
                ? "盖章签字"
                : "盖章"
            }}
          </div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            示例样本
            <i
              class="el-icon-download"
              :style="{ color: index == 1 ? '#409eff' : '#ccc' }"
              @click="DownPromise(index)"
            ></i></div
        ></el-col>
        <el-col :span="8">
          <upload :isFile="item.title" :dataFiles="item.data"></upload>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import upload from "./upload.vue";
import { mapState } from "vuex";
export default {
  components: { upload },
  data() {
    return {
      //uploadUrlData: [],
      // AgtabList: [
      //   { title: "项目申请书" },
      //   { title: "承诺书" },
      //   { title: "企业法定代表人或主要负责人及身份证复印件" },
      //   { title: "近3个年度的会计报表：资产负债表、损益表、现金流量表" },
      //   { title: "税务部门提供的单位上年度完税证明复印件" },
      //   {
      //     title:
      //       "企业与银行签订的贷款合同和有关银行贷款有效凭据(银行拨款单)复印件",
      //   },
      //   { title: "企业归还银行贷款利息清单" },
      // ],
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    uploadUrlData: {
      get() {
        //console.log("...................................................................",this.Agricul.uploadUrlData)
        if (this.Agricul.userTaskId != "") {
          console.log(this.Agricul.uploadUrlData);
          return this.Agricul.uploadUrlData;
        } else {
          return [];
        }
      },
      set(val) {
        this.uploadUrlData = val;
      },
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(
    //     "********************uploadUrlDatauploadUrlDatauploadUrlData",
    //     this.Agricul.uploadUrlData
    //   );
    // });
  },
  methods: {
    DownPromise(index) {
      if (index == 1) {
        window.open(
          "http://rent.greatbayit.com/yuye/publicrs/image/承诺书.docx"
        );
      }
    },
  },
  // watch: {
  //   Agricul: {
  //     handler(val) {
  //       //console.log(val);
  //       this.uploadUrlData = val.uploadUrlData;
  //     },
  //     deep: true,
  //     //this.uploadUrlData = val;
  //   },
  // },
};
</script>

<style>
.AgUpload .boldText {
  height: 120px;
  line-height: 2.7;
  display: block;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.AgUpload {
  width: 100%;
  height: 75vh;
  z-index: 999;
}
.AgUpload .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.AgUpload .titleRow {
  border: 1px solid #ccc;
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
}
.AgUpload .dataRow {
  border: 1px solid #ccc;
  border-bottom: none;
  height: 62vh;
  overflow: hidden;
  overflow-y: overlay;
}
.AgUpload .dataRow .el-row {
  height: 120px;
  line-height: 120px;
  border: 1px solid #ccc;
}
/* .AgUpload .dataRow .el-row:nth-child(6) .el-col-6 {
  height: 60px;
  line-height: 60px;
} */
.AgUpload .el-col {
  text-align: center;
}
.AgUpload .el-row .el-col:nth-child(2) {
  text-align: left;
}

.AgUpload .upload-demo {
  width: 99%;
  margin-left: 1%;
  display: flex;
}
.AgUpload .el-upload--text {
  /* background-color: brown; */
  flex: 1;
}
.AgUpload .el-upload-list {
  flex: 1;
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.AgUpload .el-upload-list--text {
  text-align: left;
}
.AgUpload .el-upload-list__item-status-label {
  margin-right: 25px;
}
/* .el-upload-list__item-status-label .el-icon-upload-success .el-icon-circle-check, */
.AgUpload .el-icon-close {
  margin-right: 25px;
}
.AgUpload .el-icon-close-tip {
  margin-right: 25px;
}
</style>
