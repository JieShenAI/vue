<template>
  <div>
    <h2>人口雷达图</h2>
    <div id="radar" class="echartsPic"></div>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/chart/radar");

export default {
  name: "RadarDemo",
  methods: {
    draw() {
      var chartDom = document.getElementById("radar");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        animation: false,
        title: {
          text: "",
        },
        legend: {
          data: [
            "rDate",
            "rValue",
            "men",
            "women",
            "city",
            "rural",
            "birth",
            "city_rValue",
          ],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "年末人口（万人）", max: 450 },
            { name: "城镇人口（万人）", max: 180 },
            { name: "乡村人口（万人）", max: 380 },
            { name: "新出生人口（万人）", max: 6 },
          ],
        },
        series: [
          {
            name: "人口",
            type: "radar",
            data: [
              { value: [402.61, 74.52, 328.1, 4.62], name: "2015年" },
              { value: [404.01, 88.85, 315.16, 4.51], name: "2016年" },
              { value: [401.36, 92.75, 308.61, 4.23], name: "2017年" },
              { value: [402.04, 95.96, 306.08, 3.9], name: "2018年" },
              { value: [402.1, 155.47, 246.63, 3.72], name: "2019年" },
              { value: [402.22, 160.93, 241.29, 3.21], name: "2020年" },
            ],
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

      this.$paper.ch2["se2"]["imgs"]["img2"] = chartBase64.slice(22);
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