<template>
    <div class="ui container">

        <h1>Контакты, запись на консультацию</h1>


        <p>Я предоставляю консультации в двух форматах:</p>
        <p><b>🔹Очный приём<br></b>Консультирую в медицинском центре в Москве (район Митино).
                Пространство оборудовано для комфортной и
                конфиденциальной работы.</p>
        <p>🔹<b>Онлайн-консультации<br></b>Доступны из любой точки мира через защищённые каналы видеосвязи.
                Консультация онлайн по видеосвязи проходит
                по мессенджерам:</p>
        <p>• WhatsApp<br>• Telegram</p>
        <p>
            <b>Позвонить</b>: <a href="tel:+79263750528" class="not-prose">+7 (926) 375-05-28</a>
        </p>
        <p>
            <b>Написать в WhatsApp</b>: <a href="https://wa.me/79263750528?text=Здравствуйте, хочу записаться на консультацию!" class="not-prose" target="_blank">+7 (926) 375-05-28</a>
        </p>
        <p><b>Написать в Телеграмм</b>: <a href="https://t.me/gomeopat_tarasova" target="_blank" class="not-prose">@gomeopat_tarasova</a>
        </p>
  
        <p>Запись
            на консультацию веду я сама.</p>
        <p><b>Записаться на консультацию</b> Вы можете по телефону, WhatsApp, Телеграмм или заполните форму</p>
 <p>ФОРМА</p>

        <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="success">на
            главную</el-button>


    </div>
</template>



<script setup>
import { inject } from "vue";
import { Back } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
