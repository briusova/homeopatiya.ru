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


    <el-form :model="form" label-width="auto" ref="formRef" class="max-w-96 my-12" label-position="top">
      <el-form-item label="Ваше имя" prop="name" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите своё имя',
          trigger: 'blur',
        },
      ]">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Ваш телефон" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Ваш емейл" prop="email" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите адрес электронной почты',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Пожалуйста, введите корректный адрес электронной почты',
          trigger: ['blur', 'change'],
        },
      ]">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Сообщение" prop="desc" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите своё сообщение',
          trigger: 'blur',
        },
      ]">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="throttledFn">Отправить заявку</el-button>
        <el-button @click="resetForm(formRef)">Очистить форму</el-button>
      </el-form-item>
    </el-form>

        <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="success">на
            главную</el-button>


    </div>
</template>



<script setup>

import { Back } from '@element-plus/icons-vue';
import { useThrottleFn } from "@vueuse/core";
import { reactive, ref, inject } from "vue";
import { ElMessage } from "element-plus";

const { id } = defineProps(["id"]),
  the = inject("pages")[id],
  formRef = ref(),
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  form = reactive({
    name: "",
    phone: "",
    email: "",
    desc: "",
  }),

  throttledFn = useThrottleFn(sendForm, 6000);

function resetForm(formEl) {
  formEl?.resetFields();
}

function sendForm() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      const body = JSON.stringify(form);
      try {
        ElMessage("Отправка запроса...");
        const response = await fetch("https://form.homeopatiya.ru", {
          method,
          headers,
          body,
        });
        ElMessage.closeAll();
        if (response.ok) {
          ElMessage.success(await response.text());
          formRef.value?.resetFields();
        } else ElMessage.error(`Ошибка: ${await response.text()}`);
      } catch ({ message }) {
        ElMessage.closeAll();
        ElMessage.error(`Ошибка: ${message}`);
      }
    } else ElMessage.error("Пожалуйста, заполните форму");
  });
}

</script>
