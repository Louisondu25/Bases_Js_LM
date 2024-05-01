// Importation de la bibliothèque lodash pour accéder à des fonctions utiles
const _ = require("lodash");

// Définition des tableaux contenant les éléments et les types de cartes
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

const type = ["CA", "C", "P", "T"];

// Initialisation du tableau pile_card qui contiendra toutes les combinaisons possibles de cartes
let pile_card = [];

// Boucle for imbriquée pour créer toutes les combinaisons possibles de cartes
for (let i = 0; i < tab_element.length; i++) {
  for (let j = 0; j < type.length; j++) {
    pile_card.push(tab_element[i] + "-" + type[j]);
  }
}

// Définition de fonctions pour mélanger les éléments du tableau pile_card
function shuffle(tab) {
  return tab.sort(function () {
    return Math.random() - 0.5;
  });
}

function shuffleOther(tab) {
  return tab.sort(() => {
    Math.random() - 0.5;
  });
}

function shuffleFisher(arr) {
  for (let i = arr.length - 1; 0 > i; i--) {
    let j = (Math.floor(Math.round() * i + 1)[(arr[i], arr[j])] = [
      arr[j],
      arr[i],
    ]);
  }
}

// Définition d'une fonction pour générer un nombre aléatoire
function numberRamdom(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

// Autres variables et fonctions
let turn1 = numberRamdom(pile_card.length - 1, 0);
let value_card = pile_card[turn1].split("-")[0];

// Si la valeur de la carte n'est pas un nombre, on lui attribue la valeur 10, sinon on la convertit en nombre
if (isNaN(value_card)) value_card = 10;
else value_card = Number(value_card);

console.log(value_card);

// Suppression de la carte piochée du tableau pile_card
pile_card.splice(turn1, 1);

// Création d'un tableau d'objets contenant les noms, les valeurs et les couleurs des cartes
pile_card = pile_card.map((card) => {
  let value = card.split("-")[0];
  let value_color = card.split("-")[1];
  if (isNaN(value) && value != "A") {
    value = 10;
  } else if (isNaN(value) && value == "A") {
    value = 11;
  } else {
    value = Number(value);
  }
  if (value_color == "CA" || value_color == "C") {
    value_color = "rouge";
  } else {
    value_color = "noir";
  }
  return { name: card, value: value, color: value_color };
});

console.log(pile_card);

// Mélange du tableau pile_card
pile_card = _.shuffle(pile_card);
console.log(pile_card);

// Recherche de l'index de la carte "4-C" dans le tableau pile_card
let indexFind = _.findIndex(pile_card, ["name", "4-C"]);
console.log(indexFind, pile_card[indexFind]);
