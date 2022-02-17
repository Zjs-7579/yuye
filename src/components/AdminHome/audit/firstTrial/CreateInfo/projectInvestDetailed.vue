<template>
  <div class="Moengin">
    <el-row class="title">
      {{ title }}
    </el-row>
    <el-row class="titleRow">
      <el-col :span="2">序号</el-col>
      <el-col :span="4">支出类别</el-col>
      <el-col :span="4">起止时间</el-col>
      <el-col :span="6">建成项目主要内容</el-col>
      <el-col :span="2">金额（万元）</el-col>
      <el-col :span="6" style="line-height: 30px; border-right: none">
        <el-row>
          <el-col :span="24">形成资产（万元）</el-col>
        </el-row>
        <el-row style="border-top: 1px solid #ccc">
          <el-col :span="12">固定资产</el-col>
          <el-col :span="12">其他资产</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row
      class="dataRow"
      v-for="(item, index) in Form[dataForm]"
      :key="index"
    >
      <el-col :span="2" style="text-align: center">
        {{ index + 1 }}
      </el-col>
      <el-col :span="4">
        <el-input disabled v-model="item.spending_type"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input disabled v-model="item.start_and_end"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input disabled v-model="item.content"></el-input>
      </el-col>
      <el-col :span="2">
        <el-input disabled v-model="item.amount"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input disabled v-model="item.fixed_assets"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input disabled v-model="item.other_assets"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["title", "dataForm"],
  data() {
    return {
      //From: dataFrom,
      //data: this.dataFrom,
      Form: {
        constructForm: [
          {
            //user: ''
            //task_id: '',
            // inv_type: '',
            // project_invest: '',
            //support: '',
            spending_type: "", //支出类别
            start_and_end: "", //起止时间
            content: "", //建成项目主要内容
            amount: "", //金额（万元）
            fixed_assets: "", //固定资产
            other_assets: "", //其他资产
            creator: "", //创建人
            //create_time: '', //创建时间
            // modifier: '',
            // update_time: ''
          },
        ],
        effectForm: [
          {
            //task_id: '',
            // inv_type: '',
            // project_invest: '',
            //support: '',
            spending_type: "", //支出类别
            start_and_end: "", //起止时间
            content: "", //建成项目主要内容
            amount: "", //金额（万元）
            fixed_assets: "", //固定资产
            other_assets: "", //其他资产
            creator: "", //创建人
            //create_time: '', //创建时间
            // modifier: '',
            // update_time: ''
          },
        ],
        equipForm: [
          {
            //task_id: '',
            // inv_type: '',
            // project_invest: '',
            //support: '',
            spending_type: "", //支出类别
            start_and_end: "", //起止时间
            content: "", //建成项目主要内容
            amount: "", //金额（万元）
            fixed_assets: "", //固定资产
            other_assets: "", //其他资产
            creator: "", //创建人
            //create_time: '', //创建时间
            // modifier: '',
            // update_time: ''
          },
        ],
      },
    };
  },
  methods: {
    addHTML(val) {
      //console.log(val)
      let str = {
        spending_type: "", //支出类别
        start_and_end: "", //起止时间
        content: "", //建成项目主要内容
        amount: "", //金额（万元）
        fixed_assets: "", //固定资产
        other_assets: "", //其他资产
        creator: "", //创建人
        //create_time: '', //创建时间
      };
      //console.log(this.From[val])
      this.Form[val].push(str);
    },
  },
};
</script>

<style>
.Moengin {
  margin-bottom: 30px;
}
.Moengin .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.Moengin .titleRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
}
.Moengin .titleRow .el-col {
  border-right: 1px solid #ccc;
  text-align: center;
}
.Moengin .dataRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  border-top: none;
}
.Moengin .dataRow .el-col {
  border-right: 1px solid #ccc;
}
.Moengin .el-input {
  display: block;
}
.Moengin .dataRow .el-input__inner {
  width: 80%;
  border: none;
}
</style>
