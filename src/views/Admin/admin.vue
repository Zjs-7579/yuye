<template>
  <div class="AdminContainer">
    <el-container>
      <el-header>
        <div class="top">
          <div>
            <img src="../../assets/login/渔业专项资金管理系统@2x.png" alt="" />
          </div>
          <div>
            <span>{{ this.$store.state.Total.userName }}</span
            ><span>|</span><span @click="leaveUser">退出</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background: #3a71a8">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#3a71a8"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-openeds="openeds"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <router-link :to="{ path: `/admin/user` }">
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">机构用户</span>
                  </template>
                </el-menu-item>
              </router-link>

              <router-link :to="{ path: `/admin/role` }">
                <el-menu-item index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">机构角色</span>
                  </template>
                </el-menu-item>
              </router-link>
            </el-submenu>

            <!-- <el-menu-item index="1" @click="getRouter('待办')">
              <i class="el-icon-menu"></i>
              <span slot="title">待办</span>
            </el-menu-item>
            
            <el-menu-item index="2" @click="getRouter('已办')">
              <i class="el-icon-menu"></i>
              <span slot="title">已办</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu" @click="getRouter('全部')"></i>
              <span slot="title">全部</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main style="padding: 2px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      openeds: ["1"],
    };
  },
  computed: {},
  methods: {
    leaveUser() {
      window.localStorage.removeItem("token");
      this.$router.push({
        path: "/",
      });
      location.reload(); // 刷新
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    //console.log(this.$route)
  },
};
</script>

<style>
.AdminContainer {
  width: 100%;
  height: 100vh;
  /* box-sizing: border-box; */
  color: #000;
  overflow: hidden;
}
.AdminContainer .el-header {
  padding: 0;
  height: 55px !important;
}
.AdminContainer .top {
  width: 100%;
  height: 55px;
  /* padding: 10px; */
  display: flex;
  background-color: #1c5c9a;
}
.AdminContainer .top div:nth-child(1) {
  flex: 7;
}
.AdminContainer .top img {
  display: block;
  height: 45px;
  /* margin: 7px 0px 36px 0px; */
  margin-left: 20px;
  margin-top: 5px;
}
.AdminContainer .top div:nth-child(2) {
  flex: 1;
  text-align: center;
}
.AdminContainer .top span {
  color: #fff;
  font-size: 18px;
  padding: 0 10px;
  line-height: 55px;
}

.AdminContainer .center {
  width: 100%;
  height: 45vh;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.AdminContainer .center .imgUrl {
  position: absolute;
  top: 0;
  left: 0;
  background-color: darkgoldenrod;
}
.AdminContainer .center .card {
  height: 100%;
  display: flex;
}
.AdminContainer .center a {
  flex: 1;
}
.AdminContainer .center .info img {
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 100px;
}
.AdminContainer .center .info span {
  display: block;
  text-align: center;
  width: 50%;
  margin: 30px auto;
  font-size: 24px;
}
.AdminContainer .foot {
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.AdminContainer .foot div:nth-child(1) {
  flex: 2;
  background-color: #fff;
}
.AdminContainer .foot div:nth-child(2) {
  flex: 1;
  background-color: #fff;
}
.AdminContainer .foot div:nth-child(3) {
  flex: 1;
  background-color: #fff;
}
.AdminContainer .item {
  margin-top: 5px;
  margin-right: 20px;
}
/* el-badge__content el-badge__content--undefined is-fixed */
.AdminContainer .el-badge__content {
  padding: 0 6px !important;
  height: 12px !important;
  line-height: 12px !important;
}
.AdminContainer .el-badge__content.is-fixed {
  position: absolute !important;
  top: 20px !important;
  right: 70px !important;
}
</style>
