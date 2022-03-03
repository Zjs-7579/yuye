<template>
  <div class="FiUpload">
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
      <el-row v-for="(item, index) in tabList" :key="index">
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
              :style="{ color: index == 100 ? '#409eff' : '#ccc' }"
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
/* eslint-disable vue/return-in-computed-property */
import upload from "./upload.vue";
import { mapState } from "vuex";
export default {
  components: { upload },
  data() {
    return {
      //fileList: [],
      // AgtabList: [
      //   { title: "深圳市农业发展专项资金远洋渔业项目申报表" },
      //   { title: "新建或购买远洋渔业渔船情况统计表" },
      //   { title: "建造南沙骨干渔船情况统计表" },
      //   { title: "入渔费用（境外渔业资源使用费）情况统计表" },
      //   { title: "自捕远洋海产品回运量情况统计表" },
      //   {
      //     title:
      //       "自捕南沙海产品回运量情况统计表",
      //   },
      //   { title: "深圳市南沙渔业生产情况表" },
      // ],
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    tabList: {
      get() {
        let declare_name = this.Fishing.OceanDeclaration.declare_name;
        if (declare_name == "建造远洋渔船") {
          return this.Fishing.uploadUrlData.Build;
        }
        if (declare_name == "购买远洋渔船") {
          return this.Fishing.uploadUrlData.Buy;
        }
        if (declare_name == "境外渔业资源使用费") {
          return this.Fishing.uploadUrlData.Outside;
        }
        if (declare_name == "自捕远洋海产品回运费") {
          return this.Fishing.uploadUrlData.Volumes;
        }
        if (
          declare_name ==
          "远洋渔业基地，包括冷链物流项目（含海产品加工厂及配套专用冷库）、超低温冷库以及境外远洋渔业基地等"
        ) {
          return this.Fishing.uploadUrlData.Base;
        }
        if (declare_name == "自捕南沙海产品回运费") {
          return this.Fishing.uploadUrlData.Volumes;
        }
      },
      set(val) {
        this.tabList = val;
      },
    },
  },
  methods: {
    DownPromise(index) {
      if (index == 100) {
        window.open(
          "http://rent.greatbayit.com/yuye/publicrs/image/承诺书.docx"
        );
      }
    },
  },
};
</script>

<style>
.FiUpload .bg-purple {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.FiUpload {
  width: 100%;
  height: 75vh;
  z-index: 999;
}
.FiUpload .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.FiUpload .titleRow {
  border: 1px solid #ccc;
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
}
.FiUpload .dataRow {
  border: 1px solid #ccc;
  border-bottom: none;
  height: 62vh;
  overflow: hidden;
  overflow-y: overlay;
}
.FiUpload .dataRow .el-row {
  height: 120px;
  line-height: 120px;
  border: 1px solid #ccc;
}
/* .AgUpload .dataRow .el-row:nth-child(6) .el-col-6 {
  height: 60px;
  line-height: 60px;
} */
.FiUpload .el-col {
  text-align: center;
}
.FiUpload .el-row .el-col:nth-child(2) {
  text-align: left;
}

.FiUpload .upload-demo {
  width: 99%;
  margin-left: 1%;
  display: flex;
}
.FiUpload .el-upload--text {
  /* background-color: brown; */
  flex: 1;
}
.FiUpload .el-upload-list {
  flex: 1;
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.FiUpload .el-upload-list--text {
  text-align: left;
}
.FiUpload .el-upload-list__item-status-label {
  margin-right: 25px;
}
/* .el-upload-list__item-status-label .el-icon-upload-success .el-icon-circle-check, */
.FiUpload .el-icon-close {
  margin-right: 25px;
}
.FiUpload .el-icon-close-tip {
  margin-right: 25px;
}
</style>
