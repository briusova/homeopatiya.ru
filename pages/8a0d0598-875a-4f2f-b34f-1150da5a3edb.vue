<template>
    <div class="container mx-auto">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12">
            <el-card class="not-prose col-span-4 animate__animated" :class="{ animate__flipInY: flip[i] }"
                body-class="!pa-0 flex" shadow="hover" v-for="(child, i) in $children"
                v-intersection-observer="([{ isIntersecting }]) => { flip[i] = isIntersecting }">
                <div @mouseover="slide[i] = true" @mouseleave="slide[i] = false"
                    :class="`bg-[url(${child.images[0].url})]`"
                    class="flex flex-auto h-64 bg-center bg-cover overflow-hidden">
                    <Transition @enter="extractAll" 
                    enter-active-class="animate__animated animate__slideInUp"
                        leave-active-class="animate__animated animate__slideOutDown">
                        <router-link v-if="slide[i]" class="bg-white/85 flex-auto flex justify-center items-center"
                            :to="child.to">
                            <el-button size="large" circle tag="router-link" :to="child.to">
                                <icon :icon="child.icon"></icon>
                            </el-button>
                        </router-link>
                    </Transition>
                </div>
                <template #footer>
                    <div class="flex flex-col items-start gap-4 lg:flex-row">
                        <div class="flex items-center text-emerald-500">
                            <icon :icon="child.icon" class="size-5"></icon>
                        </div>
                        <div class="flex flex-col items-start justify-center w-full min-w-0 gap-0 text-base">
                            <h3 class="mb-4 text-lg leading-6 text-slate-700">{{ child.title }}</h3>
                            <p class="text-slate-500">{{ child.description }}</p>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const { title, description, $children } = the;
const flip = ref([]);
const slide = ref([]);

const extractAll = () => { window.__unocss_runtime.extractAll() };

</script>
