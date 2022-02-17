<template>
  <div class="main_contain">
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
          <el-option label="用户id" value="用户id" />
          <el-option label="用户姓名" value="用户姓名" />
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

    <!-- 添加用户对话框 -->
    <el-dialog
      :visible.sync="createDialogFormVisible"
      title="添加用户"
      width="45%"
    >
      <el-form
        ref="createForm"
        :model="createForm"
        :rules="createRules"
        label-width="130px"
      >
        <el-form-item label="用户id：" prop="user_id">
          <el-input v-model="createForm.user_id" placeholder="请输入用户id" />
        </el-form-item>
        <el-form-item label="用户姓名：" prop="user_name">
          <el-input
            v-model="createForm.user_name"
            auto-complete="off"
            placeholder="请输入用户姓名"
          />
        </el-form-item>
        <el-form-item label="证件类型：" prop="idcardtype">
          <el-select
            v-model="createForm.idcardtype"
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option label="身份证" value="身份证" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码：" prop="idcardnumber">
          <el-input
            v-model="createForm.idcardnumber"
            auto-complete="off"
            placeholder="请输入证件号码"
          />
        </el-form-item>
        <el-form-item label="用户类型：" prop="usertype">
          <el-select
            v-model="createForm.usertype"
            placeholder="请选择用户类型："
            style="width: 100%"
          >
            <el-option label="个人" value="个人" />
            <el-option label="法人" value="法人" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录用户类型：" prop="user_login_type">
          <el-select
            v-model="createForm.user_login_type"
            placeholder="请选择登录用户类型"
            style="width: 100%"
          >
            <el-option label="法人" value="法人" />
            <el-option label="经办人" value="经办人" />
            <el-option label="自然人" value="自然人" />
          </el-select>
        </el-form-item>
        <el-form-item label="角色：" prop="roles">
          <el-select
            v-model="createForm.roles"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="管理员" value="管理员" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancelUser">取 消</el-button>
        <el-button type="primary" @click="handleAddUser">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑用户对话框 -->
    <el-dialog
      :visible.sync="editDialogFormVisible"
      title="编辑用户"
      width="45%"
    >
      <el-form
        ref="eidtForm"
        :model="eidtForm"
        :rules="eidtRules"
        label-width="130px"
      >
        <el-form-item label="用户id：" prop="user_id">
          <el-input v-model="eidtForm.user_id" placeholder="请输入用户id" />
        </el-form-item>
        <el-form-item label="用户姓名：" prop="user_name">
          <el-input
            v-model="eidtForm.user_name"
            auto-complete="off"
            placeholder="请输入用户姓名"
          />
        </el-form-item>
        <el-form-item label="证件类型：" prop="idcardtype">
          <el-select
            v-model="eidtForm.idcardtype"
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option label="身份证" value="身份证" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码：" prop="idcardnumber">
          <el-input
            v-model="eidtForm.idcardnumber"
            auto-complete="off"
            placeholder="请输入证件号码"
          />
        </el-form-item>
        <el-form-item label="用户类型：" prop="usertype">
          <el-select
            v-model="eidtForm.usertype"
            placeholder="请选择用户类型："
            style="width: 100%"
          >
            <el-option label="个人" value="个人" />
            <el-option label="法人" value="法人" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录用户类型：" prop="user_login_type">
          <el-select
            v-model="eidtForm.user_login_type"
            placeholder="请选择登录用户类型"
            style="width: 100%"
          >
            <el-option label="法人" value="法人" />
            <el-option label="经办人" value="经办人" />
            <el-option label="自然人" value="自然人" />
          </el-select>
        </el-form-item>
        <el-form-item label="角色：" prop="roles">
          <el-select
            v-model="eidtForm.roles"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="管理员" value="管理员" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUserList,
  createUser,
  deleteUser,
  updateUser,
} from "@/api/Agricul/user";
import Pagination from "@/components/Pagination/index.vue";
export default {
  components: { Pagination },
  data() {
    return {
      createDialogFormVisible: false,
      editDialogFormVisible: false,
      searchOption: {
        clause: "用户id",
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
        user_id: "",
        user_name: "",
        idcardtype: "",
        idcardnumber: "",
        usertype: "",
        user_login_type: "",
        roles: "",
      },
      createRules: {
        user_id: [{ required: true, message: "请输入用户id", trigger: "blur" }],
        user_name: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
        ],
        idcardtype: [
          { required: true, message: "请选择证件类型", trigger: "blur" },
        ],
        idcardnumber: [
          { required: true, message: "请输入证件号码", trigger: "blur" },
        ],
        usertype: [
          { required: true, message: "请选择用户类型", trigger: "blur" },
        ],
        user_login_type: [
          { required: true, message: "请选择登录用户类型", trigger: "blur" },
        ],
        roles: [{ required: true, message: "请选择角色", trigger: "blur" }],
      },
      eidtForm: {
        user_id: "",
        user_name: "",
        idcardtype: "",
        idcardnumber: "",
        usertype: "",
        user_login_type: "",
        roles: "",
      },
      eidtRules: {
        user_id: [{ required: true, message: "请输入用户id", trigger: "blur" }],
        user_name: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
        ],
        idcardtype: [
          { required: true, message: "请选择证件类型", trigger: "blur" },
        ],
        idcardnumber: [
          { required: true, message: "请输入证件号码", trigger: "blur" },
        ],
        usertype: [
          { required: true, message: "请选择用户类型", trigger: "blur" },
        ],
        user_login_type: [
          { required: true, message: "请选择登录用户类型", trigger: "blur" },
        ],
        roles: [{ required: true, message: "请选择角色", trigger: "blur" }],
      },
    };
  },
  watch: {},
  mounted() {
    this.getUserList({ page: 1, limit: 10 });
  },
  methods: {
    onBtnEditClick(index, row) {
      this.editDialogFormVisible = true;
      this.eidtForm = JSON.parse(JSON.stringify(row));
    },
    //编辑确定按钮
    handleEditUser() {
      this.$refs["eidtForm"].validate((valid) => {
        if (valid) {
          updateUser(this.eidtForm.id, this.eidtForm).then((res) => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: "编辑成功",
              });
            }
            this.editDialogFormVisible = false;
            this.getUserList();
          });
        }
      });
    },
    //添加用户按钮
    onCreateUserClick() {
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
            if (res.data.code == 200) {
              this.$message({
                message: "创建成功",
                type: "success",
              });
              this.createDialogFormVisible = false;
              this.$refs.createForm.resetFields();
              this.getUserList(); //刷新列表数据
            }
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
      getUserList(params).then((res) => {
        console.log(res.data.data, "获取数据------");
        if (res.data.code == 200) {
          this.tableData = res.data.data;
          this.listQuery2.total = res.data.cnt;
        }
      });
    },
    //删除
    onBtnDeleteClick(index, row) {
      this.$confirm("删除操作不可逆，是否确定?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 删除
          deleteUser(row.id).then((response) => {
            if (response.data.code === 200) {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.getUserList(); //刷新
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
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
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
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
