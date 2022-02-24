<template>
  <div class="HIboxBuild">
    <el-row class="title asterisk"> 项目建设内容 （事业）</el-row>
    <p>
      项目建设内容包括：建设地点、建设内容、
      建设规模、运营模式、技术标准、技术方案、采用的新设备新技术新模式、应用推广等。
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="25"
      :disabled="isDisabledData"
      v-model="techImplement.construction"
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
    ...mapState(["HighTech"]),
    techImplement: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techImplement["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.techImplement;
      },
      set(val) {
        this.basic_info = val;
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
};
</script>

<style>
.HIboxBuild {
  width: 100%;
  height: 75vh;
}
.HIboxBuild .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HIboxBuild p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
.HIboxBuild .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
