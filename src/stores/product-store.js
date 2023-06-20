import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])

  const getProducts = async () => {
    const response = await fetch('/api/products')
    const productsJson = await response.json()
    products.value = productsJson
  }

  return { products, getProducts }
})