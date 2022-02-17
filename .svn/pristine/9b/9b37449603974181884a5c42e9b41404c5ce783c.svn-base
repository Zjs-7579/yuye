<template>
  <div>
    <!-- img pdf   -->
    <el-upload
      class="upload-demo"
      :disabled="isDisabledData"
      :action="url"
      :on-change="handleChange"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :multiple="true"
      :limit="5"
      :on-exceed="handleExceed"
      :auto-upload="true"
      :http-request="upLoadFiles"
      :file-list="fileList"
      accept=".png, .jpg, .jpeg, .pdf"
    >
      <el-button type="primary" round>上传</el-button>
      <!-- <span slot="tip" class="text">dsadsada</span> -->
      <div slot="tip" class="el-upload__tip"></div>
    </el-upload>
  </div>
</template>

<script>
import { UploadFiles, DeleteFiles } from "../../../api/Modern/upLoad";
import { mapState } from "vuex";
export default {
  props: ["isFile", "dataFiles"],
  data() {
    return {
      url: "modern/ty/task/upload",
      fileList: this.dataFiles,
      formData: {},
    };
  },
  computed: {
    ...mapState(["Modern"]),
    imageIds: {
      get() {
        return this.Modern.ModernData.imageIds;
      },
      set(val) {
        this.imageIds = val;
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
  mounted() {
    // let dataFiles = this.Modern.dataFiles
    //       .filter((item) => {
    //         return item.title == this.isFile;
    //       })[0].data;
    //console.log(dataFiles)
    //this.fileList = this.dataFiles
  },
  methods: {
    upLoadFiles() {
      //console.log(this.fileList)
      let len = this.fileList.length - 1;
      UploadFiles(this.formData).then((res) => {
        this.fileList[len]["id"] = res.data.data;
        this.fileList[len]["material_type"] = this.isFile;
        this.fileList[len]["source"] = "现代农业项目";
        //this.urlFiles.push(res.data.data)
        this.imageIds.push(res.data.data);

        this.dataFiles.push(this.fileList[len]);
        // this.dataFiles.filter(item =>{
        //   return item.title == this.isFile
        // })[0].data.push(this.fileList[len])
        //console.log(result)
        //this.$emit('myUrlFiles', {'add':res.data.data})
        this.$message.success("上传成功");
      });
      //console.log(this.fileList)
    },
    //文件数量改变
    handleChange(file, fileList) {
      this.fileList = fileList;
    },

    handleRemove(file) {
      //this.$emit('myUrlFiles', {'delete':file.id})
      DeleteFiles(file.id).then(() => {
        let r = this.imageIds.indexOf(file.id);
        let idx = this.dataFiles.filter((item, index) => {
          if (item.id == file.id) {
            return index;
          }
        });
        this.imageIds.splice(r, 1);
        this.dataFiles.splice(idx, 1);
        //this.$emit('myUrlFiles', {'delete':file.id})
        this.$message.success("删除成功");
        //console.log(res)
      });
    },

    handlePreview(file) {
      //console.log(file);
      window.open(
        "http://rent.greatbayit.com/yuye/publicrs/image/" + file.id + ".pdf"
      );
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    beforeUpload(file) {
      //console.log(file)

      var formData = new FormData();
      console.log(this.Modern.userTaskId, "👻");
      formData.append("task_id", this.Modern.userTaskId);
      formData.append("material_type", this.isFile);
      formData.append("source", "现代农业项目");
      formData.append("name", file.name);
      formData.append("file", file);
      this.formData = formData;
    },
  },
};
</script>

<style>
/* .text{
    padding-left: 40px;
    width: 200px;
    height: 40px;
    line-height: 60px;
    color: #9cc;
    font-size: 25px;
}
.el-upload__tip{
  margin-top: 15px;
  font-size: 25px;
}
.el-upload{
    text-align: left !important;
}
.el-icon-close, .el-icon-close-tip{
    
    line-height: 40px;
}
.el-upload-list__item-name{
    font-size: 25px;
    
} */
</style>
