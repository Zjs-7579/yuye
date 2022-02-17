<template>
  <div class="main_contain">
    <el-row class="search-container" style="padding: 5px">
      <el-radio-group
        v-model="taskType"
        style="margin-left: 10px"
        size="small"
        @change="onTaskTypeChange"
      >
        <el-radio-button label="待办">待办</el-radio-button>
        <el-radio-button label="已办">已办</el-radio-button>
        <el-radio-button label="全部">全部</el-radio-button>
      </el-radio-group>
      <el-input
        v-model="searchOption.text"
        placeholder="请输入查询内容"
        size="small"
        style="float: right; margin-right: 10px; width: 400px"
        clearable
      >
        <el-select
          slot="prepend"
          v-model="searchOption.clause"
          style="width: 120px"
          placeholder="请选择"
        >
          <el-option label="项目类型" value="项目类型" />
          <el-option label="项目名称" value="项目名称" />
          <el-option label="项目负责人" value="项目负责人" />
          <el-option label="单位名称" value="单位名称" />
          <el-option label="项目年份" value="项目年份" />
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
        :header-cell-style="changeHeaderStyle"
        border
        fit
        stripe
        size="small"
        class="tableStyle"
      >
        <el-table-column
          prop="property_name"
          label="项目类型"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="survey_type"
          label="项目名称"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="surveyor"
          label="单位名称"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="creator"
          label="项目年份"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="surveyor"
          label="项目负责人"
          min-width="150"
          align="center"
        />
        <el-table-column
          prop="operator"
          label="当前节点"
          min-width="150"
          align="center"
        />
        <el-table-column label="操作" min-width="150" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="onDeleteClick(scope.row)"
              >审核</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 5px">
        <pagination
          :total="listQuery.total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          :page-sizes="listQuery.pageSizes"
          @pagination="getTaskList"
        />
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { getFlowList } from "@/api/Agricul/flowTask";
import Pagination from "@/components/Pagination/index.vue";
export default {
  components: { Pagination },
  data() {
    return {
      taskType: "待办",
      listQuery: {
        page: 1,
        limit: 10,
        total: 0,
        pageSizes: [10, 20, 30, 50],
      },
      searchOption: {
        clause: "项目类型",
        text: "",
      },
      taskList: [],
    };
  },
  mounted() {
    this.getTaskList({ page: 1, limit: 10 });
  },
  methods: {
    //查询按钮
    onSearchTaskClick() {
      this.listQuery.page = 1;
      this.getTaskList();
    },
    onTaskTypeChange() {
      this.listQuery.page = 1;
      this.getTaskList();
    },
    getTaskList(val) {
      if (val) {
        this.listQuery.limit = val.limit;
        this.listQuery.page = val.page;
      }
      const params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        status: "初审A",
      };
      params.deal_type = this.taskType;
      if (this.searchOption.text) {
        params.task_source =
          this.searchOption.clause === "项目类型"
            ? this.searchOption.text
            : null;
        params.unit_name =
          this.searchOption.clause === "单位名称"
            ? this.searchOption.text
            : null;
        params.year =
          this.searchOption.clause === "项目年份"
            ? this.searchOption.text
            : null;
        params.task_name =
          this.searchOption.clause === "项目名称"
            ? this.searchOption.text
            : null;
        params.project_leader =
          this.searchOption.clause === "项目负责人"
            ? this.searchOption.text
            : null;
      }
      getFlowList(params).then((res) => {
        if (res.data.code === 200) {
          this.taskList = res.data.data;
          this.listQuery.total = res.data.cnt;
        }
      });
    },
    changeHeaderStyle() {
      return { backgroundColor: "#3a71a8", width: "100%", color: "#FFFFFF" };
    },
  },
};
</script>

<style scoped>
.main_contain {
  height: calc(100vh - 50px);
}
.tableBox {
  padding: 5px;
  height: calc(100% - 45px);
}
.search-container {
  height: 45px;
  padding: 4px;
  background-color: white;
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow: hidden;
}
.tableStyle {
  width: 100%;
  height: calc(100% - 55px);
}
</style>
