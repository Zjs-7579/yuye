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
import { createInfoData } from "../../api/HighTech/createInfo";
//import { DownContentText } from "../../api/Modern/upLoad";
import DetailsInfo from "./detailsInfo.vue";
import { mapState } from "vuex";
export default {
  props: ["activeName"],
  data() {
    return {
      visibleSubmitContent: false, //弹窗
      statusData: 200, //数据提交成功判断
      UnitInfoBool: "",
      InancialInfoBool: "",
      ResearchInfoBool: "",
      HoldInfoBool: "",
      TeamInfoBool: "",
      ProjectUnitInfoBool: "",
      ProjectContentBool: "",
      ProjectImplementBool: "",
      ProjectBuildBool: "",
      ProjectConditionBool: "",
      ProjectProgressBool: "",
      ProjectBenefitBool: "",
      ProjectFundBool: "",
      ProjectInvestBool: "",
      SummarizeInfoBool: "",
      UploadFilesBool: "",
      activeList: [
        "UnitInfo",
        "InancialInfo",
        "ResearchInfo",
        "HoldInfo",
        "TeamInfo",
        "ProjectUnitInfo",

        "ProjectContent",
        "ProjectImplement",
        "ProjectBuild",
        "ProjectCondition",
        "ProjectProgress",
        "ProjectBenefit",
        "ProjectFund",
        "ProjectInvest",
        "SummarizeInfo",
        "UploadFiles",
      ],
    };
  },
  components: {
    DetailsInfo,
  },
  computed: {
    ...mapState(["HighTech"]),
    regist_type: {
      get() {
        return this.HighTech.HighTechData.techCompany.regist_type;
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
      //console.log("dddddddddddddddddd", this.HighTech.HighTechData);
      if (this[this.activeName + "Bool"]) {
        createInfoData(this.activeName, this.HighTech.HighTechData)
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
      console.log(this.HighTech.HighTechData);
      this.visibleSubmitContent = true;
      //this.$store.commit("Modern_IsDisabledDataOpen");
      //this.$store.commit("Modern_IsDetailsContentClose");
      //this.$store.commit("Agricul_IsCountableUploadClose");
      //this.$store.commit("Agricul_IsDetailsContentClose");
    },
    handleClose(done) {
      this.$confirm("是否退出提交？")
        .then(() => {
          done();
          //this.$store.commit("Modern_IsDisabledDataClose");
          //this.$store.commit("Modern_IsDetailsContentClose");
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
        this.$parent.$refs.HighTechUnitInfoValidate.$refs.unitForm.validate(
          (e) => {
            this.UnitInfoBool = e;
            //console.log("*****************", e);
          }
        );
        this.$parent.$refs.HighTechUnitInfoValidate.$refs.HighTechUnitNotEmployed.$refs.ruleForm.validate(
          (e) => {
            this.UnitInfoBool = e;
            //console.log("*****************", e);
          }
        );
        this.$parent.$refs.HighTechUnitInfoValidate.$refs.HighTechUnitNotEmployed.$refs.ruleFormPerson.validate(
          (e) => {
            this.UnitInfoBool = e;
            //console.log("*****************", e);
          }
        );
        for (let item of this.HighTech.HighTechData.techShareholders) {
          //console.log(item)
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.UnitInfoBool = false;
              break;
            }
            //this.UnitInfoBool = true;
          }
        }
      }
      if (activeName == "InancialInfo") {
        this.InancialInfoBool = true;

        if (this.regist_type == "企业") {
          for (let item of this.HighTech.HighTechData.techFinances) {
            //console.log(item)
            for (let result in item) {
              //console.log(result)
              if (item[result] == "") {
                this.InancialInfoBool = false;
                break;
              }
            }
          }
        }

        if (this.regist_type == "事业单位") {
          this.InancialInfoBool = true;

          for (let item of this.HighTech.HighTechData.techCauses) {
            //console.log(item)
            for (let result in item) {
              //console.log(result)
              if (item[result] == "") {
                this.InancialInfoBool = false;
                break;
              }
            }
          }
        }
      }
      if (activeName == "ResearchInfo") {
        this.ResearchInfoBool = true;

        for (let item of this.HighTech.HighTechData.techScientific) {
          //console.log(item)
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.ResearchInfoBool = false;
              break;
            }
          }
        }
      }
      if (activeName == "HoldInfo") {
        this.HoldInfoBool = true;
        for (let item of this.$parent.$refs.HighTechHoldInfoValidate.$refs
          .holdForm) {
          item.validate((e) => {
            if (!e) {
              this.HoldInfoBool = e;
            }
          });
        }
        //console.log(this.HoldInfoBool)
      }
      if (activeName == "TeamInfo") {
        this.TeamInfoBool = true;
        // console.log(
        //   "@@@@@@",
        //   this.$parent.$refs.HighTechTeamInfoValidate.$refs
        // );
        this.$parent.$refs.HighTechTeamInfoValidate.$refs.teamForm.validate(
          (e) => {
            this.TeamInfoBool = e;
          }
        );
        for (let item of this.$parent.$refs.HighTechTeamInfoValidate.$refs
          .teamFormList) {
          item.validate((e) => {
            if (!e) {
              this.TeamInfoBool = e;
            }
          });
        }
        // for (let item of this.$parent.$refs.HighTechTeamInfoValidate.$refs
        //   .teamFormList[0]) {
        //   item.validate((e) => {
        //     if (!e) {
        //       this.TeamInfoBool = e;
        //     }
        //   });
        // }
        //console.log(this.HoldInfoBool)
      }
      if (activeName == "ProjectUnitInfo") {
        this.ProjectUnitInfoBool = true;

        //console.log(item)
        for (let item in this.HighTech.HighTechData.basic_info) {
          //console.log(result)
          if (this.HighTech.HighTechData.basic_info[item] == "") {
            this.ProjectUnitInfoBool = false;
            break;
          }
        }
      }

      if (activeName == "ProjectImplement") {
        this.ProjectImplementBool = true;
        if (!this.HighTech.HighTechData.techImplement.prj_background.length) {
          this.ProjectImplementBool = false;
        }
      }

      if (activeName == "ProjectBuild") {
        this.ProjectBuildBool = true;
        if (!this.HighTech.HighTechData.techImplement.construction.length) {
          this.ProjectBuildBool = false;
        }
      }

      if (activeName == "ProjectCondition") {
        this.ProjectConditionBool = true;
        if (!this.HighTech.HighTechData.techImplement.basis_condition.length) {
          this.ProjectConditionBool = false;
        }
      }

      if (activeName == "ProjectInvest") {
        this.ProjectInvestBool = true;

        for (let item of this.HighTech.HighTechData.techInvestment) {
          //console.log(item)
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.ProjectInvestBool = false;
              break;
            }
          }
        }
        for (let item of this.HighTech.HighTechData.techEquipment) {
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.ProjectInvestBool = false;
              break;
            }
          }
        }
      }

      if (activeName == "SummarizeInfo") {
        this.SummarizeInfoBool = true;
        console.log(
          "@@@@@@@@",
          this.$parent.$refs.HighTechSummarizeInfoValidate.$refs
        );
        this.$parent.$refs.HighTechSummarizeInfoValidate.$refs.SummarizeFormBase.validate(
          (e) => {
            this.SummarizeInfoBool = e;
          }
        );
        this.$parent.$refs.HighTechSummarizeInfoValidate.$refs.SummarizeForm.validate(
          (e) => {
            this.SummarizeInfoBool = e;
          }
        );
      }

      if (activeName == "ProjectProgress") {
        this.ProjectProgressBool = true;

        for (let item of this.HighTech.HighTechData.techStage) {
          //console.log(item)
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.ProjectProgressBool = false;
              break;
            }
          }
        }
      }

      if (activeName == "ProjectBenefit") {
        this.ProjectBenefitBool = true;
        this.$parent.$refs.HighTechBenefitValidate.$refs.unitForm.validate(
          (e) => {
            this.ProjectBenefitBool = e;
          }
        );
      }

      if (activeName == "ProjectFund") {
        this.ProjectFundBool = true;
        for (const h of this.HighTech.HighTechData.techFunds) {
          for (const [, v] of Object.entries(h)) {
            if (!v.length || v) this.ProjectFundBool = false;
          }
        }
        for (const h of this.HighTech.HighTechData.techLease) {
          for (const [, v] of Object.entries(h)) {
            if (!v.length || v) this.ProjectFundBool = false;
          }
        }
      }
    },

    handlePreserveInfo() {
      createInfoData(this.activeName, this.HighTech.HighTechData).then(() => {
        if (this.statusData == 200) {
          this.$message({
            message: "信息保存成功",
            type: "success",
          });
        }
      });
      // this.validationDataTab(this.activeName)
      // if(this[this.activeName + "Bool"]){
      //     createInfoData(this.activeName, this.Modern.ModernData).then(() => {
      //         if (this.statusData == 200) {
      //             this.$message({
      //                 message: "信息保存成功",
      //                 type: "success",
      //             });
      //         }
      //     })
      // }else{
      //     this.promptMessage(false,"当前表单未填写完整！！！");
      // }
    },
    // handleSubmitData() {
    //   this.visibleSubmitContent = false;
    //   // createSubmit(this.Modern).then(
    //   //   this.$router.push({
    //   //     path: "/home",
    //   //   })
    //   //this.$store.commit("Agricul_IsCountableUploadClose"),
    //   //this.$store.commit("Agricul_IsCountableUploadClose"),
    //   //window.location.reload()
    //   // );
    // },
    downFile() {
      // this.handlePreserveInfo();
      // DownContentText(this.Modern.userTaskId).then((res) => {
      //   window.open(res.data.data);
      // });
    },
  },
  watch: {
    regist_type(val) {
      console.log(val);
      if (val == "企业") {
        this.activeList = [
          "UnitInfo",
          "InancialInfo",
          "ResearchInfo",
          "HoldInfo",
          "TeamInfo",
          "ProjectUnitInfo",
          "ProjectContent",
          "ProjectInvest",
          "SummarizeInfo",
          "UploadFiles",
        ];
      }

      if (val == "事业单位") {
        this.activeList = [
          "UnitInfo",
          "InancialInfo",
          "ResearchInfo",
          "HoldInfo",
          "TeamInfo",
          "ProjectUnitInfo",
          "ProjectImplement",
          "ProjectBuild",
          "ProjectCondition",
          "ProjectProgress",
          "ProjectBenefit",
          "ProjectFund",
          "SummarizeInfo",
          "UploadFiles",
        ];
      }
    },
  },
};
</script>

<style></style>
