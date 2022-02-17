<template>
  <div class="MoTabel">
    <el-row class="title"> 公司股权结构 </el-row>
    <table cellspacing="0">
      <thead>
        <tr>
          <th>主要股东名称(前5位)</th>
          <th>出资金额(万元)</th>
          <th>出资方式</th>
          <th>所占比例（%）</th>
        </tr>
      </thead>
      <tbody ref="tbody">
        <tr v-for="(item, index) in modernShareholders" :key="index">
          <th><input type="text" v-model="item.shareholder" disabled /></th>
          <th><input type="text" v-model="item.amount" disabled /></th>
          <th><input type="text" v-model="item.payer_type" disabled /></th>
          <th>
            <input type="text" v-model="item.share_proportion" disabled />
          </th>
        </tr>
        <!-- <tr>
                <th>1</th>
                <th> <input type="text" v-model="dateForm.Form1.shareholder"> </th>
                <th> <input type="text" v-model="dateForm.Form1.amount"> </th>
                <th> <input type="text" v-model="dateForm.Form1.share_proportion"> </th>
            </tr>
            <tr>
                <th>2</th>
                <th> <input type="text" v-model="dateForm.Form2.shareholder"> </th>
                <th> <input type="text" v-model="dateForm.Form2.amount"> </th>
                <th> <input type="text" v-model="dateForm.Form2.share_proportion"> </th>
            </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // dateForm:[
      //     {
      //         shareholder: "", //主要股东名称
      //         amount: "", //出资金额
      //         payer_type: "",//出资方式
      //         share_proportion: "", //股份比例(%)
      //     }
      // ]
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernShareholders: {
      get() {
        return this.Modern.ModernData.modernShareholders;
      },
      set(val) {
        this.modernShareholders = val;
      },
    },
  },

  methods: {
    addHTML() {
      if (this.modernShareholders.length == 5) {
        this.$message({
          message: "最多添加5条信息",
          type: "warning",
        });
      } else {
        let str = {
          shareholder: "", //主要股东名称
          amount: "", //出资金额
          payer_type: "", //出资方式
          share_proportion: "", //股份比例(%)
        };

        //this.$store.commit('MODE_dataAddForm', str)

        this.modernShareholders.push(str);
      }
    },
  },
  //     watch:{
  //     dateForm:{
  //       handler(val){
  //         this.$emit('myPersonShareInfo', val)
  //       },
  //       deep: true
  //     }

  //   }
};
</script>

<style>
.MoTabel input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 80%;
}
.MoTabel table {
  width: 100%;
  color: #606266;
}
.MoTabel .title {
  border: 1px solid #ccc;
}
.MoTabel tr {
  height: 60px;
  line-height: 40px;
  margin: 5px 0;
}
/* .Tabel thead{
    background-color: #ece8e8;
} */
.MoTabel thead tr th {
  border: 1px solid #ccc;
  border-right: none;
}
.MoTabel tbody tr th {
  border: 1px solid #ccc;
  border-right: none;
}
.MoTabel input {
  border: none;
}
.add {
  display: block;
  margin: 10px auto;
}
</style>
