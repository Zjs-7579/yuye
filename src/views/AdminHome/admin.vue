<template>
  <div class="container">
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
            :router="true"
            :default-active="activeIndex"
            text-color="#fff"
            background-color="#3a71a8"
            active-text-color="#ffd04b"
            :default-openeds="openeds"
          >
            <!-- 一级菜单 -->
            <el-submenu
              :index="item.id + ``"
              v-for="item in menuList"
              :key="item.id"
              v-show="item.show"
            >
              <template slot="title">
                <!-- 图标 -->
                <i :class="item.icon"></i>
                <!-- 菜单名 -->
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                v-for="subItem in item.children"
                :key="subItem.id"
                :index="subItem.url"
              >
                <template slot="title">
                  <i :class="subItem.icon"></i>
                  <span v-if="subItem.authName == '初审-待办'"
                    >{{ subItem.authName }}
                    <el-badge class="mark" :max="99" :value="badgeNumber"
                  /></span>
                  <span v-else>{{ subItem.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
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
import { userToken, getRouters } from "../../api/login";
import { getFlowList } from "@/api/Agricul/flowTask";
import routerLogin from "../../static/routerLogin";
export default {
  data() {
    return {
      cardList: routerLogin,
      name: "",
      badgeNumber: "",
      activeIndex: "",
      arrList: [],
      openeds: ["1", "2"],
      loginRoles: "",
      //左边菜单
      menuList: [
        {
          authName: "审核管理",
          id: 1,
          icon: "el-icon-setting",
          // roles: ['企业用户', '管理员'],
          show: true,
          url: "",
          children: [
            {
              id: 1,
              authName: `初审-待办`,
              icon: "el-icon-menu",
              url: `/AdminHome/admin/FirstIndex?authName=${this.$route.query.authName}&taskType=待办`,
              children: [],
            },
            {
              id: 2,
              authName: "初审-已办",
              icon: "el-icon-menu",
              url: `/AdminHome/admin/FirstIndex?authName=${this.$route.query.authName}&taskType=已办`,
              children: [],
            },
            {
              id: 3,
              authName: "初审-全部",
              icon: "el-icon-menu",
              url: `/AdminHome/admin/FirstIndex?authName=${this.$route.query.authName}&taskType=全部`,
              children: [],
            },
            {
              id: 4,
              authName: "复审",
              icon: "el-icon-menu",
              url: "/AdminHome/admin/RecheckIndex",
              children: [],
            },
          ],
        },
        {
          authName: "系统管理",
          show: true,
          id: 2,
          icon: "el-icon-setting",
          url: "",
          children: [
            {
              id: 4,
              authName: "机构用户",
              show: true,
              icon: "el-icon-user",
              url: `/AdminHome/admin/UserIndex?authName=${this.$route.query.authName}&taskType=用户`,
              children: [],
            },
            {
              id: 5,
              authName: "机构角色",
              show: true,
              icon: "el-icon-menu",
              url: `/AdminHome/admin/OrgIndex?authName=${this.$route.query.authName}&taskType=角色`,
              children: [],
            },
          ],
        },
      ],
    };
  },
  components: {},
  mounted() {
    // console.log(1111111111111111111111111)
    // console.log(routerLogin, 'asdasdasdad111')
    // userToken().then((res) => {
    //   //console.log(res)
    //   this.$store.commit("UserName", res.data.data);
    // });
    // userToken().then(res => {
    //   console.log(res, 'asadasdasdasdasd1111')
    //   this.$store.commit("UserName", res.data.data);
    // })
    const taskType = this.$route.query.taskType; //获取路由值
    console.log(this.$route.query.taskType);
    if (taskType != null || taskType != "undefined") {
      // console.log(111)
      this.menuList.forEach((item) => {
        item.children.forEach((res, index) => {
          if (res.url.indexOf(taskType) != -1) {
            // console.log(222)
            // console.log(res.url,'路由------')
            this.activeIndex = res.url;
            // console.log(this.activeIndex=res.url, 'this.activeIndex=res.url');
          }
        });
      });
    }
  },
  created() {
    userToken().then((res) => {
      const roles = res.data.data.roles;
      // console.log(res, 'asadasdasdasdasd1111222333')
      this.$store.commit("UserName", res.data.data);
      let _ = res.data.data.roles;
      let str = _.charAt(_.length - 1);
      const regx = /^[A-Za-z0-9]*$/;
      // console.log(_, str, regx.test(str), 'rtrtrtrtrtrtrtrtrtrrtr');
      if (regx.test(str)) {
        _ = _.slice(0, _.length - 1);
      }
      this.loginRoles = _;
      // console.log(this.loginRoles, 'this.loginRolesthis.loginRolesthis.loginRolesthis.loginRolesthis.loginRoles');
      this.menuList[0].children[0].authName = `${this.loginRoles}-待办`;
      this.menuList[0].children[1].authName = `${this.loginRoles}-已办`;
      this.menuList[0].children[2].authName = `${this.loginRoles}-全部`;
      getRouters(roles).then((res) => {
        // console.log(res, 'adsadasdasdad123143252')
        const _ = [];
        res.forEach((e) => {
          // console.log(e, 'eeeeeeeeeeeeeeeeeeeeeeeee->eeeeeeeeeeeeeeeeeeeeeeeeeee')
          _.push(e.label);
          e.children.forEach((el) => {
            _.push(el.label);
          });
        });
        if (_.indexOf("审核管理") < 0) {
          this.menuList[0].show = false;
        }
        if (_.indexOf("系统管理") < 0) {
          this.menuList[1].show = false;
        }
        if (this.loginRoles === "管理员") {
          this.menuList[0].show = false;
          this.menuList[1].show = true;
        }
      });
    });
    this.getTaskList();
    this.name = this.$route.query.authName;
    console.log(this.name);
    this.menuList.forEach((item) => {
      if (item.authName == "审核管理") {
        item.children.forEach((res, index) => {
          console.log(res.authName, "菜单模块-----");
          if (res.authName.indexOf("初审") != -1) {
            console.log(res.authName, "包含------");
            console.log(this.arrList, item.children, "----");
          } else {
            item.children.splice(index, 1);
            console.log(res.authName, "不是包含------");
          }
        });
      }
    });
  },
  methods: {
    leaveUser() {
      window.localStorage.removeItem("token");
      this.$router.push({
        path: "/",
      });
      location.reload(); // 刷新
    },
    getTaskList() {
      const params = {
        page: 1,
        limit: 10,
        status: this.$route.query.authName,
        deal_type: "待办",
      };
      getFlowList(params).then((res) => {
        if (res.data.code === 200) {
          this.badgeNumber = res.data.cnt;
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  /* box-sizing: border-box; */
  color: #000;
  overflow: hidden;
}
.container .el-header {
  padding: 0;
}
.container .top {
  width: 100%;
  height: 60px;
  /* padding: 10px; */
  display: flex;
  background-color: #1c5c9a;
}
.container .top div:nth-child(1) {
  flex: 7;
}
.container .top img {
  display: block;
  height: 51px;
  /* margin: 7px 0px 36px 0px; */
  margin-left: 20px;
  margin-top: 7px;
}
.container .top div:nth-child(2) {
  flex: 1;
  text-align: center;
}
.container .top span {
  color: #fff;
  font-size: 18px;
  padding: 0 10px;
  line-height: 60px;
}

.container .center {
  width: 100%;
  height: 45vh;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.container .center .imgUrl {
  position: absolute;
  top: 0;
  left: 0;
  background-color: darkgoldenrod;
}
.container .center .card {
  height: 100%;
  display: flex;
}
.container .center a {
  flex: 1;
}
.container .center .info img {
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 100px;
}
.container .center .info span {
  display: block;
  text-align: center;
  width: 50%;
  margin: 30px auto;
  font-size: 24px;
}
.container .foot {
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.container .foot div:nth-child(1) {
  flex: 2;
  background-color: #fff;
}
.container .foot div:nth-child(2) {
  flex: 1;
  background-color: #fff;
}
.container .foot div:nth-child(3) {
  flex: 1;
  background-color: #fff;
}
.item {
  margin-top: 5px;
  margin-right: 20px;
}
</style>
