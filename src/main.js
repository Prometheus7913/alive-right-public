import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Meta);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
