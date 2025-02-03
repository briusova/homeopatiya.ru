<template>
    <div class="mb-28 bg-no-repeat bg-center bg-cover" :class="`bg-[url(${url})]`">{{  }}</div>
</template>

<script setup>
import { inject } from "vue";

const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const {title, images, description} = the;
const [{url, alt}] = images;

</script>