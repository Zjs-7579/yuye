<template>
  <div class="MoContentTitle">
    <el-form
      :model="safetyImplement"
      ref="ProjectContent"
      label-position="top"
      :rules="rules"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 项目实施的背景、意义及实施内容 </el-row>

      <el-form-item label="1、项目实施背景：" prop="background">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.background"
        ></el-input>
      </el-form-item>

      <el-form-item label="2、项目实施必要性：" prop="necessity">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.necessity"
        ></el-input>
      </el-form-item>

      <el-form-item label="3、项目实际完成建设内容：" prop="content">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.content"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="4、项目预期经济和技术指标（销售量、营业收入、纳税额等）："
        prop="index"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.index"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="5、项目社会效益（包括运行效益或预期效益，如增加就业、节约资源、促进民生等）："
        prop="social_results"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.social_results"
        ></el-input>
      </el-form-item>

      <el-form-item label="6、其他需要重点说明的情况：" prop="other_explain">
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="safetyImplement.other_explain"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ModernProjectContent } from "../../utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rules: ModernProjectContent,
    };
  },
  computed: {
    ...mapState(["Safety"]),
    safetyImplement: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Safety.SafetyData.safetyImplement["task_id"] =
          this.Safety.userTaskId;
        //this.Safety.safetyImplement.creator = this.Safety.userName
        return this.Safety.SafetyData.safetyImplement;
      },
      set(val) {
        console.log(val);
        this.SafetyImplement = val;
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
};
</script>

<style>
.MoContentTitle {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.MoContentTitle .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.MoContentTitle .el-form-item__label {
  font-weight: bold;
  font-size: 20px;
  padding: 15px 0;
}
</style>
