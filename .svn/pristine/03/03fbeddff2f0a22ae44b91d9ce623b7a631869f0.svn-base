<template>
  <div class="MoboxTitle">
    <el-row class="title">
            项目实施进度与管理
        </el-row>
    <p>
      1、简述项目实施的计划进度，每一阶段应该实现的具体目标，
      包括：时间进度安排、技术指标、资金使用计划、研发计划等。
    </p>
    <p>
     2、目标应该清晰、正确地定性或定量描述。
    </p>
    <p>
      3、项目实施年限不超过2年，如属特别约定的重大项目，最长不超过3年。
      （每个阶段截止时间为20**年12月31日，最后一个阶段以实际结束时间为准）
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="25"
      :disabled="isDisabledData"
      v-model="basic_info.basic_info"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["Modern"]),
    basic_info: {
      get() {
        this.Modern.ModernData.basic_info['task_id'] = this.Modern.userTaskId
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.Modern.ModernData.basic_info;
      },
      set(val) {
        this.basic_info = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Modern.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
};
</script>

<style>
.MoboxTitle {
  width: 100%;
  height: 75vh;
}
.MoboxTitle .title{
        background-color: #ece8e8;
        height: 60px;
        line-height: 60px;
        font-size: 25px;
        padding: 0 15px;
        font-weight: bold;
        border: 1px solid #ccc;
    }
.MoboxTitle p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
</style>