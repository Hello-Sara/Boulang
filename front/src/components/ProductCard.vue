<template>
    <div class="product-card">
        <h2 class="product-name">{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-details">           
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price"> prix :{{ product.price }} €</p>
            <p class="product-quantity">stock : {{ product.quantity }}</p>
        </div>
        <button>Details du produit</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object
});
</script>

<style scoped>
@font-face {
  font-family: 'BAUHS93';
  src: url('../assets/fonts/BAUHS93.ttf') format('truetype');
}

.product-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 16px;
    flex: 1;
    height: 45vh;
    width: 17vw;
    background-color: transparent;
    border-radius: 15px;
    border: 2px solid #292923;
}

.product-image {
    width: 100%;
    height: 200px; /* Vous pouvez ajuster cette valeur en fonction de vos besoins */
    object-fit: cover;
    margin-bottom: 16px;
    border-radius: 10px;
}

.product-name {
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'BAUHS93';
    color: #2a4bfa;
    margin-bottom: 10px;
    text-align: center;
}

.product-description {
    margin: 0.5em 0;
}

.product-price {
    margin: 0.5em 0;
    color: #b12704;
}

.product-quantity {
    margin: 0.5em 0;
}

button {
    background-color: #615c5c;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'BAUHS93';
    font-size: 1em;
    margin-top: 10px;
    border-radius: 35px;
    width: 70%;
    margin: auto;
}

button:hover {
    background-color: #2a4bfa;;
}

@media (max-width: 600px) {
  .product-card {
    max-height: none;
  }
}


/* Requête média pour les écrans inférieurs à 1200px */
@media (max-width: 1280px) {
  .product-card {
    width: 90vw; /* Ajustez cette valeur en fonction de vos besoins */
    height: auto;
  }

  .product-image {
    height: 150px; /* Ajustez cette valeur en fonction de vos besoins */
  }

  .product-name {
    font-size: 1.2em; /* Ajustez cette valeur en fonction de vos besoins */
  }
}

@media (min-width: 1280px) and (max-width: 1920px) {
  .product-card {
    width: 17vw; /* Ajustez cette valeur en fonction de vos besoins */
    height: 50vh;
  }

  .product-image {
    height: 150px; /* Ajustez cette valeur en fonction de vos besoins */
  }

  .product-name {
    font-size: 1.2em; /* Ajustez cette valeur en fonction de vos besoins */
  }
}
</style>