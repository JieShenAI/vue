<template>
  <div>
    <p>
      模板一：美安科技新城产业发展规划未来10年间，
      伴随国内外经济环境的新变化，我国将全面落实科学发展观，
      大力推进工业化、城镇化、信息化和农业现代化，实现全国进入工业化后期阶段的战略目标。
      面对新形势和新任务，打造新平台，发展新产业，拓展新空间，建设功能化的产业新城，
      成为国内诸多地区加快发展的战略选择和主要着力点，
      并希望借此带来一方经济的繁荣兴旺和提供强劲持久的增长动力。
    </p>
    <a-textarea auto-size v-model="t1" />
    <!-- $paperArr.ch1.t1[1] -->
  </div>
</template>

<script>
export default {
  data() {
    let t1;
    let textData = this.$paper.ch1.se4;
    if (typeof textData === "undefined") {
      t1 = "";
    } else {
      t1 = textData.t1;
    }
    return {
      t1,
    };
  },
  beforeDestroy() {
    this.$paper.ch1.se4 = {
      t1: this.t1,
    };
  },
};
</script>

<style>
</style>