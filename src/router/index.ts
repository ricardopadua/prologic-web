import VueRouter, {
  createRouter, createWebHistory, RouteRecordRaw, NavigationGuard,
} from 'vue-router';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: defaultRoutes,
});

router.beforeResolve((to, from, next) => {
  const lastMatched = to.matched[to.matched.length - 1];
  const baseTitle = 'Vue Vuetify Template';

  if (typeof lastMatched.meta.title === 'string') {
    document.title = `${lastMatched.meta.title} - ${baseTitle}`;
  } else {
    document.title = baseTitle;
  }

  next();
});

export default router;
