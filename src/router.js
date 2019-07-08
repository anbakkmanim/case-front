import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * 라우터 추가하는 곳
 * path: 사용할 url
 * component: 사용할 컴포넌트 (import()를 사용하여 lazy load사용하는 것을 추천)
 * meta: {
 *  rule: 접근할 수 있는 권한 - 현재는 사용 안함
 *  pageTitle: 페이지 제목
 *  broadcrumb: 페이지의 경로 (배열)
 * }
 */
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
        {
          path: '/profile',
          component: () => import('./views/Profile.vue'),
        },
        {
          path: '/survay/create/tournament',
          component: () => import('./views/survay/tournament.vue'),
          meta: {
            pageTitle: '토너먼트 퀴즈 추가',
            breadcrumb: [
              { title: '홈', url: '/' },
              { title: '설문조사', url: '/suvray' },
              { title: '설문조사 추가', url: '/suvray/create' },
              { title: '토너먼트 퀴즈 추가', active: true },
            ],
          },
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
          path: '/login',
          component: () => import('./views/Login.vue'),
        },
        {
          path: '/register',
          component: () => import('./views/Register.vue'),
        },
        {
          path: '/resetpassword',
          component: () => import('./views/ResetPassword.vue'),
        },
        {
          path: '/forgetpassword',
          component: () => import('./views/ForgotPassword.vue'),
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
