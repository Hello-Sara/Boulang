<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-details">                     
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price"> prix :{{ product.price }} €</p>
        </div>
        <div class="actions">
        </div>        
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
    padding: 16px;
    flex: 1;
    height: 450px;
    width: 35vw;
    background-color: transparent;
    border-radius: 15px;
}

.product-image {
    width: 100%;
    object-fit: cover;
    margin-bottom: 16px;
    border-radius: 10px;
}

.product-name {
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'BAUHS93';
    color: #615c5c;
    margin-bottom: 10px;
    text-align: start;
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

.actions {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    width: 17vw; /* Ajustez cette valeur en fonction de vos besoins */
    height:auto;
  }

  .product-name {
    font-size: 1.2em; /* Ajustez cette valeur en fonction de vos besoins */
  }
}

@media (min-width: 1280px) and (max-width: 1920px) {
  .product-card {
    width: 17vw; /* Ajustez cette valeur en fonction de vos besoins */
  }


  .product-name {
    font-size: 1.2em; /* Ajustez cette valeur en fonction de vos besoins */
  }
}

@media only screen and (min-width: 1536px) and (max-width: 1920px) and (min-height: 864px) and (max-height: 1080px) and (-webkit-device-pixel-ratio: 1.25) {
    /* Votre style pour les écrans 1920x1080 avec zoom 125% */
    .product-card {
    width: 17vw; /* Ajustez cette valeur en fonction de vos besoins */
  }

  .product-name {
    font-size: 1.2em; /* Ajustez cette valeur en fonction de vos besoins */
  }
  button {
    width: auto;
  }
}

</style>