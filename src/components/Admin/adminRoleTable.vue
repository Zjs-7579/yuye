<template>
  <div class="Admin_main_contain">
    <el-row class="search-container" style="padding: 8px">
      <el-button
        type="primary"
        size="small"
        style="float: left"
        round
        @click="handleCreateOrgClick"
        >创建角色</el-button
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
          <el-option label="角色名称" value="roleName" />
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
        :header-cell-style="{ backgroundColor: '#3a71a8', color: '#fff' }"
        border
        fit
        size="small"
        class="tableStyle"
      >
        <!-- <el-table-column
          prop="user_id"
          label="角色用户"
          align="center"
          width="150"
        /> -->
        <el-table-column
          prop="roleName"
          label="角色名称"
          width="180"
          align="center"
        />
        <el-table-column
          prop="roleDesc"
          label="角色描述"
          min-width="100"
          align="center"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="idcardtype"
          label="角色描述"
          min-width="200"
          align="center"
        /> -->
        <el-table-column
          label="创建人"
          align="center"
          width="180"
          prop="creator"
        ></el-table-column>
        <el-table-column
          prop="createDate"
          label="创建时间"
          width="190"
          align="center"
        />
        <!-- <el-table-column
          prop="create_time"
          label="修改时间"
          width="190"
          align="center"
        /> -->
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleBtnAuthorityClick(scope.$index, scope.row)"
            >
              权限设置
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleBtnDeleteClick(scope.row)"
            >
              <!-- scope.$index, scope.row -->
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!-- 创建角色对话框 -->

    <AdminRoleCreate
      :userSwitch="userSwitch"
      @userDataSwitch="userDataSwitch"
    ></AdminRoleCreate>

    <!-- 权限设置对话框 -->

    <AdminRolePower
      :powerSwitch="powerSwitch"
      @powerDataSwitch="powerDataSwitch"
    ></AdminRolePower>

    <el-row>
      <Pagination :cnt="cnt" @dataList="list"></Pagination>
    </el-row>
  </div>
</template>

<script>
import AdminRoleCreate from "./adminRoleCreate.vue";
import AdminRolePower from "./adminRolePower.vue";
import Pagination from "./pagination.vue";
import { getAdminList, getRoleCheck, delAuth } from "../../api/Admin/role";
export default {
  data() {
    return {
      tableData: [],
      userSwitch: false,
      powerSwitch: {
        powerBool: false,
        data: [],
        row: {},
      },
      text: "",
      clause: "",
      cnt: "",
    };
  },
  components: {
    AdminRoleCreate,
    AdminRolePower,
    Pagination,
  },
  methods: {
    list(val) {
      this.tableData = val;
    },
    handleCreateOrgClick() {
      this.userSwitch = true;
    },
    userDataSwitch(val) {
      this.userSwitch = val;
    },
    powerDataSwitch(val) {
      this.powerSwitch.powerBool = val;
    },

    handleBtnAuthorityClick(index, row) {
      //console.log(row)
      this.powerSwitch.powerBool = true;
      this.powerSwitch.row = row;
      getRoleCheck({ role: row.roleName }).then((res) => {
        this.powerSwitch.data = res.data.data.visit;
      });
      //console.log(this.powerSwitch)
    },

    handleBtnDeleteClick(index, row) {
      delAuth(row.roleId).then((res) => {
        this.$message({
          message: "角色删除成功",
          type: "success",
        });
      });
      this.tableData.splice(index, 1);
    },
    onSearchUserClick() {
      let params = {
        page: 1,
        limit: 10,
        [this.clause]: this.text,
      };
      getAdminList(params).then((res) => {
        this.cnt = res.data.cnt;
        this.tableData = res.data.data;
      });
    },
  },
  mounted() {
    let params = {
      page: 1,
      limit: 10,
    };
    getAdminList(params).then((res) => {
      console.log(res);
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
