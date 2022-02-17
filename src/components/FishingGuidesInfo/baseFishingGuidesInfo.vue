<template>
  <div class="baseFishing">
    <el-form
      :model="oceanBase"
      ref="baseForm"
      :rules="rules"
      label-width="250px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 远洋渔业基地 </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="1.冷链物流项目地址：" prop="cold_unit">
            <el-input v-model="oceanBase.cold_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目总投资（万元）：" prop="all_cold_cost">
            <el-input v-model="oceanBase.all_cold_cost"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="2.超低温冷库地址：" prop="low_tpte_unit">
            <el-input v-model="oceanBase.low_tpte_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目总投资（万元）：" prop="all_low_cost">
            <el-input v-model="oceanBase.all_low_cost"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="3.境外远洋渔业基地地址：" prop="abroad_unit">
            <el-input v-model="oceanBase.abroad_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="已获得农业部资助（万元）："
            prop="agriculture_cost"
          >
            <el-input v-model="oceanBase.agriculture_cost"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="申请资助资金（万元）：" prop="appaly_cost">
        <el-input v-model="oceanBase.appaly_cost"></el-input>
      </el-form-item>
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
      //   cold_unit: "",//冷链物流项目地址
      //   all_cold_cost: "",//冷链物流项目地址--项目总投资
      //   low_tpte_unit: "",//超低温冷库地址
      //   all_low_cost: "",//超低温冷库地址--项目总投资
      //   abroad_unit: "",//境外远洋渔业基地地址
      //   agriculture_cost: "",//已获得农业部资助
      //   appaly_cost: "",//申请资助资金
      //   creator: "",//创建人
      // }
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanBase: {
      get() {
        //this.Fishing.OceanDeclaration.oceanBase.task_id = this.Fishing.userTaskId;
        this.Fishing.OceanDeclaration.oceanBase.creator = this.Fishing.userName;
        return this.Fishing.OceanDeclaration.oceanBase;
      },
      set(val) {
        this.OceanDeclaration.oceanBase = val;
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
