import { createRouter, createWebHistory } from 'vue-router'

import ProductCatalog from '../catalog/ProductCatalog-Options.vue'
import ShoppingCart from '../cart/ShoppingCart-Options.vue'

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