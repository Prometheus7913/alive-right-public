<template>
  <header class="main-header">
    <nav class="top-menu">
      <a class="navbar-logo" href="/index">
        <img v-bind:height='emb_height' src="../assets/images/emb9.png">
      </a>
      <div class="navigation">
        <div class="top-nav">
          <div class="for-thinking">
            <p>{{ message }}</p>
          </div>
          <div class='authorization hidden'>
            <div class='first-group'>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                       placeholder="Password">
              </div>
              <div class='button-first'>
                <button type="submit" class="btn btn-info">></button>
              </div>
            </div>
            <div class='second-group'>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
            </div>
          </div>
          <div class="form-group hidden">
            <label class="search-lab" for="search">Поиск</label>
            <input type="text" class="form-control" id="search">
            <hr>
          </div>
        </div>
        <div class="menu">
          <div class="menu-list"><a class="toolbar" href="/about_us">О нас</a>
            <ul class="menu-drop">
              <li><a href="/gallery">Галерея</a></li>
              <li><a href="/our_team">Команда волонтеров</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
          </div>
          <div class="menu-list"><a class="toolbar" href="/animal_cards">Анкеты питомцев</a>
            <ul class="menu-drop">
              <li><a href="/newHome">Ищут дом</a></li>
              <li><a href="/needTreatment">Идет сбор на лечение</a></li>
              <li><a href="/petsWanted">Разыскиваются</a></li>
              <li><a href="/map">Карта</a></li>
              <li><a href="/newAnimal">Добавить анкету</a></li>
            </ul>
          </div>
          <div class="menu-list"><a class="toolbar" href="/sympathetic">Наши проекты</a>
            <ul class="menu-drop">
              <li><a href="/steril">Стерилизация</a></li>
              <li><a href="/invalids">Работа с животными инвалидами</a></li>
              <li><a href="/society">Общественные мероприятия</a></li>
              <li><a href="/overexposure">Пункт передержки</a></li>
            </ul>
          </div>
          <div class="menu-list"><a class="toolbar" href="/information">Полезная информация</a>
            <ul class="menu-drop">
              <li><a href="/become_volunteer">Стать волонтёром</a></li>
              <li><a href="/clinics">Ветклиники города</a></li>
              <li><a href="/recommendations">Советы начинающим волонтерам</a></li>
              <li><a href="/faq">Ваши вопросы</a></li>
            </ul>
          </div>
          <div class="menu-list"><a class="toolbar" href="/donate">Поддержать</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const forThinking = [
  'Нас характеризует то, на что направлено наше внимание',
  'Свободный человек не испытывает ненависти к понедельникам и не ждет пятниц.',
  'Есть одна вещь, которой человек может полностью управлять — это его собственное отношение к жизни.',
  'Мудрый не тот, кто много размышляет о великом, а тот, кто мало думает о бесполезных мелочах.',
  'Если жизнь кажется вам скучной, то это очень говорящий сигнал о том, что вы не задействуете весь свой потенциал.',
  'Интуиция – это нечто такое, что опережает точное знание.',
  'Мы сможем добиться всего, чего пожелаем, если предпримем достаточное количество попыток.',
  'Многие завидуют результату, но мало кто завидует пути его достижения.',
  'Уже сегодня делать то, о чем другие будут думать завтра.',
  'Любые перемены несут в себе новые возможности.',
  'Великие люди обсуждают идеи, средние люди обсуждают события, а мелкие – обсуждают других людей.',
  'Вы получаете от жизни не то, что хотите, а то, над чем работаете.',
  'Трудности полезны — они заставляют тебя понять, что на самом деле для тебя важно.',
  'Просветление – не что иное, как последовательная утрата иллюзий.',
  'Самое большое неверие – это неверие в себя.',
  'Счастье – это не что-то готовое, что легко можно найти. Оно – следствие наших собственных действий.',
  'Сначала ты теряешь инициативу и мотивацию, а потом наросший на тебе мох начинает казаться тёплым, домашним и уютным',
  'Будущее — это не то, куда мы идем, а то, что мы создаем.',
  'Масштаб вашей личности определяется величиной проблемы, которая способна вас вывести из себя.',
  'Начни делать необходимое, затем возможное и внезапно увидишь, что уже делаешь невозможное.',
  'Вы не сможете начать новую главу в своей жизни, если до сих пор перечитываете предыдущую.',
  'Умейте прощать, ведь это свойство сильных. Слабые никогда не прощают.',
  'Возможность дается тем, кто мечтает. Чудо дается тем, кто верит.',
  'Находить опору в самом себе — значит быть могущественным.',
  'Дети никогда не слушались взрослых, но зато исправно им подражали.',
  'Нет человека, который достиг чего-то стоящего, не имея цели.',
  'Человек вправе делать любой выбор, но это не освобождает его от ответственности за свои поступки.',
  'Огонь тоже считался божественным, пока Прометей не украл его. Теперь мы кипятим на нем воду.',
  'Чтобы научиться правильно действовать, прежде всего, следует обрести ясное направление в жизни.',
  'Есть два способа жить: вы можете жить так, как будто чудес не бывает, и вы можете жить так, как будто все в этом мире является чудом.',
];
const randomMessage = Math.floor(Math.random() * forThinking.length);
export default {
  name: 'ar-header',
  data() {
    return {
      message: forThinking[randomMessage],
      emb_height: '160',
    };
  },
  computed: {
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        if (window.scrollY < 200) {
          this.emb_height = 160 - (window.scrollY / 10);
        } else {
          this.emb_height = '140';
        }
      } else {
        this.emb_height = '160';
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* HEADER */
.main-header {
  position: sticky;
  opacity: 1;
  z-index: 10;
  top: -30px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,
  "Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 18px;
}

.top-menu {
  background-color: rgba(191,220,252,0.9);
  box-shadow: -10px -20px 15px 0px rgba(0,0,0,1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  width: 1355px;
  justify-content: space-around;
}
.navbar-logo{
  margin-top: 35px;
  margin-left: 30px;
  margin-bottom: 5px;
}
.navigation {
  display: flex;
  flex-direction: column;
  min-height: 160px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 60px;
  justify-content: space-between;
}

.top-nav {
  display: flex;
  margin-top: 20px;
  padding: 0px;
  flex-direction: row;
  justify-content: space-between;
}

.for-thinking {
  margin: 10px 20px 10px 20px;
  width: 720px;
  padding: 10px;
  min-height: 30px;
  font-size: 22px;
  font-style: italic;
  font-variant: small-caps;
  font-weight: bold;
  color: rgba(161,71,143,1);
}

.authorization {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
}

.first-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.form-group {
  color: rgba(161,71,143,1);
  margin-top: 20px;
  margin-bottom: 0px;
  height: 80px;
}

.button-first {
  margin-top: 42px;
}

.second-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  display: none;
}

.search-lab {
  color: rgba(161, 71, 143, 1);
  font-family: Comic Sans Ms;
  position: relative;
  font-size: 14px;
  font-weight: bold;
}

.menu {
  display: flex;
  flex-direction: row;
  box-shadow: -5px 2px 15px 0px rgba(141, 210, 240, 1);
  background: linear-gradient(45deg, rgba(2, 141, 208, 0.9), rgba(161, 71, 143, 1));
}

.menu-list {
  position: sticky;
}

.menu-list:hover .toolbar {
  background: rgba(0, 191, 221, 0.9);
  color: rgba(255,255,255,1);
  text-decoration: none;
  padding: 10px 40px 10px 40px;
}

.menu-list:hover .menu-drop {
  display: block;
  text-decoration: none;
  box-shadow: -5px 2px 15px 0px rgba(141, 210, 240, 1);
}

.toolbar {
  text-decoration: none;
  color: rgba(255,255,255,1);
  padding: 10px 37px 10px 37px;
  margin: 0;
  display: inline-block;
  border:0px solid #666;
  transition: 0.4s all;
}

.menu-drop{
  position: absolute;
  margin-left: 0;
  width: 100%;
  display: none;
}

.menu-drop a{
  background: rgba(0,191,221,0.9);
  color: rgba(255,255,255,1);
  padding: 10px 7px 10px 7px;
  display: block;
  text-decoration: none;
  border-bottom:1px solid #8dd2f0;
  transition: 0.4s all;
}

.menu-drop a:hover {
  background-color: rgba(161, 71, 143, 1);
}

.hidden{
  display: none;
}
</style>
