<template>
  <div class="container">
    <h1 class="header">Your Cart</h1>

    <div class="empty-cart" v-if="this.cart.length === 0">
      You have no items in your cart
    </div>
    <ul class="cart" v-if="this.cart.length > 0">
      <li class="cart-item" v-for="(product, index) in this.cart" :key="index">
        <ProductInfo :product="product">
          <button @click="removeFromCart(product)">Remove</button>
        </ProductInfo>
      </li>
    </ul>
    <div v-if="this.cart.length > 0" class="total">Total: {{ toCurrency(this.cartTotal) }}</div>
  </div>
</template>

<script>
import { toCurrency } from '@/shared/formatters'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart-store-options'
import { mapState, mapWritableState } from 'pinia'

export default {
  components: {
    ProductInfo,
  },
  computed: {
    ...mapState(useCartStore, ['cartTotal', 'cart']),
    ...mapWritableState(useCartStore, ['cart']),
  },
  methods: {
    removeFromCart(product) {
      this.cart = this.cart.filter((i) => i !== product)
    },
    toCurrency,
  },
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