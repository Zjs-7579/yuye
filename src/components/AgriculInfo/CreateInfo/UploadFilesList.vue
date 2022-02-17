<template>
  <div class="uploadListText">
    <p class="title">上传文件目录：</p>
    <!-- {{uploadUrlData}} -->
    <el-row :gutter="12">
      <el-col v-for="item in uploadUrlData" :key="item.id" :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}：</span>
          </div>
          <div
            class="text item"
            v-for="(data, index) in item.data"
            :key="index"
          >
            {{ data.name }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Agricul"]),
    uploadUrlData: {
      get() {
        let result = this.Agricul.uploadUrlData.filter((item) => {
          return item.data.length;
        });
        return result;
      },
      set(val) {
        this.uploadUrlData = val;
      },
    },
  },
};
</script>

<style>
/* .uploadListText .box-card {
  width: 100%;
} */
.uploadListText .title {
  font-size: 25px;
  font-weight: bold;
}
.uploadListText .el-col {
  margin: 12px 0;
}
.uploadListText span {
  font-weight: bold;
}
.uploadListText .text {
  font-size: 14px;
}

.uploadListText .item {
  padding: 18px 0;
}
</style>
