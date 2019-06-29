import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: () => import('./layouts/Main.vue'),
      children: [
        {
          path: '/home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/test',
          component: () => import('./views/Test.vue'),
        },
      ],
    },
  ],
});
