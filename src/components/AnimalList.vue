<template>
  <div class="cards-box">
    <div class="cards-title">
      <h1 class="cards-h1">{{ listName }}</h1>
    </div>
    <div class="animal-cards">
      <animal-card :card="card" v-for="(card) in others" v-bind:key="card.id">
      </animal-card>
      <div class="new-card">
        <a href="/newAnimal" class="new-card-link">
          <div class="new-card-button">
            <img src="../assets/images/add20.png" width=350 alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AnimalCard from './AnimalCard';

export default {
  name: 'animal-list',
  data() {
    return {
      newCards: [],
      others: [],
      endFlag: false,
      cardPosition: 0,
    };
  },
  components: { AnimalCard },
  props: ['listName', 'axiosUrl'],
  computed: {},
  methods: {
    // Запуск таймера добавления карточек животных
    addCardTimer() {
      if (this.addInterval) {
        window.clearInterval(this.addInterval);
      }
      this.cardPosition = 0;
      this.addInterval = window.setInterval(() => {
        if ((this.endFlag === true) || (this.cardPosition > 100)) {
          this.stopAdd();
        }
        this.addCard(this.cardPosition);
        if (this.others.length > 0) {
          this.cardPosition += 1;
        }
      }, 40);
    },
    // Остановка таймера добавления карточек животных
    stopAdd() {
      window.clearInterval(this.addInterval);
    },
    // Добавление на страницу карточки животного с фотографией
    addCard(cardPosition) {
      if ((cardPosition < this.newCards.length) && (this.newCards.length > 0)) {
        this.others.push(this.newCards[cardPosition]);
      }
    },
    // Загрузка массива объектов с актуальной информацией о животных
    loadCards() {
      axios.get(this.axiosUrl)
        .then((response) => {
          if (response.data === undefined) {
            this.endFlag = true;
          } else if (response.data.toString() === '{dula: true}') {
            this.endFlag = true;
          } else {
            this.newCards = response.data;
          }
        })
        .catch((error) => {
          this.endFlag = true;
          throw new Error(error);
        });
    },
  },
  created() {
    this.loadCards();
  },
  mounted() {
    this.addCardTimer();
  },
  beforeDestroy() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
  /* ANIMAL LIST */
  .cards-box {
    text-align: justify;
    display: flex;
    flex-direction: column;
  }

  .cards-title {
    font-family: Comic Sans Ms;
    background: linear-gradient(to right, rgba(2, 141, 208, 0.9), rgba(2, 141, 208, 0));
  }

  .cards-h1 {
    margin: 0px 0px 8px 0px;
    padding-left: 65px;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 35px;
    color: #fff;
  }

  .animal-cards {
    margin: 30px 30px 30px 30px;
    display: grid;
    grid-template-columns: repeat(2, 630px);
    grid-gap: 15px;
    justify-content: center;
  }

  .new-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 300px;
    cursor: pointer;
    text-align: center;
    border: 5px #005cbf;
    background-color: rgba(255, 0, 0, 0);
    transition: opacity 5s ease-out;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 1);
  }

  .new-card:hover {
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 1);
  }

  .new-card-link {
    text-decoration: none;
  }

  .new-card-link:hover {
    text-decoration: none;
  }

  .new-card-button {
    display: flex;
    height: 470px;
    width: 630px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(3, 128, 125, 0.4);
  }
</style>
