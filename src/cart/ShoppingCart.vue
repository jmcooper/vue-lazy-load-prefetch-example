<template>
  <div class="container">
    <h1 class="header">Your Cart</h1>

    <div class=" empty-cart" v-if="cartStore.cart.length === 0">
      You have no items in your cart as of {{ loadTime }}
    </div>
    <ul class="cart" v-if="cartStore.cart.length > 0">
      <li class="cart-item" v-for="(product, index) in cartStore.cart" :key="index">
        <ProductInfo :product="product">
          <button @click="removeFromCart(product)">Remove</button>
        </ProductInfo>
      </li>
    </ul>
    <div v-if="cartStore.cart.length > 0" class="total">Total: {{ toCurrency(cartStore.cartTotal) }}</div>
  </div>
</template>

<script setup>
import { toCurrency } from '@/shared/formatters'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart-store'
import moment from 'moment'

const cartStore = useCartStore()

const loadTime = moment().format()

function removeFromCart(product) {
  cartStore.cart = cartStore.cart.filter((i) => i !== product)
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.header {
  align-self: center;
}

.empty-cart {
  margin: 0 100px;
  align-self: center;
  font-size: 20px;
  margin-top: 20px;
}

.cart {
  margin: 0 100px;
  border-top: 2px solid #999;
}

.cart-item {
  border-bottom: 2px solid #999;
}

.total {
  margin: 25px 175px 0 0;
  align-self: right;
  font-size: 25px;
  text-align: right;
}
</style>