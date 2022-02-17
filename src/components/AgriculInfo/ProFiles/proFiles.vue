<template>
  <div>
    <div class="nav">
      <div class="flex">
        <div style="flex: 3">
          <el-button type="primary">创建用户</el-button>
        </div>
        <div style="flex: 1">
          <el-input
            placeholder="请输入内容"
            v-model="search"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <el-table
      height="750"
      max-height="750"
      :data="tableData"
      style="width: 98%; margin: 0 auto"
      :header-cell-style="{
        backgroundColor: '#3a71a8',
        textAlign: 'center',
        color: '#fff',
      }"
      :cell-style="{ textAlign: 'center' }"
      border
    >
      <el-table-column label="用户ID" prop="task_name"> </el-table-column>
      <el-table-column label="用户姓名" prop="unit_address"> </el-table-column>
      <el-table-column label="角色" prop="project_address"> </el-table-column>
      <el-table-column label="证件类型" prop="project_Leader">
      </el-table-column>
      <el-table-column label="证件号" prop="phone"> </el-table-column>
      <el-table-column label="用户类型" prop="create_time"> </el-table-column>
      <el-table-column label="创建时间" prop="status"> </el-table-column>
      <el-table-column label="修改时间" prop="statuss"> </el-table-column>
      <el-table-column align="right" label="操作">
        <!-- eslint-disable-next-line -->

        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { searchEnterInfo } from "../../../api/Agricul/searchEnter";
//import axios from "axios"
export default {
  data() {
    return {
      select: "",
      tableData: [],
      search: "",
      //当前页
      currentPage: 1,
      //总数
      total: 10,
      //每页显示数
      pageSize: 10,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    dataHandel(res) {
      //console.log(res)
      this.tableData = res.data.data;
      this.total = res.data.cnt;
    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
      this.pageSize = val;
      searchEnterInfo(this.currentPage, this.pageSize).then((res) => {
        this.dataHandel(res);
      });
    },
    handleCurrentChange(val) {
      searchEnterInfo(val, 10).then((res) => {
        this.dataHandel(res);
      });
    },
  },
  mounted() {
    searchEnterInfo(1, 10).then((res) => {
      this.dataHandel(res);
    });
  },
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.nav {
  width: 98%;
  margin: 0 auto;
}
.title {
  padding: 15px 0;
  font-size: 20px;
}
.flex {
  display: flex;
  margin: 10px 0;
}
.block {
  width: 100%;
  text-align: center;
}
</style>
