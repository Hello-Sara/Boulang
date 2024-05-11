<template>
  <div class="about">
    <h1>Nos délicieux produits !</h1>
    <div class="product-grid">    
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';

const products = ref([]);

onMounted(async () => {
  const response = await fetch('http://localhost:3000/products');
  products.value = await response.json();
});
</script>

<style>

h1 {
  font-size: 3em;
  font-family: 'BAUHS93';
  color: #615c5c;
}

.about {
  padding-top: 50px;
  background-color: #f8e5d0;
  display: flex;
  align-items: center;
  flex-direction: column;
  
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-grid > div {
  flex: 1 0 20%; /* 100% / 5 = 20% */
  margin: 0.5rem;
  box-sizing: border-box;
}
</style>