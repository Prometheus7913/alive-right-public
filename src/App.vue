<template>
  <div class="all-page">
    <preloader v-if="preLoaderOn"></preloader>
    <ar-background></ar-background>
    <ar-header></ar-header>
    <div class="box">
      <div class="content" v-bind:style="{'min-height': minHeight}">
        <router-view></router-view>
      </div>
    </div>
    <ar-footer></ar-footer>
  </div>
</template>

<script>
import Preloader from './components/Preloader';
import ArHeader from './components/ArHeader';
import ArFooter from './components/ArFooter';
import ArBackground from './components/ArBackground';

export default {
  data() {
    return {
      preLoaderOn: true,
      optimalHeight: 800,
    };
  },
  components: { ArHeader, ArFooter, Preloader, ArBackground },
  computed: {
    minHeight() {
      return `${this.optimalHeight}px`;
    },
  },
  mounted() {
    this.preLoaderOn = false;
    this.optimalHeight = ((window.innerHeight / window.innerWidth) * 1355) - 701;
  },
};
</script>

<style>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: local('Comic Sans MS Regular'), local('Comic-Sans-MS-Regular'),
  url('./assets/fonts/ComicSansMS.woff2') format('woff2'),
  url('./assets/fonts/ComicSansMS.woff') format('woff'),
  url('./assets/fonts/ComicSansMS.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: local('Comic Sans MS Bold'), local('Comic-Sans-MS-Bold'),
  url('./assets/fonts/ComicSansMS-Bold.woff2') format('woff2'),
  url('./assets/fonts/ComicSansMS-Bold.woff') format('woff'),
  url('./assets/fonts/ComicSansMS-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: local('Comic Sans MS Bold Italic'), local('Comic-Sans-MS-Bold-Italic'),
  url('./assets/fonts/ComicSansMS-BoldItalic.woff2') format('woff2'),
  url('./assets/fonts/ComicSansMS-BoldItalic.woff') format('woff'),
  url('./assets/fonts/ComicSansMS-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: local('Comic Sans MS Italic'), local('Comic-Sans-MS-Italic'),
  url('./assets/fonts/ComicSansMS-Italic.woff2') format('woff2'),
  url('./assets/fonts/ComicSansMS-Italic.woff') format('woff'),
  url('./assets/fonts/ComicSansMS-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

*, ::after, ::before {
  box-sizing: border-box;
}

p {
  display: block;
  padding: 0;
  margin: 0px
}
[type=reset], [type=submit], button, html [type=button] {
  -webkit-appearance: button;
}
button, select {
  text-transform: none;
}
button, input {
  overflow: visible;
}
button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}

h5 {
  font-size: 1.25rem;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button,
button:active,
button:focus {
  outline: none;
}

span{
  text-decoration: none;
}

button{
  outline: none;
}

button:focus{
  outline:0
}

.box {
  padding-bottom: 1px;
  margin-bottom: 0px;
}

.content {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",
  Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  width: 1355px;
  margin: auto;
  padding-top: 30px;
  background-color: var(--content-color,rgba(191,220,252,0.9));
  box-shadow: -10px 0px 15px 0px rgba(0,0,0,1);
  margin-bottom: 0px;
  padding-bottom: 1px;
}
</style>
