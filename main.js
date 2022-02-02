import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Axios from 'axios';
import store from "./store";

Vue.config.productionTip = false

//set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  
  el: '#app',
  router,
  components: { App },
  store: store,  
  template: '<App/>'
}).$mount('#app')
