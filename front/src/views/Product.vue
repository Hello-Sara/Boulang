<template>
  <div class="about">
    <h1>Nos délicieux produits !</h1>
    <div class="product-grid">    
      <div v-for="product in products" :key="product.id" @click="goToProduct(product)">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

const products = ref([]);
const router = useRouter();
const store = useStore();

onMounted(async () => {
  const response = await fetch('https://boulang.onrender.com/products');
  products.value = await response.json();
  store.commit('setProducts', products.value);
});

const goToProduct = (product) => {
  router.push({ name: 'product', params: { id: product.id } });
};
</script>

<style>

h1 {
  font-size: 3em;
  font-family: 'BAUHS93';
  color: #615c5c;
}

.about {
  padding-top: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.product-grid > div {
  margin: 2rem;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .product-card {
    width: 70vw;
  }  

  .about h1 {
    text-align: center;
  }
}
</style>