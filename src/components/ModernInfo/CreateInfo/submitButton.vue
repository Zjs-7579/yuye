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
import { createInfoData } from "../../../api/Modern/createInfo";
import { DownContentText } from "../../../api/Modern/upLoad";
import DetailsInfo from "./detailsInfo.vue";
import { mapState } from "vuex";
export default {
  props: ["activeName"],
  data() {
    return {
      visibleSubmitContent: false, //弹窗
      statusData: 200, //数据提交成功判断
      UnitInfoBool: false,
      InancialInfoBool: false,
      HoldInfoBool: false,
      ProjectUnitInfoBool: false,
      ProjectContentBool: false,
      ProjectInvestBool: false,
      SummarizeInfoBool: false,
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
    ...mapState(["Modern"]),
    regist_type: {
      get() {
        return this.Modern.ModernData.modernCompany.regist_type;
      },
      set(val) {
        this.regist_type = val;
      },
    },
  },
  methods: {
    handleActionNext() {
      console.log(this.Modern.ModernData);
      this.validationDataTab(this.activeName);
      this.promptMessage(
        this[this.activeName + "Bool"],
        "当前表单未填写完整！！！"
      );
      console.log(this[this.activeName + "Bool"]);
      // let idx = this.activeList.indexOf(this.activeName);
      // let name = this.activeList[idx + 1];
      // this.$emit("handleActionNameText", name);

      if (this[this.activeName + "Bool"]) {
        createInfoData(this.activeName, this.Modern.ModernData)
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
      this.$store.commit("Modern_IsDisabledDataOpen");
      this.$store.commit("Modern_IsDetailsContentClose");
      //this.$store.commit("Agricul_IsCountableUploadClose");
      //this.$store.commit("Agricul_IsDetailsContentClose");
    },
    handleClose(done) {
      this.$confirm("是否退出提交？")
        .then(() => {
          done();
          this.$store.commit("Modern_IsDisabledDataClose");
          this.$store.commit("Modern_IsDetailsContentClose");
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
        this.$parent.$refs.ModernUnitInfoValidate.$refs.unitForm.validate(
          (e) => {
            this.UnitInfoBool = e;
            console.log("*****************", e);
          }
        );

        this.$parent.$refs.ModernUnitInfoValidate.$refs.ModernUnitEmpForm.$refs.ruleForm.validate(
          (e) => {
            this.UnitInfoBool = e;
            console.log("*****************", e);
          }
        );

        for (let item of this.Modern.ModernData.modernShareholders) {
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.UnitInfoBool = false;
              break;
            }
          }
        }
        // this.UnitInfoBool = Object.values(
        //   this.Modern.ModernData.unitEmpForm
        // ).some((item) => {
        //   item !== "";
        // });
      }

      if (activeName == "InancialInfo") {
        this.InancialInfoBool = true;

        if (this.Modern.ModernData.modernCompany.regist_type == "企业") {
          for (let item of this.Modern.ModernData.modernFinances) {
            for (let result in item) {
              if (item[result] == "") {
                this.InancialInfoBool = false;
                break;
              }
            }
          }
        }

        if (this.Modern.ModernData.modernCompany.regist_type == "事业单位") {
          this.InancialInfoBool = true;

          for (let item of this.Modern.ModernData.modernCauses) {
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

      if (activeName == "HoldInfo") {
        this.HoldInfoBool = true;
        for (let item of this.$parent.$refs.ModernHoldInfoValidate.$refs
          .holdForm) {
          item.validate((e) => {
            if (!e) {
              this.HoldInfoBool = e;
            }
          });
        }
        //console.log(this.HoldInfoBool)
      }

      if (activeName == "ProjectUnitInfo") {
        for (let item in this.Modern.ModernData.basic_info) {
          if (this.Modern.ModernData.basic_info[item] == "") {
            this.ProjectUnitInfoBool = false;
            break;
          }
          this.ProjectUnitInfoBool = true;
        }
      }

      if (activeName == "ProjectContent") {
        this.$parent.$refs.ModernProjectContentValidate.$refs.ProjectContent.validate(
          (e) => {
            this.ProjectContentBool = e;
          }
        );
      }

      if (activeName == "ProjectInvest") {
        this.ProjectInvestBool = true;

        for (let item of this.Modern.ModernData.modernInvestMent) {
          //console.log(item)
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
        this.$parent.$refs.ModernSummarizeInfoValidate.$refs.SummarizeForm.validate(
          (e) => {
            this.SummarizeInfoBool = e;
          }
        );
      }
    },

    handlePreserveInfo() {
      createInfoData(this.activeName, this.Modern.ModernData).then(() => {
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
    //   createSubmit(this.Modern).then(
    //     this.$router.push({
    //       path: "/home",
    //     }),
    //     //this.$store.commit("Agricul_IsCountableUploadClose"),
    //     //this.$store.commit("Agricul_IsCountableUploadClose"),
    //     //window.location.reload()
    //   );
    // },
    downFile() {
      this.handlePreserveInfo();
      DownContentText(this.Modern.userTaskId).then((res) => {
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
