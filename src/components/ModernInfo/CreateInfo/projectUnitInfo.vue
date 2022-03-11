<template>
  <div class="MoboxTitle">
    <el-row class="title"> 项目承担单位基本情况 </el-row>
    <p class="asterisk">
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
    ...mapState(["Modern"]),
    basic_info: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Modern.ModernData.basic_info["task_id"] = this.Modern.userTaskId;
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
.MoboxTitle .title {
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
.MoboxTitle .asterisk::before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
