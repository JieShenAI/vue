<template>
  <div>
    <!-- <img :src="serverStaticPath('/img/ch2-1.png')" alt="" /> -->
    <!-- <button @click="show">点击</button> -->
    Test
    <router-link :to="{
      path: '/demo',
      query: {
        id: 132,
      },
    }">点击</router-link>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style>

</style>
