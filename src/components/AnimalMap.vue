<template>
  <div class="inside-map" id="map">
  </div>
</template>

<script>
import axios from 'axios';
import ymaps from 'ymaps';

export default {
  name: 'animal-map',
  data() {
    return {
      animalMass: [],
      endFlag: false,
    };
  },
  props: {},
  computed: {},
  methods: {
    init(maps) {
      const x0 = 51.723154;
      const y0 = 36.253382;
      const zoom = 9;
      const myMap = new maps.Map('map', {
        center: [x0, y0],
        zoom,
      });
      const myCollection = new maps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://aliveright.ru/img/pointer-2.png',
        iconImageSize: [70, 74],
        iconImageOffset: [-30, -60],
        draggable: false,
      });
      this.addMark(x0, y0, zoom, myMap, myCollection, maps);
    },

    // Получение информации о поинтерах
    addMark(x0, y0, zoom, myMap, myCollection, maps) {
      // Пересчитать zoom в dx и dy
      axios.get(`https://aliveright.ru/marks/${x0}/${y0}/${zoom}`)
        .then((response) => {
          if (response.data === '{dula: true}') {
            this.endFlag = true;
            myMap.geoObjects.add(myCollection);
          } else {
            this.animalMass = response.data;
            let animalUrl;
            let myPlacemark;
            let firstCoordinate;
            let lastCoordinate;
            let anImage;
            let anMapName;
            let anMapInfoSimple;
            const pointerArray = this.animalMass;
            const pointerNumber = pointerArray.length;
            for (let i = 0; i < pointerNumber; i += 1) {
              anMapName = this.animalMass[i].anName;
              // eslint-disable-next-line no-underscore-dangle
              animalUrl = `https://www.aliveright.ru/animal${this.animalMass[i]._id}`;
              firstCoordinate = this.animalMass[i].coordinates[0];
              lastCoordinate = this.animalMass[i].coordinates[1];
              anImage = this.animalMass[i].images[0];
              anMapInfoSimple = this.animalMass[i].anShortMessage;
              myPlacemark = new maps.Placemark([firstCoordinate, lastCoordinate],
                {
                  balloonContentBody: [
                    `<div style="width: 100px"><a href="${animalUrl}">`,
                    `<strong style="position: absolute;font-weight: normal;padding: 10px;color: #fff;width: 60%;
                      margin-top: 15px;padding-left: 10px;font-size: 24px;
                      background: linear-gradient(to right, rgba(2, 141, 208, 0.9), rgba(2, 141, 208, 0));">${anMapName}</strong></div>`,
                    `<img width="100%" src="https://www.aliveright.ru/${anImage}">`,
                    `<div style="text-align: justify;margin-top: 20px;
                     font-size: 17px;color: black;">${anMapInfoSimple}</div>`,
                    '</a></div>',
                  ].join(''),
                  hintContent: `<span style="font-family: Comic Sans Ms;font-size: 16px;">${anMapName}</span>`,
                }, { balloonOffset: [-500, 0], balloonMaxWidth: 300 });
              myCollection.add(myPlacemark);
            }
            myMap.geoObjects.add(myCollection);
          }
        })
        .catch((error) => {
          this.endFlag = true;
          throw new Error(error);
        });
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
