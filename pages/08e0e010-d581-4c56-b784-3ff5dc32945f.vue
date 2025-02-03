<template>
    <div class="bg-[url(images/1682925271036.jpg)] min-h-[75dvh] bg-center flex">
        <div class="flex flex-auto flex-col bg-black/45">
            <div class="container mx-auto flex-auto flex flex-col">
                <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 my-12">
                    <div class="col-span-4 lg:col-span-6 text-white  text-center md:text-left">
                        <h3>+7(926)375-0528</h3>
                        <p>г. Москва, Новотушинский пр., 10 к. 1 (этаж 1)</p>
                    </div>
                    <div class="col-span-4 lg:col-span-6 text-white mt-8 md:text-right text-center">
                        <el-button type="danger" circle="" size="large">
                            <icon icon="fa-brands:vk"></icon>
                        </el-button>
                        <el-button type="danger" circle="" size="large">
                            <icon icon="fa-brands:skype"></icon>
                        </el-button>
                    </div>
                </div>
                <div class="flex-auto flex flex-col justify-center">
                    <h1 class="text-white mx-auto text-center">{{ name }}</h1>
                    <h2 class="text-white mx-auto text-center">{{ title }}</h2>
                </div>
                <div class="not-prose grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 my-12">
                    <div class="col-span-4 flex ">
                        <el-button class="mx-auto" round="" size="large" plain="">Действие 1</el-button>
                    </div>
                    <div class="col-span-4 flex ">
                        <el-button class="mx-auto" round="" size="large">Действие 2</el-button>
                    </div>
                    <div class="col-span-full lg:col-span-4 flex">
                        <el-button class="mx-auto" round="" size="large">Действие 3</el-button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const { title, name } = the;

</script>

<style scoped>


</style>
