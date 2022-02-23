<template>
  <div
    class="main_contain"
    v-loading="Loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-row class="search-container" style="padding: 5px">
      <!-- <el-radio-group
        v-model="taskType"
        style="margin-left: 10px"
        size="small"
        @change="onTaskTypeChange"
      >
        <el-radio-button label="待办">待办</el-radio-button>
        <el-radio-button label="已办">已办</el-radio-button>
        <el-radio-button label="全部">全部</el-radio-button>
      </el-radio-group> -->
      <el-input
        v-model="text"
        placeholder="请输入查询内容"
        size="small"
        style="float: right; margin-right: 10px; width: 400px"
        clearable
      >
        <el-select
          slot="prepend"
          v-model="clause"
          style="width: 120px"
          placeholder="请选择"
        >
          <el-option label="项目年份" value="pro_year" />
          <el-option label="项目类型" value="task_source" />
          <el-option label="项目名称" value="task_name" />
          <el-option label="项目负责人" value="project_leader" />
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="onSearchTaskClick"
        />
      </el-input>
    </el-row>

    <el-row class="tableBox">
      <el-table
        ref="taskTable"
        :data="taskList"
        border
        height="100%"
        :header-cell-style="{ backgroundColor: '#3a71a8', color: '#fff' }"
        size="small"
        class="tableStyle"
      >
        <el-table-column
          prop="pro_year"
          label="项目年份"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="task_source"
          label="项目类型"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="task_name"
          label="项目名称"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="unit_name"
          label="单位名称"
          min-width="150"
          align="center"
        />

        <el-table-column
          prop="create_time"
          label="提交时间"
          min-width="150"
          align="center"
        />

        <el-table-column
          prop="project_Leader"
          label="项目负责人"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="status"
          label="当前节点"
          min-width="150"
          align="center"
        />
        <el-table-column label="操作" min-width="120" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="onFlowDetailsClick(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>
        <!-- <el-table-column label="操作" min-width="120" align="center" >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="onFlowClick(scope.row)"
              >审核</el-button
            >
          </template>
        </el-table-column> -->
      </el-table>
      <!-- <el-row type="flex" justify="center" style="margin-top: 5px">
        <pagination
          :total="listQuery.total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          :page-sizes="listQuery.pageSizes"
          @pagination="getTaskList"
        />
      </el-row> -->
    </el-row>

    <el-row>
      <Pagination :cnt="cnt" @dataList="list"></Pagination>
    </el-row>
  </div>
</template>

<script>
import { getFlowList } from "../../api/User/createInfo";
import Pagination from "./pagination.vue";
import { Detail } from "../../utils/Todo";
//import Pagination from "@/components/Pagination/index.vue";
export default {
  components: { Pagination },
  data() {
    return {
      text: "",
      clause: "pro_year",
      taskList: [],
      user_type: "",
      cnt: 0,
      Loading: false,
    };
  },
  methods: {
    list(val) {
      this.taskList = val;
    },
    onSearchTaskClick() {
      //console.log(this.clause)
      //console.log(this.$route)
      let params = {
        page: 1,
        limit: 10,
        status: this.user_type,
        deal_type: this.$route.meta.title,
      };
      params[this.clause] = this.text;
      getFlowList(params).then((res) => {
        //console.log(res)
        this.taskList = res.data.data;
      });
    },
    onFlowDetailsClick(row) {
      console.log(this.$router, row);
      //row["route"] = this.$route.path;
      this.Loading = true;
      let status = Detail(row, this.$router, this.$store);
      if (status == 0) {
        this.$message.warning("数据出错");
      }
      if (status == 200) {
        this.Loading = false;
      }
      // console.log(this.$route);
      // if (row.task_source == "农业产业化贴息项目") {
      //   this.$store.commit("Agricul_IsDetailsContentOpen");
      //   this.$router.push({
      //     path: `${this.$route.path}/detailInspect?&type=${row.task_source}&id=${row.task_id}`,
      //   });
      // }
    },
  },
  mounted() {
    //console.log(this.$route.meta.title)
    let user_type;
    if (this.$route.params.id == 1) {
      user_type = "初审A";
    }
    if (this.$route.params.id == 2) {
      user_type = "初审B";
    }
    if (this.$route.params.id == 3) {
      user_type = "复审A";
    }
    if (this.$route.params.id == 4) {
      user_type = "复审B";
    }
    this.user_type = user_type;
    let params = {
      page: 1,
      limit: 10,
      status: user_type,
      deal_type: this.$route.meta.title,
    };
    getFlowList(params).then((res) => {
      this.cnt = res.data.cnt;
      this.taskList = res.data.data;
    });

    //   console.log('dsadsadas')
    // getFlowList(params).then(res=>{
    //     console.log(res)
    // })
  },
};
</script>

<style>
.main_contain {
  height: calc(100vh - 60px);
  background-color: #fff;
}
.main_contain .tableBox {
  padding: 5px;
  height: calc(100% - 110px);
}
.main_contain .search-container {
  height: 45px;
  padding: 4px;
  background-color: white;
  -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow: hidden;
}
.main_contain .tableStyle {
  width: 100%;
  height: calc(100% - 55px);
}
</style>
