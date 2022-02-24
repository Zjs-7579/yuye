<template>
  <div class="HIboxMelt">
    <el-row class="title asterisk"> 项目实施背景及意义 （事业）</el-row>
    <p>
      简述项目实施的背景、必要性和意义（结合相关产业领域国内外现状和发展趋势，
      阐述项目的创新性、领先性、对产业转型升级的影响、
      对实现我市相关产业跨越式发展具有关键性推动作用等）。
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="25"
      :disabled="isDisabledData"
      v-model="techImplement.prj_background"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { HightTechImplementValidator } from "../../utils/validator";
export default {
  data() {
    return {
      rules: HightTechImplementValidator,
    };
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
.HIboxMelt {
  width: 100%;
  height: 75vh;
}
.HIboxMelt .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HIboxMelt p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
.HIboxMelt .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
