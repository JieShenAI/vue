<template>
    <div>
        <div v-if="!isImg">
            <p v-show="!isEdit" @mouseover="Mouseover" @mouseleave="Mouseleave">
                {{ textValue }}
                <a-icon type="edit" @click="showTextArea" :style="{ visibility: isShowTools, marginLeft: 5 + 'px' }" />
                <a-icon type="plus-circle" @click="addT" :style="{ visibility: isShowTools, marginLeft: 5 + 'px' }" />
                <a-popconfirm title="确定删除?" ok-text="确定" cancel-text="取消" @confirm="deleteT">
                    <a href="#">
                        <a-icon type="delete" :style="{ visibility: isShowTools, marginLeft: 5 + 'px' }" />
                    </a>
                </a-popconfirm>
            </p>
            <a-textarea ref="atextarea" v-show="isEdit" v-model="textValue" :auto-size="{ minRows: 3 }" @blur="editT" />
        </div>
        <img v-if="isImg" :src="textValue" alt="" width="70%" />
    </div>
</template>
  
<script>
import { initPImg } from "@/pages/papers/data"
export default {
    props: ["obj", "chse", "paperId"],
    data() {
        return {
            ...initPImg(this.obj),
        };
    },
    methods: {
        Mouseover() {
            this.isShowTools = "visible";
        },
        Mouseleave() {
            this.isShowTools = "hidden";
        },
        showTextArea() {
            this.isEdit = true;
            this.$nextTick(() => this.$refs.atextarea.focus());
        },
        editT() {
            this.isEdit = false;
            if (this.preValue != this.textValue) {
                this.$store.commit("paper/editP", { paperId: this.paperId, chse: this.chse, id: this.id, newValue: this.textValue });
                this.preValue = this.textValue;
            }
        },
        deleteT() {
            this.$store.commit("paper/deleteP", { paperId: this.paperId, chse: this.chse, id: this.id });
        },
        addT() {
            this.$store.commit("paper/addP", { paperId: this.paperId, chse: this.chse, id: this.id });
        },
    },
};
</script>
  
<style>

</style>
  