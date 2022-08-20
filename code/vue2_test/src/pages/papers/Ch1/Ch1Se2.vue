<template>
  <div>
    <p>
      模板：吉林省产业结构转型升级报告2003 年，
      温家宝两次赴东北，实地考察了部分国有大企业，多次召开座谈会讨论振兴东北老工业基地大计，强调要把老工业基地调整、改造和振兴摆到更加突出的位置，走出加快振兴新路子。
    </p>
    <a-textarea auto-size v-model="t1" />
    <!-- $paperArr.ch1.t1[1] -->
  </div>
</template>

<script>
export default {
  data() {
    let t1;
    let textData = this.$paper.ch1.se2;
    if (typeof textData === "undefined") {
      t1 =
        "吉林省产业结构转型升级报告2003 温家宝两次赴东北，实地考察了部分国有大企业，多次召开座谈会讨论振兴东北老工业基地大计，强调要把老工业基地调整、改造和振兴摆到更加突出的位置，走出加快振兴新路子。";
    } else {
      t1 = textData.txts.t1;
    }
    return {
      t1,
    };
  },
  beforeDestroy() {
    this.$paper.ch1.se2 = {
      txts: {
        t1: this.t1,
      },
    };
  },
};
</script>

<style>
</style>