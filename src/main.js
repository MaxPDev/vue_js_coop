import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import {Outils} from "./mixins/outils.js";
Vue.mixin(Outils); //TODO: check mixin

// https://www.digitalocean.com/community/tutorials/vuejs-vuex-persist-state
// https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios

Vue.prototype.$bus = new Vue();

Vue.prototype.$api = new axios.create({
  baseURL: "https://allweb.fun/coop/api/",
  params: {},
  headers: { 'Authorization': "03f15fed8c8af981c0781808822fe2cc3e59270b" }
});

Vue.prototype.$api.interceptors.request.use(function(config) {
  if (store.state.token) {
      config.params.token = store.state.token; //le token de connexion vers le compte utilisateur
  }
  return config;
})

Vue.config.productionTip = false

//      TO DO to make work
// cette ligne import/charge globalement un composant, ici le header
// Pas besoin : - d'importe dans les view - de le déclarer dans components
Vue.component('Header', () => import('@/components/Header.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
