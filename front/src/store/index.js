import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
        state.products = products;
      }
  },
  actions: {
    async fetchProducts({ commit }) {
        try {
          const response = await fetch('https://boulang.onrender.com/products');
          const products = await response.json();
          commit('setProducts', products);
        } catch (error) {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      },
      // vos autres actions ici
  },
  getters: {
    // your getters here
  },
});

export default store;