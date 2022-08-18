<template>
  <div>
    <h2>1.地区生产总值</h2>
    <p>
      模板：吉林省产业结构转型升级报告东北地区在中国经济版图中具有举足轻重的地位。
      东北地区等老工业基地是新中国工业的摇篮。
      党和国家在东北等老工业地区集中投资建设了具有相当规模的以能源、原材料、装备制造为主的战略产业和骨干企业，为我国形成独立、完整的工业体系和国民经济体系做出重大贡献。由于种种原因，随着改革开放的不断深入，老工业基地的体制性、结构性矛盾日益显现，进一步发展面临着许多困难和问题。
    </p>
    <a-textarea
      placeholder="Basic usage"
      auto-size
      v-model="txt"
    />
    <!-- v-model="$paperArr.ch1.t1[0]" -->
    <!-- <a-textarea placeholder="Basic usage" auto-size v-model="txt" /> -->
    <!-- <textarea v-model="txt"></textarea> -->
    <p>尾部区域</p>
    <button @click="getStudents">请求学生数据</button>
    <button @click="getCars">请求学生数据</button>
  </div>
</template>

<script>
import axios from "axios";
// console.log(this.protype.$paper);
export default {
  data() {
    return { txt: "1-1" };
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/jango/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      // axios.get("http://localhost:8080/demo/cars").then(
      //   (response) => {
      //     console.log("请求成功了", response.data);
      //   },
      //   (error) => {
      //     console.log("请求失败了", error.message);
      //   }
      // );
      alert(this.$paperArr.ch1.t1[0]);
    },
  },
  beforeDestroy() {
    this.getStudents();
  },
};
</script>

<style scoped>
</style>