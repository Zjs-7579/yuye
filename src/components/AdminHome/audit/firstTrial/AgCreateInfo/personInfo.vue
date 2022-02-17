<template>
  <div class="Agperson">
    <el-form
      :model="agriculturalPers"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
      disabled
    >
      <el-row class="title"> 法定代表人基本情况及主要个人简历 </el-row>
      <el-row>
        <el-col :span="8"
          ><el-form-item label="姓名：" prop="contacts">
            <el-input
              v-model="agriculturalPers.contacts"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="出生年月：" prop="birth">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择出生年月"
              v-model="agriculturalPers.birth"
              style="width: 100%"
            ></el-date-picker> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="最高学历：" prop="highest_education">
            <el-select
              v-model="agriculturalPers.highest_education"
              placeholder="请选择最高学历"
              style="width: 100%"
            >
              <el-option label="其它" value="其它"></el-option>
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
              <el-option label="博士后" value="博士后"></el-option>
            </el-select> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><el-form-item label="专业：" prop="major">
            <el-input
              v-model="agriculturalPers.major"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="联系电话：" prop="phone">
            <el-input
              v-model="agriculturalPers.phone"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="联系手机：" prop="mobile_phone">
            <el-input
              v-model="agriculturalPers.mobile_phone"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-form-item label="身份证号码：" prop="identity">
        <el-input v-model="agriculturalPers.identity"></el-input>
      </el-form-item>

      <el-form-item label="个人简历：" prop="resume">
        <el-input
          type="textarea"
          resize="none"
          rows="8"
          v-model="agriculturalPers.resume"
        ></el-input>
      </el-form-item>
    </el-form>
    <PersonShareTabel
      :agriculturalShareholderTable="agriculturalShareholder"
      :tableTaskTypes="tableTaskType"
    ></PersonShareTabel>
  </div>
</template>

<script>
import { AgriculpersonInfoValidator } from "@/utils/validator";
import PersonShareTabel from "@/components/AdminHome/audit/firstTrial/AgCreateInfo/personShareTabel.vue";
import { mapState } from "vuex";
export default {
  props: {
    taskType: {
      type: String,
      default: function () {
        return {};
      },
    },
    agriculturalPersDetails: {
      type: Object,
      default: function () {
        return {};
      },
    },
    agriculturalShareholderDetails: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      tableTaskType: "",
      agriculturalShareholder: [],
      rules: AgriculpersonInfoValidator,
    };
  },
  components: {
    PersonShareTabel,
  },
  computed: {
    ...mapState(["Agricul"]),
    agriculturalPers: {
      get() {
        return this.Agricul.AgriculData.agriculturalPers;
      },
      set(val) {
        this.agriculturalPers = val;
      },
    },
  },
  methods: {},
  watch: {
    taskType(n) {
      this.tableTaskType = n;
    },
    agriculturalShareholderDetails(n) {
      if (n != null) {
        this.agriculturalShareholder = n;
      }
    },
    agriculturalPersDetails(n) {
      console.log(n, "人员情况---");
      if (n != null) {
        this.Agricul.AgriculData.agriculturalPers = n;
      }
      console.log(n, "父类人员情况传值------");
    },
    // personForm:{
    //   handler(val){
    //     //console.log(this.personTabel)
    //     this.$emit('myPersonInfo', val)
    //   },
    //   deep: true
    // }
  },
};
</script>

<style>
.Agperson {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.Agperson .title {
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  padding-left: 15px;
  background-color: #ece8e8;
}

.Agperson .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.Agperson .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.Agperson .el-form-item__label {
  text-align: center;
  height: 60px;
  line-height: 60px;
  /* line-height: 60px; */
  /* border: 1px solid #ccc; */
}
/* .el-input{
  height: 60px;
  line-height: ;
} */
.Agperson .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Agperson .el-input__inner {
  border: none;
}
.Agperson .el-textarea__inner {
  border: none;
}
</style>
