<template>
  <div>
    <el-dialog
      :visible.sync="createAuthorityVisible"
      :title="'权限设置' + visitAuthArray"
      width="45%"
      class="roleList"
      @close="close"
      :before-close="handleClose"
    >
      <el-tree
        ref="myTree"
        :data="roleAuths"
        :default-checked-keys="visitAuthArray"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        class="treeDiv"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAuthorityRoleId, editAuth } from "../../api/Admin/role";
export default {
  props: ["powerSwitch"],
  data() {
    return {
      roleAuths: [],
      // visitAuthArray: [],
      defaultProps: {
        children: "children",
        id: "id",
        label: "label",
        name: "name",
      },
    };
  },
  computed: {
    createAuthorityVisible: {
      get() {
        return this.powerSwitch.powerBool;
      },
      set(val) {
        this.createAuthorityVisible = val;
      },
    },
    visitAuthArray: {
      get() {
        console.log(this.powerSwitch.data);
        let list = [];
        this.powerSwitch.data.forEach((element) => {
          if (element.label !== "审核管理" && element.label !== "系统功能") {
            list.push(element.id);
          }
        });
        return list;
      },
      set(val) {
        this.visitAuthArray = val;
      },
    },
  },
  methods: {
    // open() {
    //   let list = [];
    //   getRoleCheck({ role: this.powerSwitch.row.roleName }).then((res) => {
    //     res.data.data.visit.forEach((element) => {
    //       if (element.label !== "审核管理" && element.label !== "系统功能") {
    //         list.push(element.id);
    //       }
    //     });
    //   });
    //   this.$nextTick(() => {
    //     this.visitAuthArray = list
    //     console.log(this.visitAuthArray)

    //     this.$refs.myTree.setCheckedKeys(this.visitAuthArray);
    //   });

    // },
    close() {
      //console.log('close................................')
      //this.visitAuthArray = []
      this.$nextTick(() => {
        this.$refs.myTree.setCheckedKeys([]);
      });
    },
    handleCancel() {
      this.$emit("powerDataSwitch", false);
    },
    handleSubmit() {
      //console.log(this.$refs.myTree.getCheckedKeys())
      let visit = [];
      for (let i of this.$refs.myTree.getCheckedKeys()) {
        visit.push({
          auth_id: i,
          checked: 1,
          role_id: this.powerSwitch.row.roleId,
        });
      }
      console.log(visit);
      editAuth(this.powerSwitch.row.roleId, visit).then((res) => {
        this.$message({
          message: "修改成功",
          type: "success",
        });
        this.$emit("powerDataSwitch", false);
      });
    },
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.$emit("powerDataSwitch", false);
          done();
        })
        .catch((_) => {});
    },
  },
  created() {
    getAuthorityRoleId().then((res) => {
      //console.log(res);
      this.roleAuths = res.data.data;
    });
  },
};
</script>

<style></style>
