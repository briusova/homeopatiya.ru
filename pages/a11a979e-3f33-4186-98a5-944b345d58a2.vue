<template>
    <div class="min-h-dvh" un-cloak>
        <!-- Заголовок сайта -->
        <div class="sticky not-prose top-0 z-50 pa-4 border-b bg-neutral-50 opacity-0 hover:opacity-100 transition-opacity duration-1000"
            :class="{ 'opacity-100': !ready }" ref="pageHeader">
            <el-page-header icon="" :content="current.title">
                <template #breadcrumb>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item v-for="item in current.branch" :to="item.to">
                            {{ item.name }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </template>
                <template #title>
                    <router-link to="/" class="whitespace-nowrap flex items-center max-sm:hidden">
                        homeopatiya.ru
                    </router-link>
                </template>
                <template #extra>
                    <el-button circle @click="drawer = true">
                        <icon icon="mdi:menu" class="size-5"></icon>
                    </el-button>
                </template>
            </el-page-header>
        </div>
        <!-- Основная часть сайта -->
        <router-view></router-view>
    </div>
    <!-- Подвал сайта -->
    <footer class="not-prose text-slate-500 bg-[url(images/note4.jpg)] pt-12 bg-repeat-x mt-28" un-cloak>
        <div class="bg-[url(images/linedpaper.png)]">
            <div class="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto not-prose" un-cloak>
                <div class="max-w-7xl sm:mx-auto sm:text-center">
                    <img :src="the.images[0].url" class="w-20 sm:mx-auto" decoding="async" />
                    <p class="leading-relaxed mt-2 text-[16px]">
                        Копирование материала возможно только с согласия администрации сайта. Использование любой
                        медицинской информации
                        в личных целях требует дополнительной консультации врача. Все данные, опубликованные на сайте
                        https://homeopatiya.ru,
                        приведены исключительно для ознакомления, не могут служить поводом для самодиагностики или
                        самолечения, носят
                        информационный характер и не являются публичной офертой, определяемой положениями ч. 2 ст. 437
                        Гражданского
                        кодекса РФ.
                    </p>
                </div>
                <ul class="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                    <li class="hover:text-gray-800" v-for="(item, idx) in docs.$children" :key="idx">
                        <router-link :to="item.to" v-text="item.name"></router-link>
                    </li>
                </ul>
                <div class="mt-8 items-center justify-between sm:flex">
                    <div class="mt-4 sm:mt-0">
                        &copy; 2025 {{ the.title }}, ИНН: 773365048748
                    </div>
                    <div class="mt-6 sm:mt-0">
                        <ul class="flex items-center space-x-4">
                            <li class="w-10 h-10 border rounded-full flex items-center justify-center"
                                v-for="(item, idx) in contactMethods" :key="idx">
                                <a :href="item.href" target="_blank" rel="noopener noreferrer">
                                    <icon :icon="item.icon" class="size-6"></icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Кнопка прокрутки сайта наверх -->
    <el-backtop></el-backtop>
</template>

<script setup>

// Импорт необходимых функций
import "./node_modules/animate.css/animate.min.css";
import "./node_modules/element-plus/dist/index.css";
import "./node_modules/fomantic-ui-css/components/container.min.css";
import "./node_modules/fomantic-ui-css/components/button.min.css";

import { computed, inject, ref, useTemplateRef, onMounted } from "vue";
import { useRoute } from "vue-router";
import ElementPlus from "element-plus";
import { Icon } from '@iconify/vue';
import { get, set } from "@vueuse/core";

// Инициализация компонента icon
window.app.component("Icon", Icon);
// Инициализация фреймворка Element Plus
window.app.use(ElementPlus);

// Вычисление объектов текущих страниц

const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
//const views = computed(() => the.$children.filter(({ $children }) => $children.length));
const route = useRoute();
const current = computed(() => pages[route.name]);
const docs = computed(() => the.children.find(({ name }) => name === "документы"));
// Анимация заголовка сайта при прокрутки страницы

const ready = ref(true);
const pageHeaderRef = useTemplateRef("pageHeader");
onMounted(() => {
    let timeoutID;
    const scroll = () => {
        set(ready, false);
        if (timeoutID) clearTimeout(timeoutID);
        if (window.scrollY > get(pageHeaderRef, "offsetHeight")) timeoutID = setTimeout(() => {
            set(ready, true);
        }, 2000);
    };
    document.addEventListener("scroll", scroll);
    scroll();
});

// Флаг открытия меню сайта
const drawer = ref(false);
const contactMethods = [
  {
    icon: "mdi:phone-outline",
    href: "tel:+79263750528",
  },
  {
    icon: "fa-brands:vk",
    href: "https://vk.com/doctor_etarasova",
  },
  {
    icon: "mdi:envelope-outline",
    href: "mailto:homeopatiya@yandex.ru",
  },
  {
    icon: "mdi:telegram",
    href: "https://t.me/doctor_etarasova",
  },
  {
    icon: "fa-brands:whatsapp",
    href: "https://wa.me/79263750528?text=Здравствуйте, хочу записаться на консультацию!",
  },

];
</script>