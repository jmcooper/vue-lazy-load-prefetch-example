import { createRouter, createWebHistory } from 'vue-router'

import ProductCatalog from '../catalog/ProductCatalog.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: ProductCatalog,
    }, {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
    { path: '/', redirect: '/catalog' },
  ],
})