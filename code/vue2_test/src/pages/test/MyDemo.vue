<template>
    <div>
        <button @click="show">点击</button>
    </div>
</template>

<script>
export default {
    methods:{
        show(){
            console.log(this);
        },
    },
}
</script>

<style>
</style>