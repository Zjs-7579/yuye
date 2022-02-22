<template>
  <div class="MoHold">
    <p
      class="isHoldInfo"
      :style="{ display: isDisabledData ? 'none' : 'block' }"
    >
      是否有国家、省、市财政近三年全部支持情况文件&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- <el-switch
        v-model="isHold"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="是"
        inactive-text="否"
      >
      </el-switch> -->
      <el-radio-group v-model="isHold">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </p>
    <div v-if="isHold">
      <el-form
        v-for="(item, index) in modernSupport"
        ref="holdForm"
        :disabled="isDisabledData"
        :rules="rules"
        :key="index"
        :model="modernSupport[index]"
        label-width="210px"
        class="demo-ruleForm"
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
              <el-date-picker
                type="year"
                value-format="yyyy"
                placeholder="选择受资助年份"
                v-model="item.funding_year"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
            <!-- <el-form-item label="受资助年份：" prop="funding_year">
                    <el-input v-model="item.funding_year"></el-input>
                </el-form-item> -->
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
              <!-- <el-input type="textarea" resize="none"
          rows="6" v-model="item.project_years"></el-input>-->
              <!-- <el-date-picker
              value-format="yyyy-MM"
              type="month"
              placeholder="选择年限"
              v-model="item.project_years"
              style="width: 100%"
            ></el-date-picker> -->
              <el-input type="text" v-model="item.project_years"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="是否完成验收及时间："
              :prop="isAccept[index] ? 'accept' : ''"
              class="isAccept"
            >
              <el-radio-group
                v-model="isAccept[index]"
                @change="(value) => changeIndex(value, index, item)"
              >
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>

              <el-date-picker
                v-if="isAccept[index]"
                value-format="yyyy-MM-DD"
                type="date"
                placeholder="选择验收时间"
                v-model="item.accept"
                style="width: 60%"
              ></el-date-picker>
              <!-- <el-input type="textarea" resize="none"
          rows="6" v-model="item.accept"></el-input>-->
              <!-- <el-date-picker 
                        value-format="yyyy-MM"
                        type="month" 
                        placeholder="选择验收时间" 
                        v-model="item.accept" 
                        style="width: 100%;"></el-date-picker> -->
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="未完成验收原因(已完成不填)：" prop="reasons">
              <!-- <el-input type="textarea" resize="none"
          rows="6" v-model="item.reasons"></el-input> -->
              <el-input type="text" v-model="item.reasons"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div
      class="handle"
      :style="{ display: isDisabledData || !isHold ? 'none' : 'block' }"
    >
      <el-button type="primary" @click="handleAddHtml">添加一条</el-button>
      <el-button @click="handleDeleteHtml">删除一条</el-button>
    </div>
  </div>
</template>

<script>
import { HoldInfoValidator } from "../../../utils/validator";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isHold: true,
      //isAccept: false,
      rules: HoldInfoValidator,
    };
  },
  computed: {
    ...mapState(["Modern"]),
    modernSupport: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Modern.ModernData.modernSupport[0]["task_id"] = this.Modern.userTaskId;
        return this.Modern.ModernData.modernSupport;
      },
      set(val) {
        // console.log(val)
        this.modernSupport = val;
      },
    },
    isAccept: {
      get() {
        let list = [];
        //console.log(this.Agricul.AgriculData.agriculturalSupport[0].accept)
        // this.Agricul.AgriculData.agriculturalSupport[0].creator =
        //   this.Total.userName;
        for (let item of this.Modern.ModernData.modernSupport) {
          if (item.accept == "") {
            list.push(false);
          } else {
            list.push(true);
          }
        }
        console.log(list);
        // if(this.Agricul.AgriculData.agriculturalSupport.accept){
        //   return true
        // }else{
        //   return false
        // }
        //return this.Agricul.AgriculData.agriculturalSupport.accept;
        return list;
      },
      set(val) {
        this.isAccept = val;
      },
    },
    isDisabledData: {
      get() {
        return this.Modern.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
    },
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
    changeIndex(value, index, item) {
      this.isAccept[index] = !value;
      if (!this.isAccept[index]) {
        item.accept = "";
      }
      this.$forceUpdate();
    }
  },
  watch: {
    isHold(per) {
      if (per) {
        console.log(per);
        console.log(this.modernSupport);
        this.handleAddHtml();
        let len = this.modernSupport.length;
        this.modernSupport.splice(0, len - 1);

        console.log(this.modernSupport);
      }
      // if(per != old){

      //   if(old){
      //     let len = this.modernSupport.length;
      //     this.modernSupport.splice(0, len-1)
      //     this.handleAddHtml()

      //   }

      //this.$refs.holdForm.resetFields();
    },
  },
};
</script>

<style>
.MoHold {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.MoHold .isHoldInfo {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  background-color: #f3f5f9;
}
.MoHold .demo-ruleForm {
  margin-bottom: 60px;
}
.MoHold .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
}
.MoHold .title .el-input__inner {
  border: none;
  background-color: #ece8e8;
}

.MoHold .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.MoHold .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.MoHold .el-form-item__label {
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
.MoHold .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.MoHold .el-input__inner {
  border: none;
}
.MoHold .el-textarea__inner {
  border: none;
}
.MoHold .isAccept .el-form-item__content {
  display: flex;
}
.MoHold .isAccept .el-radio-group {
  padding: 0;
  margin: 0;
  display: block;
  flex: 1;
}
.MoHold .isAccept .el-radio {
  line-height: 60px;
  margin: 0 15px;
}
.MoHold .isAccept .el-input__inner {
  line-height: 40px;
  flex: 2;
}
.handle {
  width: 515px;
  margin: 20px auto;
}
.handle button {
  margin: 0 100px;
}
</style>
