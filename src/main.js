import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { Plugin } from 'vue-fragment';
import VueFormWizard from 'vue-form-wizard';
import Axios from 'axios';
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


// Vue Form Wizard CSS 사용
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

// Global Component 등록
import './globalComponent';


// Vee Validate (form 검사기) 설정
Vue.use(VeeValidate);
Vue.use(Plugin);

// Vue Form Wizard 사용
Vue.use(VueFormWizard);

if (process.env.NODE_ENV !== 'production') { window.baseURL = 'http://10.80.161.110:8000'; } else { window.baseURL = ''; }
// Vue Axios 사용
Vue.prototype.$http = Axios.create({
  baseURL: `${window.baseURL}/api`,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
Vue.config.devtools = true;
