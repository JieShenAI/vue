<template>
    <div>
        <h1>新建文档</h1>
        <el-row>
            <el-col :span="6" :offset="4">
                <p>选择年份</p>
            </el-col>
        </el-row>
        <el-row>
            <el-input-number v-model="year" controls-position="right" @change="handleChange" :min="1949" :max="2050">
            </el-input-number>

        </el-row>
        <el-row>
            <el-col :span="6" :offset="4">
                <p>选择地区</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="6" :span="12">
                <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange">
                </el-cascader>
            </el-col>
        </el-row>
        <router-link :to="{
            path: '/paper',
            query: {
                paperId,
                year,
                cityId,
            }
        }">
            确认
        </router-link>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { regionData } from 'element-china-area-data'
export default {
    name: "NewPaper",
    data() {
        return {
            paperId: nanoid(),
            years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
            year: 2020,
            active: 0,
            options: regionData,
            selectedOptions: [],
            cityId: "000000",
        }
    },
    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        },
        handleChange(value) {
            this.cityId = value[value.length - 1];
        }
    },
}
</script>

<style>

</style>