import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { Plugin } from 'vue-fragment';
import App from './App.vue';
import router from './router';
import store from './store/store';


import 'material-icons/iconfont/material-icons.css'; // Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax


// Styles: SCSS
import './assets/scss/main.scss';

// Tailwind
import '@/assets/css/main.css';

// Vuesax 테마 설정
import '../themeConfig';

// Vee Validate (form 검사기) 설정
Vue.use(VeeValidate);
Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
