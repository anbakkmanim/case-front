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
        {
          path: '/hello',
          component: () => import('./views/Hello.vue'),
        },
      ],
    },
    {
      path: '',
      component: () => import('./layouts/Fullpage.vue'),
      children: [
        {
          path: '/fullpage',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/404',
          component: () => import('./views/404.vue'),
        },
        {
          path: '/500',
          component: () => import('./views/500.vue'),
        },
        {
          path: '*',
          component: () => import('./views/404.vue'),
        },
      ],
    },
  ],
});
