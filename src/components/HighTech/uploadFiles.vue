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
      <el-row v-for="(item, index) in tabList" :key="index">
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
        { title: "项目可行性研究报告（申请事前资助项目需提供）" },
        { title: "上年度财务报告" },
        { title: "税务部门提供的单位上年度完税证明复印件" },
        {
          title:
            "项目建设的实施方案、预（决）算报告、项目投资证明材料等（合同、发票、银行汇款凭证等）",
        },
        { title: "必要的生产、经营许可及认证文件；场地所有权或者使用权证明" },
        {
          title:
            "项目团队负责人及核心骨干人员的职称或学位证书复印件及社保局网站上自助打印或由社保局开具的社保证明（申请事前资助项目提供）",
        },
        {
          title:
            "与项目相关的知识产权证、检测报告、获奖证书、国家或者省有关批复文件、应用示范合作协议或者合同、项目的核心技术成果材料、生产许可文件或者产品资质证明文件",
        },
        {
          title:
            "品种审定证书或品种权授权使用协议复印件，基因生物安全监管机关审批证书复印件、科技成果登记证书或查新报告、地市级以上政府部门颁发的科技成果登记证书或市级以上政府部门授权机构出具的科技成果鉴定证书（新品种推广应用项目）",
        },
        {
          title:
            "其他相关材料（有关政府文件、前期调研报告、专家咨询意见、鉴定报告、新品种新技术推广用户证明材料以及本单位相关研究成果资料、中国种业骨干企业、市级以上农业龙头企业、实验室、工程中心、高新技术企业等有关证书复印件专利（或知识产权）证书等）",
        },
        { title: "申报项目专项审计报告" },
      ],
    };
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
