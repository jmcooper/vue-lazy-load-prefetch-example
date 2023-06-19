<template>
  <div class="container">
    <h1 class="header">Your Cart</h1>

    <div class="empty-cart" v-if="cartItems.length === 0">
      You have no items in your cart
    </div>
    <ul class="cart" v-if="cartItems.length > 0">
      <li class="cart-item" v-for="(product, index) in cartItems" :key="index">
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
            <div :class="{ 'strikethrough': product.discount > 0 }">
              {{ toCurrency(product.price) }}
            </div>
            <div v-if="product.discount > 0" class="discount">
              {{ toCurrency(product.price * (1 - product.discount)) }}
            </div>
            <button @click="removeFromCart(product)">Remove</button>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="cartItems.length > 0" class="total">Total: {{ toCurrency(cartTotal) }}</div>
  </div>
</template>

<script setup>
import { toCurrency } from '../shared/formatters'
import products from '../catalog/product-data'

console.log('p', products)
const cartItems = [products[0], products[10]]
const cartTotal = 0

function removeFromCart() {

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

.strikethrough {
  text-decoration: line-through;
  font-size: 18px;
}
</style>