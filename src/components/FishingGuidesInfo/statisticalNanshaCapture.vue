<template>
  <div class="Capture">
    <el-row class="title"> 自捕远洋海产品回运量情况统计表 </el-row>

    <el-row class="titleRow">
      <el-col :span="2"> 序号 </el-col>
      <el-col :span="2"> 生产船名号 </el-col>

      <el-col :span="20">
        <p class="flexTitleOne">供深海产品交易情况</p>
        <el-row>
          <el-col :span="12">
            <p class="flexTitleOne">批发交易类</p>
            <p class="flexTitleTwo">
              <span>交易单号</span>
              <span>品种</span>
              <span>数量（kg）</span>
              <span>金额</span>
            </p>
          </el-col>

          <el-col :span="12">
            <p class="flexTitleOne">零售交易类</p>
            <p class="flexTitleTwo">
              <span>交易单号</span>
              <span>品种</span>
              <span>数量（kg）</span>
              <span>金额</span>
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="dataRow" v-for="(item, index) in oceanReturns" :key="index">
      <el-col :span="2">
        {{ index + 1 }}
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.prdon_ship_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="20">
        <el-row>
          <el-col :span="12">
            <el-row>
              <el-col :span="6"
                ><el-input
                  v-model="item.wholesale_no"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.wholesale_type"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.wholesale_num"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.wholesale_amt"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
            </el-row>
          </el-col>
          <el-col :span="12"
            ><el-row>
              <el-col :span="6"
                ><el-input
                  v-model="item.retail_no"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.retail_type"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.retail_num"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col>
              <el-col :span="6"
                ><el-input
                  v-model="item.retail_amt"
                  :disabled="isDisabledData"
                ></el-input
              ></el-col> </el-row
          ></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="dataRow">
      <el-col :span="4"> 合计 </el-col>
      <el-col :span="10">
        <el-row>
          <el-col :span="12" />
          <el-col :span="6">
            <p style="padding: 0 15px; float: left">{{ wh_total_num }}</p>
          </el-col>
          <el-col :span="6">
            <p style="padding: 0 15px; float: left">{{ wh_total_amt }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-col :span="12" />
          <el-col :span="6">
            <p style="padding: 0 15px; float: left">{{ re_total_num }}</p>
          </el-col>
          <el-col :span="6">
            <p style="padding: 0 15px; float: left">{{ re_total_amt }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row
      class="dataRow"
      :style="{ visibility: isDisabledData ? 'hidden' : 'visible' }"
    >
      <!-- <div :style="{ display: isDisabledData ? 'none' : 'block' }"> -->
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml" class="">删除一条</el-button>
      <!-- </div> -->
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      subsidy: "",
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanReturns: {
      get() {
        return this.Fishing.OceanParam.oceanReturns;
      },
      set(val) {
        this.oceanReturns = val;
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
    wh_total_num() {
      return this.oceanReturns.reduce((sum, item) => {
        return +sum + +(item.wholesale_num ? item.wholesale_num : 0);
      }, 0);
    },
    wh_total_amt() {
      return this.oceanReturns.reduce((sum, item) => {
        return +sum + +(item.wholesale_amt ? item.wholesale_amt : 0);
      }, 0);
    },
    re_total_num() {
      return this.oceanReturns.reduce((sum, item) => {
        return +sum + +(item.retail_num ? item.retail_num : 0);
      }, 0);
    },
    re_total_amt() {
      return this.oceanReturns.reduce((sum, item) => {
        return +sum + +(item.retail_amt ? item.retail_amt : 0);
      }, 0);
    },
  },
  methods: {
    handleAddHtml() {
      let data = {
        prdon_ship_id: "", //生产船名号
        eption_id: "", //海关申报情况:免税证明单号
        deatn_id: "", //海关申报情况:报关单海关编号
        customs_varieties: "", //海关申报情况:品种
        customs_port: "", //海关申报情况:口岸
        customs_number: "", //海关申报情况:数量（kg）
        //all_customs_number: "",//
        cyse_id: "", //农业农村部申报情况:申报单编号
        cyse_editime: "", //农业农村部申报情况:填报时间
        cyse_confirm: "", //农业农村部申报情况:确认批准文号
        cyse_pushtime: "", //农业农村部申报情况:确认批文发布时间
        cyse_varieties: "", //农业农村部申报情况:品种
        cyse_number: "", //农业农村部申报情况:数量（kg）
        //all_cyse_number: "",//农业农村部申报情况:数量（kg）--总计
      };
      this.oceanReturns.push(data);
    },
    handleDeleteHtml() {
      const len = this.oceanReturns.length;
      if (this.oceanReturns.length == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.oceanReturns.splice(len - 1, 1);
      }
    },
  },
  watch: {
    oceanReturns: {
      handler(val) {
        for (let item of val) {
          item["task_id"] = this.Fishing.userTaskId;
          //item.creator = this.Modern.userName;
          item["wh_total_num"] = this.wh_total_num;
          item["wh_total_amt"] = this.wh_total_amt;
          item["re_total_num"] = this.re_total_num;
          item["re_total_amt"] = this.re_total_amt;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.Capture {
  height: 68vh;
  overflow: hidden;
  overflow-y: auto;
}
.Capture .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.Capture .el-row {
  text-align: center;
  /* padding: 8px; */
}

.Capture .titleRow {
  height: 100px;
  border: 1px solid #ccc;
  border-top: none;
}
.Capture .titleRow .el-col {
  height: 100px;

  text-align: center;
  line-height: 100px;
  border-right: 1px solid #ccc;
}
.Capture .flexTitleOne {
  height: 33px;
  line-height: 33px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.Capture .flexTitleTwo {
  height: 33px;
  line-height: 33px;
  display: flex;
}
.Capture .flexTitleTwo span {
  flex: 1;
  height: 33px;
  border-right: 1px solid #ccc;
  /* margin: 0px 0px 0px -1px; */
  margin-left: -1px;
  /* box-shadow: 0 0 0.5px 0 #000; */
  line-height: 33px;
}
.Capture .dataRow {
  height: 50px;
  /* border: 1px solid #ccc; */
  border-top: none;
}
.Capture .dataRow .el-col {
  /* box-sizing: border-box; */
  height: 50px;

  text-align: center;
  line-height: 50px;
  border-right: 1px solid #ccc;
}
.Capture .el-input__inner {
  margin-top: 5px;
  border: none;
}
</style>
