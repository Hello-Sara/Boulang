module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [
            { name: 'Baguette', price: 1.15,description: 'Une délicieuse baguette sorti du four', 'quantity': 50, image: 'https://www.paul.fr/media/catalog/product/5/3/5323_-_baguette_blanche.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=275&width=275&canvas=275:275'},
            { name: 'Croissant', price: 1.10, description: 'Un délicieux croissant au beurre, idéale pour déguser un petit dej français', 'quantity': 50, image: 'https://www.paul.fr/media/catalog/product/2/_/2_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=275&width=275&canvas=275:275'},
            { name: 'Pain au chocolat', price: 1.20, description: 'Un délicieux pain au chocolat sorti du four, pour retomber en enfance', 'quantity': 50, image: 'https://www.paul.fr/media/catalog/product/1/_/1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=275&width=275&canvas=275:275'}
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
    }
};