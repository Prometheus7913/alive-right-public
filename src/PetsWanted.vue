<template>
  <animal-list :listName='listName' :axiosUrl='axiosUrl'></animal-list>
</template>

<script>
import AnimalList from './components/AnimalList';

export default {
  name: 'PetsWanted',
  metaInfo: {
    title: 'Разыскиваются - зоозащитная организация &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые разыскиваются хозяевами.' },
      { vmid: 'og:title', property: 'og:title', content: 'Разыскиваются - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые разыскиваются хозяевами.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/petsWanted' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'https://AliveRight.ru/img/wantedDog.png' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Разыскиваются - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые разыскиваются хозяевами.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'https://AliveRight.ru/img/wantedDog.png' },
    ],
  },
  data() {
    return {
      listName: 'Разыскиваются',
      axiosUrl: 'https://aliveright.ru/cards/petsWanted',
    };
  },
  components: { AnimalList },
};
</script>

<style scoped>
</style>
