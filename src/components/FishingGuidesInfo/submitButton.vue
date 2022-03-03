<template>
  <div>
    <el-dialog
      title="申请材料"
      :visible.sync="visibleSubmitContent"
      width="80%"
      top="5%"
      :before-close="handleClose"
      class="detailsInfo"
    >
      <DetailsInfo></DetailsInfo>
    </el-dialog>

    <div class="submit">
      <div class="submitText">
        <span
          v-show="
            activeName == 'StatisticalInfo' &&
            (declare_name == '建造远洋渔船' ||
              declare_name == '购买远洋渔船' ||
              declare_name == '建造南沙骨干渔船')
          "
          >备注：1.总投入是指船舶竣工造价或购船和设备改造投入。
          2.项目申请起止时间是指项目实施补贴时间。</span
        >
        <span
          v-show="
            activeName == 'StatisticalInfo' &&
            declare_name == '境外渔业资源使用费'
          "
          >备注：1.境外渔业资源使用费包括FFA注册费用和捕鱼执照费用。2.实际以外币支付的FFA注册费用及捕鱼执照费用按照缴纳费用当天的汇率折合成人民币金额。</span
        >
        <span
          v-show="
            activeName == 'StatisticalInfo' &&
            declare_name == '自捕远洋海产品回运费'
          "
        >
          备注：项目申请起止日期是指项目实施补贴时间。</span
        >
      </div>
      <div class="submitBtn" v-if="activeName == 'ApplyInfo'">
        <el-button type="primary" @click="handleActionNext">下一步</el-button>
        <el-button @click="handlePreserveInfo" style="margin-left: 25px"
          >保存</el-button
        >
      </div>
      <div class="submitBtn" v-else-if="activeName == 'StatisticalInfo'">
        <el-button @click="handleActionLast">上一步</el-button>

        <el-button
          type="primary"
          @click="handleActionNext"
          style="margin: 0 25px"
          >下一步</el-button
        >
        <el-button type="primary" @click="downFile">生成申请书</el-button>
        <el-button
          type="primary"
          @click="handlePreserveInfo"
          style="margin-left: 25px"
          >保存</el-button
        >
      </div>
      <div class="submitBtn" v-else>
        <el-button @click="handleActionLast">上一步</el-button>
        <el-button
          @click="visibleSubmit"
          type="primary"
          style="margin-left: 25px"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  createInfoApplyData,
  createInfoStatisticsData,
} from "../../api/Fishing/createInfo";
import { DownContentText } from "../../api/Fishing/upLoad";
import { mapState } from "vuex";
import DetailsInfo from "./detailsInfo.vue";
export default {
  props: ["activeName"],
  data() {
    return {
      UnitInfoBool: false,
      ApplyInfoBool: false,
      StatisticalInfoBool: false,
      TableBool: false,
      visibleSubmitContent: false,
      activeList: ["ApplyInfo", "StatisticalInfo", "UploadFiles"],
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    declare_name: {
      get() {
        return this.Fishing.OceanDeclaration.declare_name;
      },
      set(val) {
        this.declare_name = val;
      },
    },
  },
  methods: {
    handleActionNext() {
      this.validationDataTab(this.activeName);
      if (this[this.activeName + "Bool"]) {
        this.handlePreserveInfo();
        let idx = this.activeList.indexOf(this.activeName);
        let name = this.activeList[idx + 1];
        this.$emit("handleActionNameText", name);
      } else {
        this.promptMessage(
          this[this.activeName + "Bool"],
          "当前表单未填写完整！！！"
        );
      }
    },
    handleActionLast() {
      let idx = this.activeList.indexOf(this.activeName);
      let name = this.activeList[idx - 1];
      this.$emit("handleActionNameText", name);
    },
    //验证
    validationDataTab(activeName) {
      if (activeName == "ApplyInfo") {
        //console.log(this.$parent.$refs.ApplyInfo)
        this.$parent.$refs.ApplyInfo.$refs.unitOcean.validate((e) => {
          this.UnitInfoBool = e;
        });

        if (
          this.declare_name == "建造远洋渔船" ||
          this.declare_name == "建造南沙骨干渔船"
        ) {
          this.$parent.$refs.ApplyInfo.$refs.BuildFishing.$refs.buildForm.validate(
            (e) => {
              this.ApplyInfoBool = e;
            }
          );
        }
        if (this.declare_name == "购买远洋渔船") {
          this.$parent.$refs.ApplyInfo.$refs.BuyFishing.$refs.buyForm.validate(
            (e) => {
              this.ApplyInfoBool = e;
            }
          );
        }
        if (this.declare_name == "境外渔业资源使用费") {
          this.$parent.$refs.ApplyInfo.$refs.OutsideFishing.$refs.outsideForm.validate(
            (e) => {
              this.ApplyInfoBool = e;
            }
          );
        }
        if (
          this.declare_name == "自捕远洋海产品回运费" ||
          this.declare_name == "自捕南沙海产品回运费"
        ) {
          this.$parent.$refs.ApplyInfo.$refs.CatchFishing.$refs.catchForm.validate(
            (e) => {
              this.ApplyInfoBool = e;
            }
          );
        }
        if (
          this.declare_name ==
          "远洋渔业基地，包括冷链物流项目（含海产品加工厂及配套专用冷库）、超低温冷库以及境外远洋渔业基地等"
        ) {
          this.$parent.$refs.ApplyInfo.$refs.BaseFishing.$refs.baseForm.validate(
            (e) => {
              this.ApplyInfoBool = e;
            }
          );
        }
      }

      if (activeName == "StatisticalInfo") {
        this.StatisticalInfoBool = true;
        if (
          this.declare_name == "建造远洋渔船" ||
          this.declare_name == "购买远洋渔船"
        ) {
          for (let item of this.Fishing.OceanParam.oceanSituationList) {
            for (let res in item) {
              if (item[res] == "") {
                this.StatisticalInfoBool = false;
                break;
              }
            }
          }
        }

        if (this.declare_name == "建造南沙骨干渔船") {
          // console.log("👻", this.Fishing.OceanParam.oceanPurchases);
          // this.StatisticalInfoBool =
          //   this.Fishing.OceanParam.oceanPurchases.every((item) =>
          //     Object.values(item).every((value) => value !== "")
          //   );
          // console.log(this.StatisticalInfoBool, "👻");
          const skipField = [
            "create_time",
            "creator",
            "edit_time",
            "enterprise_name",
            "project_endtime",
            "project_startime",
            "saon_number",
            "ship_qa_variety",
            "ship_quota",
            "ship_source_b",
            "ship_source_n",
            "update_time",
            "modifier",
          ];
          for (const item of this.Fishing.OceanParam.oceanPurchases) {
            for (let res in item) {
              if (skipField.includes(res)) continue;
              if (item[res] == "") {
                this.StatisticalInfoBool = false;
                break;
              }
            }
          }
        }

        if (this.declare_name == "境外渔业资源使用费") {
          for (let item of this.Fishing.OceanParam.oceanCostList) {
            for (let res in item) {
              if (item[res] == "") {
                this.StatisticalInfoBool = false;
                break;
              }
            }
          }
        }
        if (this.declare_name == "自捕远洋海产品回运费") {
          for (let item of this.Fishing.OceanParam.oceanVolumes) {
            for (let res in item) {
              if (item[res] == "") {
                this.StatisticalInfoBool = false;
                break;
              }
            }
          }
        }
        if (this.declare_name == "自捕南沙海产品回运费") {
          const skipField = [
            "apltion_endtime",
            "apltion_startime",
            "create_time",
            "creator",
            "edit_time",
            "enterprise_name",
            "modifier",
            "update_time",
            "volume_number",
          ];
          for (let item of this.Fishing.OceanParam.oceanReturns) {
            for (let res in item) {
              if (skipField.includes(res)) continue;
              if (item[res] == "") {
                this.StatisticalInfoBool = false;
                break;
              }
            }
          }
        }
      }

      if (activeName == "UploadFiles") {
        console.log(" UploadFiles");
      }
    },
    //提示
    promptMessage(bool, text) {
      if (!bool) {
        this.$message({
          message: text,
          type: "warning",
        });
      }
    },
    //保存
    handlePreserveInfo() {
      if (this.activeName == "ApplyInfo") {
        createInfoApplyData(this.Fishing.OceanDeclaration).then(() => {
          this.$message({
            message: "信息保存成功",
            type: "success",
          });
        });
      }
      if (this.activeName == "StatisticalInfo") {
        createInfoStatisticsData(
          this.declare_name,
          this.Fishing.OceanParam
        ).then(() => {
          this.$message({
            message: "信息保存成功",
            type: "success",
          });
        });
      }
    },
    //退出
    handleClose(done) {
      this.$confirm("是否退出提交？")
        .then(() => {
          done();
          this.$store.commit("Fishing_IsDisabledDataClose");
        })
        .catch(() => {});
    },
    visibleSubmit() {
      this.visibleSubmitContent = true;
      this.$store.commit("Fishing_IsDisabledDataOpen");
    },
    downFile() {
      this.handlePreserveInfo();
      DownContentText(this.Fishing.userTaskId).then((res) => {
        window.open(res.data.data);
      });
    },
  },
  components: {
    DetailsInfo,
  },
  // watch: {
  //   declare_name(val){
  //     console.log(val)
  //     console.log(this.$parent.$refs.ApplyInfo)
  //   }
  // }
};
</script>

<style></style>
