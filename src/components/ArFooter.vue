<template>
  <footer>
    <div class="footer">
      <div class="info-footer">
      <span class="info-footer-desc">
         <h5>О КРОЗО "Право Жить"</h5>
        <p>Основным направлением деятельности организации является продвижение
          и реализация комплексной программы ОСВВ (отлов, стерилизация,
          вакцинация, выпуск в среду обитания) безнадзорных животных в г.Курске
          и законодательное закрепление программы на территории Курской области
          в целях сокращения численности БЖ гуманными способами.</p>
      </span><br>
        <div class="contact">
          <ul><h5><span class="footer-font-2">Контакты</span></h5>
            <li>E-mail: aliveright@yandex.ru</li>
            <li>Адрес: г. Курск, ул. Соловьиная, д. 51</li>
            <li>Тел: +7-919-134-64-78</li>
            <li></li>
          </ul><br>
        </div>
      </div>
      <div class="footer-menu">
        <ul class="footer-menu-list"><li><a><span class="footer-font">Навигация</span></a></li>
          <li><a href="/index">Главная</a></li>
          <li><a href="/about_us">О нас</a></li>
          <li><a href="/animal_cards">Анкеты питомцев</a></li>
          <li><a href="/sympathetic">Наши проекты</a></li>
          <li><a href="/information">Полезная информация</a></li>
        </ul>
        <div>
          <button class="donate button0"><a href="/donate">Поддержать</a></button>
          <div class="img-footer">
            <a href="https://vk.com/pravo_zhit"><img width="50" src="../assets/images/vk.png" alt="vk"></a>
            <a href="https://ok.ru/group/58414209630270"><img width="50" src="../assets/images/od.png" alt="Od"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ar-footer',
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
/* FOOTER */
.button0 {
  background-color: var(--spare-color,rgba(25,116,165,0.9));
  color: var(--spare-text-color,rgba(255, 255, 255, 0.9));
  border:solid rgba(0, 191, 221, 0.9);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px;
  border-radius: 5px 5px 5px 5px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button0:hover {
  background-color: var(--inverted-spare-color,rgba(0, 191, 221, 0.9));
}


.footer {
  box-shadow: -10px -10px 15px 0px rgba(0, 0, 0, 1);
  display: flex;
  align-items: flex-start;
  margin: auto;
  width: 1355px;
  min-height: 500px;
  background: url('../assets/images/dog.png');
  background-size: 100%;
  padding-top: 18px;
  font-family: Tahoma;
}

.footer-menu{
  margin-left: auto;
  width: 330px;
}

.footer-menu-list {
  display: flex;
  flex-direction: column;
}

.footer-menu-list li{
  margin-top: 8px;
}

.footer-menu-list a {
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s all;
  font-size: 18px;
}

.footer-menu-list a:hover {
  color: #1C9FFF;
}

.footer-font {
  font-size: 25px;
  color: #fff;
  border-bottom: 1.98px solid #fff;
}

.footer-font-2 {
  font-size: 25px;
  color: #fff;
  border-bottom: 1.98px solid #fff;
}

.info-footer {
  color: #fff;
  width: 450px;
  margin-left: 30px;
  font-size: 18px;
}

.info-footer-desc p {
  line-height: 32px;
}

.info-footer-desc h5 {
  margin-top: 9px;
  border-bottom: 1.98px solid #fff;
  font-size: 25px;
}

.contact {
  margin-right: 15px;
  width: 450px;
  margin-top: 10px;
  font-size: 18px;
}

.contact li {
  color: #fff;
  text-decoration: none;
  transition: 0.5s all;
}

.donate {
  display: block;
  padding: 12px;
  padding-right: 35px;
  padding-left: 35px;
  margin-top: 15px;
  margin-left: 9px;
  background-color: #3173ab;
}

.donate a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}

.img-footer {
  margin-left: 2px;
  margin-top: 100px;
}

.img-footer img {
  margin-left: 7px;
  transition: 0.5s all;
  cursor: pointer;
}

.img-footer img:hover {
  filter: brightness(50%);
}

.hidden{
  display: none;
}
</style>
