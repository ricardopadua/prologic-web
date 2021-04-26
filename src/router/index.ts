import {
  createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/modules/Sample/Home'),
    meta: { title: 'Home' },
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/modules/Sample/About'),
    meta: { title: 'About' },
  },
  {
    name: 'Sign in',
    path: '/signin',
    component: () => import('@/views/modules/Sample/About'),
    meta: { title: 'Sign in' },
  },
  {
    name: 'Sign up',
    path: '/signup',
    component: () => import('@/views/modules/Sample/About'),
    meta: { title: 'Sign up' },
  },
  {
    name: 'Forgot my password',
    path: '/forgotmypassword',
    component: () => import('@/views/user/SignIn'),
    meta: { title: 'Forgot my password' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: defaultRoutes,
});

router.beforeResolve((to, from, next) => {
  const loginPage = ['/signin', '/forgotmypassword', '/signup'];

  const authRequired1 = !loginPage.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired1 && !loggedIn) {
    return next('/signin');
  }
  NProgress.start();
  return next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
