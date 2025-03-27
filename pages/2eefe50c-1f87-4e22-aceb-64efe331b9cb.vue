<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>
            

            <p>Кто читал,.</p>

            <p>Спасибо, что дочитали до конца, и будьте здоровы!</p>
            <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="primary">{{
                the.parent.header }}</el-button>

        </div>
    </section>
</template>
<script setup>
import { inject } from "vue";
import { Back } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
