<template>
    <div class="ui container">
        <h1 class="mt-12 mb-0">Мои статьи и публикации</h1>
        <div class="not-prose my-16">
            <div class="my-4 flex flex-col items-start gap-4 sm:flex-row animate__animated animate__faster"
                v-for="({ images, to, title, description, icon }, i) in $children"
                :class="{ animate__fadeInRight: fade[i], invisible: !fade[i] }"
                v-intersection-observer="([{ isIntersecting }]) => { fade[i] = isIntersecting }">
                <div @mouseover="slide[i] = true" @mouseleave="slide[i] = false" :class="`bg-[url(${images[0].url})]`"
                    class="flex flex-auto w-full h-48 sm:w-48 sm:h-24 bg-center bg-cover overflow-hidden rounded">
                    <transition enter-active-class="animate__animated animate__slideInUp animate__faster"
                        leave-active-class="animate__animated animate__slideOutUp  animate__faster">
                        <router-link v-if="slide[i]" class="bg-white/85 flex-auto flex justify-center items-center"
                            :to="to">
                            <el-button size="large" circle="" tag="router-link" :to="to">
                                <icon :icon="icon"></icon>
                            </el-button>
                        </router-link>
                    </transition>
                </div>
                <router-link :to="to" class="flex w-full min-w-0 gap-4 text-base" @mouseover="mouseenter[i] = true"
                    @mouseout="mouseenter[i] = false">
                    <icon :icon="icon" class="size-10 animate__animated animate__slow text-emerald-500"
                        :class="{ animate__shakeY: mouseenter[i], 'text-sky-800': mouseenter[i] }"></icon>
                    <div class="flex flex-col items-start justify-center w-full min-w-0 gap-0 text-base">
                        <h3 class="mb-4 text-lg leading-6 text-slate-700" :class="{ '!text-sky-800': mouseenter[i] }">
                            {{ title }}
                        </h3>
                        <p class="text-slate-500">{{ description }}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <el-button class="not-prose" tag="router-link" :to="parent.to" :icon="Back" type="success">на
            главную</el-button>
    </div>
</template>
<script setup>
import { Back } from '@element-plus/icons-vue';
import { inject, ref, watch, onMounted } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { id } = defineProps(["id"]),
    { $children, parent } = inject("pages")[id],
    fade = ref(Array($children.length).fill(true)),
    slide = ref([]),
    mouseenter = ref([]),
    once = true,
    deep = true;

watch(slide, () => { __unocss_runtime.extract("bg-white/85") }, { deep, once });
</script>
