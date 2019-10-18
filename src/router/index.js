import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'MainPage',
    route: '/',
    component: () => import('@/views/MainPage'),
  },
  {
    name: 'Formation',
    route: '/formation',
    component: () => import('@/views/Formation'),
  },
  {
    name: 'Companies',
    route: '/companies',
    component: () => import('@/views/Companies'),
  },
  {
    name: 'NTab',
    route: '/n-tab',
    component: () => import('@/views/NTab'),
  },
  {
    path: '/*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
