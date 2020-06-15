<template>
  <div class="animal-card">
    <a v-bind:href='"https://aliveright.ru/animal" + card._id' class="passport-link">
      <div class="animal-photo">
        <img v-bind:src='"https://aliveright.ru" + card.images[0]' width=630 alt="">
      </div>
      <div class="animal-main-info" v-bind:style="{background: titleColor(card)}"
      >{{ card.anName }}<span v-if="card.anAge"> - {{card.anAge}}</span></div>
      <div class="animal-description">
        <p v-for="(abstract) in card.anShortMessage" v-bind:key="abstract.id">{{abstract}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'animal-card',
  data() {
    return {
    };
  },
  props: ['card'],
  computed: {},
  methods: {
    // Определяем цвет заголовка в зависимости от раздела портала
    titleColor(card) {
      if (card.needTreatment) {
        return 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)';
      }
      if (card.wanted) {
        return 'linear-gradient(217deg, rgba(230,0,230,.8), rgba(230,0,230,0) 70.71%)';
      }
      return 'linear-gradient(217deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)';
    },
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
  /* ANIMAL CARD */
  .animal-card {
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

  .animal-card:hover {
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 1);
  }

  .passport-link {
    text-decoration: none;
  }

  .passport-link:hover {
    text-decoration: none;
  }

  .animal-photo {
    height: 350px;
    overflow: hidden;
  }

  .animal-main-info {
    position: relative;
    min-height: 50px;
    min-width: 100px;
    left: 0px;
    bottom: 340px;
    z-index: 2;
    font-size: 24px;
    text-align: right;
    font-style: italic;
    font-variant: small-caps;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
    padding: 10px 30px 10px 10px;
  }

  .animal-description {
    font-size: 16px;
    text-align: left;
    font-style: italic;
    font-variant: small-caps;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(10, 10, 10, 1);
    padding: 10px 10px 10px 10px;
    margin-top: -56px;
    min-height: 120px;
  }
</style>
