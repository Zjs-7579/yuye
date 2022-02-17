<template>
  <div class="Admin_main_contain">
    <el-row class="search-container" style="padding: 8px">
      <el-button
        type="primary"
        size="small"
        style="float: left"
        round
        @click="onCreateUserClick"
        >添加用户</el-button
      >

      <el-input
        v-model="text"
        placeholder="请输入查询内容"
        size="small"
        style="float: right; margin-right: 10px; width: 400px"
      >
        <el-select
          slot="prepend"
          v-model="clause"
          style="width: 120px"
          placeholder="请选择"
        >
          <el-option label="用户id" value="user_id" />
          <el-option label="用户姓名" value="user_name" />
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="onSearchUserClick"
        />
      </el-input>
    </el-row>
    <el-row class="tableBox">
      <el-table
        ref="tableData"
        :data="tableData"
        border
        height="100%"
        :header-cell-style="{ backgroundColor: '#3a71a8', color: '#fff' }"
        size="small"
        class="tableStyle"
      >
        <el-table-column
          prop="user_id"
          label="用户id"
          align="center"
          width="150"
        />
        <el-table-column
          prop="user_name"
          label="用户姓名"
          width="150"
          align="center"
        />
        <el-table-column
          prop="roles"
          label="角色"
          min-width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="idcardtype"
          label="证件类型"
          width="150"
          align="center"
        />
        <el-table-column
          label="证件号码"
          align="center"
          prop="idcardnumber"
        ></el-table-column>
        <el-table-column
          label="用户类型"
          align="center"
          prop="usertype"
        ></el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="150"
          align="center"
        />
        <el-table-column
          prop="update_time"
          label="修改时间"
          width="150"
          align="center"
        />
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="onBtnEditClick(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="onBtnDeleteClick(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!-- 添加用户对话框 -->

    <AdminUserCreate
      :userSwitch="userSwitch"
      @userDataSwitch="userDataSwitch"
    ></AdminUserCreate>

    <!-- 编辑用户对话框 -->

    <AdminUserEdit
      :userData="userData"
      :editSwitch="editSwitch"
      @editDataSwitch="editDataSwitch"
    ></AdminUserEdit>

    <el-row>
      <Pagination :cnt="cnt" @dataList="list"></Pagination>
    </el-row>
  </div>
</template>

<script>
import { getUserList, deleteUser } from "../../api/Admin/user";

import AdminUserCreate from "./adminUserCreate.vue";
import AdminUserEdit from "./adminUserEdit.vue";
import Pagination from "./pagination.vue";
export default {
  components: { AdminUserCreate, AdminUserEdit, Pagination },
  data() {
    return {
      userSwitch: false,
      editSwitch: false,
      //用户数据列表
      tableData: [],
      //选择查询
      clause: "user_id",
      //查询条件
      text: "",
      //用户数据
      cnt: "",
      userData: {
        idx: 0,
        row: {},
      },
      oldUserData: {},
    };
  },
  methods: {
    list(val) {
      this.taskList = val;
    },
    userDataSwitch(val) {
      this.userSwitch = val;
    },
    editDataSwitch(val) {
      this.editSwitch = val;
      if (!val) {
        this.$set(this.tableData, this.userData.idx, this.oldUserData);
      }
    },
    //创建用户
    onCreateUserClick() {
      this.userSwitch = true;
    },
    //查询用户
    onSearchUserClick() {
      let params = {
        page: 1,
        limit: 10,
        [this.clause]: this.text,
      };
      getUserList(params).then((res) => {
        this.tableData = res.data.data;
      });
    },
    //编辑用户
    onBtnEditClick(index, row) {
      this.userData["idx"] = index;
      this.userData["row"] = row;
      this.oldUserData = Object.assign({}, this.userData.row);
      this.editSwitch = true;
    },
    //删除用户
    onBtnDeleteClick(index, row) {
      console.log(index, row);
      deleteUser(row.id).then((res) => {
        this.tableData.splice(index, 1);
      });
    },
  },
  mounted() {
    let params = {
      page: 1,
      limit: 10,
    };
    getUserList(params).then((res) => {
      this.cnt = res.data.cnt;
      this.tableData = res.data.data;
    });
  },
};
</script>
<style>
.Admin_main_contain {
  width: 100%;
  height: 100vh;
  background: #fff;
}
.Admin_main_contain .tableBox {
  padding: 5px;
  height: calc(100% - 170px);
}
.Admin_main_contain .search-container {
  height: 45px;
  padding: 4px;
  background-color: white;
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow: hidden;
}
</style>
