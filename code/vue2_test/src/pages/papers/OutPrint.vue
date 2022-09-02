<template>
    <div>
        <div ref="content">
            <div>
                <h1>恩施土家族苗族自治州产业发展总体规划 2025-2035</h1>
            </div>
            <Ch1Se1 />
            <Ch2Se1 />
            <Ch2Se2 />
        </div>
        <button @click="showElm">点击导出</button>
    </div>
</template>

<script>
import axios from 'axios';
import Ch1Se1 from './Ch1/Ch1Se1.vue';
import Ch2Se1 from './Ch2/Ch2Se1.vue';
import Ch2Se2 from './Ch2/Ch2Se2.vue';
export default {
    components: {
        Ch1Se1,
        Ch2Se1,
        Ch2Se2,
    },
    methods: {
        showElm() {
            let nodes = this.$refs.content.childNodes;
            let elmArr = [];
            for (let node of nodes) {
                for (let n of node.childNodes) {
                    elmArr.push({ [n.tagName]: n.innerText });
                }
            }
            this.postData(elmArr);
        },
        postData(arrObj) {
            axios({
                url: "http://localhost:80/api/paper/downword",
                method: "post",
                //发送格式为json
                data: JSON.stringify(arrObj),
                responseType: 'blob',
            }).then((res) => {
                let resData = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
                let dowLink = URL.createObjectURL(resData)
                var aDom = document.createElement("a");
                aDom.setAttribute('style', 'display:none');
                aDom.setAttribute('href', dowLink);
                aDom.setAttribute('download', "报告" + ".docx");
                document.body.appendChild(aDom);
                aDom.click();
                URL.revokeObjectURL(dowLink);
                document.body.removeChild(aDom);
            }).catch((err) => {
                console.log("下载出错" + err);
            });
        },
    },
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
}
</style>