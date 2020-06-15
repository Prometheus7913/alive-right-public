<template>
  <animal-list :listName='listName' :axiosUrl='axiosUrl'></animal-list>
</template>

<script>
import AnimalList from './components/AnimalList';

export default {
  name: 'NewHome',
  metaInfo: {
    title: 'Ищут дом - зоозащитная организация &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые ищут новый дом.' },
      { vmid: 'og:title', property: 'og:title', content: 'Ищут дом - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые ищут новый дом.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/newHome' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'https://AliveRight.ru/img/steril/2.jpg' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Ищут дом - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которые ищут новый дом.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'https://AliveRight.ru/img/steril/2.jpg' },
    ],
  },
  data() {
    return {
      listName: 'Ищут дом',
      axiosUrl: 'https://aliveright.ru/cards/newHome',
    };
  },
  components: { AnimalList },
};
</script>

<style scoped>
</style>
