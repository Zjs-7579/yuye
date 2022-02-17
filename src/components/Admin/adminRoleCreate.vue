<template>
  <div>
    <el-dialog
      :visible.sync="createDialogFormVisible"
      title="创建角色"
      width="45%"
      :before-close="handleClose"
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
          <el-input
            v-model="createForm.roleDesc"
            type="textarea"
            rows="5"
            resize="none"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCreateClose">取 消</el-button>
        <el-button type="primary" @click="handleAddUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { newAuth } from "../../api/Admin/role";
export default {
  props: ["userSwitch"],
  data() {
    return {
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
    };
  },
  computed: {
    createDialogFormVisible: {
      get() {
        return this.userSwitch;
      },
      set(val) {
        this.createDialogFormVisible = val;
      },
    },
  },
  methods: {
    handleCreateClose() {
      this.createForm.roleName = "";
      this.createForm.roleDesc = "";
      this.$emit("userDataSwitch", false);
    },
    handleAddUser() {
      this.$refs.createForm.validate((b) => {
        if (b) {
          newAuth(this.createForm).then((res) => {
            this.$message({
              message: "创建成功",
              type: "success",
            });
            this.$emit("userDataSwitch", false);
          });
        }
      });
      this.createForm.roleName = "";
      this.createForm.roleDesc = "";
    },
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.$emit("userDataSwitch", false);
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style></style>
