<template>
 <div class="ui container">

 <h1 class="mt-12" style="text-align: left;"><span style="text-align: justify; color: var(--un-prose-body); font-size: 14px;">Доктор Атул Джагги&nbsp;</span><span style="font-size: 14px; font-weight: 400; letter-spacing: normal; text-align: justify;">–</span><span style="text-align: justify; color: var(--un-prose-body); font-size: 14px;">&nbsp;известный гомеопат из Индии, один из ведущих педагогов
 Международной Академии Классической Гомеопатии Джорджа Витулкаса в Греции и один из моих любимых
 преподавателей.</span></h1>
 <p style="text-align: justify;">Недавно я прослушала его очередной вебинар, на котором был представлен очень
 интересный случай.&nbsp;</p>
 <p style="text-align: justify;">Женщина 57-и лет, страдает гипертонической болезнью, паническими атаками,
 головокружениями, давно лечится у гомеопата, который и представлял другим врачам и доктору Атулу этот
 случай. Многолетняя история болезни, большое количество жалоб и большое количество назначенных и принятых
 гомеопатических препаратов... Маэстро обратил внимание на интересные ярко выраженные симптомы:&nbsp;</p>
 <p style="text-align: justify;">Пациентке было ХУЖЕ ОТ НАПРЯЖЕНИЯ ГЛАЗ. Все её симптомы ухудшались, если она
 буквально 2 минуты читала текст.&nbsp;</p>
 <p style="text-align: justify;">Пациентка испытывала сильное чувство вины за свое состояние – «РУГАЕТ СЕБЯ, как
 будто делает не то, что должна делать».</p>
 <p style="text-align: justify;">ПАНИЧЕСКИЕ АТАКИ&nbsp;</p>
 <p style="text-align: justify;">Cтрах и тревога усиливаются в ЖАРУ. Пациентка постоянно повторяла, что
 «ненавидит жаркую погоду и от жары ей становится плохо».&nbsp;</p>
 <p style="text-align: justify;">Тревога у нее усиливается ровно в 23 ЧАСА&nbsp;<span style="color: var(--un-prose-body);">–</span><span style="color: var(--un-prose-body);">&nbsp;единственный препарат в репертории
 стоит <b>РУТА</b>! Да, именно это средство доктор Атул назначил пациентке. Но насколько профессионально это было
 сделано, как в огромном количестве симптомов этого запутанного случая доктор Атул выделил главное и вышел на
 препарат! Браво Мастеру!&nbsp;</span></p>
 <p style="text-align: justify;">Врач-гомеопат Тарасова Елена Александровна</p>
 <p></p>

 <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="success">назад</el-button>


 </div>
</template>

<script setup>
import { inject } from "vue";
import { Back } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
