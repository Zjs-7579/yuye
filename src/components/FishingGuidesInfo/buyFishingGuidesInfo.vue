<template>
  <div class="buyFishing">
    <el-form
      :model="oceanBuyseaship"
      ref="buyForm"
      :rules="rules"
      label-width="250px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 购买远洋渔船 </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="船名：" prop="ship_name">
            <el-input v-model="oceanBuyseaship.ship_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="作业方式：" prop="worker_type">
            <el-input v-model="oceanBuyseaship.worker_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建造完工日期：" prop="bud_finish_time">
            <el-input v-model="oceanBuyseaship.bud_finish_time"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="总吨位：" prop="tonnage">
            <el-input v-model="oceanBuyseaship.tonnage"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="是否有入渔配额：" prop="fishing_quota">
            <el-input v-model="oceanBuyseaship.fishing_quota"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="国籍证书编号：" prop="inal_ctfte_id">
            <el-input v-model="oceanBuyseaship.inal_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="所有权证书编号：" prop="owr_ctfte_id">
            <el-input v-model="oceanBuyseaship.owr_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="船舶检验证书编号：" prop="ship_ctfte_id">
            <el-input v-model="oceanBuyseaship.ship_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="船舶总投资（万元）：" prop="ship_cost_id">
            <el-input v-model="oceanBuyseaship.ship_cost_id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请资助资金（万元）：" prop="apply_cost">
            <el-input v-model="oceanBuyseaship.apply_cost"></el-input>
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
      //   ship_name: "",//船名
      //   worker_type: "",//作业方式
      //   bud_finish_time: "",//建造完工日期
      //   tonnage: "",//吨位
      //   fishing_quota: "",//是否有入渔配额
      //   inal_ctfte: "",//国籍证书
      //   inal_ctfte_id: "",//国籍证书编号
      //   owr_ctfte_id: "",//所有权证书编号
      //   ship_ctfte_id: "",//船舶检验证书编号
      //   ship_cost_id: "",//船舶总投资
      //   apply_cost: "",//申请资助资金
      //   creator: "",//创建人
      // }
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanBuyseaship: {
      get() {
        //this.Fishing.OceanDeclaration.oceanBuyseaship.task_id = this.Fishing.userTaskId;
        this.Fishing.OceanDeclaration.oceanBuyseaship.creator =
          this.Fishing.userName;
        return this.Fishing.OceanDeclaration.oceanBuyseaship;
      },
      set(val) {
        this.OceanDeclaration.oceanBuyseaship = val;
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
