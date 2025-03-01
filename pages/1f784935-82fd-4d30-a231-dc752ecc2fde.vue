<template>
    <section class="py-14" un-cloak>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3 not-prose mb-6">
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">Мои статьи и публикации</p>
                <p>Больше статей на сайте.</p>
            </div>

            <ul class="divide-y divide-slate-100 not-prose">
                <li v-for="{ header, to, description, images } in the.$children">
                    <RouterLink :to="to" class="flex items-start gap-4 px-4 py-3">
                        <div class="flex items-center shrink-0">
                            <img :src="images[0]?.url" :alt="images[0]?.alt" class="w-40 rounded">
                        </div>
                        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                            <h4 class="text-base text-slate-700 ">{{ header }}</h4>
                            <p class="w-full text-sm text-slate-500">{{ description }}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
            <p></p>
            <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="success">на
                главную</el-button>

        </div>

    </section>

</template>

<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>