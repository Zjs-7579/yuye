<template>
  <div class="HIEngin">
    <el-row class="title asterisk">
      {{ title }}
    </el-row>
    <el-row class="titleRow">
      <el-col :span="2">序号</el-col>
      <el-col :span="3">支出类别</el-col>
      <el-col :span="3">起止时间</el-col>
      <el-col :span="4">建成项目主要内容</el-col>
      <el-col :span="2">金额（万元）</el-col>
      <el-col :span="6" style="line-height: 30px; border-right: none">
        <div>形成资产（万元）</div>
        <div
          style="display: flex; border-top: 1px solid #ccc; margin-top: -1px"
        >
          <div style="flex: 1">固定资产</div>
          <div style="flex: 1; border-left: 1px solid #ccc">其他资产</div>
        </div>
      </el-col>
      <el-col :span="4" style="border-left: 1px solid #ccc"
        >合同、发票、银行汇款凭证</el-col
      >
    </el-row>

    <el-row class="dataRow" v-for="(item, index) in data" :key="index">
      <el-col :span="2" style="text-align: center">
        {{ index + 1 }}
      </el-col>
      <el-col :span="3">
        <el-input
          :disabled="isDisabledData"
          v-model="item.spending_type"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          :disabled="isDisabledData"
          v-model="item.start_and_end"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-input :disabled="isDisabledData" v-model="item.content"></el-input>
      </el-col>
      <el-col :span="2">
        <el-input :disabled="isDisabledData" v-model="item.amount"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          :disabled="isDisabledData"
          v-model="item.fixed_assets"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          :disabled="isDisabledData"
          v-model="item.other_assets"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-upload
          class="upload-demo"
          action="#"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :http-request="upLoadInvestFiles"
        >
          <el-button
            size="small"
            v-if="path.indexOf('detailInspect') > 0"
            @click="handleLookDataClick(item)"
          >
            {{ item.material_id }}
          </el-button>
          <el-button
            v-if="path.indexOf('createInfo') > 0"
            size="small"
            type="primary"
            @click="handleInventDataClick(item)"
            :disabled="isDisabledData"
            >上传凭证</el-button
          >
        </el-upload>
      </el-col>
    </el-row>
    <el-row class="dataRow">
      <el-col :span="12" style="text-align: center"> 合计 </el-col>
      <el-col :span="2" style="text-align: left; text-indent: 1em">
        {{ total_amount }}
      </el-col>
      <el-col :span="3" style="text-align: left; text-indent: 1em">
        {{ total_fixed_assets }}
      </el-col>
      <el-col :span="3" style="text-align: left; text-indent: 1em">
        {{ total_other_assets }}
      </el-col>
      <el-col :span="3">
        <!-- <div slot="tip" class="el-upload__tip"></div> -->
      </el-col>
    </el-row>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" @click="handleAddHtml(title)"
        >添加一条</el-button
      >
      <el-button @click="handleDeleteHtml(title)" class="">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { UploadFiles } from "../../api/Modern/upLoad";

import { mapState } from "vuex";
export default {
  props: ["title", "data"],
  data() {
    return {
      FromeItemData: "", //上传当前的数据
      formData: "", //上传文件
      path: "",
      //colorList: ['blue']
      //fileList: [],
      //From: dataFrom,
      //data: this.dataFrom,
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    isDisabledData: {
      get() {
        return this.HighTech.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
    total_amount: {
      get() {
        let sum = 0;
        for (let i of this.data) {
          sum += i.amount * 1;
        }
        return sum;
      },
      set(val) {
        this.total_amount = val;
      },
    },
    total_fixed_assets: {
      get() {
        let sum = 0;
        for (let i of this.data) {
          sum += i.fixed_assets * 1;
        }
        return sum;
      },
      set(val) {
        this.total_fixed_assets = val;
      },
    },
    total_other_assets: {
      get() {
        let sum = 0;
        for (let i of this.data) {
          sum += i.other_assets * 1;
        }
        return sum;
      },
      set(val) {
        this.total_other_assets = val;
      },
    },
  },
  methods: {
    handleInventDataClick(item) {
      console.log(item);
      //console.log(this.style.color="red")
      this.FromeItemData = item;
    },
    handleAddHtml(val) {
      //console.log(val)
      let str = {
        //task_id: '',
        inv_type: val,
        // project_invest: '',
        //support: '',
        spending_type: "", //支出类别
        start_and_end: "", //起止时间
        content: "", //建成项目主要内容
        amount: "", //金额（万元）
        fixed_assets: "", //固定资产
        other_assets: "", //其他资产
        //creator: "", //创建人
        //create_time: '', //创建时间
      };
      //console.log(this.From[val])
      //this.colorList.push("blue")
      this.HighTech.HighTechData.techInvestMent.push(str);
    },
    handleDeleteHtml(val) {
      let result = this.HighTech.HighTechData.techInvestMent.filter((item) => {
        return item.inv_type == val;
      });
      let len = this.HighTech.HighTechData.techInvestMent.lastIndexOf(
        result[result.length - 1]
      );
      if (result.length == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.colorList.splice(len, 1);
        this.HighTech.HighTechData.techInvestMent.splice(len, 1);
      }
    },
    // handleChange(file){
    //   console.log(file)
    // },
    beforeUpload(file) {
      console.log(file);
      var formData = new FormData();
      //formData = {...this.FromeItemData, file}
      //formData.append(...this.FromeItemData)
      formData.append("file", file);
      formData.append("task_id", this.HighTech.userTaskId);
      formData.append("material_type", this.title);
      formData.append("source", "现代化农业项目");
      formData.append("name", file.name);
      this.formData = formData;
      //console.log(formData)
    },
    upLoadInvestFiles() {
      //console.log(this.formData);
      UploadFiles(this.formData).then((res) => {
        this.FromeItemData["material_id"] = res.data.data;
        this.$message.success("上传成功");
        //this.colorList[index] = '#ccc'
      });
      //console.log(this.techInvestMent)
      //console.log(this.colorList)
    },
  },
  mounted() {
    console.log(this.$route);
    this.path = this.$route.path;
  },
  watch: {
    data: {
      handler(val) {
        // if(this.title == '建筑工程类投资明细'){
        //   this.HighTech.HighTechData.techInvestMent[0].inv_type == this.title;
        // }
        // if(this.title == '生产设施建设类投资明细'){
        //   this.HighTech.HighTechData.techInvestMent[1].inv_type == this.title;
        // }
        // if(this.title == '仪器、设备类投资明细'){
        //   this.HighTech.HighTechData.techInvestMent[2].inv_type == this.title;
        // }
        for (let item of val) {
          item["task_id"] = this.HighTech.userTaskId;
          //item.creator = this.HighTech.userName
          item["total_fixed_assets"] = this.total_fixed_assets;
          item["total_other_assets"] = this.total_other_assets;
          item["total_amount"] = this.total_amount;
          // item['project_invest'] = this.InvestTotal.project_invest
          // item['support'] = this.InvestTotal.support
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.HIEngin .el-col {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.HIEngin {
  margin-bottom: 30px;
}
.HIEngin .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HIEngin .titleRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
}
.HIEngin .titleRow .el-col {
  border-right: 1px solid #ccc;
  text-align: center;
}
.HIEngin .dataRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  border-top: none;
}
.HIEngin .dataRow .el-col {
  border-right: 1px solid #ccc;
}
.HIEngin .el-input {
  display: block;
}
.HIEngin .dataRow .el-input__inner {
  width: 80%;
  border: none;
}
.HIEngin .el-upload {
  display: block;
}
.HIEngin .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
