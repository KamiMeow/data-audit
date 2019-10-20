import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'MainPage',
    path: '/',
    component: () => import('@/views/MainPage'),
  },
  {
    name: 'DependenciesPage',
    path: '/dependencies',
    component: () => import('@/views/DependenciesPage'),
  },
  {
    name: 'Formation',
    path: '/formation',
    component: () => import('@/views/Formation'),
  },
  {
    name: 'Companies',
    path: '/companies',
    component: () => import('@/views/Companies'),
  },
  {
    name: 'NTab',
    path: '/n-tab',
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
