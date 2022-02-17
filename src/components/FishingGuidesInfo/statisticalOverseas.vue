<template>
  <div class="Overseas">
    <el-row class="title"> 入渔费用（境外渔业资源使用费）情况统计表 </el-row>

    <el-row class="titleRow">
      <el-col :span="2"> 序号 </el-col>
      <el-col :span="3"> 费用项目（FFA注册/捕鱼执照) </el-col>
      <el-col :span="2"> 船名号 </el-col>

      <el-col :span="2"> 生产作业区域 </el-col>

      <el-col :span="4">
        <p class="flexTitleOne">证书有效期</p>
        <p class="flexTitleTwo">
          <span>开始时间</span>
          <span style="border-left: 1px solid #ccc">结束时间</span>
        </p>
      </el-col>

      <el-col :span="2" style="line-height: 50px">
        已支付境外渔业资源使用费金额
      </el-col>
      <el-col :span="2"> 汇率 </el-col>
      <el-col :span="3"> 折合人民币金额（元） </el-col>
      <el-col :span="4"> 备注 </el-col>
    </el-row>

    <el-row class="dataRow" v-for="(item, index) in oceanCostList" :key="index">
      <el-col :span="2">
        {{ index + 1 }}
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="item.cost_project"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.ship_number"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="2">
        <el-input
          v-model="item.work_place"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="2">
        <el-input
          v-model="item.cfce_startime"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.cfce_endtime"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="2">
        <el-input
          v-model="item.outlds_fish_cost"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.change_rate"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="item.rmb" :disabled="isDisabledData"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="item.remarks" :disabled="isDisabledData"></el-input>
      </el-col>
    </el-row>

    <el-row class="dataRow">
      <el-col :span="13"> 合计 </el-col>
      <el-col :span="2">
        <p style="padding: 0 15px; float: left">{{ alloutlds_fish_cost }}</p>
      </el-col>
      <el-col :span="2"> </el-col>
      <el-col :span="3">
        <p style="padding: 0 15px; float: left">{{ all_rmb }}</p>
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
    oceanCostList: {
      get() {
        return this.Fishing.OceanParam.oceanCostList;
      },
      set(val) {
        this.oceanCostList = val;
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
    alloutlds_fish_cost: {
      get() {
        let sum = 0;
        for (let item of this.oceanCostList) {
          sum += item.outlds_fish_cost * 1;
        }
        return sum;
      },
      set(val) {
        this.alloutlds_fish_cost = val;
      },
    },
    all_rmb: {
      get() {
        let sum = 0;
        for (let item of this.oceanCostList) {
          sum += item.rmb * 1;
        }
        return sum;
      },
      set(val) {
        this.all_rmb = val;
      },
    },
  },
  methods: {
    handleAddHtml() {
      let data = {
        cost_project: "", //费用项目（FFA注册/捕鱼执照)
        ship_number: "", //船名号
        work_place: "", //生产作业区域
        cfce_startime: "", //证书有效开始时间
        cfce_endtime: "", //证书有效结束时间
        outlds_fish_cost: "", //已支付境外渔业资源使用费金额
        //alloutlds_fish_cost: "",//已支付境外渔业资源使用费金额 --总计
        change_rate: "", //汇率
        rmb: "", //折合人民币金额（元）
        //all_rmb: "",//折合人民币金额（元）--总计
        remarks: "", //备注
      };
      this.oceanCostList.push(data);
    },
    handleDeleteHtml() {
      let len = this.oceanCostList.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.oceanCostList.splice(len - 1, 1);
      }
    },
  },
  watch: {
    oceanCostList: {
      handler(val) {
        for (let item of val) {
          item["task_id"] = this.Fishing.userTaskId;
          //item.creator = this.Modern.userName;
          item["alloutlds_fish_cost"] = this.alloutlds_fish_cost;
          item["all_rmb"] = this.all_rmb;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.Overseas .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
.Overseas .el-row {
  text-align: center;
  /* padding: 8px; */
}

.Overseas .titleRow {
  height: 100px;
  border: 1px solid #ccc;
  border-top: none;
}
.Overseas .titleRow .el-col {
  height: 100px;

  text-align: center;
  line-height: 100px;
  border-right: 1px solid #ccc;
}
.Overseas .flexTitleOne {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.Overseas .flexTitleTwo {
  height: 50px;
  line-height: 50px;
  display: flex;
}
.Overseas .flexTitleTwo span {
  flex: 1;
  height: 50px;
  line-height: 50px;
}
.Overseas .dataRow {
  height: 50px;
  border: 1px solid #ccc;
  border-top: none;
}
.Overseas .dataRow .el-col {
  /* box-sizing: border-box; */
  height: 50px;

  text-align: center;
  line-height: 50px;
  border-right: 1px solid #ccc;
}
.Overseas .el-input__inner {
  margin-top: 5px;
  border: none;
}
</style>
