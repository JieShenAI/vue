<template>
  <div>
    <h1>恩施土家族苗族自治州产业发展总体规划 2025-2035</h1>

    <Ch1Se1 :papers="papers" />
    <Ch2Se1 :papers="papers" />
    <Ch2Se2 :papers="papers" />
    <button @click="printDocx">导出</button>
  </div>
</template>

<script>
import axios from "axios";
import Ch1Se1 from "./Ch1/Ch1Se1.vue";
import Ch2Se1 from "./Ch2/Ch2Se1.vue";
import Ch2Se2 from "./Ch2/Ch2Se2.vue";
export default {
  props: ["papers"],
  components: {
    Ch1Se1,
    Ch2Se1,
    Ch2Se2,
  },
  data() {
    return {};
  },
  methods: {
    printDocx() {
      this.postData(this.papers);
    },
    postData(arrObj) {
      axios({
        url: "/api/paper/downword/",
        method: "post",
        //发送格式为json
        data: JSON.stringify(arrObj),
        responseType: "blob",
      })
        .then((res) => {
          let resData = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });
          let dowLink = URL.createObjectURL(resData);
          var aDom = document.createElement("a");
          aDom.setAttribute("style", "display:none");
          aDom.setAttribute("href", dowLink);
          aDom.setAttribute("download", "报告" + ".docx");
          document.body.appendChild(aDom);
          aDom.click();
          URL.revokeObjectURL(dowLink);
          document.body.removeChild(aDom);
        })
        .catch((err) => {
          console.log("下载出错" + err);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
}
</style>
