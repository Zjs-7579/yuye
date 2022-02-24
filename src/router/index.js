import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main/main";
import Home from "../views/Home/home";
import AgriculInfo from "../views/AgriculInfo/agriculInfo";
import ModernInfo from "../views/ModernInfo/modernInfo";
import FishingGuidesInfo from "../views/FishingGuidesInfo/fishingGuidesInfo";
import HighTech from "../views/HighTech/highTech.vue";
import User from "../views/User/user.vue";
import Admin from "../views/Admin/admin.vue";
import Safety from "../views/Safety/safety.vue";
//import DetailsInspect from "../components/Home/detailsInspect.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { title: "首页" },
  },
  //新用户管理
  {
    path: "/user/:id",
    name: "User",
    component: User,
    meta: { title: "初审" },
    children: [
      {
        path: "/user/:id/todo",
        name: "UserTodo",
        component: () => import("../components/User/todoTable.vue"),
        meta: { title: "待办" },
      },
      {
        path: "/user/:id/have",
        name: "UserHave",
        component: () => import("../components/User/haveTable.vue"),
        meta: { title: "已办" },
      },
      {
        path: "/user/:id/all",
        name: "UserAll",
        component: () => import("../components/User/allTable.vue"),
        meta: { title: "全部" },
      },
      {
        path: "/user/:id/:event/detailInspect",
        name: "UserDetail",
        component: () => import("../components/Home/detailsInspect.vue"),
        meta: { title: "详情" },
      },
    ],
  },
  //管理员
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { title: "管理员" },
    children: [
      {
        path: "/admin/user",
        name: "AdminUser",
        component: () => import("../components/Admin/adminUser.vue"),
        meta: { title: "机构用户" },
      },
      {
        path: "/admin/role",
        name: "UserRole",
        component: () => import("../components/Admin/adminRole.vue"),
        meta: { title: "机构角色" },
      },
    ],
  },
  //用户管理
  // {
  //   path: "/AdminHome/admin",
  //   name: "Admin",
  //   component: Admin,
  //   children: [
  //     {
  //       path: "/AdminHome/admin/UserIndex",
  //       name: "UserIndex",
  //       component: () =>
  //         import("../components/AdminHome/systemmanager/user/index.vue"),
  //       meta: { title: "机构用户" },
  //     },
  //     {
  //       path: "/AdminHome/admin/OrgIndex",
  //       name: "OrgIndex",
  //       component: () =>
  //         import("../components/AdminHome/systemmanager/org/index.vue"),
  //       meta: { title: "机构角色" },
  //     },
  //     {
  //       path: "/AdminHome/admin/FirstIndex",
  //       name: "FirstIndex",
  //       component: () =>
  //         import("../components/AdminHome/audit/firstTrial/index.vue"),
  //       meta: { title: "初审" },
  //     },
  //     {
  //       path: "/AdminHome/admin/indexDetail",
  //       name: "indexDetail",
  //       hidden: true,
  //       component: () =>
  //         import("../components/AdminHome/audit/firstTrial/indexDetail.vue"),
  //       meta: { title: "现代审核" },
  //     },
  //     {
  //       path: "/AdminHome/admin/indexDetail2",
  //       name: "indexDetail2",
  //       hidden: true,
  //       component: () =>
  //         import("../components/AdminHome/audit/firstTrial/indexDetail2.vue"),
  //       meta: { title: "农业贴息审核" },
  //     },
  //     {
  //       path: "/AdminHome/admin/RecheckIndex",
  //       name: "RecheckIndex",
  //       component: () =>
  //         import("../components/AdminHome/audit/recheck/index.vue"),
  //       meta: { title: "复审" },
  //     },
  //   ],
  // },
  //农业
  {
    path: "/agriculInfo",
    name: "AgriculInfo",
    component: AgriculInfo,
    meta: { title: "农业贴息" },
    children: [
      {
        path: "/agriculInfo",
        redirect: "/agriculInfo/createInfo",
      },
      // {
      //   path: "/agriculInfo/searchInfo",
      //   name: "SearchInfo",
      //   component: () => import("../components/AgriculInfo/SearchInfo/searchTabel.vue"),
      //   meta: { title: '查询' }
      // },
      {
        path: "/agriculInfo/createInfo",
        name: "AriculCreateInfo",
        component: () =>
          import("../components/AgriculInfo/CreateInfo/createInfo.vue"),
        meta: { title: "创建" },
      },
      {
        path: "/agriculInfo/detailInspect",
        name: "AriculDetailInspect",
        component: () => import("../components/Home/detailsInspect.vue"),
        meta: { title: "详情" },
      },
      // {
      //   path: "/agriculInfo/progressDetails",
      //   name: "AriculProgressDetails",
      //   component: () => import("../components/Home/progressDetails.vue"),
      //   meta: { title: '进度' }
      // },
      // {
      //   path: "/agriculInfo/proFiles",
      //   name: "ProFiles",
      //   component: () => import("../components/AgriculInfo/ProFiles/proFiles.vue"),
      //   meta: { title: '用户管理' }
      // }
    ],
  },
  //现代
  {
    path: "/modernInfo",
    name: "ModernInfo",
    component: ModernInfo,
    meta: { title: "现代农业" },
    children: [
      {
        path: "/modernInfo",
        redirect: "/modernInfo/createInfo",
      },
      {
        path: "/modernInfo/createInfo",
        name: "ModernCreateInfo",
        component: () =>
          import("../components/ModernInfo/CreateInfo/createInfo.vue"),
        meta: { title: "创建" },
      },
      {
        path: "/modernInfo/detailInspect",
        name: "ModernDetailInspect",
        component: () => import("../components/Home/detailsInspect.vue"),
        meta: { title: "详情" },
      },
      // {
      //   path: "/modernInfo/progressDetails",
      //   name: "ModernDeProgressDetails",
      //   component: () => import("../components/Home/progressDetails.vue"),
      //   meta: { title: '进度' }
      // },
    ],
  },
  //渔业
  {
    path: "/fishingGuidesInfo",
    name: "FishingGuidesInfo",
    component: FishingGuidesInfo,
    meta: { title: "远洋渔业" },
    children: [
      {
        path: "/fishingGuidesInfo",
        redirect: "/fishingGuidesInfo/createInfo",
      },
      {
        path: "/fishingGuidesInfo/createInfo",
        name: "SelectFishingGuides",
        component: () =>
          import("../components/FishingGuidesInfo/createInfo.vue"),
        meta: { title: "创建" },
      },
      {
        path: "/fishingGuidesInfo/detailInspect",
        name: "FishingGuidesDetailInspect",
        component: () => import("../components/Home/detailsInspect.vue"),
        meta: { title: "详情" },
      },
    ],
  },
  //高新
  {
    path: "/highTech",
    name: "HighTech",
    component: HighTech,
    meta: { title: "高新技术" },
    children: [
      {
        path: "/highTech",
        redirect: "/highTech/createInfo",
      },
      {
        path: "/highTech/createInfo",
        name: "HighTechCreateInfo",
        component: () => import("../components/HighTech/createInfo.vue"),
        meta: { title: "创建" },
      },
      {
        path: "/highTech/detailInspect",
        name: "HighTechDetailInspect",
        component: () => import("../components/Home/detailsInspect.vue"),
        meta: { title: "详情" },
      },
    ],
  },
  //安全
  {
    path: "/safety",
    name: "Safety",
    component: Safety,
    meta: { title: "农产品质量安全" },
    children: [
      {
        path: "/safety",
        redirect: "/safety/createInfo",
      },
      {
        path: "/safety/createInfo",
        name: "SafetyCreateInfo",
        component: () => import("../components/Safety/createInfo.vue"),
        meta: { title: "创建" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const flag = !localStorage.getItem("name") || !localStorage.getItem("token");
  if (to.fullPath === "/main") {
    next();
  } else if (flag) {
    next("/main");
    return false;
  } else {
    next();
  }
});

export default router;
