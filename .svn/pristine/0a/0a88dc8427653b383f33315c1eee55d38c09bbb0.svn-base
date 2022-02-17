<template>
  <div class="Mounit">
     <el-form
      :model="modernCompany"
      ref="unitForm"
      :rules="rules"
      label-width="310px"
      :disabled="isDisabledData"
      class="demo-ruleForm"  
    >

      <el-row class="title">
        团队基本情况
      </el-row>


      <el-row>
      <el-col :span="12">
        <el-form-item label="项目名称:" prop="task_name">
        <el-input v-model="modernCompany.task_name"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="12">
           <el-form-item label="起始时间:" prop="unit_name">
        <el-input v-model="modernCompany.unit_name"></el-input>
      </el-form-item>
      </el-col>
      </el-row>

      

      <el-row>
      <el-col :span="12">
        <el-form-item label="所属产业:" prop="task_name">
        <el-input v-model="modernCompany.task_name"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="12">
           <el-form-item label="所属产业子领域:" prop="unit_name">
        <el-input v-model="modernCompany.unit_name"></el-input>
      </el-form-item>
      </el-col>
      </el-row>


      <el-form-item label="项目组总参与人数：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>


      <el-row>
      <el-col :span="8">
        <el-form-item label="博士：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
         <el-form-item label="硕士：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
        
      </el-col>
      <el-col :span="8">
        <el-form-item label="本科：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
      </el-col>
        </el-row>



        <el-row>
          <el-col :span="8">
            <el-form-item label="本科以下：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
         <el-form-item label="研发人员：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
      </el-col>
       
          <el-col :span="8">
       <el-form-item label="管理人员：" prop="project_address">
           <el-input v-model="modernCompany.project_address"></el-input>
        </el-form-item>
      </el-col>
     
        
      
    </el-row>

    <el-row>
      <el-col :span="8">
       <el-form-item label="项目总工作量（月）：" prop="director">
          <el-input v-model="modernCompany.director"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="企业是否由海外留学归来人员创办：" prop="director_phone">
          <el-input v-model="modernCompany.director_phone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="海外留学归来人数（人）：" prop="director_phone">
          <el-input v-model="modernCompany.director_phone"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
       <el-form-item label="项目联系人：" prop="director">
          <el-input v-model="modernCompany.director"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="移动电话：" prop="director_phone">
          <el-input v-model="modernCompany.director_phone"></el-input>
        </el-form-item>
      </el-col>
      
    </el-row>

     <el-row>
      <el-col :span="12">
       <el-form-item label="电子邮箱：" prop="director_phone">
          <el-input v-model="modernCompany.director_phone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="传真:" prop="unit_professional">
    <el-input v-model="modernCompany.unit_professional"></el-input>
  </el-form-item>
      </el-col>
      
    </el-row>

  



    </el-form>


     <el-form
      v-for="(item, index) in modernSupport"
      ref="holdForm"
      :rules="rules"
      :key="index"
      :model="modernSupport[index]"
      :disabled="isDisabledData"
      label-width="210px"
      class="demo-ruleForm"
      

    >
      <el-row class="title"> 项目组主要成员（含项目负责人） </el-row>
      <el-form-item
        label="项目负责人"
        prop="project_name"
      >
        <el-input v-model="item.project_name"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="出生年月：" prop="funding_year">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-DD"
              placeholder="选择受资助年份"
              v-model="item.funding_year"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          
          <el-form-item label="职称：" prop="funding_year">
                    <el-input v-model="item.funding_year"></el-input>
                </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="移动电话：" prop="release_no">
            <el-input v-model="item.release_no"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="最高学历：" prop="subsidy_amount">
            <el-input v-model="item.subsidy_amount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业：" prop="project_leader">
            <el-input v-model="item.project_leader"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="身份证号：" prop="phone">
            <el-input v-model="item.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="单位及职务：" prop="project_content">
        <el-input
          v-model="item.project_content"
        ></el-input>
      </el-form-item>


      <el-form-item label="承担任务：" prop="project_years">
            
            <el-input type="text" v-model="item.project_years"></el-input>
          </el-form-item>


          <el-form-item label="工作简历、主要论文、项目、获奖及专利等：" prop="project_years">
            
            <el-input  type="textarea"
          resize="none"
          rows="8" v-model="item.project_years"></el-input>
          </el-form-item>
     
    </el-form>
    <div
      class="handle"
      
    >
    <!-- :style="{ display: isDisabledData || !isHold ? 'none' : 'block' }" -->
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { UnitInfoValidator } from "../../utils/validator"
import {mapState} from 'vuex'
export default {
  data() {
    return {
      rules: UnitInfoValidator,
    };
  },
  computed:{
    ...mapState(['Modern']),
    modernCompany:{
      get(){
        this.Modern.ModernData.modernCompany['task_id'] = this.Modern.userTaskId
        //this.Modern.ModernData.modernCompany.creator = this.Modern.userName
        return this.Modern.ModernData.modernCompany
      },
      set(val){
        this.modernCompany = val
      }
    },
    modernSupport: {
      get() {
        this.Modern.ModernData.modernSupport[0]['task_id'] = this.Modern.userTaskId;
        return this.Modern.ModernData.modernSupport;
      },
      set(val) {
        // console.log(val)
        this.modernSupport = val;
      },
    },
    isDisabledData:{
      get(){
        return this.Modern.isDisabledData
      },
      set(val){
        this.isDisabledData = val
      }
    }
  },
  methods: {
    handleAddHtml() {
      let str = {
        task_id: this.Modern.userTaskId,
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
      this.modernSupport.push(str);
    },
    handleDeleteHtml() {
      let len = this.modernSupport.length;
      if (len == 1) {
        this.$message({
          message: "就剩最后一条信息了！！！",
          type: "warning",
        });
      } else {
        this.modernSupport.splice(len - 1, 1);
      }
    },
  },
}
</script>

<style>

</style>