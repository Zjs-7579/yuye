<template>
  <div class="AgPerson">
    <el-form
      :model="agriculturalPers"
      :rules="rules"
      ref="personForm"
      :disabled="isDisabledData"
      label-width="150px"
      class="demo-ruleForm"
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
            ></el-date-picker>
            <!-- <el-input
            v-model="agriculturalPers.birth"
          ></el-input>  -->
          </el-form-item></el-col
        >
        <el-col :span="8">
          <el-form-item label="最高学历：" prop="highest_education">
            <el-select
              v-model="agriculturalPers.highest_education"
              placeholder="请选择最高学历"
              style="width: 100%"
            >
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
              <el-option label="其它" value="其它"></el-option>
            </el-select>
            <!-- <el-input
            v-model="agriculturalPers.highest_education"
          ></el-input>  -->
          </el-form-item></el-col
        >
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
    <PersonShareTabel></PersonShareTabel>
  </div>
</template>

<script>
import { AgriculpersonInfoValidator } from "../../../utils/validator";
import PersonShareTabel from "./personShareTabel.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
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
        this.Agricul.AgriculData.agriculturalPers["task_id"] =
          this.Agricul.userTaskId;
        return this.Agricul.AgriculData.agriculturalPers;
      },
      set(val) {
        this.agriculturalPers = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Agricul.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  methods: {},
  //  watch:{
  //   personForm:{
  //     handler(val){
  //       //console.log(this.personTabel)
  //       this.$emit('myPersonInfo', val)
  //     },
  //     deep: true
  //   }

  // }
};
</script>

<style>
.AgPerson {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.AgPerson .title {
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  padding-left: 15px;
  background-color: #ece8e8;
}

.AgPerson .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.AgPerson .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.AgPerson .el-form-item__label {
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
.AgPerson .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.AgPerson .el-input__inner {
  border: none;
}
.AgPerson .el-textarea__inner {
  border: none;
}
</style>
