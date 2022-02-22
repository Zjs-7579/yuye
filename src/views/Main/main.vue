<template>
  <div>
    <h1>省统一登录系统</h1>
    <el-button type="primary" size="medium" @click="loginEnter"
      >企业登录</el-button
    >
    <!-- <el-button type="primary" size="medium" @click="adminLoginEnter"
      >政府人员登录</el-button
    > -->

    <el-button type="primary" @click="adminUser(1)">初审A</el-button>
    <el-button type="primary" @click="adminUser(2)">初审B</el-button>
    <el-button type="primary" @click="adminUser(3)">复审A</el-button>
    <el-button type="primary" @click="adminUser(4)">复审B</el-button>
    <el-button type="primary" @click="adminUser(5)">管理员</el-button>

    <el-button
      type="primary"
      size="medium"
      @click="adminLoginEnter1(1)"
      style="display: none"
      >政府人员登录-初审A</el-button
    >
    <el-button
      type="primary"
      size="medium"
      @click="adminLoginEnter2(2)"
      style="display: none"
      >政府人员登录-初审B</el-button
    >
    <el-button
      type="primary"
      size="medium"
      @click="adminLoginEnter3(3)"
      style="display: none"
      >政府人员登录-复审A</el-button
    >
    <el-button
      type="primary"
      size="medium"
      @click="adminLoginEnter4(4)"
      style="display: none"
      >政府人员登录-复审A</el-button
    >
    <el-button
      type="primary"
      size="medium"
      @click="adminLoginEnter5(5)"
      style="display: none"
      >管理员</el-button
    >
  </div>
</template>

<script>
import { login, flowType } from "../../api/login";
export default {
  methods: {
    loginEnter() {
      login().then(() => {
        this.$router.push({
          path: "/home",
        });
      });
    },
    adminUser(id) {
      if (id == 5) {
        this.$router.push({
          path: `/admin`,
        });
      } else {
        this.$router.push({
          path: `/user/${id}`,
        });
      }
    },
    adminLoginEnter1(val) {
      flowType(val).then(() => {
        this.$router.push({ name: "Admin", query: { authName: "初审A" } });
      });
    },
    adminLoginEnter2(val) {
      flowType(val).then(() => {
        this.$router.push({ name: "Admin", query: { authName: "初审B" } });
      });
    },
    adminLoginEnter3(val) {
      flowType(val).then(() => {
        this.$router.push({ name: "Admin", query: { authName: "复审A" } });
      });
    },
    adminLoginEnter4(val) {
      flowType(val).then(() => {
        this.$router.push({ name: "Admin", query: { authName: "复审B" } });
      });
    },
    adminLoginEnter5(val) {
      flowType(val).then(() => {
        this.$router.push({ name: "Admin", query: { authName: "管理员" } });
      });
    },
  },
};
</script>

<style></style>
