<template>
  <div class="inside-map" id="map"></div>
</template>

<script>


import ymaps from 'ymaps';

export default {
  name: 'contact-map',
  data() {
    return {
      krozo: 'КРОЗО - Право жить',
      krozoOp: 'Организация помощи бездомным животным:',
      krozoIn: 'Продвижение и реализация комплексной программы ОСВВ (отлов, стерилизация, вакцинация, выпуск в среду обитания) безнадзорных животных в городе Курске',
    };
  },
  props: {},
  computed: {},
  methods: {
    init(maps) {
      const myMap = new maps.Map('map', {
        center: [51.723154, 36.253382],
        zoom: 14,
      });
      const myCollection = new maps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: '../src/assets/images/pointer.png',
        iconImageSize: [70, 74],
        iconImageOffset: [-30, -60],
        draggable: false, // и их можно перемещать
      });
      const dreamTeam = {
        balloonContentHeader: `<img class = "map_header_logo" src="img/Emb9.png" alt="" /><span class = map_info_header>${this.krozo}</span>`,
        balloonContentBody: `<span class = map_info>${this.krozoOp}<br>${this.krozoIn}</span>`,

      };
      const myPlacemark1 = new maps.Placemark([51.723154, 36.253382], dreamTeam);

      myCollection.add(myPlacemark1);
      myMap.geoObjects.add(myCollection);
    },
  },
  created() {
  },
  mounted() {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then(maps => this.init(maps));
  },
  beforeDestroy() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
  .inside-map{
      width: 100%;
      height: 100%;
   }
</style>
