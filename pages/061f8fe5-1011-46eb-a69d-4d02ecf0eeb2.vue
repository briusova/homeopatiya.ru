<template>
  <div class="ui container">

    <h1 class="mt-12" style="text-align: left;">Подготовка к первичной консультации</h1>
    <p style="text-align: justify;">Приём у врача гомеопата отличается от приема любого другого врача. В первую очередь
      вам необходимо знать, что время первичной консультации составит не менее двух часов.&nbsp;</p>
    <p style="text-align: justify;">Первое впечатление, что это слишком долго: о чём можно говорить в кабинете врача
      столь продолжительное время? Но это ошибочное представление, поскольку для большинства пациентов это время
      пролетает очень быстро. За это время вы можете изложить все нюансы ваших недомоганий. Кроме этого, для гомеопата
      будут важны все ваши особенности, начиная с вашего заболевания и заканчивая сном, пищевыми предпочтениями,
      нюансами переносимости погоды и многое, многое другое.&nbsp;</p>
    <p style="text-align: justify;">Поэтому, <i>Вам лучше подготовиться к консультации заранее и принести с собой
        следующую информацию</i>:&nbsp;</p>
    <p style="text-align: justify;">Для врача будет важным, чтобы вы знали свой <b>рост </b>и <b>вес</b>. Если есть на
      руках результаты последних <b>анализов </b>и <b>обследований</b>, <b>выписки </b>из стационаров.&nbsp;</p>
    <p style="text-align: justify;">Необходимо выяснить и написать сведения по <i>вашей родословной</i>:&nbsp;</p>
    <p style="text-align: justify;">Чем болели (больны) ваши родители? Сколько им лет? Если они уже умерли, то в каком
      возрасте и по какой причине? Та же самая информация нужна будет о ваших бабушках и дедушках. Особенно уделить
      внимание туберкулезу, психическим заболеваниям, онкологии, сахарному диабету. Наличие этих заболеваний важно даже
      у двоюродных родственников, тётей и дядей.</p>
    <p style="text-align: justify;">Эта информация нужна врачу для того, чтобы оценить потенциальные возможности вашего
      здоровья, полученные при рождении и наследственную миазматическую отягощённость (то есть склонность к каким
      группам заболеваний вы получили при рождении).</p>
    <p style="text-align: justify;">Все ваши перенесённые заболевания, <b>расписанные по годам</b> (в каком возрасте вы
      их перенесли), операции, травмы. Не забывайте о кожных болезнях, бородавках, диатезе.&nbsp;</p>
    <p style="text-align: justify;">Очень ВАЖНО вспомнить, когда последний раз болели с повышенной температурой: 39ºC и
      выше, 38ºC, 37ºC. Какие тогда были заболевания и чем лечились.
      Вспомните (по мере возможности) какие препараты в течение жизни вы принимали, по какому поводу и с каким
      эффектом.&nbsp;</p>
    <p style="text-align: justify;"><b>Особенно для врача важны</b>: гормональные препараты, включая мази, антибиотики,
      различные виды кодирования.</p>
    <p style="text-align: justify;">Необходимо рассказать о <b>вредных привычках</b>: алкоголь, курение,
      наркотики.&nbsp;</p>
    <p style="text-align: justify;"><b>Вакцинация</b>: когда, была ли какая-то на неё реакция.&nbsp;</p>
    <p style="text-align: justify;">Если вы давно не были на приёме у <b>стоматолога </b>и собирались сходить к нему в
      ближайшее время, то лучше это сделать до приёма гомеопатии.&nbsp;</p>
    <p style="text-align: justify;">Обязательным условием работы со мной является ведение <b>ДНЕВНИКА САМОЧУВСТВИЯ после
        консультации</b>.&nbsp;</p>
    <p style="text-align: justify;">В нём отмечаете все изменения контрольных симптомов на препарате, появление новой
      симптоматики, уровень энергии, острые заболевания.
    </p>
    <p></p>

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
