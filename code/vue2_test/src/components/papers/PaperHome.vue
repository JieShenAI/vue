<template>
    <div>
        <div>
            <router-link to="/newPaper">
                <a-icon type="plus-circle" />
                新建文档
            </router-link>
        </div>
        <MyPapers />
    </div>

</template>

<script>
import { Icon } from 'ant-design-vue'
import MyPapers from './MyPapers.vue';
export default {
    components: {
        'a-icon': Icon,
        MyPapers,
    }
}

</script>

<style>

</style>