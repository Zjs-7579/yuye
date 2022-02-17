<template>
  <div class="UserContainer">
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
                <span>审核管理</span>
              </template>
              <router-link
                :to="{ path: `/user/${this.$route.params.id}/todo` }"
              >
                <el-badge :value="order" class="item">
                  <el-menu-item index="1">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span slot="title">{{ prefix }}-待办</span>
                    </template>
                  </el-menu-item>
                </el-badge>
              </router-link>

              <router-link
                :to="{ path: `/user/${this.$route.params.id}/have` }"
              >
                <el-menu-item index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ prefix }}-已办</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link :to="{ path: `/user/${this.$route.params.id}/all` }">
                <el-menu-item index="3">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ prefix }}-全部</span>
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
import {
  //   getRouters,
  //   getFlowList,
  getFlowList,
  userToken,
  flowType,
} from "../../api/User/createInfo";
import TableTodo from "../../components/User/todoTable.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      openeds: ["1"],
      roles: "",
      order: "",
    };
  },
  computed: {
    ...mapState(["User"]),
    prefix: {
      get() {
        let title = this.roles.substring(0, 2);
        return title;
      },
      set() {
        this.prefix = val;
      },
    },
  },
  methods: {
    leaveUser() {
      window.localStorage.removeItem("token");
      this.$router.push({
        path: "/",
      });
      location.reload(); // 刷新
    },
    getRouter() {
      this.$router.push({
        path: "/user/" + this.$route.params.id + "/todo",
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    TableTodo,
  },
  mounted() {
    //console.log(this.$route)
    flowType(this.$route.params.id).then((res) => {
      //console.log(res)
      return;
    });
    userToken().then((res) => {
      console.log(res);

      this.$store.commit("User_UserName", res.data.data);
    });
    let user_type;
    if (this.$route.params.id == 1) {
      user_type = "初审A";
    }
    if (this.$route.params.id == 2) {
      user_type = "初审B";
    }
    if (this.$route.params.id == 3) {
      user_type = "复审A";
    }
    if (this.$route.params.id == 4) {
      user_type = "复审B";
    }
    let params = {
      page: 1,
      limit: 10,
      status: user_type,
      deal_type: "待办",
    };

    getFlowList(params).then((res) => {
      this.roles = res.data.data[0].status;
      this.order = res.data.cnt;
    });
  },
};
</script>

<style>
.UserContainer {
  width: 100%;
  height: 100vh;
  /* box-sizing: border-box; */
  color: #000;
  overflow: hidden;
}
.UserContainer .el-header {
  padding: 0;
  height: 55px !important;
}
.UserContainer .top {
  width: 100%;
  height: 55px;
  /* padding: 10px; */
  display: flex;
  background-color: #1c5c9a;
}
.UserContainer .top div:nth-child(1) {
  flex: 7;
}
.UserContainer .top img {
  display: block;
  height: 45px;
  /* margin: 7px 0px 36px 0px; */
  margin-left: 20px;
  margin-top: 5px;
}
.UserContainer .top div:nth-child(2) {
  flex: 1;
  text-align: center;
}
.UserContainer .top span {
  color: #fff;
  font-size: 18px;
  padding: 0 10px;
  line-height: 55px;
}

.UserContainer .center {
  width: 100%;
  height: 45vh;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.UserContainer .center .imgUrl {
  position: absolute;
  top: 0;
  left: 0;
  background-color: darkgoldenrod;
}
.UserContainer .center .card {
  height: 100%;
  display: flex;
}
.UserContainer .center a {
  flex: 1;
}
.UserContainer .center .info img {
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 100px;
}
.UserContainer .center .info span {
  display: block;
  text-align: center;
  width: 50%;
  margin: 30px auto;
  font-size: 24px;
}
.UserContainer .foot {
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.UserContainer .foot div:nth-child(1) {
  flex: 2;
  background-color: #fff;
}
.UserContainer .foot div:nth-child(2) {
  flex: 1;
  background-color: #fff;
}
.UserContainer .foot div:nth-child(3) {
  flex: 1;
  background-color: #fff;
}
.UserContainer .item {
  margin-top: 5px;
  margin-right: 20px;
}
/* el-badge__content el-badge__content--undefined is-fixed */
.UserContainer .el-badge__content {
  padding: 0 6px !important;
  height: 12px !important;
  line-height: 12px !important;
}
.UserContainer .el-badge__content.is-fixed {
  position: absolute !important;
  top: 20px !important;
  right: 70px !important;
}
.UserContainer .el-main {
  position: relative;
}
</style>
