<template>
  <div class="Aghold">
    <el-form
      v-for="(item, index) in agriculturalSupport"
      :rules="rules"
      :key="index"
      :model="agriculturalSupport[index]"
      label-width="170px"
      class="demo-ruleForm"
      disabled
    >
      <el-row class="title"> 项目基本情况 </el-row>
      <el-form-item
        :label="'项目名称' + (index + 1) + '：'"
        prop="project_name"
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
          <el-form-item
            label="下达文号："
            label-width="220px"
            prop="release_no"
          >
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
          <el-form-item label="联系电话：" label-width="220px" prop="phone">
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
          <el-form-item
            label="未完成验收原因(已完成不填)："
            label-width="220px"
            prop="reasons"
          >
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
    <div class="handle" style="display: none" v-if="taskTypeVisible == '待办'">
      <el-button class="add" @click="handleDeleteHtml">删除一条</el-button>
      <el-button type="primary" class="add" @click="handleAddHtml"
        >添加一条</el-button
      >
    </div>
  </div>
</template>

<script>
import { HoldInfoValidator } from "@/utils/validator";
import { mapState } from "vuex";
export default {
  props: {
    agriculturalSupportDetails: {
      type: Array,
      default: function () {
        return {};
      },
    },
    taskType: {
      type: String,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      taskTypeVisible: "",
      rules: HoldInfoValidator,
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    agriculturalSupport: {
      get() {
        // this.Agricul.AgriculData.agriculturalSupport[0].task_id = this.Agricola.userTaskId
        // this.Agricul.AgriculData.agriculturalSupport[0].creator = this.Agricola.userName
        return this.Agricul.AgriculData.agriculturalSupport;
      },
      set(val) {
        this.agriculturalSupport = val;
      },
    },
  },
  watch: {
    taskType(n) {
      if (n != null) {
        this.taskTypeVisible = n;
      }
    },
    agriculturalSupportDetails(n) {
      if (n != null) {
        this.Agricul.AgriculData.agriculturalSupport = n;
      }
      console.log(n, "父类传值支持情况------");
    },
  },
  methods: {
    handleAddHtml() {
      let str = {
        task_id: this.Agricul.userTaskId,
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
        creator: this.Total.userName,
        // create_time: "",
        // modifier: '',
        // update_time: ''
      };
      this.agriculturalSupport.push(str);
    },
    handleDeleteHtml() {
      let len = this.agriculturalSupport.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.agriculturalSupport.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style>
.Aghold {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.Aghold .demo-ruleForm {
  margin-bottom: 60px;
}
.Aghold .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
}
.Aghold .title .el-input__inner {
  border: none;
  background-color: #ece8e8;
}

.Aghold .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.Aghold .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.Aghold .el-form-item__label {
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
.Aghold .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.Aghold .el-input__inner {
  border: none;
}
.Aghold .el-textarea__inner {
  border: none;
}
</style>
