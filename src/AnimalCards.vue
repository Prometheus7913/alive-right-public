<template>
  <article class="information_box">
    <div class="information_left">
      <div class="information_title">
        <h1>Анкеты питомцев</h1>
      </div>
      <div class="information_right">
        <div class="information_right-dr">
          <ul class="information_menu">
            <li>
              <a class="information_other" href="/newHome">Ищут дом</a></li>
            <li>
              <a class="information_other" href="/needTreatment">Идет сбор на лечение</a>
            </li>
            <li>
              <a class="information_other" href="/petsWanted">Разыскиваются</a>
            </li>
            <li>
              <a class="information_other" href="/map">Карта</a>
            </li>
            <li>
              <a class="information_other" href="/newAnimal">Добавить анкету</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AnimalCards',
  metaInfo: {
    title: 'Страницы животных - зоозащитная организация &laquo;Право Жить&raquo;',
    meta: [
      { vmid: 'description', name: 'description', content: 'На нашем сайте Вы можете ознакомиться со списком всех животных, которые находятся на лечении, ищут дом, либо разыскиваются хозяевами.' },
      { vmid: 'og:title', property: 'og:title', content: 'Страницы животных - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:description', property: 'og:description', content: 'На нашем сайте Вы можете ознакомиться со списком всех животных, которые находятся на лечении, ищут дом, либо разыскиваются хозяевами.' },
      { vmid: 'og:url', property: 'og:url', content: 'https://AliveRight.ru/animal_cards' },
      { vmid: 'og:site_name', property: 'og:site_name', content: '&laquo;Право Жить&raquo; - общественная зоозащитная организация' },
      { vmid: 'og:image', property: 'og:image', content: 'https://AliveRight.ru/img/avtorization.jpg' },
      { vmid: 'twitter:title', name: 'twitter:title', content: 'Страницы животных - зоозащитная организация &laquo;Право Жить&raquo;' },
      { vmid: 'og:site_name', name: 'twitter:description', content: 'На нашем сайте Вы можете ознакомиться со списком всех животных, которые находятся на лечении, ищут дом, либо разыскиваются хозяевами.' },
      { vmid: 'og:image', name: 'twitter:image', content: 'https://AliveRight.ru/img/avtorization.jpg' },
    ],
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.information_box{
  display: flex;
  flex-direction: row;
  font-family: Comic Sans Ms;
  margin-bottom: 30px;
}

.information_left{
  width: 100%;
}

.information_title{
  background: linear-gradient( to right, rgba(2,141,208,0.9), rgba(2,141,208,0));
  padding: 0px 0px 8px 0px;
}

.information_title h1{
  padding-left: 65px;
  padding-bottom: 15px;
  padding-top: 15px;
  margin: 0px 0px 0px 0px;
  font-size: 35px;
  color: #fff;
}

.information_right {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.information_right-dr{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  background: rgba(255, 255, 255, 1.0);
  background: radial-gradient(rgba(0, 191, 221, 1) 0%, rgba(2,141,208,0) 70%);
  min-height: 700px;
}

.information_menu {
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.information_other{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  text-decoration: none;
}

.information_other:hover{
  color: var(--header-text-color, rgba(161,71,143,1));
  text-decoration: none;
}
</style>
