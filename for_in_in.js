// Importation de la bibliothèque lodash
const _ = require("lodash");

// Définition d'un tableau d'éléments de cartes
const tab_element = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "V",
  "D",
  "R",
];

// Définition d'un tableau de types de cartes
const type = ["CA", "C", "P", "T"];

// Création d'un tableau vide pour stocker les noms de cartes
const pile_card = [];

// Boucle pour créer tous les noms de cartes possibles en combinant les éléments et les types
for (let i = 0; i < tab_element.length; i++) {
  for (let j = 0; j < type.length; j++) {
    pile_card.push(`${tab_element[i]}-${type[j]}`);
  }
}

// Fonction pour mélanger les éléments d'un tableau
function shuffle(tab) {
  return tab.sort(() => Math.random() - 0.5);
}

// Fonction pour obtenir la valeur d'une carte
function getValue(card) {
  const value = card.split("-")[0];
  if (isNaN(value)) {
    if (value === "A") {
      return 11;
    } else {
      return 10;
    }
  } else {
    return Number(value);
  }
}

// Fonction pour obtenir la couleur d'une carte
function getColor(card) {
  const value_color = card.split("-")[1];
  if (value_color === "CA" || value_color === "C") {
    return "red";
  } else {
    return "black";
  }
}

// Fonction pour créer un objet de carte avec les propriétés "name", "value" et "color"
function createCardObject(name, value, color) {
  return { name, value, color };
}

// Création d'un tableau d'objets de cartes en utilisant la fonction map
const pile_card_objects = pile_card.map((name) => {
  const value = getValue(name);
  const color = getColor(name);
  return createCardObject(name, value, color);
});

// Affichage des cartes avant le mélange
console.log("Avant le mélange:", pile_card_objects);

// Mélange des cartes
pile_card_objects.sort(() => Math.random() - 0.5);

// Affichage des cartes après le mélange
console.log("Après le mélange:", pile_card_objects);

// Recherche de l'index d'une carte spécifique dans le tableau d'objets de cartes
const indexFind = _.findIndex(pile_card_objects, ["name", "4-C"]);
console.log("Index de 4-C:", indexFind);
