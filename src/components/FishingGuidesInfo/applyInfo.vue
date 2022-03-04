<template>
  <div class="fishingApply">
    <el-form
      :model="OceanDeclaration"
      ref="unitOcean"
      label-width="250px"
      :rules="rules"
      class="demo-ruleForm"
      :disabled="isDisabledData"
    >
      <el-row class="title"> 远洋渔业项目申报表 </el-row>
      <el-row class="title"> 单位基本情况 </el-row>
      <el-form-item label="项目名称：" prop="task_name">
        <el-input v-model="OceanDeclaration.task_name"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="单位名称：" prop="unit_name">
            <el-input v-model="OceanDeclaration.unit_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="法人代表：" prop="legal_rpstative">
            <el-input v-model="OceanDeclaration.legal_rpstative"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="身份证号：" prop="id_number">
            <el-input v-model="OceanDeclaration.id_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="通讯地址：" prop="postal_address">
            <el-input v-model="OceanDeclaration.postal_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系人：" prop="contacts">
            <el-input v-model="OceanDeclaration.contacts"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话：" prop="contact_number">
            <el-input v-model="OceanDeclaration.contact_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="邮政编码：" prop="postal_code">
            <el-input v-model="OceanDeclaration.postal_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="营业执照：" prop="business_license">
            <el-input v-model="OceanDeclaration.business_license"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="社会统一信用代码：" prop="credit_code">
            <el-input v-model="OceanDeclaration.credit_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="开户银行：" prop="deposit_bank">
            <el-input v-model="OceanDeclaration.deposit_bank"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="账  号：" prop="account_number">
            <el-input v-model="OceanDeclaration.account_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="请选择申报资助项目："
        prop="declare_name"
        style="background-color: #ece8e8"
      >
        <el-select
          v-model="OceanDeclaration.declare_name"
          placeholder="请选择"
          style="width: 100%"
        >
          <el-option
            v-for="item in funded"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 建造 -->
    <BuildFishingGuidesInfo
      v-show="
        ['建造远洋渔船', '建造南沙骨干渔船'].includes(
          OceanDeclaration.declare_name
        )
      "
      :title="OceanDeclaration.declare_name"
      ref="BuildFishing"
    ></BuildFishingGuidesInfo>
    <!-- 购买 -->
    <BuyFishingGuidesInfo
      v-show="OceanDeclaration.declare_name == '购买远洋渔船'"
      ref="BuyFishing"
    ></BuyFishingGuidesInfo>
    <!-- 境外 -->
    <OutsideFishingGuidesInfo
      v-show="OceanDeclaration.declare_name == '境外渔业资源使用费'"
      ref="OutsideFishing"
    ></OutsideFishingGuidesInfo>
    <!-- 自捕 -->
    <CatchFishingGuidesInfo
      v-show="
        ['自捕南沙海产品回运费', '自捕远洋海产品回运费'].includes(
          OceanDeclaration.declare_name
        )
      "
      ref="CatchFishing"
      :title="OceanDeclaration.declare_name"
    ></CatchFishingGuidesInfo>
    <!-- 基地 -->
    <BaseFishingGuidesInfo
      ref="BaseFishing"
      v-show="
        OceanDeclaration.declare_name ==
        '远洋渔业基地，包括冷链物流项目（含海产品加工厂及配套专用冷库）、超低温冷库以及境外远洋渔业基地等'
      "
    ></BaseFishingGuidesInfo>
    <!-- 基本信息 -->
    <BasicFishingGuidesInfo
      v-show="OceanDeclaration.declare_name.length > 0"
    ></BasicFishingGuidesInfo>
    <!-- 申请 -->
    <!-- <ApplyFishingGuidesInfo></ApplyFishingGuidesInfo> -->
  </div>
</template>

<script>
import BuildFishingGuidesInfo from "./buildFishingGuidesInfo.vue";
import BuyFishingGuidesInfo from "./buyFishingGuidesInfo.vue";
import OutsideFishingGuidesInfo from "./outsideFishingGuidesInfo.vue";
import CatchFishingGuidesInfo from "./catchFishingGuidesInfo.vue";
import BaseFishingGuidesInfo from "./baseFishingGuidesInfo.vue";
import BasicFishingGuidesInfo from "./basicFishingGuidesInfo.vue";
//import ApplyFishingGuidesInfo from "./applyFishingGuidesInfo.vue"
import { FishingAllInfoValidator } from "../../utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rules: FishingAllInfoValidator,
      //   From: {
      //     task_id: "",
      //     unit_name: "",//单位名称
      //     legal_rpstative: "",//法人代表
      //     id_number: "",//身份证号
      //     postal_address: "",//通讯地址
      //     contacts: "",//联系人
      //     contact_number: "",//联系电话
      //     postal_code: "",//邮政编码
      //     business_license: "",//营业执照
      //     credit_code: "",//社会统一信用代码
      //     deposit_bank: "",//开户银行
      //     account_number: "",//账号
      //     declare_name: "",//申报资助项目名称
      //     declare_id: "",//申报资助项目id
      //     fish_base: "",//远洋渔业项目生产基本情况
      //     creator: "",//创建人
      //   },
      funded: [
        {
          value: "建造远洋渔船",
        },
        {
          value: "建造南沙骨干渔船",
        },
        {
          value: "购买远洋渔船",
        },
        {
          value: "境外渔业资源使用费",
        },
        {
          value: "自捕远洋海产品回运费",
        },
        {
          value: "自捕南沙海产品回运费",
        },
        {
          value:
            "远洋渔业基地，包括冷链物流项目（含海产品加工厂及配套专用冷库）、超低温冷库以及境外远洋渔业基地等",
        },
      ],
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    OceanDeclaration: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Fishing.OceanDeclaration["task_id"] = this.Fishing.userTaskId;
        //this.Fishing.OceanDeclaration.creator = this.Fishing.userName;
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
  components: {
    BuildFishingGuidesInfo,
    BuyFishingGuidesInfo,
    OutsideFishingGuidesInfo,
    CatchFishingGuidesInfo,
    BaseFishingGuidesInfo,
    BasicFishingGuidesInfo,
    //ApplyFishingGuidesInfo
  },
};
</script>

<style>
.fishingApply {
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
}
/* .tabel .el-form-item{
  border:1px solid #ccc;
  margin: 0;
  padding: 8px 0;
  border-bottom: none;
}
.tabel .el-input__inner ,
.tabel .el-textarea__inner{
  border: none;
} */
.fishingApply .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}
.fishingApply .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.fishingApply .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.fishingApply .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
  /* line-height: 60px; */
  /* border: 1px solid #ccc; */
}
/* .el-input{
  height: 60px;
  line-height: ;
} */
.fishingApply .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.fishingApply .el-input__inner {
  border: none;
}

.el-form-item__error {
  position: absolute;
  top: 80%;
}
</style>
