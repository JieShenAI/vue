<template>
    <div>
        <div ref="ali">
            <p>Alice p1</p>
            <div>
                <p>{{ "内部元素 " + newDate.toString() }}</p>
            </div>
            <p>发送请求，请求得到的数据是：</p>
            {{ info }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            newDate: new Date(),
            // ht: this.$refs["ali"].innerText
            info: "init info",
        }
    },
    created() {

    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            // let url = "http://43.138.108.69:8080/jie/files/query?fid=8888";
            axios.get("http://localhost:8082/api/files/query?fid=8888").then(
                (response) => {
                    console.log("请求成功了", response.data);
                    console.log(this.info);
                    this.info = response.data;
                    setTimeout(() => {
                        this.$emit("back", 1, 1, this.$refs.ali.innerText)
                    }, 200);
                },
                (error) => {
                    console.log("请求失败了", error.message);
                }
            );
        },
    },
}
</script>

<style>
</style>