<template>
  <div class="Moequip">
    <el-row class="title"> 主要设备清单 </el-row>
    <el-row class="titleRow">
      <el-col :span="2">序号</el-col>
      <el-col :span="4">设备名称</el-col>
      <el-col :span="4">规格型号</el-col>
      <el-col :span="4">数量/单位</el-col>
      <el-col :span="3">单价</el-col>
      <el-col :span="3">金额合计</el-col>
      <el-col :span="4">设备安装/存放地点</el-col>
    </el-row>

    <el-row class="dataRow" v-for="(item, index) in equipMainFrom" :key="index">
      <el-col :span="2" style="text-align: center">
        {{ index + 1 }}
      </el-col>
      <el-col :span="4">
        <el-input v-model="item.equipment_name" disabled></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="item.specifications" disabled></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="item.quantity" disabled></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="item.price" disabled></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="item.amount" disabled></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="item.storage_loc" disabled></el-input>
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

    <el-button type="primary" class="add" @click="addHTML">添加一条</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipMainFrom: [
        {
          // task_id: "",
          equipment_name: "", //设备名称
          specifications: "", //规格型号
          quantity: "", //数量/单位
          price: "", //单价
          amount: "", //金额合计
          storage_loc: "", //设备安装/存放地点
          total_quantity: "", //合计-数量/单位
          total_price: "", //合计-单价
          total_amount: "", //合计-金额合计
          creator: "", //创建人
          create_time: "", //创建时间
          // modifier: "",//修改人
          // update_time: "",//修改时间
        },
      ],
    };
  },
  computed: {
    total_quantity: {
      get() {
        let sum = 0;
        for (let i of this.equipMainFrom) {
          sum += i.quantity * 1;
        }
        return sum;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
    total_price: {
      get() {
        let sum = 0;
        for (let i of this.equipMainFrom) {
          sum += i.price * 1;
        }
        return sum;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
    total_amount: {
      get() {
        let sum = 0;
        for (let i of this.equipMainFrom) {
          sum += i.amount * 1;
        }
        return sum;
      },
      set(val) {
        this.total_quantity = val;
      },
    },
  },
  methods: {
    addHTML() {
      let str = {
        // task_id: "",
        equipment_name: "", //设备名称
        specifications: "", //规格型号
        quantity: "", //数量/单位
        price: "", //单价
        amount: "", //金额合计
        storage_loc: "", //设备安装/存放地点
        total_quantity: "", //合计-数量/单位
        total_price: "", //合计-单价
        total_amount: "", //合计-金额合计
        creator: "", //创建人
        create_time: "", //创建时间
        // modifier: "",//修改人
        // update_time: "",//修改时间
      };
      this.equipMainFrom.push(str);
    },
  },
};
</script>

<style>
.Moequip .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.Moequip .titleRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
}
.Moequip .titleRow .el-col {
  border-right: 1px solid #ccc;
  text-align: center;
}
.Moequip .dataRow {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  border-top: none;
}
.Moequip .dataRow .el-col {
  border-right: 1px solid #ccc;
}
.Moequip .el-input {
  display: block;
}
.Moequip .dataRow .el-input__inner {
  width: 80%;
  border: none;
}
</style>
