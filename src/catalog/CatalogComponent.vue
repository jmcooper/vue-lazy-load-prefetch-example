<template>
  <div class="container">
    <ul class="products">
      <li class="product-item" v-for="(product, index) in products" :key="index">
        <div class="product">
          <div class="product-details">
            <img :src="product.imageUrl" :alt="product.name" />
            <div class="product-info">
              <div class="name">{{ product.name }}</div>
              <div class="description">{{ product.description }}</div>
              <div class="category">Part Type: {{ product.category }}</div>
            </div>
          </div>
          <div class="price">
            <div v-if="product.discount === 0">{{ toCurrency(product.price) }}</div>
            <div v-if="product.discount > 0" class="discount">
              {{ toCurrency(product.price * (1 - product.discount)) }}
            </div>
            <button class="cta">Buy</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toCurrency } from '../shared/formatters'
import products from './product-data'

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

/* Product Details */
.product {
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
}

.product .product-details {
  display: flex;
  align-items: center;
}

.product img {
  width: 125px;
}

.product .product-info {
  margin-left: 25px;
  text-align: left;
}

.product .name {
  font-size: 22px;
  font-weight: bold;
}

.product .description {
  margin-top: 3px;
  font-size: 18px;
}

.product .category {
  margin-top: 20px;
  color: #777;
}

.product .price {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  justify-content: space-around;
  align-items: center;
  min-width: 190px;
  color: #555;
  border-left: 2px solid #aaa;
  margin-left: 50px;
}

.product .price button {
  padding: 10px;
  width: 100px;
}

.discount {
  margin-top: -15px;
  color: #d25ca1;
}
</style>