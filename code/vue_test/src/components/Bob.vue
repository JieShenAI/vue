<template>
    <div>
        <p>Bob p1</p>
        <p>Bob se1</p>
        <p>Bob se2</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newDate: new Date(),
        }
    },
    mounted() {
        this.$emit("back", 1, 2, "BobValue");
    }
}
</script>

<style>
</style>