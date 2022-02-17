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
        <span v-show="activeName == 'InancialInfoBool'"
          >注：07企业增加值=序号08+09+10+13；
          13应交税费总额=序号14+15+16+17+18；
          19实际优惠税费总额=序号20+21+22+23</span
        >
        <span v-show="activeName == 'CountableInfoBool'"
          >备注：申报贷款金额是指企业2019年1月1日-2019年12月31日产生银行利息所对应的贷款总额，既包括2019年新增贷款也包含往年存量贷款。</span
        >
      </div>
      <div class="submitBtn" v-if="activeName == 'UnitInfo'">
        <el-button type="primary" @click="handleActionNext">下一步</el-button>
        <el-button @click="handlePreserveInfo" style="margin: 0 25px"
          >保存</el-button
        >
      </div>

      <div class="submitBtn" v-else-if="activeName == 'CountableInfo'">
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
import { createInfoData } from "../../../api/Agricul/createInfo";
import { DownContentText } from "../../../api/Agricul/upLoad";
import DetailsInfo from "./detailsInfo.vue";
import { mapState } from "vuex";
export default {
  props: ["activeName"],
  data() {
    return {
      visibleSubmitContent: false, //弹窗
      UnitInfoBool: false,
      InancialInfoBool: false,
      PersonInfoBool: false,
      //   PersonShareInfoBool: false,
      HoldInfoBool: false,
      CountableInfoBool: false,
      //   UploadFilesBool: false,
      statusData: 200, //数据提交成功判断
      activeList: [
        "UnitInfo",
        "InancialInfo",
        "PersonInfo",
        "HoldInfo",
        "CountableInfo",
        "UploadFiles",
      ],
      activeTextList: [
        "单位基本情况",
        "单位近三年财务状况",
        "人员基本情况",
        "国家、省、市财政近三年全部支持情况",
        "贷款情况",
        "上传附件",
      ],
      //   index: 0,
      //   activeName: "UnitInfo",
      //   isLabelText: "单位基本情况",
    };
  },
  computed: {
    ...mapState(["Agricul"]),
  },
  methods: {
    handleActionNext() {
      //console.log(this.Agricul.AgriculData)
      this.validationDataTab(this.activeName);
      this.promptMessage(
        this[this.activeName + "Bool"],
        "当前表单未填写完整！！！"
      );

      // let idx = this.activeList.indexOf(this.activeName);
      // let name = this.activeList[idx + 1];
      // this.$emit("handleActionNameText", name);

      if (this[this.activeName + "Bool"]) {
        createInfoData(this.activeName, this.Agricul.AgriculData)
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
      this.$store.commit("Agricul_IsDisabledDataOpen");
      //this.$store.commit("Agricul_IsCountableUploadClose");
      this.$store.commit("Agricul_IsDetailsContentClose");
    },
    handleClose(done) {
      this.$confirm("是否退出提交？")
        .then(() => {
          done();
          this.$store.commit("Agricul_IsDisabledDataClose");
          //this.$store.commit("Agricul_IsCountableUploadOpen");
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
        //console.log(this.$parent.$refs)
        this.$parent.$refs.AgriculUnitInfoValidate.$refs.unitForm.validate(
          (e) => {
            this.UnitInfoBool = e;
          }
        );
      }

      if (activeName == "InancialInfo") {
        this.InancialInfoBool = true;
        let sum = 0;
        for (let item of this.Agricul.AgriculData.agriculturalFinance) {
          sum++;
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.InancialInfoBool = false;
              console.log(result);
              this.$store.commit("Agricul_InancialType", { sum, result });
              break;
            }
          }
        }
      }

      if (activeName == "PersonInfo") {
        this.$parent.$refs.AgriculPersonInfoValidate.$refs.personForm.validate(
          (e) => {
            this.PersonInfoBool = e;
          }
        );

        for (let item of this.Agricul.AgriculData.agriculturalShareholder) {
          //console.log(item)
          for (let result in item) {
            //console.log(result)
            if (item[result] == "") {
              this.PersonInfoBool = false;
              break;
            }
            this.PersonInfoBool = true;
          }
        }
      }

      if (activeName == "HoldInfo") {
        this.HoldInfoBool = true;
        for (let item of this.$parent.$refs.AgriculHoldInfoValidate.$refs
          .holdForm) {
          item.validate((e) => {
            if (!e) {
              this.HoldInfoBool = e;
            }
          });
        }
        //console.log(this.HoldInfoBool)
      }

      if (activeName == "CountableInfo") {
        let CountableInfo = this.Agricul.AgriculData.agriculturalLoan.filter(
          (item) => {
            if (
              item.loan_bank &&
              item.loan_purpose &&
              item.discount_amount &&
              item.loan_amount &&
              item.loan_interest &&
              item.repayment_amount
              // item.total_discount &&
              // item.total_interest &&
              // item.total_loan &&
              // item.total_repay
            )
              return item;
          }
        );

        //console.log(this.CountableInfo)
        if (CountableInfo.length == 0) {
          this.CountableInfoBool = false;
        } else {
          this.CountableInfoBool = true;
        }

        //console.log(this.CountableInfoBool)
      }
    },

    handlePreserveInfo() {
      createInfoData(this.activeName, this.Agricul.AgriculData).then(() => {
        if (this.statusData == 200) {
          this.$message({
            message: "信息保存成功",
            type: "success",
          });
        }
      });
      // this.validationDataTab(this.activeName)
      // console.log(this.Agricul.AgriculData)
      // if(this[this.activeName + "Bool"]){
      //     createInfoData(this.activeName, this.Agricul.AgriculData).then(() => {
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
    downFile() {
      this.handlePreserveInfo();
      DownContentText(this.Agricul.userTaskId).then((res) => {
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
