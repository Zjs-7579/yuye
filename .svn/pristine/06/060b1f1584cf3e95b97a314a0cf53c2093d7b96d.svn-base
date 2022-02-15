<template>
  <div>
      <el-form
      :model="modernCompany"
      ref="ruleForm"
      label-width="310px"
      :rules="rules"
      :disabled="isDisabledData"
      class="demo-ruleForm"  
    >
        <el-row class="title">
            上年末从业人员情况
        </el-row>
        <el-row type="flex">
            <!-- <div style="width: 310px" class="name">
                法人代表
            </div>
            <div>
                <el-row>
                    <el-col :span="12">
                <el-form-item label="姓名:" prop="legal_name" ref="name">
                    <el-input v-model="modernCompany.legal_name"></el-input>
                </el-form-item>
                <el-form-item label="学历:" prop="education">
                    <el-input v-model="modernCompany.education"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="移动电话:" prop="mobile_phone">
                    <el-input v-model="modernCompany.mobile_phone"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:" prop="identity">
                    <el-input v-model="modernCompany.identity"></el-input>
                </el-form-item>
            </el-col>
                </el-row>
            </div> -->
            <!-- <el-col :span="4" >
                
                 <el-form-item label="法人代表" prop="name" class="name" ref="behalf">
                </el-form-item>
            </el-col> -->
            <el-col style="width: 310px" class="name">
                法人代表
                
            </el-col>


            <el-col :span="8">
                <el-form-item label="姓名:" prop="legal_name" ref="name">
                    <el-input v-model="modernCompany.legal_name"></el-input>
                </el-form-item>
                <el-form-item label="学历:" prop="education">
                    <el-input v-model="modernCompany.education"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="移动电话:" prop="mobile_phone">
                    <el-input v-model="modernCompany.mobile_phone"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:" prop="identity">
                    <el-input v-model="modernCompany.identity"></el-input>
                </el-form-item>
            </el-col>
        </el-row>



        <el-row type="flex">
            <el-col :span="8">
                 <el-form-item label="从业人员总数:" prop="employees_num">
                    <el-input v-model="modernCompany.employees_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="其中女职工数:" prop="female_workerss_num">
                    <el-input v-model="modernCompany.female_workerss_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="留学归国人员数:" prop="overseas_num">
                    <el-input v-model="modernCompany.overseas_num"></el-input>
                </el-form-item>
            </el-col>
        </el-row>


        <el-row type="flex">
            <el-col :span="8">
                 <el-form-item label="参加社保人数:" prop="social_security_num">
                    <el-input v-model="modernCompany.social_security_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="外籍专家人数:" prop="foreign_experts_num">
                    <el-input v-model="modernCompany.foreign_experts_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="新增高校毕业生:" prop="graduate_num">
                    <el-input v-model="modernCompany.graduate_num"></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <!-- <el-row>
            <el-col :span="4">
                 <el-form-item label="行政管理人数:" prop="num_1">
                    <el-input v-model="sum1[0]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="市场营销人数:" prop="num_1">
                    <el-input v-model="sum1[1]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="研发设计人数:" prop="num_1">
                    <el-input v-model="sum1[2]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                 <el-form-item label="加工制造人数:" prop="num_1">
                    <el-input v-model="sum1[0]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="其他从业人数:" prop="num_1">
                    <el-input v-model="sum1[1]"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="研发设计人数:" prop="num_1">
                    <el-input v-model="sum1[2]"></el-input>
                </el-form-item>
            </el-col>
        </el-row> -->


        <!-- <el-form-item label="行政管理/市场营销/研发设计/加工制造/其他从业人数:" prop="num_1" class="Tlabel" >
            <el-input v-model="sum1[3]" placeholder="加工制造"></el-input>
            <el-input v-model="sum1[4]" placeholder="其他从业人数"></el-input>
        </el-form-item>
        <el-form-item label="博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:" prop="num_2" class="Tlabel">
            <el-input v-model="sum2[0]" placeholder="博士毕业"></el-input>
            <el-input v-model="sum2[1]" placeholder="硕士毕业"></el-input>
            <el-input v-model="sum2[2]" placeholder="本科毕业"></el-input>
            <el-input v-model="sum2[3]" placeholder="专科毕业"></el-input>
            <el-input v-model="sum2[4]" placeholder="其他从业人数"></el-input>
        </el-form-item>
        <el-form-item label="高级职称/中级职称/初级职称/其他从业人数:" prop="num_3" class="Tlabel">
            <el-input v-model="sum3[0]" placeholder="高级职称"></el-input>
            <el-input v-model="sum3[1]" placeholder="中级职称"></el-input>
            <el-input v-model="sum3[2]" placeholder="初级职称"></el-input>
            <el-input v-model="sum3[3]" placeholder="其他从业人数"></el-input>
        </el-form-item> -->
      </el-form>

       <el-form
      :model="modernCompany"
      ref="ruleForm"
      label-width="150px"
      :rules="rules"
      :disabled="isDisabledData"
      class="demo-ruleForm"  
    >
        <el-row class="titleSmall">
            行政管理/市场营销/研发设计/加工制造/其他从业人数:
        </el-row>
        <el-row>
            <el-col :span="5">
                 <el-form-item label="行政管理人数:" prop="admin_num">
                    <el-input v-model="modernCompany.admin_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="市场营销人数:" prop="market_num">
                    <el-input v-model="modernCompany.market_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="研发设计人数:" prop="develop_num">
                    <el-input v-model="modernCompany.develop_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                 <el-form-item label="加工制造人数:" prop="manuf_num">
                    <el-input v-model="modernCompany.manuf_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="其他从业人数:" prop="admin_other_num">
                    <el-input v-model="modernCompany.admin_other_num"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
  
        <el-row class="titleSmall">
            博士毕业/硕士毕业/本科毕业/专科毕业/其他从业人数:
        </el-row>
        <el-row>
            <el-col :span="5">
                 <el-form-item label="博士毕业人数:" prop="doctoral_num">
                    <el-input v-model="modernCompany.doctoral_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="硕士毕业人数:" prop="master_num">
                    <el-input v-model="modernCompany.master_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="本科毕业人数:" prop="under_num">
                    <el-input v-model="modernCompany.under_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                 <el-form-item label="专科毕业人数:" prop="speci_num">
                    <el-input v-model="modernCompany.speci_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="其他从业人数:" prop="edu_other_num">
                    <el-input v-model="modernCompany.edu_other_num"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
   
        <el-row class="titleSmall">
            高级职称/中级职称/初级职称/其他从业人数:
        </el-row>
        <el-row>
            <el-col :span="5">
                 <el-form-item label="正高级职称人数:" prop="senior_num">
                    <el-input v-model="modernCompany.senior_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                 <el-form-item label="副高级职称人数:" prop="deputy_num">
                    <el-input v-model="modernCompany.deputy_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="中级职称人数:" prop="middle_num">
                    <el-input v-model="modernCompany.middle_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="初级职称人数:" prop="primary_num">
                    <el-input v-model="modernCompany.primary_num"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="其他从业人数:" prop="title_other_num">
                    <el-input v-model="modernCompany.title_other_num"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
       </el-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {ModernUnitEmpForm} from '../../../utils/validator'
export default {
    data(){
        return {
            numOne:[],
            numTwo:[],
            numThree:[],
            // sum1: [],
            // sum2: [],
            // sum3: [],
            rules: ModernUnitEmpForm
        }
    },
    computed:{
        ...mapState(['Modern']),
        modernCompany:{
            get(){
                //12/12/124/
                this.Modern.ModernData.modernCompany['num_1']=this.numOne.join("/")
                this.Modern.ModernData.modernCompany['num_2']=this.numTwo.join("/")
                this.Modern.ModernData.modernCompany['num_3']=this.numThree.join("/")
                return this.Modern.ModernData.modernCompany
            },
            set(val){
                this.modernCompany = val
            }
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
    // mounted() {
    //     console.log(this.$refs.behalf)
    //     console.log(this.$refs.name)
    // },
    // watch: {
    //     modernCompany:{
    //         handler(val){
    //             // if(val.numOne.length && val.numTwo.length && val.numThree.length){
                
    //             // }
                    
    //                 let sum1 = this.numOne.join("/")
    //                 let sum2 = this.numTwo.join("/")
    //                 let sum3 = this.numThree.join("/")
    //                 val['sum_1'] = sum1
    //                 val['sum_2'] = sum2
    //                 val['sum_3'] = sum3
    //             // val.sum_1 = sum1
    //             // val.sum_2 = sum2
    //             // val.sum_3 = sum3
    //             console.log(val)
    //         },
    //         deep: true
    //     }
    // }
}
</script>

<style>

.Tlabel .el-form-item__label{
    line-height: 30px !important;
}
.Tlabel .el-input{
    width: 20%; 
    display: inline-block
}
.titleSmall{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background-color: #ece8e8;
    padding-left: 15px;
}
.name{
    /* display: inline-block; */
    height: 122px; 
    font-size: 20px; 
    line-height: 122px;
    text-align: center;
}

</style>