// Importation des dépendances
const { faker } = require("@faker-js/faker");
const _ = require("lodash");

// Définition des constantes
const NB_ELEMENTS = 10;
const PRICE_MIN = 5.0;
const PRICE_MAX = 6.0;
const STOCK_MIN = 0;
const STOCK_MAX = 10;
const PRICE_INTERVAL = 5.5;
const STOCK_ALERT = 3;

// Création d'un tableau de produits
const products = Array.from({ length: NB_ELEMENTS }, () => ({
  nom: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  price: Number(_.random(PRICE_MIN, PRICE_MAX, true).toFixed(2)),
  stock: _.random(STOCK_MIN, STOCK_MAX),
  departement: faker.commerce.department(),
}));

// Ajout d'une propriété value_stock à chaque produit
products = products.map((product) => ({
  ...product,
  value_stock: (product.price * product.stock).toFixed(2),
}));

// Fonction pour afficher les produits
function printProduct(products) {
  for (const product of products) {
    const text = `${product.nom} - ${product.departement} - ${product.price}€ - ${product.stock}`;
    text += product.value_stock
      ? ` - Stock value : ${product.value_stock}€`
      : "";
    console.log(text);
  }
}

// Groupe les produits par département
const categoriesAndQuantity = _.groupBy(products, "departement");

// Filtre les produits en stock et > à l'intervalle de prix
const inStockMoreInterval = products.filter(
  (product) => product.price >= PRICE_INTERVAL && product.stock > 0
);

// Filtre les produits en stock et < à l'intervalle de prix
const inStockLessInterval = products.filter(
  (product) => product.price < PRICE_INTERVAL && product.stock > 0
);

// Filtre les produits en rupture de stock
const noStock = products.filter((product) => product.stock === 0);

// Filtre les produits en rupture de stock ou bientôt en rupture
const reStockProduct = products.filter(
  (product) => product.stock < STOCK_ALERT
);

// Affichage des résultats
console.log(`\nProduit en stock et > ${PRICE_INTERVAL}€`);
printProduct(inStockMoreInterval);
console.log(`\nProduit en stock et < ${PRICE_INTERVAL}€`);
printProduct(inStockLessInterval);
console.log("\nProduit en rupture de stock");
printProduct(noStock);
console.log(
  `\nProduit en rupture de stock ou bientôt en rupture < ${STOCK_ALERT}`
);
printProduct(reStockProduct);

console.log("\nCatégories existants avec nombre de produit par catégorie");
for (const category in categoriesAndQuantity) {
  console.log(
    `${category} - ${categoriesAndQuantity[category].length} produit(s) dans cette catégorie.`
  );
}
