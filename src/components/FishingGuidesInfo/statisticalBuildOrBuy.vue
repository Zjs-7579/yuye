<template>
  <div class="BuildOrBuy">
    <!-- <el-row class="title"> 建造或购买远洋渔业渔船情况统计表 </el-row> -->
    <el-row class="title"> {{ declare_name }}情况统计表 </el-row>

    <el-row class="titleRow">
      <el-col :span="1"> 序号 </el-col>
      <el-col :span="2"> 船名号 </el-col>
      <el-col :span="2"> 作业类型 </el-col>

      <el-col :span="1"> 总吨位(吨) </el-col>
      <el-col :span="1" style="line-height: 50px"> 建造完工日期 </el-col>
      <el-col :span="1"> 船龄(年) </el-col>

      <el-col :span="3"> 船舶登记证书编号 </el-col>
      <el-col :span="3"> 船舶所有权证书编号 </el-col>
      <el-col :span="3"> 国际渔船安全证书编号 </el-col>

      <!-- <el-col :span="2">
          <p class="flexTitleOne">渔船来源</p>
          <p  class="flexTitleTwo">
              <span >新建</span>
                <span style="border-left: 1px solid #ccc">购买</span>
          </p>
        </el-col> -->
      <el-col :span="2">
        <p class="flexTitleOne">入渔配额</p>
        <p class="flexTitleTwo">
          <span>品种</span>
          <span style="border-left: 1px solid #ccc">配额(吨)</span>
        </p>
      </el-col>
      <el-col :span="1" style="line-height: 50px"> 总投入（万元） </el-col>

      <el-col :span="1" style="line-height: 33px">
        已获国家资助金额(万元)
      </el-col>
      <el-col :span="1" style="line-height: 50px"> 核定资助资金(万元) </el-col>
      <el-col :span="1" style="line-height: 50px"> 已拨付资金(万元) </el-col>
      <el-col :span="1" style="line-height: 33px">
        此次申请拨付资助资金(万元)
      </el-col>
    </el-row>

    <el-row
      class="dataRow"
      v-for="(item, index) in oceanSituationList"
      :key="index"
    >
      <el-col :span="1">
        {{ index + 1 }}
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.ship_number"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input v-model="item.type" :disabled="isDisabledData"></el-input>
      </el-col>

      <el-col :span="1">
        <el-input
          v-model="item.gross_tonnage"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input
          v-model="item.bu_finish_time"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input v-model="item.ship_age" :disabled="isDisabledData"></el-input>
      </el-col>

      <el-col :span="3">
        <el-input
          v-model="item.ship_cfte_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="item.owship_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="item.intal_ship_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="1">
        <el-input
          v-model="item.ship_qa_variety"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input
          v-model="item.ship_quota"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input
          v-model="item.tol_investment"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input
          v-model="item.state_funding"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="1">
        <el-input
          v-model="item.aped_funding"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <!-- <el-col :span="1" >
          <el-input v-model="subsidy"></el-input>
        </el-col>
        <el-col :span="1" >
          <el-input v-model="subsidy"></el-input>
        </el-col> -->
      <el-col :span="1">
        <el-input
          v-model="item.funds_allocated"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-input
          v-model="item.appropriate"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
    </el-row>

    <el-row class="dataRow">
      <el-col :span="19"> 合计 </el-col>
      <el-col :span="1">
        <p style="padding: 0 15px; float: left">{{ alltol_investment }}</p>
      </el-col>
      <el-col :span="1">
        <p style="padding: 0 15px; float: left">{{ allstate_funding }}</p>
      </el-col>
      <el-col :span="1">
        <p style="padding: 0 15px; float: left">{{ allaped_funding }}</p>
      </el-col>
      <el-col :span="1">
        <p style="padding: 0 15px; float: left">{{ allfunds_allocated }}</p>
      </el-col>
      <el-col :span="1">
        <p style="padding: 0 15px; float: left">{{ all_appropriate }}</p>
      </el-col>
    </el-row>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml" class="">删除一条</el-button>
    </div>
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
    oceanSituationList: {
      get() {
        return this.Fishing.OceanParam.oceanSituationList;
      },
      set(val) {
        this.oceanSituationList = val;
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
    declare_name: {
      get() {
        return this.Fishing.OceanDeclaration.declare_name;
      },
      set(val) {
        this.declare_name = val;
      },
    },
    alltol_investment: {
      get() {
        let sum = 0;
        for (let item of this.oceanSituationList) {
          sum += item.tol_investment * 1;
        }
        return sum;
      },
      set(val) {
        this.alltol_investment = val;
      },
    },
    allstate_funding: {
      get() {
        let sum = 0;
        for (let item of this.oceanSituationList) {
          sum += item.state_funding * 1;
        }
        return sum;
      },
      set(val) {
        this.allstate_funding = val;
      },
    },
    allaped_funding: {
      get() {
        let sum = 0;
        for (let item of this.oceanSituationList) {
          sum += item.aped_funding * 1;
        }
        return sum;
      },
      set(val) {
        this.allaped_funding = val;
      },
    },
    allfunds_allocated: {
      get() {
        let sum = 0;
        for (let item of this.oceanSituationList) {
          sum += item.funds_allocated * 1;
        }
        return sum;
      },
      set(val) {
        this.allfunds_allocated = val;
      },
    },
    all_appropriate: {
      get() {
        let sum = 0;
        for (let item of this.oceanSituationList) {
          sum += item.appropriate * 1;
        }
        return sum;
      },
      set(val) {
        this.all_appropriate = val;
      },
    },
  },
  methods: {
    aaa() {
      console.log(this.oceanSituationList);
    },
    handleAddHtml() {
      let data = {
        ship_number: "", //船名号
        type: "", //作业类型
        gross_tonnage: "", //总吨位(吨)
        bu_finish_time: "", //建造完成日期
        ship_age: "", //船龄(年)
        ship_cfte_id: "", //船舶登记证书编号
        owship_id: "", //船舶所有权证书编号
        intal_ship_id: "", //国际渔船安全证书编号
        //ship_source_n: "",//渔船来源--新建
        //ship_source_b: "",//渔船来源--购买
        ship_qa_variety: "", //入渔配额--品种
        ship_quota: "", //入渔配额--配额(吨)
        tol_investment: "", //总投入（万元）
        //alltol_investment: "",//总投入（万元）--总计
        state_funding: "", //已获国家资助金额（万元）
        //allstate_funding: "",//已获国家资助金额（万元）--总计
        aped_funding: "", //核定资助资金（万元）
        //allaped_funding: "",//核定资助资金（万元） --总计
        funds_allocated: "", //已拨付资金（万元）
        //allfunds_allocated: "",//已拨付资金（万元）--总计
        appropriate: "", //此次申请拨付资助资金（万元）
        //all_appropriate: "",//此次申请拨付资助资金（万元）--总计
      };
      this.oceanSituationList.push(data);
    },
    handleDeleteHtml() {
      let len = this.oceanSituationList.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.oceanSituationList.splice(len - 1, 1);
      }
    },
  },
  watch: {
    oceanSituationList: {
      handler(val) {
        for (let item of val) {
          item["task_id"] = this.Fishing.userTaskId;
          //item.creator = this.Modern.userName;
          item["alltol_investment"] = this.alltol_investment;
          item["allstate_funding"] = this.allstate_funding;
          item["allaped_funding"] = this.allaped_funding;
          item["allfunds_allocated"] = this.allfunds_allocated;
          item["all_appropriate"] = this.all_appropriate;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.BuildOrBuy .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.BuildOrBuy .el-row {
  text-align: center;
  /* padding: 8px; */
}

.BuildOrBuy .titleRow {
  height: 100px;
  border: 1px solid #ccc;
  border-top: none;
}
.BuildOrBuy .titleRow .el-col {
  height: 100px;

  text-align: center;
  line-height: 100px;
  border-right: 1px solid #ccc;
}
.BuildOrBuy .flexTitleOne {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.BuildOrBuy .flexTitleTwo {
  height: 50px;
  line-height: 50px;
  display: flex;
}
.BuildOrBuy .flexTitleTwo span {
  flex: 1;
  height: 50px;
  line-height: 50px;
}
.BuildOrBuy .dataRow {
  height: 50px;
  border: 1px solid #ccc;
  border-top: none;
}
.BuildOrBuy .dataRow .el-col {
  /* box-sizing: border-box; */
  height: 50px;

  text-align: center;
  line-height: 50px;
  border-right: 1px solid #ccc;
}
.BuildOrBuy .el-input__inner {
  margin-top: 5px;
  border: none;
}
.handle {
  width: 515px;
  margin: 20px auto;
}
.handle button {
  margin: 0 100px;
}
</style>
