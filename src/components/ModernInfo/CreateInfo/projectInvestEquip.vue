<template>
  <div class="MoEquip">
    <el-row class="title asterisk"> 主要设备清单 </el-row>
    <el-row class="titleRow">
      <el-col :span="2">序号</el-col>
      <el-col :span="4">设备名称</el-col>
      <el-col :span="4">规格型号</el-col>
      <el-col :span="4">数量/单位</el-col>
      <el-col :span="3">单价</el-col>
      <el-col :span="3">金额合计</el-col>
      <el-col :span="4">设备安装/存放地点</el-col>
    </el-row>

    <el-row
      class="dataRow"
      v-for="(item, index) in modernEquipment"
      :key="index"
    >
      <el-col :span="2" style="text-align: center">
        {{ index + 1 }}
      </el-col>
      <el-col :span="4">
        <el-input
          :disabled="isDisabledData"
          v-model="item.equipment_name"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          :disabled="isDisabledData"
          v-model="item.specifications"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-input :disabled="isDisabledData" v-model="item.quantity"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input :disabled="isDisabledData" v-model="item.price"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input :disabled="true" v-model="item.amount"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          :disabled="isDisabledData"
          v-model="item.storage_loc"
        ></el-input>
      </el-col>
    </el-row>

    <el-row class="titleRow">
      <el-col :span="10">合计</el-col>
      <el-col :span="4" style="text-align: left; text-indent: 1em">{{
        total_quantity
      }}</el-col>
      <el-col :span="3" style="text-align: left; text-indent: 1em">{{
        total_price
      }}</el-col>
      <el-col :span="3" style="text-align: left; text-indent: 1em">{{
        total_amount
      }}</el-col>
      <el-col :span="4"></el-col>
    </el-row>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["Modern"]),
    modernEquipment: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Modern.ModernData.modernEquipment[0].task_id =
          this.Modern.userTaskId;
        //this.Modern.ModernData.modernEquipment[0].creator = this.Modern.userName
        return this.Modern.ModernData.modernEquipment;
      },
      set(val) {
        this.modernEquipment = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Modern.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
    total_quantity: {
      get() {
        let sum = 0;
        for (let i of this.modernEquipment) {
          sum += i.quantity * 10000;
        }
        return sum / 10000;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
    total_price: {
      get() {
        let sum = 0;
        for (let i of this.modernEquipment) {
          sum += i.price * 1 * 10000;
        }
        return sum / 10000;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
    total_amount: {
      get() {
        let sum = 0;
        for (let i of this.modernEquipment) {
          sum += i.amount * 1 * 10000;
        }
        return sum / 10000;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
  },
  methods: {
    handleAddHtml() {
      let str = {
        //task_id: this.Modern.userTaskId,
        equipment_name: "", //设备名称
        specifications: "", //规格型号
        quantity: "", //数量/单位
        price: "", //单价
        amount: "", //金额合计
        storage_loc: "", //设备安装/存放地点
        //total_quantity: this.total_quantity, //合计-数量/单位
        //total_price: this.total_price, //合计-单价
        //total_amount: this.total_amount, //合计-金额合计
        //creator: this.Modern.userName, //创建人
        //create_time: "", //创建时间
        // modifier: "",//修改人
        // update_time: "",//修改时间
      };
      this.modernEquipment.push(str);
    },
    handleDeleteHtml() {
      let len = this.modernEquipment.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.modernEquipment.splice(len - 1, 1);
      }
    },
  },
  watch: {
    modernEquipment: {
      handler(val) {
        for (let item of val) {
          //console.log('dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',this.Modern.ModernData.modernInvestTotal)
          //item['project_invest'] = this.Modern.ModernData.modernInvestTotal.project_invest
          //item['support'] = this.Modern.ModernData.modernInvestTotal.support

          item["task_id"] = this.Modern.userTaskId;
          //item.creator = this.Modern.userName;
          item["total_quantity"] = this.total_quantity;
          item["total_price"] = this.total_price;
          item["total_amount"] = this.total_amount;
          item.amount = item.quantity * item.price;
          //item['modernInvestTotal'] = this.Modern.ModernData.modernInvestTotal
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.MoEquip .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.MoEquip .titleRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
}
.MoEquip .titleRow .el-col {
  border-right: 1px solid #ccc;
  text-align: center;
}
.MoEquip .dataRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  border-top: none;
}
.MoEquip .dataRow .el-col {
  border-right: 1px solid #ccc;
}
.MoEquip .el-input {
  display: block;
}
.MoEquip .dataRow .el-input__inner {
  width: 100%;
  border: none;
}
.MoEquip .asterisk::before {
  content: "*";
  display: inline-block;
  color: #f56c6c;
  margin-right: 4px;
}
</style>
