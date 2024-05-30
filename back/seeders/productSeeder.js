module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [
            {
                name: 'CROIS',
                description: "Chaque matin, le Croissant fait son entrée dans la boulangerie, tout doré et délicieusement feuilleté. Son secret ? Un mélange d'ingrédients fins : farine, beurre, et une touche de magie !",
                image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
                price: 1.20,
                quantity: 100,
                energy: 406,
                fat: 23,
                saturatedFats: 14,
                glucides: 45,
                sugars: 7,
                fibres: 2,
                proteins: 6,
                salt: 0.9
              },
              {
                name: 'PAIN AU CHOC',
                description: "Le Pain au Chocolat est un aventurier gourmand. Il cache soigneusement des pépites de chocolat entre ses couches croustillantes, créant une symphonie de saveurs.",
                image: 'https://philippeconticini.fr/cdn/shop/files/ViennoieriesXXL7_900x.jpg',
                price: 1.30,
                quantity: 80,
                energy: 448,
                fat: 26,
                saturatedFats: 16,
                glucides: 45,
                sugars: 13,
                fibres: 3,
                proteins: 7,
                salt: 0.6
              },
              {
                name: 'BRI AU SUCRE',
                description: "La Brioche au Sucre brille comme une étoile parmi les viennoiseries, saupoudrée d'une pluie douce de sucre, offrant une tendresse sans pareille.",
                image: 'https://www.healthyfoodcreation.fr/wp-content/uploads/2022/11/gaufros-07.jpg',
                price: 1.50,
                quantity: 60,
                energy: 371,
                fat: 14,
                saturatedFats: 8,
                glucides: 54,
                sugars: 23,
                fibres: 1,
                proteins: 7,
                salt: 0.6
              },
              {
                name: 'PAIN AU RAIZ’',
                description: "Le Pain au Raisin, avec ses raisins généreux, semble capturer un rayon de soleil dans chaque spirale dorée.",
                image: 'https://img.cuisineaz.com/660x660/2023/06/03/i194325-pain-au-raisin-au-kitchenaid.jpg',
                price: 1.40,
                quantity: 70,
                energy: 320,
                fat: 14,
                saturatedFats: 8,
                glucides: 41,
                sugars: 16,
                fibres: 2,
                proteins: 7,
                salt: 0.3
              },
              {
                name: 'CHOUQ',
                description: "Les Chouquettes sont de petites gourmandises moelleuses, saupoudrées de sucre perlé. Elles sont comme des sourires sucrés.",
                image: 'chouquette.jpg',
                price: 1.10,
                quantity: 90,
                energy: 356,
                fat: 20,
                saturatedFats: 12,
                glucides: 40,
                sugars: 16,
                fibres: 1,
                proteins: 6,
                salt: 0.4
              },
              {
                name: 'CROIS AMANDE',
                description: "Le Croissant aux Amandes est le roi des croissants, couronné d'une douce crème d'amande et de délicats éclats de noisettes.",
                image: 'https://d1mzaouowg2f9a.cloudfront.net/297/Photo-story---croissant-aux-amandes-.JPG',
                price: 1.15,
                quantity: 90,
                energy: 466,
                fat: 29,
                saturatedFats: 16,
                glucides: 45,
                sugars: 14,
                fibres: 2,
                proteins: 9,
                salt: 0.6
              },
              {
                name: 'CHAUPOM',
                description: "Les Chaussons aux Pommes sont des poches croustillantes et tendres, remplies de compote de pommes parfumée à la cannelle.",
                image: 'https://blog.monmagasingeneral.com/wp-content/uploads/2019/01/recette-cuisine-viennoiserie-chaussons-aux-pommes.jpg',
                price: 1.25,
                quantity: 90,
                energy: 286,
                fat: 12,
                saturatedFats: 6,
                glucides: 40,
                sugars: 17,
                fibres: 2,
                proteins: 4,
                salt: 0.3
              },
              {
                name: 'LE SUISSE',
                description: "Le Pain Suisse est une réunion de douceurs, fourré de crème pâtissière et de pépites de chocolat, une vraie symphonie de textures.",
                image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGYQHbPQ5Og2H6KqMBHQ11f7t2JOuSbkgZf3P_6RVEiGqHY-eTl9yyvpF7oETy4i_zIBR63yMeaja8jn1L_cEYeaFqlx5yy04gHf9AMgaXW49Owl1RJExQZ9m04FOzhlxfDXxBmfj8fKNzVtu9ydJAD_rsjOpsE4jGvnXmRq_6cBcnlFXdNWHqiwZP/s750/pain_suisse_strie2_1blog.jpg',
                price: 1.40,
                quantity: 90,
                energy: 370,
                fat: 16,
                saturatedFats: 9,
                glucides: 49,
                sugars: 20,
                fibres: 2,
                proteins: 7,
                salt: 0.5
              },
              {
                name: 'BAG',
                description: "La Baguette, symbole de tradition française, est une alliance parfaite de croûte dorée et de mie tendre, essentielle à chaque repas.",
                image: 'https://www.maison-boulanger.fr/storage/media/160/conversions/demi-baguette-tradition-pre-cuite-surgelee-par-3-demi-baguette-tradition3-dembtx3-(1)-product-show-full.jpg',
                price: 1.10,
                quantity: 90,
                energy: 248,
                fat: 1,
                saturatedFats:0.2,
                glucides: 50,
                sugars: 2,
                fibres: 3,
                proteins: 9,
                salt: 1.2
              },
              {
                name: 'TRAD',
                description: "La Tradition incarne le savoir-faire ancestral de la boulangerie, avec sa croûte croustillante et sa mie moelleuse, un classique réconfortant.",
                image: 'https://nouvellesgastronomiques.com/wp-content/uploads/2019/07/Recette-BAGUETTE-DE-TRADITION-FRANÇAISE.jpg',
                price: 1.20,
                quantity: 90,
                energy: 256,
                fat: 1,
                saturatedFats:0.2,
                glucides: 51,
                sugars: 1,
                fibres: 3,
                proteins: 9,
                salt: 1.2
              },
              {
                name: 'RUST',
                description: "La Tradition incarne le savoir-faire ancestral de la boulangerie, avec sa croûte croustillante et sa mie moelleuse, un classique réconfortant.",
                image: 'https://maisongelis.fr/wp-content/uploads/2022/01/rustique-flute.gif',
                price: 1.25,
                quantity: 90,
                energy: 250,
                fat: 1,
                saturatedFats:0.2,
                glucides: 50,
                sugars: 2,
                fibres: 3,
                proteins: 9,
                salt: 1.2
              },
              {
                name: 'VIENNOIS',
                description: "Le Viennois, généreusement garni de raisins secs et de fruits confits, révèle toute la richesse et l'élégance de la tradition viennoise.",
                image: 'https://files.meilleurduchef.com/mdc/photo/recette/pain-viennois-nature/pain-viennois-nature-1200.jpg',
                price: 1.25,
                quantity: 90,
                energy: 360,
                fat: 17,
                saturatedFats: 10,
                glucides: 45,
                sugars: 13,
                fibres: 2,
                proteins: 8,
                salt: 0.8
              },
              {
                name: 'MAIS',
                description: "Le Pain au Maïs, au parfum ensoleillé, marie la douceur du maïs avec la rusticité du pain, pour un goût unique et authentique.",
                image: 'https://www.condifa.fr/wp-content/uploads/recette-de-pain-au-mais-agrano-condifa.jpg',
                price: 1.25,
                quantity: 90,
                energy: 260,
                fat: 4,
                saturatedFats: 0.5,
                glucides: 48,
                sugars: 4,
                fibres: 3,
                proteins: 6,
                salt: 0.7
              },
              {
                name: 'OLIVE',
                description: "Le Pain aux Olives est une escapade en Méditerranée, avec ses morceaux d'olives juteuses intégrées à une mie délicate.",
                image: 'https://lecoupdegrace.ca/app/uploads/2018/02/baguettes-de-pain-aux-olives-aux-fines-herbes-et-la-biere-inpage.jpg',
                price: 1.25,
                quantity: 90,
                energy: 248,
                fat: 7,
                saturatedFats: 1,
                glucides: 37,
                sugars: 2,
                fibres: 3,
                proteins: 8,
                salt: 1.2
              },
              {
                name: 'NOIX',
                description: "Le Pain aux Noix est une symphonie de saveurs, où la robustesse des noix se marie harmonieusement avec la douceur du pain.",
                image: 'https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/681/pain-aux-noix-recette-AdobeStock_133748432.jpg',
                price: 1.25,
                quantity: 90,
                energy: 248,
                fat: 8,
                saturatedFats: 1,
                glucides: 37,
                sugars: 2,
                fibres: 3,
                proteins: 8,
                salt: 1.2
              },
              {
                name: 'SEIGLE',
                description: "Le Pain de Seigle offre une expérience gustative profonde, avec son goût caractéristique et sa texture dense, idéale pour les amateurs de pain authentique.",
                image: 'https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/687/pain-de-seigle-recette-AdobeStock_279462084.jpg',
                price: 1.25,
                quantity: 90,
                energy: 206,
                fat: 1,
                saturatedFats: 0.1,
                glucides: 43,
                sugars: 0,
                fibres: 3,
                proteins: 8,
                salt: 1.2
              },
              {
                name: 'CH’NORD',
                description: "Le Pain Nordique est un hommage aux terres nordiques, avec sa composition généreuse et sa mie dense qui rappelle les grands espaces.",
                image: 'https://www.neuhauser.fr/uploads/product/181019123414.jpg',
                price: 1.25,
                quantity: 90,
                energy: 220,
                fat: 2,
                saturatedFats: 0.3,
                glucides: 38,
                sugars: 2,
                fibres: 6,
                proteins: 10,
                salt: 1.2
              },
              {
                name: 'MILF',
                description: "Le Mille Feuille, avec ses fines couches de pâte feuilletée et de crème légère, est un délice qui fond en bouche à chaque morceau.",
                image: 'https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/20200326/milles-feuilles-butterscotch.jpeg',
                price: 1.50,
                quantity: 90,
                energy: 420,
                fat: 2,
                saturatedFats: 0.3,
                glucides: 38,
                sugars: 2,
                fibres: 6,
                proteins: 10,
                salt: 1.2
              },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
    }
};