<template>
    <div class="first" v-if="product">
        <img :src="product.image" :alt="product.name" />
        <h1>{{ product.name }}</h1>
        <div class="content">
            <p>{{ product.description }}</p>
            <p>Prix : {{ product.price }} €</p>
            <p>Stock : {{ product.quantity }}</p>
            <p>Énergie : {{ product.energy }} kcal</p>
            <p>Graisses : {{ product.fat }} gr</p>
            <p>Fibres : {{ product.fibres }} gr</p>
            <p>Glucides : {{ product.glucides }} gr</p>
            <p>Protéines : {{ product.proteins }} gr</p>
            <p>Sel : {{ product.salt }} gr</p>
            <p>Graisses saturées : {{ product.saturatedFats }} gr</p>
            <p>Sucres : {{ product.sugars }} gr</p>
        </div>
        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const id = route.params.id;

const product = computed(() => store.state.products.find(p => p.id.toString() === id.toString()));
console.log('product', product.value);

onMounted(async () => {
  await store.dispatch('fetchProducts'); // Assuming you have a fetchProducts action in your Vuex store
});
</script>

<style scoped>
.first {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.content {
    padding: 20px;
}
</style>