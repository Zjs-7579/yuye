<template>
  <div>
    <el-row class="title">远洋渔业项目生产基本情况</el-row>
    <el-input
      type="textarea"
      resize="none"
      rows="10"
      :disabled="isDisabledData"
      v-model="OceanDeclaration.fish_base"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //modernImplement: ""
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    OceanDeclaration: {
      get() {
        return this.Fishing.OceanDeclaration;
      },
      set(val) {
        this.OceanDeclaration = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Fishing.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
};
</script>

<style>
.title {
  border: 1px solid #ccc;
}
</style>
