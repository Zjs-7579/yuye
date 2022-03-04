<template>
  <div class="catchFishing">
    <el-form
      :model="oceanSelfcapture"
      ref="catchForm"
      :rules="rules"
      label-width="250px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> {{ title }} </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item
            label="空运冰鲜金枪鱼数量（吨）："
            prop="sky_tunas_number"
          >
            <el-input v-model="oceanSelfcapture.sky_tunas_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="海运超低温金枪鱼数量（吨）："
            prop="sea_tunas_number"
          >
            <el-input v-model="oceanSelfcapture.sea_tunas_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="其他鱼类数量（吨）：" prop="other_fish_number">
            <el-input v-model="oceanSelfcapture.other_fish_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="已获得国家资助资金（万元）："
            prop="country_cost"
          >
            <el-input v-model="oceanSelfcapture.country_cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请资助资金（万元）：" prop="appaly_cost">
            <el-input v-model="oceanSelfcapture.appaly_cost"></el-input>
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
  props: ["title"],
  data() {
    return {
      rules: FishingAllInfoValidator,
      // buildFrom: {
      //   task_id: "",
      //   sky_tunas_number: "",//空运冰鲜金枪鱼数量
      //   sea_tunas_number: "",//海运超低温金枪鱼数量
      //   other_fish_number: "",//其他鱼类数量
      //   country_cost: "",//已获得国家资助资金
      //   appaly_cost: "",//申请资助资金
      //   creator: "",//创建人
      // }
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanSelfcapture: {
      get() {
        //this.Fishing.OceanDeclaration.oceanSelfcapture.task_id = this.Fishing.userTaskId;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Fishing.OceanDeclaration.oceanSelfcapture.creator =
          this.Fishing.userName;
        return this.Fishing.OceanDeclaration.oceanSelfcapture;
      },
      set(val) {
        this.OceanDeclaration.oceanSelfcapture = val;
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

<style></style>
