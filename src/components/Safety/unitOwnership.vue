<template>
  <div class="MoTabel">
    <el-row class="title"> 公司股权结构 </el-row>
    <el-row class="titleRow">
      <el-col :span="6"
        ><div class="grid-content bg-purple">主要股东名称</div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">出资金额(万元)</div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">出资方式</div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">所占比例（%）</div></el-col
      >
    </el-row>
    <el-row
      v-for="(item, index) in SafetyShareholders"
      :key="index"
      class="dataRow"
    >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.shareholder"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.amount"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.payer_type"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.share_proportion"
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
    ...mapState(["Safety"]),
    SafetyShareholders: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Safety.SafetyData.safetyShareholders[0]["task_id"] =
          this.Safety.userTaskId;
        //this.Safety.SafetyShareholders[0].creator = this.Safety.userName
        return this.Safety.SafetyData.safetyShareholders;
      },
      set(val) {
        this.SafetyShareholders = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Safety.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  methods: {
    handleAddHtml() {
      let str = {
        task_id: this.Safety.userTaskId,
        shareholder: "",
        amount: "",
        payer_type: "",
        share_proportion: "",
        // creator: this.Safety.userName,
      };
      this.SafetyShareholders.push(str);
    },
    handleDeleteHtml() {
      let len = this.SafetyShareholders.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        //this.$store.commit('PersonShareholder_deleteHtml', len)
        this.SafetyShareholders.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style>
.MoTabel .title {
  background-color: #ece8e8;
  border: 1px solid #ccc;
  text-align: left;
}
.MoTabel .titleRow .el-row {
  line-height: 40px;
}
.MoTabel .titleRow {
  line-height: 60px;
  text-align: center;

  border: 1px solid #ccc;
}
.MoTabel .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}

.MoTabel .titleRow .el-col {
  border-right: 1px solid #ccc;
}
.MoTabel .dataRow {
  border: 1px solid #ccc;
}

.MoTabel .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}
</style>
