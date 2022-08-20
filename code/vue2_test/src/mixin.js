import axios from "axios";
// import Vue from 'vue';

export const paperMix = {
    methods: {
        // "http://localhost:8080/jango/print/post"
        postData(url, obj) {
            axios({
                url: url,
                method: "post",
                data: obj,
            }).then(
                (response) => {
                    console.log("请求成功了", response.data);
                },
                (error) => {
                    console.log("请求失败了", error.message);
                }
            );
        },
        // async queryJson(fid) {
        //     let url = "http://localhost:8080/jango/files/query?fid=" + fid;
        //     await axios.get(url).then(
        //         (response) => {
        //             Vue.prototype.$paper = response.data;
        //         },
        //         (error) => {
        //             console.log("请求失败了", error.message);
        //         }
        //     );

        // },
    }
}