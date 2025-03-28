<template>
    <div class="ui container">

        <h1 class="mt-12" style="text-align: left;">Случаи из моей практики</h1>
        <p style="text-align: justify;">Уважаемые пациенты. В данном разделе я привожу примеры из своей
            практики демонстрирующие возможности гомеопатии и реакцию пациентов
            на гомеопатические препараты. Как вы увидите, далеко не всегда
            гомеопатический препарат оказывает "сиюминутное" воздействие. И сам
            процесс излечения может длиться достаточно долго. Но если препарат
            подобран доктором правильно, то это будет именно излечение, а не
                подавление симптомов болезни и (или) излечение от одной болезни за счет
                угнетения или нарушения других функций организма. Впрочем, раз уж вы
                заглянули на мой сайт, значит Вы имеете представление о том, что
                представляет из себя гомеопатическое лечение. Если же нет, то я более
                подробно на данных вопросах останавливалась в своих <router-link to="/обо_мне/публикации/"><b>статьях</b></router-link> которые вы
                также можете прочитать.</p>
        <p style="text-align: justify;"></p>
        
       
       
        <p style="text-align: justify;"><b>Главное от чего я хотела бы вас предостеречь это от того, чтобы данные
                примеры вы воспринимали как пособие по самолечению!</b> Подбор
            гомеопатических препаратов очень индивидуален. И доктор, принимая решение
            об их назначении, руководствуется очень многими нюансами! И зачастую, как
            вы в том числе увидите из приведенных здесь примеров, пациенту в течение
            лечения назначаются абсолютно разные препараты в зависимости от реакции
            на предыдущий препарат и множества других факторов. Поэтому занимаясь
            самолечением, вы можете сильно навредить своему здоровью и в случае
            последующего обращения к специалисту значительно усложнить ему задачу по
            вашему излечению.</p>
        <p style="text-align: justify;">Прошу прощения за некоторые, возможно, неприятные медицинские
            подробности в описании заболеваний и симптомов — я их излагаю, поскольку
            данные примеры интересны не только пациентам, но и моим коллегам, а им,
            для более полного понимания случая, они необходимы.</p>
        <p style="text-align: justify;"><b>Внимание! Согласно профессиональной этике, имена, фамилии пациентов
                изменены</b>.
        </p>
       




<div class="not-prose my-16">
 <div class="my-4 flex flex-col items-start gap-4 sm:flex-row animate__animated animate__faster"
        v-for="({ images, to, title, description, icon }, i) in $children"
        :class="{ animate__fadeInRight: fade[i], animate__fadeOutRight: !fade[i], }"
        v-intersection-observer="([{ isIntersecting }]) => { fade[i] = isIntersecting }">
        <div @mouseover="slide[i] = true" @mouseleave="slide[i] = false" :class="`bg-[url(${images[0].url})]`"
            class="flex flex-auto w-full h-48 sm:w-48 sm:h-24 bg-center bg-cover overflow-hidden rounded">
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
import { inject, ref, watch } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { id } = defineProps(["id"]),
    { $children, parent } = inject("pages")[id],
    fade = ref([]),
    slide = ref([]),
    mouseenter = ref([]),
    once = true,
    deep = true;

watch(slide, () => { __unocss_runtime.extract("bg-white/85") }, { deep, once });

</script>
