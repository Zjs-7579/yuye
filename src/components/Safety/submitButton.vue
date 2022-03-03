<template>
  <div>
    <el-dialog
      title="申请材料"
      :visible.sync="visibleSubmitContent"
      width="80%"
      top="5%"
      :before-close="handleClose"
    >
      <DetailsInfo></DetailsInfo>
    </el-dialog>

    <div class="submit">
      <div class="submitText">
        <span v-show="regist_type == '企业' && activeName == 'InancialInfo'"
          >注：07企业增加值=序号08+09+10+13；
          13应交税费总额=序号14+15+16+17+18；
          19实际优惠税费总额=序号20+21+22+23</span
        >
      </div>
      <div class="submitBtn" v-if="activeName == 'UnitInfo'">
        <el-button type="primary" @click="handleActionNext">下一步</el-button>
        <el-button @click="handlePreserveInfo" style="margin: 0 25px"
          >保存</el-button
        >
      </div>

      <div class="submitBtn" v-else-if="activeName == 'SummarizeInfo'">
        <el-button @click="handleActionLast">上一步</el-button>
        <el-button
          type="primary"
          @click="handleActionNext"
          style="margin: 0 25px"
          >下一步</el-button
        >
        <el-button type="primary" @click="downFile">生成申请书</el-button>
        <el-button @click="handlePreserveInfo" style="margin-left: 25px"
          >保存</el-button
        >
      </div>

      <div class="submitBtn" v-else-if="activeName == 'UploadFiles'">
        <el-button @click="handleActionLast">上一步</el-button>
        <el-button
          type="primary"
          @click="visibleSubmit"
          style="margin-left: 25px"
          >提交</el-button
        >
      </div>
      <div class="submitBtn" v-else>
        <el-button @click="handleActionLast">上一步</el-button>
        <el-button
          type="primary"
          @click="handleActionNext"
          style="margin: 0 25px"
          >下一步</el-button
        >
        <el-button @click="handlePreserveInfo">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createInfoData } from "../../api/Safety/createInfo";
import DetailsInfo from "./detailsInfo.vue";
import { mapState } from "vuex";
import { DownContentText } from "../../api/Safety/upLoad";
export default {
  props: ["activeName"],
  data() {
    return {
      visibleSubmitContent: false,
      activeList: [
        "UnitInfo",
        "InancialInfo",
        "HoldInfo",
        "ProjectUnitInfo",
        "ProjectContent",
        "ProjectInvest",
        "SummarizeInfo",
        "UploadFiles",
      ],
    };
  },
  computed: {
    ...mapState(["Safety"]),
    regist_type: {
      get() {
        return this.Safety.SafetyData.safetyCompany.regist_type;
      },
      set(val) {
        this.regist_type = val;
      },
    },
  },
  methods: {
    handleActionNext() {
      this.validationDataTab(this.activeName);
      this.promptMessage(
        this[this.activeName + "Bool"],
        "当前表单未填写完整！！！"
      );
      // let idx = this.activeList.indexOf(this.activeName);
      // let name = this.activeList[idx + 1];
      // this.$emit("handleActionNameText", name);

      if (this[this.activeName + "Bool"]) {
        createInfoData(this.activeName, this.Safety.SafetyData)
          .then(() => {
            this.statusData = 200;
          })
          .catch(() => {
            this.statusData = 0;
          });
        let idx = this.activeList.indexOf(this.activeName);
        let name = this.activeList[idx + 1];
        this.$emit("handleActionNameText", name);
      }
    },
    handleActionLast() {
      let idx = this.activeList.indexOf(this.activeName);
      let name = this.activeList[idx - 1];
      this.$emit("handleActionNameText", name);
    },
    visibleSubmit() {
      this.visibleSubmitContent = true;
    },
    handleClose(done) {
      this.$confirm("是否退出提交？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    promptMessage(bool, text) {
      if (!bool) {
        this.$message({
          message: text,
          type: "warning",
        });
      }
    },
    validationDataTab(activeName) {
      if (activeName == "UnitInfo") {
        this.UnitInfoBool = true;
        this.$parent.$refs.SafetyUnitInfoValidate.$refs.unitForm.validate(
          (e) => {
            this.UnitInfoBool = e;
          }
        );
        this.$parent.$refs.SafetyUnitInfoValidate.$refs.unitNotEmployedForm.$refs.ruleForm1.validate(
          (e) => {
            this.UnitInfoBool = e;
          }
        );
        this.$parent.$refs.SafetyUnitInfoValidate.$refs.unitNotEmployedForm.$refs.ruleForm2.validate(
          (e) => {
            this.UnitInfoBool = e;
          }
        );

        for (let item of this.Safety.SafetyData.safetyShareholders) {
          for (let result in item) {
            if (item[result] == "") {
              this.UnitInfoBool = false;
              break;
            }
          }
        }
      }

      if (activeName == "InancialInfo") {
        this.InancialInfoBool = true;
        if (this.Safety.SafetyData.safetyCompany.regist_type == "企业") {
          for (let item of this.Safety.SafetyData.safetyFinances) {
            for (let result in item) {
              if (item[result] == "") {
                this.InancialInfoBool = false;
                break;
              }
            }
          }
        }

        if (this.Safety.SafetyData.safetyCompany.regist_type == "事业单位") {
          this.InancialInfoBool = true;

          for (let item of this.Safety.SafetyData.safetyCauses) {
            for (let result in item) {
              if (item[result] == "") {
                this.InancialInfoBool = false;
                break;
              }
            }
          }
        }
      }

      if (activeName == "HoldInfo") {
        this.HoldInfoBool = true;
        for (let item of this.$parent.$refs.SafetyHoldInfoValidate.$refs
          .holdForm) {
          item.validate((e) => {
            if (!e) {
              this.HoldInfoBool = e;
            }
          });
        }
      }

      if (activeName == "ProjectUnitInfo") {
        this.ProjectUnitInfoBool = true;
        console.log(this.Safety.SafetyData.basic_info);
        for (let item in this.Safety.SafetyData.basic_info) {
          console.log(item);
          if (this.Safety.SafetyData.basic_info[item] == "") {
            this.ProjectUnitInfoBool = false;
            break;
          }
        }
      }

      if (activeName == "ProjectContent") {
        this.$parent.$refs.SafetyProjectContentValidate.$refs.ProjectContent.validate(
          (e) => {
            this.ProjectContentBool = e;
          }
        );
      }

      if (activeName == "ProjectInvest") {
        this.ProjectInvestBool = true;
        for (let item of this.Safety.SafetyData.safetyInvestment) {
          for (let result in item) {
            if (item[result] == "") {
              this.ProjectInvestBool = false;
              break;
            }
          }
        }
      }
      if (activeName == "SummarizeInfo") {
        for (let item in this.Safety.SafetyData.safetyAbstract) {
          if (this.Safety.SafetyData.safetyAbstract[item] == "") {
            this.SummarizeInfoBool = false;
            break;
          }
          this.SummarizeInfoBool = true;
        }
      }
    },

    handlePreserveInfo() {
      createInfoData(this.activeName, this.Safety.SafetyData).then(() => {
        if (this.statusData == 200) {
          console.log("保存成功");
          this.$message({
            message: "信息保存成功",
            type: "success",
          });
        }
      });
    },
    downFile() {
      // /yuye_spring/v1/safety/ty/task/report/{id}
      this.handlePreserveInfo();
      DownContentText(this.Safety.userTaskId).then((res) => {
        window.open(res.data.data);
      });
    },
  },
  components: {
    DetailsInfo,
  },
};
</script>

<style></style>
