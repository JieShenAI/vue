<template>
  <div>
    <div ref="box" id="show">show</div>
    <MyTest />
    <button @click="addHtml">点击</button>
  </div>
</template>

<script>
// import Ch1Se1 from "../papers/Ch1/Ch1Se1.vue";
import MyTest from "./MyTest.vue";
export default {
  components: {
    // Ch1Se1,
    MyTest,
  },
  methods: {
    addHtml() {
      // this.$refs.box.innerHTML = "<mytest />";
      this.$refs.box.childNodes = "<MyTest />";
    },
  },
};
</script>

<style></style>
