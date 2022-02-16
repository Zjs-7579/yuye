<template>
  <div class="AgDetails">
    <DetailsInfo></DetailsInfo>
  </div>
</template>

<script>
import { detailsInspectData } from "../../api/searchDetailsInspect";
import DetailsInfo from "../../components/AgriculInfo/CreateInfo/detailsInfo.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: "",
    };
  },
  computed: {
    ...mapState(["Agricul"]),
  },
  mounted() {
    //console.log(this.$route.query.id);
    detailsInspectData(this.$route.query.id).then((res) => {
      console.log(res);
      this.Agricul.AgriculData = res.data.data;
    });
  },
  components: {
    DetailsInfo,
  },
};
</script>

<style>
.AgDetails .DataContent {
  height: 90vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 15px;
  background-color: #fff;
}
.AgDetails .DataContent .Agtabel,
.AgDetails .DataContent .AgPerson,
.AgDetails .DataContent .AgHold,
.AgDetails .DataContent .AgCountable {
  height: auto;
  margin-bottom: 20px;
}

.AgDetails .DataContent .Aginancial .dataRow,
.AgDetails .DataContent .AgUpload .dataRow {
  overflow: visible;
  overflow-y: visible;
  margin-bottom: 20px;
}
</style>
