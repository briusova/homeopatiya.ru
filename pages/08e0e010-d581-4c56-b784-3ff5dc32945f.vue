<template>
    <div class="flex flex-col items-start gap-4 lg:flex-row" un-cloak>
        <div class="flex items-center mb-6">
            <img class="w-36 mr-6" src="images/22f8abe3-91e3-4edd-b23a-e0da4aaf38bc.png" :alt="title">
        </div>
        <div class="flex flex-col items-start lg:items-end justify-center w-full min-w-0 gap-0 text-base">
            <h3 class="mb-4 text-2xl leading-6 text-slate-700 italic bold lg:text-right">
                <icon icon="fa:quote-left" class="text-red-700 inline"></icon>
                {{ description }}
                <icon icon="fa:quote-right" class="text-red-700 inline"></icon>
            </h3>
            <h3 class="mb-4 text-2xl leading-6 text-slate-700 italic bold lg:text-right">
                доктор Самуэль Ганеман, основатель гомеопатии
            </h3>
        </div>
    </div>
    <div class="prose max-w-none text-slate-500" un-cloak>
        <p style="text-align: justify;">Вы зашли на сайт врача-гомеопата Тарасовой Елены Александровны. Я рада встрече с Вами!</p>
        <p style="text-align: justify;">Уже более 30 лет я работаю в области гомеопатии и не перестаю восхищаться результатом действия этих
            маленьких крупинок. Удивительно, какой огромный потенциал скрыт в каждом человеке! Ведь гомеопатия не только
            избавляет от болезней, но и помогает раскрыть внутренние способности, которые есть у человека с рождения, но
            скрыты под бременем заболевания.</p>
        <p style="text-align: justify;">Я наблюдаю, как на фоне гомеопатического лечения у людей появляются силы, как они начинают творить:
            рисовать, петь, писать стихи, открывают свой бизнес, находят своё предназначение в жизни, иногда даже в
            неожиданной для себя сфере.</p>
        <p style="text-align: justify;">Гомеопатия дарит самое ценное — освобождение от бремени мучительных болезней, страха и тревог, чувства вины,
            неуверенности в себе. Она избавляет от всего, что сковывает человека и мешает ему быть свободным,
            реализовывать себя.</p>
        <p style="text-align: justify;">Я готова вам помочь на этом пути. Лучше начать как можно раньше, пока есть силы, которые ещё не потрачены на
            борьбу с болезнью. Моя цель — достичь гармонии человека с самим собой и окружающим миром. Я работаю, чтобы в
            мире стало больше красивых, здоровых и счастливых людей!</p>
    </div>
    <div class="grid grid-cols-4 gap-12 mt-24 md:grid-cols-8 lg:grid-cols-12" un-cloak>
        <el-card class="not-prose col-span-4 animate__animated animate__faster" :class="{ animate___flipInY: flip[i], animate___flipOutY: !flip[i], }" body-class="!pa-0 flex" shadow="hover" v-for="(child, i) in $children" v-intersection-observer="[([{ isIntersecting }]) => { flip[i] = isIntersecting }, { threshold: 0.3 }]">
            <div @mouseover="slide[i] = true" @mouseleave="slide[i] = false" :class="`bg-[url(${child.images[0].url})]`" class="flex flex-auto h-64 bg-center bg-cover overflow-hidden">
                <transition enter-active-class="animate__animated animate__slideInUp animate__faster" leave-active-class="animate__animated animate__slideOutUp  animate__faster">
                    <router-link v-if="slide[i]" class="bg-white/85 flex-auto flex justify-center items-center" :to="child.to">
                        <el-button size="large" circle="" tag="router-link" :to="child.to">
                            <icon :icon="child.icon"></icon>
                        </el-button>
                    </router-link>
                </transition>
            </div>
            <template #footer="">
                <router-link class="flex flex-col items-start gap-4 lg:flex-row" :to="child.to">
                    <div class="flex items-center text-emerald-500">
                        <icon :icon="child.icon" class="size-7"></icon>
                    </div>
                    <div class="flex flex-col items-start justify-center w-full min-w-0 gap-0 text-base">
                        <h3 class="mb-4 text-lg leading-6 text-slate-700">{{ child.title }}</h3>
                        <p class="text-slate-500">{{ child.description }}</p>
                    </div>
                </router-link>
            </template>
        </el-card>
    </div>
</template>



<script setup>
import { inject, ref, watch } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { id } = defineProps(["id"]),
    { title, description, $children } = inject("pages")[id],
    flip = ref([]),
    slide = ref([]),
    once = true,
    deep = true;

watch(slide, () => { __unocss_runtime.extract("bg-white/85") }, { deep, once });
</script>



<style scoped>
@keyframes flipInY {
    from {
        transform: perspective(2500px) rotateY(-100deg);
    }

    to {
        transform: perspective(2500px);
    }
}

.animate___flipInY {
    backface-visibility: hidden;
    animation-name: flipInY;
}

@keyframes flipOutY {
    from {
        transform: perspective(2500px);
    }

    to {
        transform: perspective(2500px) rotateY(-100deg);
    }
}

.animate___flipOutY {
    backface-visibility: hidden;
    animation-name: flipOutY;
}
</style>
