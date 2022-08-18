<template>
  <div>
    <p>
      模板：吉林省产业结构转型升级报告东北地区在中国经济版图中具有举足轻重的地位。
      东北地区等老工业基地是新中国工业的摇篮。
      党和国家在东北等老工业地区集中投资建设了具有相当规模的以能源、原材料、装备制造为主的战略产业和骨干企业，
      为我国形成独立、完整的工业体系和国民经济体系做出重大贡献。
      由于种种原因，随着改革开放的不断深入，老工业基地的体制性、结构性矛盾日益显现，进一步发展面临着许多困难和问题。
    </p>
    <a-textarea auto-size v-model="t1" />
  </div>
</template>

<script>
export default {
  data() {
    let t1;
    let textData = this.$paper.ch1.se1;
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
    this.$paper.ch1.se1 = {
      t1: this.t1,
    };
  },
};
</script>

<style>
</style>