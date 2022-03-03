<template>
  <div class="MoUpload">
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
            <span :class="index == 11 || index == 10 ? 'boldText' : ''">{{
              item.title
            }}</span>
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
        <!-- <el-col :span="4" ><div class="grid-content bg-purple"><el-button type="primary" round>上传</el-button></div></el-col>
        <el-col :span="5" ><div class="grid-content bg-purple box"><p>dsadas</p><p>dsadsad</p></div></el-col> -->
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
      //fileList: [],
    };
  },
  computed: {
    ...mapState(["Modern"]),
    uploadUrlData: {
      get() {
        if (this.Modern.userTaskId != "") {
          return this.Modern.uploadUrlData;
        } else {
          return [];
        }
      },
      set(val) {
        this.uploadUrlData = val;
      },
    },
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
};
</script>

<style>
.MoUpload .boldText {
  height: 120px;
  line-height: 2.5;
  display: block;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.MoUpload {
  width: 100%;
  height: 75vh;
}
.MoUpload .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.MoUpload .titleRow {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
}
.MoUpload .dataRow {
  height: 62vh;
  overflow: hidden;
  overflow-y: overlay;
  border: 1px solid #ccc;
  border-bottom: none;
}
.MoUpload .dataRow .el-row {
  height: 120px;
  line-height: 120px;
  border: 1px solid #ccc;
}
.MoUpload .el-col {
  text-align: center;
}
.MoUpload .el-row .el-col:nth-child(2) {
  text-align: left;
}

.MoUpload .upload-demo {
  width: 99%;
  margin-left: 1%;
  display: flex;
}
.MoUpload .el-upload--text {
  /* background-color: brown; */
  flex: 1;
}
.MoUpload .el-upload-list {
  flex: 1;
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.MoUpload .el-upload-list--text {
  text-align: left;
}

/* .MoUpload .dataRow .el-col-6 .boldText {
  line-height: 40px;
  white-space: pre-wrap !important;
} */

.MoUpload .el-upload-list__item-status-label {
  margin-right: 25px;
}
/* .el-upload-list__item-status-label .el-icon-upload-success .el-icon-circle-check, */
.MoUpload .el-icon-close {
  margin-right: 25px;
}
.MoUpload .el-icon-close-tip {
  margin-right: 25px;
}
</style>
