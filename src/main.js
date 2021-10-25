import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
