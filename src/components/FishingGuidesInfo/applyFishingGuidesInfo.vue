<template>
  <div class="buildFishing">
    <el-form
      :model="buildFrom"
      ref="applyForm"
      :rules="rules"
      label-width="250px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 申请资助资金（万元） </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="建造远洋渔船：" prop="project_address">
            <el-input v-model="buildFrom.project_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="建造南沙骨干渔船：" prop="website">
            <el-input v-model="buildFrom.website"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="购买远洋渔船：" prop="project_address">
            <el-input v-model="buildFrom.project_address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="境外渔业资源使用费：" prop="project_address">
            <el-input v-model="buildFrom.project_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label="自捕海产品回运费（含自捕南沙海产品）："
            prop="website"
          >
            <el-input v-model="buildFrom.website"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="远洋渔业基地：" prop="project_address">
            <el-input v-model="buildFrom.project_address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="合计(大写)：" prop="project_address">
            <el-input v-model="buildFrom.project_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合计(小写)：" prop="website">
            <el-input v-model="buildFrom.website"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FishingAllInfoValidator } from "../../utils/validator";
export default {
  data() {
    return {
      rules: FishingAllInfoValidator,
      buildFrom: {
        select: "",
        project_address: "",
        website: "",
      },
    };
  },
  computed: {
    ...mapState(["Fishing"]),
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

<style></style>
