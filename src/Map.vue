<template>
  <article class="map-box">
    <div class="map-left">
      <div class="map-title">
        <h1>Карта</h1>
      </div>
      <div class="map-size">
        <animal-map></animal-map>
      </div>
    </div>
    <div class="map-right">
      <div class="map-right-dr">
        <div class="map-menu">
          <ul class="map-list">
            <li><a href="/newHome" class="map-other">Ищут дом</a></li>
            <li><a href="/needTreatment" class="map-other">Идет сбор на лечение</a></li>
            <li><a href="/petsWanted" class="map-other">Разыскиваются</a></li>
            <li><a href="#" class="map-curr">Карта</a></li>
            <li><a href="/newAnimal" class="map-other">Добавить анкету</a></li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AnimalMap from './components/AnimalMap';

export default {
  name: 'Map',
  metaInfo: {
    title: 'Карта найденных животных - КРОЗО &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'С помощью нашей карты Вы можете определить, как быстрее всего забрать понравившегося Вам питомца.' },
      { vmid: 'og:title', property: 'og:title', content: 'Карта найденных животных - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'С помощью нашей карты Вы можете определить, как быстрее всего забрать понравившегося Вам питомца.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/map' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'http://AliveRight.ru/img/pointer-2.png' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Карта найденных животных - КРОЗО &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'С помощью нашей карты Вы можете определить, как быстрее всего забрать понравившегося Вам питомца.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'http://AliveRight.ru/img/pointer-2.png' },
    ],
  },
  data() {
    return {
    };
  },
  components: { AnimalMap },
};
</script>

<style scoped>
/* MAP */
.map-box{
  display: flex;
  flex-direction: row;
  font-family: Comic Sans Ms;
  margin-bottom: 30px;
}

.map-size{
  margin-top: 30px;
  margin-left: 65px;
  width: 900px;
  height: 500px;
}

.map-left{
  width: 75%;
}

.map-title{
  background: linear-gradient( to right, rgba(2,141,208,0.9), rgba(2,141,208,0));
  padding: 0px 0px 8px 0px;
}

.map-title h1{
  padding-left: 65px;
  padding-bottom: 15px;
  padding-top: 15px;
  margin: 0px 0px 0px 0px;
  font-size: 35px;
  color: #fff;
}

.map-right {
  width: 25%;
}

.map-right-dr{
  width: 100%;
  background: rgba(255, 255, 255, 1.0);
  background: radial-gradient(farthest-corner at 100% 0%, rgba(0, 191, 221, 1)
  0%, rgba(2,141,208,0) 70%);
  min-height: 500px;
}

.map-menu {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.map-list{
  display: flex;
  padding-right: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.map-other{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
}

.map-curr{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 20px;
  color: rgba(161,71,143,1);
  text-decoration: none;
}

.map-other:hover{
  color: rgba(161,71,143,1);
  text-decoration: none;
}

.map-curr:hover{
  color: rgba(161,71,143,1);
  text-decoration: none;
}
</style>
