<template>
  <div>
    <el-dialog
      :visible.sync="editDialogFormVisible"
      title="编辑用户"
      width="45%"
      :before-close="handleClose"
    >
      <el-form
        ref="editFrom"
        :model="tableData"
        :rules="editRules"
        label-width="130px"
      >
        <el-form-item label="用户id：" prop="user_id">
          <el-input v-model="tableData.user_id" placeholder="请输入用户id" />
        </el-form-item>
        <el-form-item label="用户姓名：" prop="user_name">
          <el-input
            v-model="tableData.user_name"
            auto-complete="off"
            placeholder="请输入用户姓名"
          />
        </el-form-item>
        <el-form-item label="证件类型：" prop="idcardtype">
          <el-select
            v-model="tableData.idcardtype"
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option label="身份证" value="身份证" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码：" prop="idcardnumber">
          <el-input
            v-model="tableData.idcardnumber"
            auto-complete="off"
            placeholder="请输入证件号码"
          />
        </el-form-item>
        <el-form-item label="用户类型：" prop="usertype">
          <el-select
            v-model="tableData.usertype"
            placeholder="请选择用户类型："
            style="width: 100%"
          >
            <el-option label="个人" value="个人" />
            <el-option label="法人" value="法人" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录用户类型：" prop="user_login_type">
          <el-select
            v-model="tableData.user_login_type"
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
            v-model="tableData.roles"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="管理员" value="管理员" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleEditUserClose">取 消</el-button>
        <el-button type="primary" @click="handleEditUserSubmit"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateUser } from "../../api/Admin/user";
export default {
  props: ["userData", "editSwitch"],
  data() {
    return {
      oldUserData: {},
      editRules: {
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
  computed: {
    editDialogFormVisible: {
      get() {
        return this.editSwitch;
      },
      set(val) {
        this.editDialogFormVisible = val;
      },
    },
    tableData: {
      get() {
        return this.userData.row;
      },
      set(val) {
        this.tableData = val;
      },
    },
  },
  methods: {
    //编辑用户确认
    handleEditUserSubmit() {
      console.log(this.userData);
      // updateUser(id, data)
      this.$refs.editFrom.validate((b) => {
        if (b) {
          updateUser(this.userData.row.id, this.userData.row).then((res) => {
            this.$message({
              message: "更新成功",
              type: "success",
            });
            this.$emit("editDataSwitch", false);
          });
        }
      });
    },
    //编辑用户取消
    handleEditUserClose() {
      this.$emit("editDataSwitch", false);

      //console.log(this.oldUserData)
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.$emit("editDataSwitch", false);
          done();
        })
        .catch((_) => {});
    },
  },
  mounted() {
    console.log(this.userData);
  },
};
</script>

<style></style>
