<template>
  <div class="outsideFishing">
    <el-form
      :model="useshipsource"
      ref="outsideForm"
      :rules="rules"
      label-width="310px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 境外渔业资源使用费 </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="远洋渔业项目作业海域：" prop="sea_region">
            <el-input v-model="useshipsource.sea_region"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="已交纳境外渔业资源使用费（万元）："
            prop="rsous_use_cost"
          >
            <el-input v-model="useshipsource.rsous_use_cost"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="已获得农业部国际渔业资源开发补助（万元）："
            prop="inal_rsous_subsidy"
          >
            <el-input v-model="useshipsource.inal_rsous_subsidy"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请资助资金(万元)：" prop="apply_cost">
            <el-input v-model="useshipsource.apply_cost"></el-input>
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
      // buildFrom: {
      //   task_id: "",
      //   sea_region: "",//远洋渔业项目作业海域
      //   rsous_use_cost: "",//已交纳境外渔业资源使用费
      //   inal_rsous_subsidy: "",//已获得农业部国际渔业资源开发补助
      //   apply_cost: "",//申请资助资金
      //   creator: "",//创建人
      // }
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    useshipsource: {
      get() {
        //this.Fishing.OceanDeclaration.useshipsource.task_id = this.Fishing.userTaskId;
        this.Fishing.OceanDeclaration.useshipsource.creator =
          this.Fishing.userName;
        return this.Fishing.OceanDeclaration.useshipsource;
      },
      set(val) {
        this.OceanDeclaration.useshipsource = val;
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
