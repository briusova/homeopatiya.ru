<template>
   <div class="prose max-w-none text-slate-500 mb-24" un-cloak>
        <p>Вы зашли на сайт врача-гомеопата Тарасовой Елены Александровны. Я рада встрече с Вами!</p>
        <p>Уже более 30 лет я работаю в области гомеопатии и не перестаю восхищаться результатом действия этих
            маленьких крупинок. Удивительно, какой огромный потенциал скрыт в каждом человеке! Ведь гомеопатия не только
            избавляет от болезней, но и помогает раскрыть внутренние способности, которые есть у человека с рождения, но
            скрыты под бременем заболевания.</p>
        <p>Я наблюдаю, как на фоне гомеопатического лечения у людей появляются силы, как они начинают творить:
            рисовать, петь, писать стихи, открывают свой бизнес, находят своё предназначение в жизни, иногда даже в
            неожиданной для себя сфере.</p>
        <p>Гомеопатия дарит самое ценное — освобождение от бремени мучительных болезней, страха и тревог, чувства вины,
            неуверенности в себе. Она избавляет от всего, что сковывает человека и мешает ему быть свободным,
            реализовывать себя.</p>
        <p>Я готова вам помочь на этом пути. Лучше начать как можно раньше, пока есть силы, которые ещё не потрачены на
            борьбу с болезнью. Моя цель — достичь гармонии человека с самим собой и окружающим миром. Я работаю, чтобы в
            мире стало больше красивых, здоровых и счастливых людей!</p>
    </div>
    <div class="my-4 flex flex-col items-start gap-4 lg:flex-row animate__animated animate__faster"
        v-for="({ images, to, title, description, icon }, i) in $children"
        :class="{ animate__fadeInRight: fade[i], animate__fadeOutRight: !fade[i], }"
        v-intersection-observer="([{ isIntersecting }]) => { fade[i] = isIntersecting }">
        <div @mouseover="slide[i] = true" @mouseleave="slide[i] = false" :class="`bg-[url(${images[0].url})]`"
            class="flex flex-auto w-48 h-24 bg-center bg-cover overflow-hidden rounded">
            <transition enter-active-class="animate__animated animate__slideInUp animate__faster"
                leave-active-class="animate__animated animate__slideOutUp  animate__faster">
                <router-link v-if="slide[i]" class="bg-white/85 flex-auto flex justify-center items-center" :to="to">
                    <el-button size="large" circle="" tag="router-link" :to="to">
                        <icon :icon="icon"></icon>
                    </el-button>
                </router-link>
            </transition>
        </div>
        <router-link :to="to" class="flex w-full min-w-0 gap-4 text-base" @mouseover="mouseenter[i] = true"
            @mouseout="mouseenter[i] = false">
            <icon :icon="icon" class="size-10 animate__animated animate__slow"
                :class="{ animate__shakeY: mouseenter[i], 'text-sky-800': mouseenter[i] }"></icon>
            <div class="flex flex-col items-start justify-center w-full min-w-0 gap-0 text-base">
                <h3 class="mb-4 text-lg leading-6 text-slate-700" :class="{ '!text-sky-800': mouseenter[i] }">
                    {{ title }}
                </h3>
                <p class="text-slate-500">{{ description }}</p>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { inject, ref, watch } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { id } = defineProps(["id"]),
    { $children } = inject("pages")[id],
    fade = ref([]),
    slide = ref([]),
    mouseenter = ref([]),
    once = true,
    deep = true;

watch(slide, () => { __unocss_runtime.extract("bg-white/85") }, { deep, once });
</script>