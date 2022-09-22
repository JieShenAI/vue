<template>
  <div>
    id2: {{id2}}
  </div>
</template>

<script>

export default {
  name: "MyDemo",
  props: ['id'],
  data() {
    return {
      id2: this.id,
    }
  },
  created() {
    // this.id2 = this.id;
    // console.log("created");
    // console.log(this.id);
  },
  mounted() {
    // console.log("mounted");
    // console.log(this.id);
  },
  components: {
  },
  methods: {
  },
};
</script>

<style>

</style>
