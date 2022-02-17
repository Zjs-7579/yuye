<template>
  <div>
    <el-dialog
      :visible.sync="createDialogFormVisible"
      title="添加用户"
      width="45%"
      :before-close="handleClose"
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
  </div>
</template>

<script>
import { createUser } from "../../api/Admin/user";
export default {
  props: ["userSwitch"],
  data() {
    return {
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
    //创建用户取消
    handleCancelUser() {
      this.$emit("userDataSwitch", false);
      //console.log(this.$refs.UserCreate.$refs.createForm)
      this.$refs.createForm.resetFields();
    },
    //创建用户确认
    handleAddUser() {
      this.$refs.createForm.validate((b) => {
        if (b) {
          createUser(this.createForm).then((res) => {
            this.$message({
              message: "创建成功",
              type: "success",
            });
            this.$emit("userDataSwitch", false);
          });
        }
      });
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
