<template>
  <div class="MoTabel">
    <el-row class="title"> 拟购或租赁主要设备清单 </el-row>
    <el-row class="titleRow">
      <el-col :span="2"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="5"
        ><div class="grid-content bg-purple">仪器设备名称</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">规格型号</div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content bg-purple">数量/单位</div></el-col
      >
      <el-col :span="3"><div class="grid-content bg-purple">单价</div></el-col>
      <el-col :span="3"
        ><div class="grid-content bg-purple">金额合计</div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content bg-purple">用途/功能描述</div></el-col
      >
    </el-row>
    <el-row v-for="(item, index) in techLease" :key="index" class="dataRow">
      <el-col :span="2"
        ><div
          class="grid-content bg-purple"
          style="text-align: center; line-height: 40px"
        >
          {{ index + 1 }}
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.instruments"
          ></el-input></div
      ></el-col>
      <el-col :span="5"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.specification"
          ></el-input></div
      ></el-col>
      <el-col :span="3"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.quantity"
          ></el-input></div
      ></el-col>
      <el-col :span="3"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.price"
          ></el-input></div
      ></el-col>
      <el-col :span="3"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.amount"
          ></el-input></div
      ></el-col>
      <el-col :span="3"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.purpose"
          ></el-input></div
      ></el-col>
    </el-row>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" class="add" @click="handleAddHtml"
        >添加一条</el-button
      >
      <el-button class="delete" @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["HighTech"]),

    techLease: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techLease[0]["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.techLease;
      },
      set(val) {
        //console.log(val)
        this.techLease = val;
      },
    },
    isDisabledData: {
      get() {
        return this.HighTech.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  methods: {
    handleAddHtml() {
      let str = {
        task_id: this.HighTech.userTaskId,
        instruments: "", //'仪器设备名称',
        specification: "", //'规格型号',
        quantity: "", //'数量/单位',
        price: "", //'单价',
        amount: "", //'金额合计',
        purpose: "", //'用途/功能描述',
      };
      this.techLease.push(str);
    },
    handleDeleteHtml() {
      let len = this.techLease.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        //this.$store.commit('PersonShareholder_deleteHtml', len)
        this.techLease.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style></style>
