<template>
  <div class="applyContent">
    <div class="titleImg">
      <div class="img">
        <span> </span>
        <span>我的申报</span>
        <button
          class="btnDeal"
          style="border: 1px solid #e6a23c; color: #e6a23c"
          @click="handleProcess"
        >
          办理中
        </button>
        <button
          class="btnDeal"
          style="border: 1px solid #67c23a; color: #67c23a"
          @click="handleEnd"
        >
          已办结
        </button>
      </div>

      <div>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="申报年份" value="pro_year"></el-option>
            <el-option label="项目名称" value="task_name"></el-option>
            <el-option label="申请类别" value="task_source"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchData"
          ></el-button>
        </el-input>
      </div>
    </div>
    <el-table
      height="310"
      max-height="310"
      :data="tableData"
      border
      :header-cell-style="{
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        color: '#000',
      }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column width="80" label="申报年份" prop="pro_year">
      </el-table-column>
      <el-table-column label="申请类别" prop="task_source"> </el-table-column>

      <el-table-column label="项目名称" prop="task_name"> </el-table-column>

      <el-table-column width="100" label="项目状态" prop="declare_status">
      </el-table-column>

      <!-- <el-table-column
      width="140"
      label="审核意见"
      prop="note">
    </el-table-column> -->

      <el-table-column width="200" label="申请时间" prop="create_time">
      </el-table-column>

      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            style="background-color: #eeeeee"
            @click="handleDetails(scope.row)"
            v-loading.fullscreen.lock="Loading"
            >{{
              scope.row.declare_status == "待提交" ? "编辑" : "详情"
            }}</el-button
          >
          <el-button
            size="mini"
            style="background-color: #eeeeee"
            @click="handleProgress(scope.row)"
            >进度</el-button
          >

          <el-button
            size="mini"
            :style="{
              display: scope.row.declare_status == '待提交' ? '' : 'none',
            }"
            style="background-color: #eeeeee"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >

          <el-button
            :style="{
              display: scope.row.declare_status == '审核中' ? '' : 'none',
            }"
            size="mini"
            style="background-color: #eeeeee"
            @click="handleFile(scope.row)"
            >材料</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 进度 -->
    <el-dialog title="项目进度" :visible.sync="progressVisible" width="50%">
      <ProgressDetails :task_id="task_id"></ProgressDetails>
    </el-dialog>

    <!-- 材料 -->
    <el-dialog title="材料详情" :visible.sync="fileVisible" width="50%">
      <FileDetails :task_id="task_id"></FileDetails>
    </el-dialog>
  </div>
</template>

<script>
import { searchData, searchDataTitle, deleteData } from "../../api/login";
//import { agriculTodo, modernTodo, safetyTodo } from "../../utils/Todo";
//import { judge } from "../../utils/agricul/agriculData";
import { judge } from "../../utils/Todo";
import ProgressDetails from "./progressDetails.vue";
import FileDetails from "./fileDetails.vue";
export default {
  data() {
    return {
      progressVisible: false,
      fileVisible: false,
      tableData: [],
      input: "",
      select: "",
      task_id: "",
      Loading: false,
    };
  },
  components: {
    ProgressDetails,
    FileDetails,
  },
  methods: {
    searchData() {
      searchDataTitle(this.select, this.input).then((res) => {
        this.tableData = res;
      });
    },
    handleDetails(row) {
      this.Loading = true;
      let status = judge(row, this.$router, this.$store);
      if (status == 0) {
        this.Loading = false;
        this.$message.warning("数据出错");
        this.$router.push({
          path: "/home",
        });
      }
      if (status == 200) {
        this.Loading = false;
      }
      // if (row.task_source == "农产品质量安全检测能力建设项目") {
      //   safetyTodo(row, this.$router, this.$store);
      // }

      // if (row.task_source == "远洋渔业项目" && row.status == "待提交") {
      //   this.$router.push({
      //     path: `/fishingGuidesInfo?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }
      // if (row.task_source == "远洋渔业项目" && row.status != "待提交") {
      //   //this.$store.commit("Modern_IsDetailsContentOpen");
      //   this.$router.push({
      //     path: `/modernInfo/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }
    },
    handleProgress(row) {
      this.progressVisible = true;
      this.task_id = row.task_id;
      // if (row.task_source == "农业产业化贴息项目") {
      //   this.$router.push({
      //     path: `/agriculInfo/progressDetails?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }

      // if (row.task_source == "现代农业项目") {
      //   this.$router.push({
      //     path: `/modernInfo/progressDetails?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }

      // if (row.task_source == "远洋渔业项目") {
      //   this.$router.push({
      //     path: `/fishingGuidesInfo/progressDetails?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }
    },
    handleFile(row) {
      this.fileVisible = true;
      this.task_id = 0;
      this.task_id = row.task_id;
    },
    handleDelete(row) {
      console.log(row.task_id);

      //console.log(idx[0])
      if (row.declare_status == "待提交") {
        deleteData(row.task_id).then(() => {
          this.tableData.forEach((res, index) => {
            if (res.task_id == row.task_id) {
              this.tableData.splice(index, 1);
            }
          }),
            this.$message.success("删除成功");
        });
      }
    },
    handleProcess() {
      searchDataTitle("deal_type", "办理中").then((res) => {
        this.tableData = res;
      });
    },
    handleEnd() {
      searchDataTitle("deal_type", "已办结").then((res) => {
        this.tableData = res;
      });
    },
  },
  mounted() {
    searchData(1, 10).then((res) => {
      //console.log(res)
      this.tableData = res;
    });
  },
};
</script>

<style>
.applyContent .el-table {
  width: 98%;
  margin: 0 auto;
}
/* .applyContent .el-table_1_column_6{
  background-color: cornflowerblue;
} */
.applyContent .el-table__row .el-table__cell .cell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* .el-table_1_column_6 .cell{
  display: flex;
  justify-content: space-around;
  background-color: chartreuse;
} */
.applyContent .titleImg {
  font-size: 20px;
  padding: 8px 0;
  display: flex;
}
.applyContent .titleImg .img {
  display: flex;
}
.applyContent .titleImg .img span:nth-child(1) {
  display: block;
  width: 24px;
  height: 27px;
  margin: 0 8px;
  background-image: url("../../assets/login/申报@2x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.applyContent .titleImg .img span {
  display: block;
}
.applyContent .titleImg .btnDeal {
  display: inline-block;
  padding: 0px 15px;
  margin-left: 15px;
  font-size: 16px;
  height: 30px;
  background-color: white;
  border-radius: 3px;
}
.applyContent .titleImg div:nth-child(1) {
  flex: 2;
}
.applyContent .titleImg div:nth-child(2) {
  flex: 1;
  margin-right: 1%;
}
.applyContent .titleImg div:nth-child(2) .el-select {
  width: 130px;
}

/* .titleImg div:nth-child(2) .input-with-select .el-input-group__prepend {
    background-color: #fff;
  } */
</style>
