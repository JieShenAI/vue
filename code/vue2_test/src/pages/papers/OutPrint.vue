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
            console.log(elmArr);
        },
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
}
</style>