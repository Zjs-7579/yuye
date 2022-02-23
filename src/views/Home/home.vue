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

      <el-main>
        <div class="center">
          <div class="imgUrl">
            <span class="img"></span><span>我要申报</span>
          </div>
          <div class="card">
            <router-link
              v-for="(item, index) in cardList"
              :key="index"
              :to="item.path"
            >
              <div class="info">
                <el-card shadow="never">
                  <img :src="item.imgUrl" alt="" />
                  <span class="titleText">{{ item.text }}</span>
                </el-card>
              </div>
            </router-link>
          </div>
        </div>

        <div class="foot">
          <div>
            <ApplyTabel></ApplyTabel>
          </div>
          <div style="margin-left: 20px">
            <PolicyTabel></PolicyTabel>
            <OperateTabel></OperateTabel>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { userToken } from "../../api/login";
import routerLogin from "../../static/routerLogin";
import ApplyTabel from "../../components/Home/applyTabel.vue";
import PolicyTabel from "../../components/Home/policyTabel.vue";
import OperateTabel from "../../components/Home/operateTabel.vue";
export default {
  data() {
    return {
      cardList: routerLogin,
    };
  },
  components: {
    ApplyTabel,
    PolicyTabel,
    OperateTabel,
  },
  mounted() {
    userToken().then((res) => {
      //console.log(res)
      this.$store.commit("UserName", res.data.data);
      this.$store.commit("Agricul_UserName", res.data.data);
      this.$store.commit("Modern_UserName", res.data.data);
      this.$store.commit("Fishing_UserName", res.data.data);
    });
  },
  methods: {
    leaveUser() {
      window.localStorage.removeItem("token");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped>
.container .titleText {
  width: 100%;
  height: 100px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container {
  width: 100%;
  height: 100vh;
  /* box-sizing: border-box; */
  color: #000;
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

.container .center .imgUrl {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  color: #1c5c9a;
  font-weight: bold;
  display: flex;
}
.container .center .imgUrl .img {
  display: inline-block;
  width: 24px;
  height: 27px;
  margin: 0 3px;
  background-image: url("../../assets/login/申报@2x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container .center {
  width: 100%;
  /* height: 45vh; */
  padding-bottom: 40px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
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
  width: 125px;
  height: 125px;
  margin: 0 auto;
  margin-top: 100px;
}
.container .center .info span {
  display: block;
  text-align: center;
  width: 48%;
  margin: 30px auto;
  font-size: 24px;
}
.container .foot {
  margin-top: 20px;
  width: 100%;
  /* height: 40vh; */
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
/* .container .foot .applyContent {
  /* display: flex;
  justify-content: space-around; */
/* background-color: chartreuse;
} */
.container .foot div:nth-child(1) {
  flex: 2;
  padding-bottom: 5px;
  background-color: #fff;
}
.container .foot div:nth-child(2) {
  flex: 1;
  background-color: #fff;
}
.container .foot div:nth-child(2) div:nth-child(2) {
  margin-top: 25px;
}
/* .container .foot div:nth-child(1){
  flex: 2;
  background-color: #fff;
}
.container .foot div:nth-child(2){
  flex: 1;
  background-color: #fff;
}
.container .foot div:nth-child(3){
  flex: 1;
  background-color: #fff;
} */
</style>

<style>
/* 卡片去掉边框 */
.el-card {
  border: none !important;
}
.el-card__body {
  padding: 0px !important;
}
</style>
