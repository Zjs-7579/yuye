<template>
  <div>
    <p><span class="img"></span><span>申报指引</span></p>
    <ul>
      <li v-for="item in tableData" :key="item.id" @click="lookPDF(item)">
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { policyData } from "../../api/login";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    ...mapState(["Total"]),
  },
  mounted() {
    policyData("2").then((res) => {
      //console.log(res)
      this.tableData = res;
    });
  },
  methods: {
    lookPDF(item) {
      console.log(item);
      window.open(this.Total.DownAddress + item.file_name);
    },
  },
};
</script>

<style scoped>
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  font-size: 20px;
  padding: 8px 0;
  display: flex;
}
ul {
  display: block;
  list-style: none;
  width: 96%;
  margin: 0 auto;

  overflow: hidden;
  overflow-y: auto;
}
ul li {
  padding: 5px 0;
  border-bottom: 0.5px solid #ccc;
  cursor: pointer;
}
ul li span:nth-child(2) {
  float: right;
}
li:hover {
  background-color: #f3f5f9;
}
.img {
  display: block;
  width: 24px;
  height: 27px;
  margin: 0 8px;
  background-image: url("../../assets/login/操作指引@2x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
