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
      :total="cnt * 1"
    >
      <!-- :hide-on-single-page="true" -->
    </el-pagination>
  </div>
</template>

<script>
import { getUserList } from "../../api/Admin/user";
import { getAdminList } from "../../api/Admin/role";
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
      let params = {
        page: 1,
        limit: val,
      };
      console.log(this.$route.path);
      if (this.$route.path == "/admin/user") {
        getUserList(params).then((res) => {
          this.cnt = res.data.cnt;
          //this.taskList = res.data.data
          this.$emit("dataList", res.data.data);
        });
      }

      if (this.$route.path == "/admin/role") {
        getAdminList(params).then((res) => {
          this.cnt = res.data.cnt;
          //this.taskList = res.data.data
          this.$emit("dataList", res.data.data);
        });
      }
    },
    Page(val) {
      let params = {
        page: val,
        limit: this.pageSize,
      };
      if (this.$route.path == "/admin/user") {
        getUserList(params).then((res) => {
          this.cnt = res.data.cnt;
          //this.taskList = res.data.data
          this.$emit("dataList", res.data.data);
        });
      }

      if (this.$route.path == "/admin/role") {
        getAdminList(params).then((res) => {
          this.cnt = res.data.cnt;
          //this.taskList = res.data.data
          this.$emit("dataList", res.data.data);
        });
      }
    },
  },
};
</script>

<style>
.block {
  text-align: center;
}
</style>
