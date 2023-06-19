<template>
  <div class="container">
    <div class="left">
      <img class="logo" src="./logo.png" alt="Logo" />
      <router-link to="/catalog" routerLinkActive="active">Catalog</router-link>
      <div class="cart">
        <router-link to="/cart" routerLinkActive="active">Cart</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 10px;
  margin: -3px -8px 0 -8px;
  padding: 0 8px 5px 8px;
  border-bottom: 2px solid #818285;
}

.left {
  display: flex;
  align-items: center;
}

.left * {
  margin-right: 25px;
}

.logo {
  height: 65px;
}

.cart {
  display: flex;
  position: relative;
}

.cartCount {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20px;
  height: 20px;
  top: -7px;
  right: -15px;
  border-radius: 25px;
  background-color: #f590c4;
  color: white;
  font-size: 14px;
}

.cartCount div {
  margin: auto;
}

.right {
  display: flex;
  align-items: center;
  margin-right: 25px;
}

.right * {
  margin-left: 25px;
}

.right img {
  height: 40px;
  cursor: pointer;
}

.sign-out {
  position: absolute;
  top: 60px;
  right: 30px;
}
</style>