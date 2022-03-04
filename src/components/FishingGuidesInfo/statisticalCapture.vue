<template>
  <div class="Capture">
    <el-row class="title"> 自捕远洋海产品回运量情况统计表 </el-row>

    <el-row class="titleRow">
      <el-col :span="2"> 序号 </el-col>
      <el-col :span="2"> 生产船名号 </el-col>

      <el-col :span="20">
        <p class="flexTitleOne">自捕水产品入境情况</p>
        <el-row>
          <el-col :span="12">
            <p class="flexTitleOne">海关申报情况</p>
            <p class="flexTitleTwo">
              <span>免税证明单号</span>
              <span>报关单海关编号</span>
              <span>品种</span>
              <span>口岸</span>
              <span>数量（kg）</span>
            </p>
          </el-col>

          <el-col :span="12">
            <p class="flexTitleOne">农业农村部申报情况</p>
            <p class="flexTitleTwo">
              <span>申报单编号</span>
              <span>填报时间</span>
              <span>确认批准文号</span>
              <span>确认批文发布时间</span>
              <span>品种</span>
              <span>数量（kg）</span>
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="dataRow" v-for="(item, index) in oceanVolumes" :key="index">
      <el-col :span="2">
        {{ index + 1 }}
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.prdon_ship_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.eption_id"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="2">
        <el-input v-model="item.deatn_id" :disabled="isDisabledData"></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.customs_varieties"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-input
          v-model="item.customs_port"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="2">
        <el-input
          v-model="item.customs_number"
          :disabled="isDisabledData"
        ></el-input>
      </el-col>

      <el-col :span="10">
        <el-row>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_id"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_editime"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_confirm"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_pushtime"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_varieties"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="item.cyse_number"
              :disabled="isDisabledData"
            ></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="dataRow">
      <el-col :span="12"> 合计 </el-col>
      <el-col :span="2">
        <p style="padding: 0 15px; float: left">{{ all_customs_number }}</p>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-col :span="20"></el-col>
          <el-col :span="4">
            <p style="padding: 0 15px; float: left">{{ all_cyse_number }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml" class="">删除一条</el-button>
    </div>
  </div>
</template>

<script>
// prdon_ship_id: "",//生产船名号
// eption_id: "",//海关申报情况:免税证明单号
// deatn_id: "",//海关申报情况:报关单海关编号
// customs_varieties: "",//海关申报情况:品种
// customs_port: "",//海关申报情况:口岸
// customs_number: "",//海关申报情况:数量（kg）
// //all_customs_number: "",//
// cyse_id: "",//农业农村部申报情况:申报单编号
// cyse_editime: "",//农业农村部申报情况:填报时间
// cyse_confirm: "",//农业农村部申报情况:确认批准文号
// cyse_pushtime: "",//农业农村部申报情况:确认批文发布时间
// cyse_varieties: "",//农业农村部申报情况:品种
// cyse_number: "",//农业农村部申报情况:数量（kg）
// //all_cyse_number: "",//农业农村部申报情况:数量（kg）--总计
import { mapState } from "vuex";
export default {
  data() {
    return {
      subsidy: "",
    };
  },
  computed: {
    ...mapState(["Fishing"]),
    oceanVolumes: {
      get() {
        return this.Fishing.OceanParam.oceanVolumes;
      },
      set(val) {
        this.oceanVolumes = val;
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
    all_customs_number() {
      return this.oceanVolumes.reduce((sum, item) => {
        return sum + +item.customs_number;
      }, 0);
    },
    all_cyse_number() {
      return this.oceanVolumes.reduce((sum, item) => {
        return sum + +item.cyse_number;
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
      this.oceanVolumes.push(data);
    },
    handleDeleteHtml() {
      let len = this.oceanVolumes.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.oceanVolumes.splice(len - 1, 1);
      }
    },
  },
  watch: {
    oceanVolumes: {
      handler(val) {
        for (let item of val) {
          item["task_id"] = this.Fishing.userTaskId;
          //item.creator = this.Modern.userName;
          item["all_customs_number"] = this.all_customs_number;
          item["all_cyse_number"] = this.all_cyse_number;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
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
  border-left: 1px solid #ccc;
  line-height: 33px;
}
.Capture .dataRow {
  height: 50px;
  border: 1px solid #ccc;
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
