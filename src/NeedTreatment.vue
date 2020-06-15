<template>
  <animal-list :listName='listName' :axiosUrl='axiosUrl'></animal-list>
</template>

<script>
import AnimalList from './components/AnimalList';

export default {
  name: 'NeedTreatment',
  metaInfo: {
    title: 'Идет сбор на лечение - КРОЗО &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которым необходима медицинская помощь.' },
      { vmid: 'og:title', property: 'og:title', content: 'Идет сбор на лечение - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которым необходима медицинская помощь.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/needTreatment' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'https://AliveRight.ru/img/ivnvalids/5.jpg' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Идет сбор на лечение - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'На нашем сайте Вы можете ознакомиться со списком животных, которым необходима медицинская помощь.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'https://AliveRight.ru/img/ivnvalids/5.jpg' },
    ],
  },
  data() {
    return {
      listName: 'Идет сбор на лечение',
      axiosUrl: 'https://aliveright.ru/cards/needTreatment',
    };
  },
  components: { AnimalList },
};
</script>

<style scoped>
</style>
