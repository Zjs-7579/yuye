<template>
  <div class="Mohold">
    <el-form
      v-for="(item, index) in modernSupport"
      :rules="rules"
      :key="index"
      :model="modernSupport[index]"
      label-width="160px"
      class="demo-ruleForm"
      disabled
    >
      <el-form-item
        :label="'项目名称' + (index + 1) + '：'"
        prop="project_name"
        class="title"
      >
        <el-input v-model="item.project_name"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="8">
          <el-form-item label="资助单位：" prop="funding_unit">
            <el-input v-model="item.funding_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="受资助年份：" prop="funding_year">
            <el-input v-model="item.funding_year"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="下达文号：" prop="release_no">
            <el-input v-model="item.release_no"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="资助金额（万元）：" prop="subsidy_amount">
            <el-input v-model="item.subsidy_amount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目负责人：" prop="project_leader">
            <el-input v-model="item.project_leader"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话：" prop="phone">
            <el-input v-model="item.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="项目建设内容、规模：" prop="project_content">
        <el-input
          type="textarea"
          resize="none"
          rows="8"
          v-model="item.project_content"
        ></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="项目实施年限：" prop="project_years">
            <el-input
              type="textarea"
              resize="none"
              rows="6"
              v-model="item.project_years"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="是否完成验收及时间：" prop="accept">
            <el-input
              type="textarea"
              resize="none"
              rows="6"
              v-model="item.accept"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="未完成验收原因（已完成不填）：" prop="reasons">
            <el-input
              type="textarea"
              resize="none"
              rows="6"
              v-model="item.reasons"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" class="add" @click="addHTML">添加一条</el-button>
  </div>
</template>

<script>
import { HoldInfoValidator } from "@/utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rules: HoldInfoValidator,
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernSupport: {
      get() {
        return this.Modern.ModernData.modernSupport;
      },
      set(val) {
        this.modernSupport = val;
      },
    },
  },
  methods: {
    addHTML() {
      let str = {
        project_name: "",
        funding_unit: "",
        funding_year: "",
        release_no: "",
        subsidy_amount: "",
        project_leader: "",
        phone: "",
        project_content: "",
        project_years: "",
        accept: "",
        reasons: "",
        creator: this.$store.state.Total.userName,
      };
      this.modernSupport.push(str);
    },
  },
};
</script>

<style>
.Mohold {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.Mohold .demo-ruleForm {
  margin-bottom: 60px;
}
.Mohold .title {
  background-color: #ece8e8;
}
.Mohold .title .el-input__inner {
  border: none;
  background-color: #ece8e8;
}

.Mohold .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.Mohold .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.Mohold .el-form-item__label {
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
.Mohold .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Mohold .el-input__inner {
  border: none;
}
.Mohold .el-textarea__inner {
  border: none;
}
</style>
