<template>
  <div class="MoboxTitle">
    <p>
      项目单位基本情况、经营管理状况、布局全国情况、行业地位及行业影响力等，
      包括但不限于：成立时间、规模、在行业内的地位、主营业务和主要产品及市场占有率、
      人才结构、经营业绩、已获得的各类资质认证和知识产权情况。(限500字之内)
    </p>
    <el-input
      type="textarea"
      resize="none"
      rows="25"
      disabled
      v-model="basic_info"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      basic_info: "",
    };
  },
  computed: {
    ...mapState(["Modern"]),
    // basic_info:{
    //     get(){
    //         return this.Modern.ModernData.basic_info
    //     },
    //     set(val){
    //         this.basic_info = val
    //     }
    // }
  },
};
</script>

<style>
.MoboxTitle {
  width: 100%;
  height: 75vh;
}
.MoboxTitle p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
</style>
