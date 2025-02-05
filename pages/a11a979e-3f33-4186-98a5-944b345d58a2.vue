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
                        <Icon icon="noto:sailboat" class="size-12" />
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
            <div class="pt-16 pb-12 text-sm border-t border-slate-200">
                <div class="container px-6 mx-auto">
                    <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div class="col-span-4 md:col-span-8 lg:col-span-4">
                            <a class="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap text-slate-700 focus:outline-none"
                                href="javascript:void(0)">
                                <Icon icon="noto:sailboat" class="size-12" />
                                Brand
                            </a>
                            <p>Expertly made, responsive, accessible components in React and HTML ready to be used on
                                your
                                website or app. Just copy and paste them on your Tailwind CSS project.</p>
                        </div>
                        <nav class="col-span-2 md:col-span-4 lg:col-span-2">
                            <h3 class="mb-6 text-base font-medium text-slate-700">Product
                            </h3>
                            <ul>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Features </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Customers </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Why us? </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Pricing </a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="col-span-2 md:col-span-4 lg:col-span-2">
                            <h3 class="mb-6 text-base font-medium text-slate-700">Docs & Help
                            </h3>
                            <ul>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Documentation</a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Training </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        System status </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        FAQ's </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Help Center </a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="col-span-2 md:col-span-4 lg:col-span-2">
                            <h3 class="mb-6 text-base font-medium text-slate-700">About us</h3>
                            <ul>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        About us </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Careers </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Leadership </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Blog</a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Events </a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="col-span-2 md:col-span-4 lg:col-span-2">
                            <h3 class="mb-6 text-base font-medium text-slate-700">Get in
                                touch</h3>
                            <ul>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Contact </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Support </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Partners </a>
                                </li>
                                <li class="mb-2 leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Join research </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="py-4 text-sm border-t border-slate-200 bg-slate-100">
                <div class="container px-6 mx-auto">
                    <div class="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div class="col-span-2 md:col-span-4 lg:col-span-6">Copyright 2024 Brand</div>
                        <nav class="col-span-3 md:col-span-4 lg:col-span-6">
                            <h3 class="sr-only">Get in touch</h3>
                            <ul class="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                                <li class="leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        T&C </a>
                                </li>
                                <li class="leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Privacy</a>
                                </li>
                                <li class="leading-6">
                                    <a href="javascript:void(0)"
                                        class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                                        Cookies </a>
                                </li>
                            </ul>
                        </nav>
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
import "./node_modules/fomantic-ui-css/components/container.css";

import { computed, inject, ref, useTemplateRef, onMounted } from "vue";
import ElementPlus from "element-plus";
import { Icon } from '@iconify/vue';
import { get, set } from "@vueuse/core";

// Инициализация компонента icon
window.app.component("Icon", Icon);
// Инициализация фреймворка Element Plus
window.app.use(ElementPlus);

// Вычисление объектов текущих страниц

//const { id } = defineProps(["id"]);
const pages = inject("pages");
//const the = pages[id];
//const views = computed(() => the.$children.filter(({ $children }) => $children.length));
const currentId = inject("id");
const current = computed(() => pages[get(currentId)]);

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

</script>