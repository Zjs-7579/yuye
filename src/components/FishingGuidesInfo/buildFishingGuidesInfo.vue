<template>
  <div class="buildFishing">
    <el-form
      :model="oceanDeepseaship"
      ref="buildForm"
      :rules="rules"
      label-width="250px"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> {{ title }} </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="船名：" prop="ship_name">
            <el-input v-model="oceanDeepseaship.ship_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="作业方式：" prop="work_type">
            <el-input v-model="oceanDeepseaship.work_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="总吨位：" prop="gross_tonnage">
            <el-input v-model="oceanDeepseaship.gross_tonnage"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="建造完工日期：" prop="build_time">
            <el-input v-model="oceanDeepseaship.build_time"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item
            label="已获得国家资助资金（万元）："
            prop="state_funding"
          >
            <el-input v-model="oceanDeepseaship.state_funding"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="是否有入渔配额：" prop="fishing_quota">
            <el-input v-model="oceanDeepseaship.fishing_quota"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="船舶检验证书编号：" prop="ship_ctfte_id">
            <el-input v-model="oceanDeepseaship.ship_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="国籍证书编号：" prop="inal_ctfte_id">
            <el-input v-model="oceanDeepseaship.inal_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所有权证书编号：" prop="owr_ctfte_id">
            <el-input v-model="oceanDeepseaship.owr_ctfte_id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="船舶竣工造价（万元）：" prop="completed_cost">
            <el-input v-model="oceanDeepseaship.completed_cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请资助资金（万元）：" prop="apply_cost">
            <el-input v-model="oceanDeepseaship.apply_cost"></el-input>
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
      //   task_id: "",//
      //   ship_name: "",//船名
      //   work_type: "",//作业方式
      //   gross_tonnage: "",//总吨位
      //   build_time: "",//建造完工日期
      //   state_funding: "",//已获得国家资助资金
      //   fishing_quota: "",//是否有入渔配额
      //   ship_ctfte_id: "",//船舶检验证书编号
      //   inal_ctfte_id: "",//国籍证书编号
      //   owr_ctfte_id: "",//所有权证书编号
      //   completed_cost: "",//所有权证书编号
      //   apply_cost: "",//申请资助资金
      //   creator: "",//创建人
      // }
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanDeepseaship: {
      get() {
        //this.Fishing.OceanDeclaration.oceanDeepseaship.task_id = this.Fishing.userTaskId;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        // this.Fishing.OceanDeclaration.oceanDeepseaship.creator =
        //   this.Fishing.userName;
        return this.Fishing.OceanDeclaration.oceanDeepseaship;
      },
      set(val) {
        this.OceanDeclaration.oceanDeepseaship = val;
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
