<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
    <button @click="upImg">点击</button>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/grid");
require("echarts/lib/chart/line");

export default {
  data() {
    return {
      imgData: "",
    };
  },
  mounted() {
    this.imgData = this.draw();
  },
  methods: {
    draw() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        animation: false,
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
      let chartBase64 = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: "#fff",
      });
      console.log(chartBase64);
      return chartBase64;
    },
    upImg() {
      // console.log(myChart);
      // console.log(this.imgData);
      let url = "http://localhost:8080/jango/print/post";
      this.postData(url, {
        img: this.imgData.slice(22),
      });
    },
  },
};
</script>

<style>
</style>