<template>
  <div>
    <h2>GDP</h2>
    <div id="bar" class="echartsPic"></div>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/bar");
export default {
  methods: {
    draw() {
      let one = [122.37, 133.33, 147.18, 227.94, 244.85, 182.72, 245.05];
      let two = [257.56, 280.74, 306.72, 477.74, 515.92, 450.27, 569.02];
      let three = [465.65, 507.07, 544.51, 797.57, 849.94, 807.9, 924.8];
      let four = [670.8118, 735.7, 801.23, 1082.31, 1159.37, 1117.7, 1302.36];
      var chartDom = document.getElementById("bar");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        },
        series: [
          {
            name: "第一季度",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: one,
          },
          {
            name: "第二季度",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: two,
          },
          {
            name: "第三季度",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: three,
          },
          {
            name: "第四季度",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: four,
          },
        ],
      };

      option && myChart.setOption(option);
      if (typeof this.$paper.ch2 === "undefined") {
        this.$paper.ch2["se2"] = {};
        this.$paper.ch2["se2"]["imgs"] = {};
      }
      let chartBase64 = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: "#fff",
      });
      this.$paper.ch2["se2"]["imgs"]["img3"] = chartBase64.slice(22);
    },
  },
  mounted() {
    this.draw();
  },
};
</script>


<style scoped>
.echartsPic {
  width: 800px;
  height: 400px;
}
</style>