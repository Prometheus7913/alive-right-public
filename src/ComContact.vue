<template>
  <article class="contact_box">
    <div class="contact_left">
      <div class="contact_title">
        <h1>Контакты</h1>
      </div>
      <div class="contact-main">
        <div class="contact-name">
          Курская региональная общественная зоозащитная организация "ПРАВО ЖИТЬ"
        </div>
        <div class="address">
          <ul>
            <li>
              <p>
                Юридический адрес: &nbsp; 305044, Курская обл, город Курск, улица Соловьиная, дом 51
              </p>
            </li>
            <li><p>Телефон: &nbsp; +7-910-310-06-72</p></li>
            <li><p>Email: &nbsp; aliveright@yandex.ru</p></li>
            <li><p>ИНН: &nbsp; 4632228470</p></li>
            <li><p>ОГРН &nbsp; 1194600000242</p></li>
          </ul>
        </div>
        <div class="map-size">
          <contact-map></contact-map>
        </div>
        <div class="contact-social-network">
          <a href="https://www.facebook.com/groups/116969012268719/"><img width="100" src="../src/assets/images/contact-facebook-re-2.png" alt="facebook"></a>
          <a href="https://www.instagram.com/pravo_zhit/"><img width="100" src="../src/assets/images/contact-instagram-re-2.png" alt="instagram"></a>
          <a href="https://ok.ru/group/58414209630270"><img width="100" src="../src/assets/images/contact-od-re-2.png" alt="od"></a>
          <a href="https://vk.com/pravo_zhit"><img width="100" src="../src/assets/images/contact-vk-re-2.png" alt="vk"></a>
        </div>
      </div>
    </div>
    <div class="contact_right">
      <div class="contact_right-dr">
        <div class="contact_menu">
          <ul class="contact_list">
            <li><a href="/about_us" class="contact_other">О нас</a></li>
            <li><a href="/gallery" class="contact_other">Галерея</a></li>
            <li><a href="/our_team" class="contact_other">Команда волонтёров</a></li>
            <li><a href="#" class="contact_curr">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ContactMap from './components/ContactMap';

export default {
  name: 'ComContact',
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
  components: { ContactMap },
};
</script>

<style scoped>
  .contact_box{
    display: flex;
    flex-direction: row;
    font-family: Comic Sans Ms;
    margin-bottom: 30px;
  }

  .contact_left{
    width: 75%;
  }

  .contact_title{
    background: linear-gradient( to right, rgba(2,141,208,0.9), rgba(2,141,208,0));
  }

  .contact_title h1{
    padding-left: 65px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 35px;
    color: #fff;
  }

  .contact-main{
    width: 100%;
    min-height: 500px;
  }

  .contact-social-network{
    margin-top: 25px;
    border: 5px solid rgba(2,141,208,1);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 900px;
    margin-left: 65px;
    transition: 0.5s all;
    margin-bottom: 45px;
  }

  .contact-social-network a{
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 12px;
    transition: 0.5s all;
  }

  .contact-social-network a:hover{
    transform: translateY(10px);
  }

  .contact-social-network:hover{
    box-shadow: inset 0 1px 3px 1px rgba(0,0,0,.5), inset 0 0 0 5em rgba(2,141,208,0.55);
    border: 10px solid rgba(2,141,208,1);
  }

  .contact-name{
    width: 900px;
    margin-left: 65px;
    font-size: 22.5px;
  }

  .address{
    width: 900px;
    margin-left: 90px;
    margin-top: 30px;
  }

  .address li{
    list-style: circle;
    font-size: 18px;
  }

  .contact_right {
    width: 25%;
  }

  .contact_right-dr{
    width: 100%;
    background: rgba(255, 255, 255, 1.0);
    background: radial-gradient(farthest-corner at 100% 0%,
    rgb(0, 191, 221) 0%, rgba(2, 141, 208, 0) 70%);
    min-height: 500px;
  }

  .contact_menu {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .contact_list{
    display: flex;
    padding-right: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .contact_other{
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
  }

  .contact_curr{
    font-size: 20px;
    color: var(--header-text-color, rgba(161,71,143,1));
    text-decoration: none;
  }

  .contact_other:hover{
    color: var(--header-text-color, rgba(161,71,143,1));
    text-decoration: none;
  }

  .contact_curr:hover{
    color: var(--header-text-color, rgba(161,71,143,1));
    text-decoration: none;
  }

  .map-size{
    margin-top: 30px;
    margin-left: 65px;
    width: 900px;
    height: 500px;
  }

</style>
