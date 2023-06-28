import { createRouter, createWebHistory } from 'vue-router'

import ProductCatalog from '../catalog/ProductCatalog.vue'
const ShoppingCart = import(/* webpackPrefetch: false */'../cart/ShoppingCart.vue')

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