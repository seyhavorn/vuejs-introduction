import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/views/HomePage.vue';
import AboutPage from '../components/views/About.vue';
import ProductList from '../components/views/products/ProductList.vue'
import ProductDetail from '../components/views/products/ProductDetail.vue';
import NotFoundPage from '../components/views/NotFoundPage.vue'
import LessonPage from '../components/views/Lesson/Lesson.vue';

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductList,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/lesson',
    name: 'Lesson',
    component: LessonPage,
    props: true
  },
  {
    path: '/',
    redirect: '/'
  },

  // Catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
