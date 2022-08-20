<template>
  <div>
    <h2>axios GET POST</h2>
    <button @click="get">query</button>
    <button @click="postData">postData</button>
    <button @click="getData">queryJson</button>
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
    get() {
      axios.get("http://localhost:8080/jango/files/query?fid=1").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    postData() {
      axios({
        url: "http://localhost:8080/jango/print/post",
        method: "post",
        data: { name: "jiejie", age: 18, arr: [1, 2, 3] },
      }).then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getData() {
      let obj = this.queryJson("save");
      console.log(obj);
    },

    // JSON.stringify()

    // getStudents() {
    //   axios.get("http://localhost:8080/jango/students").then(
    //     (response) => {
    //       console.log("请求成功了", response.data);
    //     },
    //     (error) => {
    //       console.log("请求失败了", error.message);
    //     }
    //   );
    // },
    // getCars() {
    //   // axios.get("http://localhost:8080/demo/cars").then(
    //   //   (response) => {
    //   //     console.log("请求成功了", response.data);
    //   //   },
    //   //   (error) => {
    //   //     console.log("请求失败了", error.message);
    //   //   }
    //   // );
    //   alert(this.$paperArr.ch1.t1[0]);
    // },
    postTest() {
      axios
        .post("http://localhost:8080/jango/print/post", {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  beforeDestroy() {
    this.getStudents();
  },
};
</script>

<style scoped>
</style>