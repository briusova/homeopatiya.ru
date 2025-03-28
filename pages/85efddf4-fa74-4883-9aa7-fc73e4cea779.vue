<template>
    <div :class="`bg-[url(${url})]`" class="min-h-[75dvh] bg-center bg-cover flex" un-cloak>
        <div class="flex flex-auto flex-col bg-black/45 pa-6">
            <div class="container mx-auto flex-auto flex flex-col">
                <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 my-0 md:my-12">
                    <div class="col-span-4 lg:col-span-6 text-white  text-center md:text-left">
                        <h3><a href="tel:+79263750528" class="not-prose">+7 (926) 375-05-28</a></h3>
                    </div>
                    <div class="col-span-4 lg:col-span-6 text-white mt-0 md:mt-8 md:text-right text-center">
                        <el-button type="danger" circle="" size="large" tag="a" href="mailto:homeopatiya@yandex.ru">
                            <icon icon="fa:envelope" class="size-3"></icon>
                        </el-button>
                        <el-button type="danger" circle="" size="large" tag="a" href="https://vk.com/doctor_etarasova"
                            target="_blank">
                            <icon icon="fa-brands:vk"></icon>
                        </el-button>
                        <el-button type="danger" circle="" size="large" tag="a"
                            href="https://wa.me/79263750528?text=Здравствуйте, хочу записаться на консультацию!"
                            target="_blank">
                            <icon icon="fa-brands:whatsapp"></icon>
                        </el-button>
                        <el-button type="danger" circle="" size="large" tag="a">
                            <icon icon="fa-brands:telegram"></icon>
                        </el-button>

                    </div>
                </div>
                <div class="flex-auto flex flex-col justify-center">
                    <h1
                        class="text-white mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        врач-гомеопат, холистический дерматолог, флоротерапевт<br>
                        {{ title }}
                    </h1>
                    <h2
                        class="text-white mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        {{ description }}
                    </h2>
                </div>
                <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 my-12 not-prose">
                    <div class="col-span-4 flex ">
                        <el-button class="mx-auto" round="" size="large" plain="" tag="router-link"
                            to="/обо_мне/учёба_и_работа/">обо мне</el-button>
                    </div>
                    <div class="col-span-4 flex ">
                        <el-button class="mx-auto" round="" size="large" tag="router-link"
                            to="/обо_мне/контакты/">запись на консультацию</el-button>
                    </div>
                    <div class="col-span-full lg:col-span-4 flex">
                        <el-button class="mx-auto" round="" size="large" tag="router-link"
                            to="/обо_мне/специализация/">моя специализация</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const { id } = defineProps(["id"]),
    { title, description, images } = inject("pages")[id],
    [{ url }] = images;
</script>