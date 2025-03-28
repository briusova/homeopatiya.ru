<template>
    <div class="container my-24 px-6 m-auto">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div class="col-span-4 lg:col-span-3 flex justify-center" v-for="(url, i) in srcList">
                <el-image :src="url" class="h-52 w-auto" fit="contain" :preview-src-list="srcList" :initial-index="i"
                    lazy>
                </el-image>
            </div>
        </div>
        <el-button class="not-prose mt-12" tag="router-link" :to="the.parent.to" :icon="Back" type="success">на
            главную</el-button>
    </div>



</template>

<script setup>

import { inject } from "vue";
import { Back } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];


const srcList = [...Array(63).keys()].map((i) => `images/diplomas/${i + 1}.jpg`);
</script>