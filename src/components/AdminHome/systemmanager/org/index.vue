<template>
  <div class="main_contain">
    <el-row class="search-container" style="padding: 8px">
      <el-button
        type="primary"
        size="small"
        style="float: left"
        round
        @click="onCreateOrgClick"
        >+创建角色</el-button
      >

      <el-input
        v-model="searchOption.text"
        placeholder="请输入查询内容"
        size="small"
        style="float: right; margin-right: 10px; width: 400px"
      >
        <el-select
          slot="prepend"
          v-model="searchOption.clause"
          style="width: 120px"
          placeholder="请选择"
        >
          <el-option label="角色名称" value="角色名称" />
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
        :header-cell-style="changeHeaderStyle"
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
              @click="onBtnAuthorityClick(scope.$index, scope.row)"
            >
              权限设置
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="onBtnDeleteClick(scope.row)"
            >
              <!-- scope.$index, scope.row -->
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 5px">
        <pagination
          :total="listQuery2.total"
          :page.sync="listQuery2.page"
          :limit.sync="listQuery2.limit"
          :page-sizes="listQuery2.pageSizes"
          @pagination="getUserList"
        />
      </el-row>
    </el-row>

    <!-- 创建角色对话框 -->
    <el-dialog
      :visible.sync="createDialogFormVisible"
      title="创建角色"
      width="30%"
    >
      <el-form
        ref="createForm"
        :rules="createRules"
        :model="createForm"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="createForm.roleName" />
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="createForm.roleDesc" type="textarea" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="getchen2">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 权限设置对话框 -->
    <el-dialog
      :visible.sync="createAuthorityVisible"
      title="权限设置"
      width="45%"
      class="roleList"
    >
      <el-tree
        ref="tree"
        :default-checked-keys="visitAuthArray"
        show-checkbox
        node-key="label"
        class="treeDiv"
        @check="onTreeCheckChange"
        :data="roleAuths"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="getchen">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList2, createUser } from "@/api/Agricul/user";
import {
  getAuthorityRoleId,
  getRoleCheck,
  getRoleCheck2,
  editauth,
  newauth,
  delauth,
} from "@/api/Agricul/role";
import Pagination from "@/components/Pagination/index.vue";
export default {
  components: { Pagination },
  data() {
    return {
      roleName: "",
      roleAuths: [],
      createDialogFormVisible: false,
      createAuthorityVisible: false,
      searchOption: {
        clause: "角色名称",
        text: "",
      },
      tableData: [],
      listQuery2: {
        page: 1,
        limit: 10,
        total: 0,
        pageSizes: [10, 20, 30],
      },
      createForm: {
        // user_id: "",
        // user_name: "",
        // idcardtype: "",
        // idcardnumber: "",
        // usertype: "",
        // user_login_type: "",
        // roles: "",
        roleName: "",
        roleDesc: "",
      },
      createRules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
        ],
      },
      visitAuthArray: [],
      roleId: "",
      selectedThree: [],
    };
  },
  mounted() {
    this.getUserList({ page: 1, limit: 10 });
  },
  methods: {
    currentChange(p1, p2) {
      console.log(p1, p2, "currentChange");
    },
    onBtnDeleteClick(e) {
      this.$confirm(`确认删除角色${e.roleName}`)
        .then((_) => {
          // done();
          delauth(e.roleId).then((res) => {
            if (res.data.code === 200) {
              this.$message({
                message: "角色删除成功",
                type: "success",
              });
              this.getUserList({ page: 1, limit: 10 });
            }
          });
        })
        .catch((_) => {});
    },
    getchen2() {
      this.$refs.createForm.validate((valid) => {
        if (valid) {
          // alert('submit!');
          newauth(this.createForm).then((res) => {
            this.createDialogFormVisible = false;
            this.createForm = {
              roleName: "",
              roleDesc: "",
            };
            this.$message({
              message: "角色创建成功",
              type: "success",
            });
            this.getUserList({ page: 1, limit: 10 });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onTreeCheckChange(p1, p2) {
      console.log(p2, "p222222");
      this.selectedThree = p2.checkedNodes;
      console.log(
        this.$refs.tree.getHalfCheckedKeys(),
        "asdasdasdadsasdasdasdada------asdadsasda"
      );
    },
    getchen() {
      // getthens(this.roleName).then(response=>{
      //   console.log(response)
      //   // this.roleAuths = response.data.data
      // })
      if (this.selectedThree.length < 1) {
        this.$message({
          message: "没有权限变动",
          type: "warning",
        });
        return false;
      }
      // const _1 = JSON.parse(JSON.stringify(this.selectedThree))
      // _1.forEach((e, i) => {
      //   if(e.children) {
      //     this.selectedThree.splice(i, 1)
      //   }
      // })
      console.log(this.selectedThree);
      const _ = [];
      this.selectedThree.forEach((e) => {
        _.push({
          auth_id: e.id,
          role_id: this.roleId,
          checked: 1,
        });
      });
      this.$refs.tree.getHalfCheckedNodes().forEach((e) => {
        console.log(e, "eeeeeeeee---eeeeeeeee");
        _.push({
          auth_id: e.id,
          role_id: this.roleId,
          checked: 1,
        });
      });
      const data = {
        visit: _,
      };
      editauth(this.roleId, data).then((res) => {
        console.log(res, "编辑编辑编辑");
        if (res.data.code === 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.createAuthorityVisible = false;
        }
      });
    },
    // 权限设置取消
    onCancel() {
      this.createAuthorityVisible = false;
    },
    // 权限设置确定
    onSaveRolesAuth() {
      this.createAuthorityVisible = false;
    },
    // 角色权限设置
    onBtnAuthorityClick(index, value) {
      // this.roleName = value.roles
      // this.roleis
      console.log(value, "valuevalue");
      this.roleId = value.roleId;
      // console.log(index,value,123)
      getAuthorityRoleId().then((response) => {
        this.roleAuths = response.data.data;
      });
      const _ = [];
      getRoleCheck2({ role: value.roleName }).then((res) => {
        res.data.data.visit.forEach((e) => {
          if (e.label !== "审核管理" && e.label !== "系统管理") {
            _.push(e.label);
          }
        });
        this.visitAuthArray = _;
      });
      // getRoleCheck({ role: value.roles }).then(response=>{
      //   console.log(response,22222222222)
      // })
      // console.log(index,value)
      this.createAuthorityVisible = true;
    },
    onBtnEditClick(index, row) {
      this.editDialogFormVisible = true;
      this.eidtForm = row;
    },
    handleEditUser() {
      console.log("编辑用户确定按钮-----");
    },
    //添加角色按钮
    onCreateOrgClick() {
      this.createDialogFormVisible = true;
    },
    //添加对话框取消按钮
    handleCancelUser() {
      this.createDialogFormVisible = false;
      this.$refs.createForm.resetFields();
    },
    //添加对话框确定按钮
    handleAddUser() {
      this.$refs["createForm"].validate((valid) => {
        if (valid) {
          createUser(this.createForm).then((res) => {
            if (res.code === 200) {
              this.$message({
                message: "创建成功",
                type: "success",
              });
            }
            this.createDialogFormVisible = false;
          });
        }
      });
    },
    //列表查询按钮
    onSearchUserClick() {
      this.getUserList({ page: 1, limit: 10 });
    },
    getUserList(val) {
      if (val) {
        this.listQuery2.limit = val.limit;
        this.listQuery2.page = val.page;
      }
      const params = {
        page: this.listQuery2.page,
        limit: this.listQuery2.limit,
      };
      if (this.searchOption.text) {
        params.user_id =
          this.searchOption.clause === "用户id" ? this.searchOption.text : null;
        params.user_name =
          this.searchOption.clause === "用户姓名"
            ? this.searchOption.text
            : null;
      }
      getUserList2(params).then((res) => {
        console.log(res.data.data, "获取数据------");
        if (res.data.code == 200) {
          this.tableData = res.data.data;
          this.listQuery2.total = res.data.cnt;
        }
      });
    },
    changeHeaderStyle() {
      return { backgroundColor: "#3a71a8", width: "100%", color: "#FFFFFF" };
    },
  },
};
</script>
<style scoped>
.main_contain {
  height: calc(100vh - 50px);
  background-color: #fff;
}
.tableBox {
  padding: 5px;
  height: calc(100% - 45px);
}
.search-container {
  height: 45px;
  padding: 4px;
  background-color: white;
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow: hidden;
}
.tableStyle {
  width: 100%;
  height: calc(100% - 55px);
}
</style>
