<template>
  <div class="AgHold">
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
        :style="{ display: isHold ? 'block' : 'none' }"
        v-for="(item, index) in agriculturalSupport"
        :rules="rules"
        :key="index"
        ref="holdForm"
        :model="agriculturalSupport[index]"
        :disabled="isDisabledData"
        label-width="210px"
        class="demo-ruleForm"
      >
        <!-- <el-row class="title"> 国家、省、市财政近三年全部支持情况 </el-row> -->
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
                placeholder="选择资助年份"
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
              <el-input type="text" v-model="item.project_years"></el-input>
              <!-- <el-date-picker 
              value-format="yyyy-MM"
              type="month"
              placeholder="选择年限" 
              v-model="item.project_years" 
              style="width: 100%;"></el-date-picker> -->
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
              <!-- <el-date-picker
              value-format="yyyy-MM"
              type="month"
              placeholder="选择验收时间"
              v-model="item.accept"
              style="width: 100%;"></el-date-picker> -->
              <!-- <el-input
                type="textarea"
                resize="none"
                rows="6"
                v-model="item.accept"
              ></el-input> -->
              <!-- <el-popconfirm
                confirm-button-text='好的'
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="red"
                title="这是一段内容确定删除吗？"
              >
              <el-date-picker slot="reference" type="date" placeholder="选择日期" v-model="item.accept" style="width: 100%;"></el-date-picker>
              </el-popconfirm> -->
            </el-form-item>

            <!-- <el-col :span="4" v-if="isAccept">
            <el-form-item prop="accept" style="background-color: red">
              <el-input type="text" v-model="item.accept"></el-input>
            </el-form-item>
          </el-col> -->
          </el-col>
          <el-col :span="8">
            <el-form-item label="未完成验收原因(已完成不填)：" prop="reasons">
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
      <el-button class="add" @click="handleDeleteHtml">删除一条</el-button>
      <el-button type="primary" class="add" @click="handleAddHtml"
        >添加一条</el-button
      >
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
      rules: HoldInfoValidator,
    };
  },
  computed: {
    ...mapState(["Agricul"]),
    agriculturalSupport: {
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.Agricul.AgriculData.agriculturalSupport[0]["task_id"] =
          this.Agricul.userTaskId;
        // this.Agricul.AgriculData.agriculturalSupport[0].creator =
        //   this.Total.userName;
        return this.Agricul.AgriculData.agriculturalSupport;
      },
      set(val) {
        this.agriculturalSupport = val;
      },
    },
    isAccept: {
      get() {
        let list = [];
        //console.log(this.Agricul.AgriculData.agriculturalSupport[0].accept)
        // this.Agricul.AgriculData.agriculturalSupport[0].creator =
        //   this.Total.userName;
        for (let item of this.Agricul.AgriculData.agriculturalSupport) {
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
        return this.Agricul.isDisabledData;
      },
      set(val) {
        this.isDisabledData = val;
      },
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
        //creator: this.Total.userName,
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
    changeIndex(value, index, item) {
      this.isAccept[index] = !value;
      if (!this.isAccept[index]) {
        item.accept = "";
      }
      this.$forceUpdate();
    },
  },
  watch: {
    isHold(per) {
      console.log(per);
      //console.log(this.agriculturalSupport)
      if (per) {
        //console.log(per)
        //console.log(this.modernSupport)
        this.handleAddHtml();
        let len = this.agriculturalSupport.length;
        this.agriculturalSupport.splice(0, len - 1);

        //console.log(this.modernSupport)
      }
      //this.$refs.holdForm.resetFields();
    },
  },
};
</script>

<style>
.AgHold .isHoldInfo {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  background-color: #f3f5f9;
}
.AgHold {
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
}
.AgHold .demo-ruleForm {
  margin-bottom: 60px;
}
.AgHold .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
}
.AgHold .title .el-input__inner {
  border: none;
  background-color: #ece8e8;
}

.AgHold .demo-ruleForm {
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
}

.AgHold .el-form-item {
  margin: 0;
  border: 1px solid #ccc;
  /* height: 60px; */
}
.AgHold .el-form-item__label {
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
.AgHold .el-form-item__content {
  border-left: 1px solid #ccc;
  line-height: 60px;
}

.AgHold .el-input__inner {
  border: none;
}
.AgHold .el-textarea__inner {
  border: none;
}
.AgHold .isAccept .el-form-item__content {
  display: flex;
}
.AgHold .isAccept .el-radio-group {
  padding: 0;
  margin: 0;
  display: block;
  flex: 1;
}
.AgHold .isAccept .el-radio {
  line-height: 60px;
  margin: 0 15px;
}
.AgHold .isAccept .el-input__inner {
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
