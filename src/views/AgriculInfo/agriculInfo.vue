<template>
  <div>
    <el-container>
      <!-- <el-aside width="200px" style="display: none">
        <el-menu >
          <el-submenu v-for="item in routerDataList" :key=item.routerId :index=item.routerId>
            <template slot="title"><i :class=item.iconUrl></i>{{item.title}}</template>
            <router-link v-for="(group, index) in item.routerData" :key="index" :to=group.path>
              <el-menu-item-group class="group" :index=index>
              <el-menu-item style="color: #000">{{group.routerName}}</el-menu-item>
            </el-menu-item-group> 
            </router-link>
          </el-submenu>
        </el-menu>
      </el-aside> -->

      <el-container>
        <el-header style="height: 50px; display: flex">
          <el-breadcrumb
            separator="/"
            style="flex: 23; font-size: 14px; line-height: 50px"
          >
            <el-breadcrumb-item
              v-for="(item, index) in breadList"
              :key="index"
              :to="{ path: item.path }"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>

          <el-dropdown style="flex: 1">
            <i class="el-icon-setting" style="margin-left: 40px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <span @click="leaveUser"
                ><el-dropdown-item>退出</el-dropdown-item></span
              >
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ this.$store.state.Agricul.userName }}</span>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import routerHome from "../../static/routerHome.js";

export default {
  data() {
    return {
      routerDataList: "",
      breadList: [],
    };
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    },
    leaveUser() {
      window.localStorage.removeItem("token");
      this.$router.push({
        path: "/",
      });
    },
  },
  created() {
    this.getBreadcrumb();
  },
  mounted() {
    //console.log(routerHome)
    this.routerDataList = routerHome;
    // userToken().then(res=>{
    //   //console.log(res)
    //   this.$store.commit('Agricul_UserName', res.data.data)
    // });
  },

  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
};
</script>

<style>
.el-header {
  color: #000;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.el-aside {
  height: 100vh;
  background-color: #d3dce6;
  color: #333;
}
</style>
