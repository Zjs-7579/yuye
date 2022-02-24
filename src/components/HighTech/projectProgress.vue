<template>
  <div class="HighProgress">
    <el-row class="title asterisk"> 项目实施进度与管理 （事业）</el-row>
    <p>
      1、简述项目实施的计划进度，每一阶段应该实现的具体目标，
      包括：时间进度安排、技术指标、资金使用计划、研发计划等。
    </p>
    <p>2、目标应该清晰、正确地定性或定量描述。</p>
    <p>
      3、项目实施年限不超过2年，如属特别约定的重大项目，最长不超过3年。
      （每个阶段截止时间为20**年12月31日，最后一个阶段以实际结束时间为准）
    </p>
    <el-row class="titleRow">
      <el-col :span="3"><div class="grid-content bg-purple">阶段</div></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">起止时间</div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content bg-purple">阶段目标</div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content bg-purple">实施内容</div></el-col
      >
    </el-row>

    <div class="dataRow">
      <el-row v-for="(item, index) in techStage" :key="index">
        <el-col :span="3">
          <div class="grid-content bg-purple">第 {{ item.prj_stage }} 阶段</div>
        </el-col>
        <el-col :span="7"
          ><div class="grid-content bg-purple">
            <el-date-picker
              @change="onPick(item, index)"
              v-model="item.stage"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="7"
          ><div class="grid-content bg-purple">
            <el-input
              type="textarea"
              resize="none"
              rows="5"
              :disabled="isDisabledData"
              v-model="item.stage_target"
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="7"
          ><div class="grid-content bg-purple">
            <el-input
              type="textarea"
              resize="none"
              rows="5"
              :disabled="isDisabledData"
              v-model="item.stage_content"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="handle" :style="{ display: isDisabledData ? 'none' : 'block' }">
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //stage: "",
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techStage: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techStage[0]["task_id"] =
          this.HighTech.userTaskId;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techStage[0]["prj_stage"] = "1";
        //this.Modern.ModernData.basic_info.creator = this.Modern.userName
        return this.HighTech.HighTechData.techStage;
      },
      set(val) {
        this.techStage = val;
      },
    },
    isDisabledData: {
      get() {
        return this.HighTech.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
  },
  methods: {
    onPick(item, index) {
      item.stage_start = item.stage[0];
      item.stage_end = item.stage[1];
      console.log(item, index);
      // this.techStage[index].stage_start = item.stage[0];
      // this.techStage[index].stage_end = item.stage[1];
    },
    handleAddHtml() {
      let str = {
        task_id: this.HighTech.userTaskId,
        prj_stage: this.techStage.length + 1, // 阶段
        stage_start: "", //起始时间
        stage_end: "", //结束时间
        stage_target: "", //阶段目标
        stage_content: "", //实施内容
      };
      this.techStage.push(str);
    },
    handleDeleteHtml() {
      let len = this.techStage.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.techStage.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style>
.HighProgress {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.HighProgress .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.HighProgress p {
  font-weight: bold;
  font-size: 20px;
  padding: 35px 0;
}
.HighProgress .titleRow {
  text-align: center;
  line-height: 60px;
  background-color: #ece8e8;
  border: 1px solid #ccc;
}
.HighProgress .dataRow {
  text-align: center;
  border: 1px solid #ccc;
  line-height: 120px;
}
.HighProgress .titleRow .el-col {
  border-right: 1px solid #ccc;
}

.HighProgress .dataRow .el-col {
  border: 1px solid #ccc;
}
.HighProgress .el-date-editor--daterange {
  border: none;
  width: 90%;
  margin-left: 5%;
}
.HighProgress .el-textarea__inner {
  border: none;
}
.HighProgress .asterisk::before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
