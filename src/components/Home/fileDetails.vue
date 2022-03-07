<template>
  <div class="filesData">
    <el-row class="title"> 项目所附材料清单 {{ task_id }}</el-row>
    <div v-if="filesData.length > 0">
      <el-row
        v-for="(item, index) in filesData"
        :key="index"
        class="filesTable"
      >
        <el-col :span="2" style="text-align: center">{{ index + 1 }}</el-col>
        <el-col :span="16" class="filesType">
          {{ item.material_type }}
        </el-col>
        <el-col :span="6"
          ><p class="filesTypeLook" @click="lookDetailed(item.file_path)">
            {{ item.name }}
          </p></el-col
        >
      </el-row>
    </div>
    <div class="waring" v-else>当前没有上传材料清单</div>
  </div>
</template>

<script>
import { fileData } from "../../api/fileDetail";
export default {
  props: ["task_id"],
  data() {
    return {
      filesData: [],
    };
  },
  methods: {
    lookDetailed(title) {
      window.open(title);
    },
    async updata(id) {
      const data = await fileData(id);
      this.filesData = data.data.data;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updata(this.task_id);
    });
  },
  watch: {
    task_id(val) {
      fileData(val).then((res) => {
        this.filesData = res.data.data;
      });
    },
  },
};
</script>

<style>
.filesData {
  height: 400px;
  overflow: hidden;
  overflow-y: auto;
}
.filesData .title {
  background-color: #ece8e8;
  height: 60px;
  line-height: 60px;
  font-size: 25px;
  padding: 0 15px;
  font-weight: bold;
  border: 1px solid #ccc;
}
.filesData .filesTable {
  border: 1px solid #ccc;
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  color: black;
}
.filesType {
  height: 80px;
  padding-right: 30px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
}
p.filesType {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  display: inline-block;
  vertical-align: middle;
}
/* .filesType span {
  width: 100px;
  overflow-wrap: break-word;
} */
.filesType:hover {
  cursor: pointer;
}
.waring {
  font-size: 20px;
  text-align: center;
  color: #ccc;
}
</style>
