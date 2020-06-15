<template>
  <article class="newAn-box">
    <div class="newAn-title">
      <h1>Добавить анкету</h1>
    </div>
    <div class="newAn-container">
      <animal-form></animal-form>
    </div>
  </article>
</template>

<script>
import AnimalForm from './components/AnimalForm';

export default {
  name: 'NewAnimal',
  metaInfo: {
    title: 'Добавить страницу питомца - КРОЗО &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'Вы можете разместить объявление о найденном, потерянном или больном питомце в одну из трех категорий нашего сайта - Ищут дом, Разыскиваются или Требуется лечение.' },
      { vmid: 'og:title', property: 'og:title', content: 'Добавить страницу питомца - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'Вы можете разместить объявление о найденном, потерянном или больном питомце в одну из трех категорий нашего сайта - Ищут дом, Разыскиваются или Требуется лечение.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/newAnimal' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'http://AliveRight.ru/img/wantedDog.png' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Добавить страницу питомца - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'Вы можете разместить объявление о найденном, потерянном или больном питомце в одну из трех категорий нашего сайта - Ищут дом, Разыскиваются или Требуется лечение.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'http://AliveRight.ru/img/wantedDog.png' },
    ],
  },
  data() {
    return {
    };
  },
  components: { AnimalForm },
};
</script>

<style scoped>
  /* NEW ANIMAL */
  .newAn-box{
    display: flex;
    flex-direction: column;
    font-family: Comic Sans Ms;
    margin-bottom: 30px;
  }

  .newAn-title{
    background: linear-gradient( to right, rgba(2,141,208,0.9), rgba(2,141,208,0));
    padding: 0px 0px 8px 0px;
  }

  .newAn-title h1{
    padding-left: 65px;
    padding-bottom: 15px;
    padding-top: 15px;
    margin: 0px 0px 0px 0px;
    font-size: 35px;
    color: #fff;
  }

  .newAn-container {
    display: flex;
    flex-direction: row;
    margin: 60px 10px 10px 70px;
  }
</style>
