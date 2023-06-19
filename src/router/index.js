import { createRouter, createWebHistory } from 'vue-router'

import CatalogComponent from '../catalog/CatalogComponent'
import CartComponent from '../cart/CartComponent'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: CatalogComponent,
    }, {
      path: '/cart',
      name: 'Cart',
      component: CartComponent,
    },
    { path: '/', redirect: '/catalog' },
  ],
})