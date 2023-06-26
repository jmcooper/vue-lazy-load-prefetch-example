<template>
  <div class="container">
    <ul class="products">
      <li class="product-item" v-for="(product, index) in productStore.products" :key="index">
        <ProductInfo :product="product">
          <button @click="addToCart(product)">Buy</button>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductInfo from './product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart-store'
import { useProductStore } from '@/stores/product-store'

export default {
  components: {
    ProductInfo,
  },
  setup() {
    const cartStore = useCartStore()
    const productStore = useProductStore()

    return { cartStore, productStore }
  },
  created() {
    this.productStore.getProducts()
  },
  methods: {
    addToCart(product) {
      this.cartStore.cart.push(product)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.filters {
  display: flex;
  justify-content: space-between;
  padding: 25px 200px;
}

.filters button {
  width: 100px;
}

.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>