<template>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="Page"
      :page-sizes="[10, 20, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="cnt"
    >
    </el-pagination>
    <!-- :hide-on-single-page="true" -->
  </div>
</template>

<script>
import { getFlowList } from "../../api/User/createInfo";
export default {
  props: ["cnt"],
  data() {
    return {
      Page: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.Page = val;
    },
  },
  watch: {
    pageSize(val) {
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
      let params = {
        page: 1,
        limit: val,
        status: user_type,
        deal_type: this.$route.meta.title,
      };
      getFlowList(params).then((res) => {
        //this.cnt = res.data.cnt
        //this.taskList = res.data.data
        this.$emit("dataList", res.data.data);
      });
    },
    Page(val) {
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
      let params = {
        page: val,
        limit: this.pageSize,
        status: user_type,
        deal_type: this.$route.meta.title,
      };
      getFlowList(params).then((res) => {
        //this.cnt = res.data.cnt
        //this.taskList = res.data.data
        this.$emit("dataList", res.data.data);
      });
    },
  },
};
</script>

<style>
.block {
  text-align: center;
}
</style>
