<template>
  <div>
    <MyTable />
    <div style="height: 400px">
      <RadarChart />
    </div>
    <div style="height: 400px">
      <ChartData />
    </div>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
import RadarChart from "@/components/RadarChart.vue";
import ChartData from "@/components/ChartData.vue";

export default {
  components: {
    MyTable,
    RadarChart,
    ChartData,
  },
};
</script>

<style>
</style>