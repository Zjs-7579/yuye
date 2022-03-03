<template>
  <div class="Moinancial">
    <div v-if="regist_type == '事业单位'">
      <InancialUnderInfo></InancialUnderInfo>
    </div>
    <div v-if="regist_type == '企业'">
      <InancialPanyInfo></InancialPanyInfo>
    </div>
  </div>
</template>

<script>
import InancialPanyInfo from "./inancialPanyInfo.vue";
import InancialUnderInfo from "./inancialUnderInfo.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Safety"]),
    regist_type: {
      get() {
        return this.Safety.SafetyData.safetyCompany.regist_type;
      },
      set(val) {
        this.regist_type = val;
      },
    },
  },
  components: {
    InancialPanyInfo,
    InancialUnderInfo,
  },
};
</script>

<style>
.bg-purple {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
