import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPage from '../views/CartView.vue'
import wishlistViewPage from '../views/wishlistView.vue'
import ProductDetail from "../views/DetailVue.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartPage
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: wishlistViewPage
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true
    }
  ]
})

export default router
