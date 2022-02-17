<template>
  <div class="AgTabel">
    <el-row class="titleRow">
      <el-col :span="3"><div class="grid-content bg-purple">序号</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">主要股东名称</div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content bg-purple">出资金额（万元）</div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content bg-purple">股份比例（%）</div></el-col
      >
    </el-row>
    <el-row
      v-for="(item, index) in agriculturalShareholder"
      :key="item.id"
      class="dataRow"
    >
      <el-col :span="3"
        ><div class="grid-content bg-purple">{{ index + 1 }}</div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.shareholder"
          ></el-input></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.amount"
          ></el-input></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-input
            type="text"
            :disabled="isDisabledData"
            v-model="item.share_proportion"
          ></el-input></div
      ></el-col>
    </el-row>
    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button class="delete" @click="handleDeleteHtml">删除一条</el-button>
      <el-button type="primary" class="add" @click="handleAddHtml"
        >添加一条</el-button
      >
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
    //  ...mapState('Agricul', {
    //   agriculturalShareholder: state => state.AgriculData.agriculturalShareholder
    // }),

    ...mapState(["Agricul"]),
    agriculturalShareholder: {
      get() {
        this.Agricul.AgriculData.agriculturalShareholder[0]["task_id"] =
          this.Agricul.userTaskId;

        return this.Agricul.AgriculData.agriculturalShareholder;
      },
      set(val) {
        this.agriculturalShareholder = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Agricul.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },

  methods: {
    handleAddHtml() {
      let str = {
        task_id: this.Agricul.userTaskId,
        shareholder: "",
        amount: "",
        share_proportion: "",
      };
      this.agriculturalShareholder.push(str);
    },
    handleDeleteHtml() {
      let len = this.agriculturalShareholder.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        //this.$store.commit('PersonShareholder_deleteHtml', len)
        this.agriculturalShareholder.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style>
.AgTabel .el-row {
  text-align: center;
  line-height: 40px;
}
.AgTabel .titleRow {
  line-height: 60px;
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.AgTabel .el-input__inner {
  width: 80%;
  border: none;
  font-size: 18px;
}

.AgTabel .titleRow .el-col {
  border-right: 1px solid #ccc;
}
.AgTabel .dataRow {
  border: 1px solid #ccc;
}

.AgTabel .dataRow .el-col {
  border-right: 1px solid #ccc;
  padding: 8px 0;
}

.handle {
  width: 515px;
  margin: 20px auto;
}
.handle button {
  margin: 0 100px;
}
</style>
