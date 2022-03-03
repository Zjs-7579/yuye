<template>
  <div class="StatisticalInfo">
    <el-row class="title"> 远洋渔业项目统计表 </el-row>
    <StatisticalBuildOrBuy
      v-if="declare_name == '建造远洋渔船' || declare_name == '购买远洋渔船'"
    ></StatisticalBuildOrBuy>
    <StatisticalBuyNansha v-else-if="declare_name == '建造南沙骨干渔船'" />
    <StatisticalOverseas
      v-else-if="declare_name == '境外渔业资源使用费'"
    ></StatisticalOverseas>
    <StatisticalCapture
      v-else-if="declare_name == '自捕远洋海产品回运费'"
    ></StatisticalCapture>
    <StatisticalNanshaCapture
      v-else-if="declare_name == '自捕南沙海产品回运费'"
    />
  </div>
</template>

<script>
import StatisticalBuildOrBuy from "./statisticalBuildOrBuy.vue";
import StatisticalBuyNansha from "./statisticalBuyNansha.vue";
import StatisticalOverseas from "./statisticalOverseas.vue";
import StatisticalCapture from "./statisticalCapture.vue";
import StatisticalNanshaCapture from "./statisticalNanshaCapture.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["Fishing"]),
    declare_name: {
      get() {
        return this.Fishing.OceanDeclaration.declare_name;
      },
      set(val) {
        this.declare_name = val;
      },
    },
  },
  components: {
    StatisticalBuildOrBuy,
    StatisticalOverseas,
    StatisticalCapture,
    StatisticalBuyNansha,
    StatisticalNanshaCapture,
  },
};
</script>

<style>
.StatisticalInfo {
  height: 75vh;

  background-color: #fff;
}
.StatisticalInfo .el-col {
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.StatisticalInfo .title {
  height: 60px;
  line-height: 60px;
  background-color: #ece8e8;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
}
</style>
