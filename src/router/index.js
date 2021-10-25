import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
  },
  {
    path: '/architects',
    name: 'architects',
    component: () => import(/* webpackChunkName: "architects" */ '../views/Architects.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue'),
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  setTimeout(() => {
    document.getElementById('app').scrollTop = 0;
    store.commit('CURSOR_POINTER', false);
  }, 375);
});

export default router;
