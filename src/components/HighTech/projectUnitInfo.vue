<template>
  <div class="HIboxTitle">
    <el-row class="title asterisk"> 项目承担单位基本情况 </el-row>
    <p>
      项目单位基本情况、经营管理状况、布局全国情况、行业地位及行业影响力等，
      包括但不限于：成立时间、规模、在行业内的地位、主营业务和主要产品及市场占有率、
      人才结构、经营业绩、已获得的各类资质认证和知识产权情况。(限500字之内)
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
    ...mapState(["HighTech"]),
    basic_info: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.basic_info["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.basic_info;
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
.HIboxTitle {
  width: 100%;
  height: 75vh;
}
.HIboxTitle .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HIboxTitle p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
.HIboxTitle .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
