<template>
  <div id="app">
    <ShowPaper />
  </div>
</template>

<script>
import ShowPaper from './components/ShowPaper.vue';
export default {
  name: 'App',
  components: {
    ShowPaper,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
