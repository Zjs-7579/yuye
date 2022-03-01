<template>
  <div class="Mounit">
    <el-form
      :model="techTeam"
      ref="teamForm"
      :rules="rules"
      label-width="310px"
      :disabled="isDisabledData"
      class="demo-ruleForm"
    >
      <el-row class="title"> 团队基本情况 </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目名称:" prop="prj_name">
            <el-input v-model="techTeam.prj_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="起始时间:" prop="prj_time">
            <el-input v-model="techTeam.prj_time"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="所属产业:" prop="industry">
            <el-input v-model="techTeam.industry"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属产业子领域:" prop="subfield">
            <el-input v-model="techTeam.subfield"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="项目组总参与人数：" prop="partici_num">
        <el-input v-model="techTeam.partici_num"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="博士：" prop="doctor_num">
            <el-input v-model="techTeam.doctor_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="硕士：" prop="master_num">
            <el-input v-model="techTeam.master_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="本科：" prop="graduate_num">
            <el-input v-model="techTeam.graduate_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="本科以下：" prop="other_num">
            <el-input v-model="techTeam.other_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="研发人员：" prop="research_num">
            <el-input v-model="techTeam.research_num"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="管理人员：" prop="admin_num">
            <el-input v-model="techTeam.admin_num"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="项目总工作量（月）：" prop="prj_work">
            <el-input v-model="techTeam.prj_work"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label="企业是否由海外留学归来人员创办："
            prop="overseas_sponsor"
          >
            <el-input v-model="techTeam.overseas_sponsor"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="海外留学归来人数（人）：" prop="study_abroad">
            <el-input v-model="techTeam.study_abroad"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="项目联系人：" prop="project_contact">
            <el-input v-model="techTeam.project_contact"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="移动电话：" prop="mobile_phone">
            <el-input v-model="techTeam.mobile_phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="电子邮箱：" prop="e_mail">
            <el-input v-model="techTeam.e_mail"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真:" prop="fax">
            <el-input v-model="techTeam.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-form
      v-for="(item, index) in techMemberList"
      ref="teamFormList"
      :rules="rules"
      :key="index"
      :model="techMemberList[index]"
      :disabled="isDisabledData"
      label-width="210px"
      class="demo-ruleForm"
    >
      <el-row class="title">
        {{ index == 0 ? "项目负责人" : "项目组主要成员" + index }}</el-row
      >
      <el-form-item
        :label="index == 0 ? '项目负责人:' : '项目成员:'"
        prop="member"
      >
        <el-input v-model="item.member"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="出生年月：" prop="birth">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-DD"
              placeholder="选择受资助年份"
              v-model="item.birth"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职称：" prop="title">
            <el-input v-model="item.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="移动电话：" prop="mobile">
            <el-input v-model="item.mobile"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="最高学历：" prop="education">
            <el-input v-model="item.education"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业：" prop="major">
            <el-input v-model="item.major"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="身份证号：" prop="identity">
            <el-input v-model="item.identity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="单位及职务：" prop="position">
        <el-input v-model="item.position"></el-input>
      </el-form-item>

      <el-form-item label="承担任务：" prop="undertake">
        <el-input type="text" v-model="item.undertake"></el-input>
      </el-form-item>

      <el-form-item
        label="工作简历、主要论文、项目、获奖及专利等："
        prop="resume"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="8"
          v-model="item.resume"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="handle">
      <!-- :style="{ display: isDisabledData || !isHold ? 'none' : 'block' }"  -->
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { HighTeamValidator } from "../../utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rules: HighTeamValidator,
    };
  },
  computed: {
    ...mapState(["HighTech"]),
    techTeam: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techTeam["task_id"] =
          this.HighTech.userTaskId;
        //this.Modern.ModernData.techTeam.creator = this.Modern.userName
        return this.HighTech.HighTechData.techTeam;
      },
      set(val) {
        this.techTeam = val;
      },
    },
    techMemberList: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.HighTech.HighTechData.techMemberList[0]["task_id"] =
          this.HighTech.userTaskId;
        return this.HighTech.HighTechData.techMemberList;
      },
      set(val) {
        // console.log(val)
        this.techMemberList = val;
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
    handleAddHtml() {
      let str = {
        task_id: this.HighTech.userTaskId,
        project_name: "", //项目名称
        funding_unit: "", //资助单位
        funding_year: "", //受资助年份
        release_no: "", //下达文号
        subsidy_amount: "", //资助金额（万元）
        project_leader: "", //项目负责人
        phone: "", //联系电话
        project_content: "", //项目建设内容
        project_years: "", //项目实施年限
        accept: "", //是否完成验收及时间
        reasons: "", //未完成验收原因
        // create_time: "",
        // modifier: '',
        // update_time: ''
      };
      this.techMemberList.push(str);
    },
    handleDeleteHtml() {
      let len = this.techMemberList.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.techMemberList.splice(len - 1, 1);
      }
    },
  },
};
</script>

<style></style>
