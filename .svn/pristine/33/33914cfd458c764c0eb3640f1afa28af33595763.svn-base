<template>
  <div class="MocontentTitle">
    <p>1、项目实施背景：</p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.background"
    ></el-input>

    <p>2、项目实施必要性：</p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.necessity"
    ></el-input>

    <p>3、项目实际完成建设内容：</p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.content"
    ></el-input>

    <p>4、项目预期经济和技术指标（销售量、营业收入、纳税额等）：</p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.index"
    ></el-input>

    <p>
      5、项目社会效益（包括运行效益或预期效益，如增加就业、节约资源、促进民生等）：
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.social_results"
    ></el-input>

    <p>6、其他需要重点说明的情况：</p>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      disabled
      v-model="modernImplement.other_explain"
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
    modernImplement: {
      get() {
        return this.Modern.ModernData.modernImplement;
      },
      set(val) {
        console.log(val);
        this.modernImplement = val;
      },
    },
  },
};
</script>

<style>
.MocontentTitle {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.MocontentTitle p {
  font-weight: bold;
  font-size: 20px;
  padding: 15px 0;
}
</style>
