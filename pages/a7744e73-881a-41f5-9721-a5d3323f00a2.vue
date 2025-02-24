<template>
    <el-watermark v-for="(url, i) in srcList">
    <el-image :src="url" class="size-10" fit="contain"
        :preview-src-list="srcList" :initial-index="i"></el-image></el-watermark>
</template>

<script setup>
const srcList = [...Array(62).keys()].map((i) => `images/diplomas/${i + 1}.jpg`);
</script>