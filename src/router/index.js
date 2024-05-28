import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContentView from '../views/ContentView.vue'
import UserFormView from '../views/UserFormView.vue'
import PhotoView from '../views/PhotoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/content',
      name: 'content',
      component: ContentView
    },
    {
      path: '/user-form',
      name: 'user-form',
      component: UserFormView
    },
    {
      path: '/foto/:id',
      name: 'foto',
      component: PhotoView
    },
  ]
})

export default router;
