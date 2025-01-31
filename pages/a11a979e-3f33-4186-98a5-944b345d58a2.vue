<template>
    <div class="min-h-dvh" un-cloak>
        <div class="sticky not-prose top-0 z-50 pa-4 border-b bg-neutral-50 opacity-0 hover:opacity-100 transition-opacity duration-1000"
            :class="{ 'opacity-100': !ready }" ref="pageHeader">
            <el-page-header @back="onBack">
                <template #breadcrumb>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: './page-header.html' }">
                            homepage
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="./page-header.html">route 1</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>route 2</el-breadcrumb-item>
                    </el-breadcrumb>
                </template>
                <template #content>
                    <div class="flex items-center">
                        <el-avatar class="mr-3" :size="32"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span class="text-large font-600 mr-3"> Title </span>
                        <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                            Sub title
                        </span>
                        <el-tag>Default</el-tag>
                    </div>
                </template>
                <template #extra>
                    <div class="flex items-center">
                        <el-button>Print</el-button>
                        <el-button type="primary" class="ml-2">Edit</el-button>
                    </div>
                </template>

                <el-descriptions :column="3" size="small" class="mt-4">
                    <el-descriptions-item label="Username">
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item label="Telephone">
                        18100000000
                    </el-descriptions-item>
                    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
                <p class="mt-4 text-sm">
                    Element Plus team uses <b>weekly</b> release strategy under normal
                    circumstance, but critical bug fixes would require hotfix so the actual
                    release number <b>could be</b> more than 1 per week.
                </p>
            </el-page-header>
        </div>
        <router-view></router-view>
    </div>
    <router-view></router-view>
    <footer class="not-prose text-slate-500" un-cloak>footer</footer>
    <el-backtop></el-backtop>
</template>

<script setup>
import "./node_modules/element-plus/dist/index.css";

import {
    //computed, inject
    ref
} from "vue";
import ElementPlus, { ElNotification as notify } from "element-plus";
import { Icon } from '@iconify/vue';

window.app.component("Icon", Icon);
window.app.use(ElementPlus);

//const { id } = defineProps(["id"]);
//const pages = inject("pages");
//const the = pages[id];
//const views = computed(() => the.$children.filter(({ $children }) => $children.length));
//const currentId = inject("id");
//const current = computed(() => pages[currentId.value]);

let timeoutID;
const ready = ref(true);
const pageHeader = ref(null);
const scroll = () => {
    ready.value = false;
    if (timeoutID) clearTimeout(timeoutID);
    if (window.scrollY > pageHeader.value?.offsetHeight) timeoutID = setTimeout(() => {
        ready.value = true;
    }, 2000);
};
document.addEventListener("scroll", scroll);
scroll();

const onBack = () => {
    notify('Back')
}
</script>