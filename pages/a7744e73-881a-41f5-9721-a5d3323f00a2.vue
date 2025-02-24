<template>
    <div class="container my-24 px-6 m-auto">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div class="col-span-4 lg:col-span-3 flex justify-center" v-for="(url, i) in srcList">
                <el-image :src="url" class="h-52 w-auto" fit="contain" :preview-src-list="srcList" :initial-index="i"
                    lazy>
                </el-image>
            </div>
        </div>
    </div>

</template>

<script setup>
const srcList = [...Array(63).keys()].map((i) => `images/diplomas/${i + 1}.jpg`);
</script>