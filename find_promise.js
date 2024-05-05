// Importation de la fonction reject depuis la bibliothèque lodash
const { reject } = require("lodash");
// Importation de la bibliothèque prompt pour la saisie utilisateur
const prompt = require("prompt");

// Déclaration d'un tableau nommé "people" contenant des objets avec les clés "firstName", "lastName" et "children"
var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
      },
      {
        firstName: "Sacha",
        lastName: "Bernier",
      },
      {
        firstName: "Laurent",
        lastName: "Bernier",
      },
      {
        firstName: "Raphael",
        lastName: "Bernier",
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

// Définition d'une fonction récursive nommée "displayFamilyTree" qui prend en argument un tableau "people" et un niveau "level"
function displayFamilyTree(people, level = 0) {
  // Boucle for pour parcourir les éléments du tableau "people"
  for (const person of people) {
    let names = "";
    // Boucle for pour ajouter des espaces en fonction du niveau de récursivité
    for (let i = 0; i < level; i++) {
      names += "  ";
    }
    // Ajout du prénom et du nom de famille de la personne courante à la chaîne de caractères "names"
    names += `${person.firstName} ${person.lastName}\n`;
    // Affichage de la chaîne de caractères "names" dans la console
    console.log(names);

    // Si la personne courante possède des enfants
    if (person.children && person.children.length > 0) {
      // Appel récursif de la fonction "displayFamilyTree" avec le tableau "children" de la personne courante et le niveau de récursivité incrémenté de 1
      displayFamilyTree(person.children, level + 1);
    }
  }
}
// Définition d'une fonction récursive nommée "findpeopleLoop" qui prend en argument un prénom "firstName", un nom de famille "lastName", un tableau "tab" et un chemin "path"
var findpeopleLoop = function (firstName, lastName, tab, path) {
  // Boucle for pour parcourir les éléments du tableau "tab"
  for (var i = 0; i < tab.length; i++) {
    // Affectation de l'élément courant du tableau à la variable "element"
    var element = tab[i];
    // Si le prénom et le nom de famille de l'élément courant correspondent aux arguments "firstName" et "lastName"
    if (element.firstName == firstName && element.lastName == lastName) {
      // Retour d'un objet contenant les propriétés de l'élément courant et une propriété "parent" contenant le chemin de l'élément
      return {
        ...element,
        parent: path + element.firstName + " " + element.lastName,
      };
    }
    // On vérifie si l'élément courant a des enfants
    if (element.children) {
      // Appel récursif de la fonction "findpeopleLoop" avec le tableau "children" de l'élément courant et le chemin mis à jour
      var value = findpeopleLoop(
        firstName,
        lastName,
        element.children,
        path + element.firstName + " " + element.lastName + "/"
      );
      // Si la fonction "findpeopleLoop" a trouvé un élément correspondant, on le retourne
      if (value) return value;
    }
  }
  // Si aucun élément correspondant n'a été trouvé, on retourne null
  return null;
};

// Définition d'une fonction nommée "findPeople" qui prend en argument un prénom "firstName", un nom de famille "lastName", un tableau "people" et un chemin "path"
var findPeople = function (firstName, lastName, people, path = "") {
  // Retour d'une promesse qui résout ou rejette en fonction du résultat de la fonction "findpeopleLoop"
  return new Promise((resolve, reject) => {
    // Appel de la fonction "findpeopleLoop" avec les arguments "firstName", "lastName", "people" et "path"
    var result = findpeopleLoop(firstName, lastName, people, path);
    // Si la fonction "findpeopleLoop" a trouvé un élément correspondant, on résout la promesse avec le résultat
    if (result) {
      resolve(result);
    } else {
      // Sinon, on rejette la promesse avec un message d'erreur
      reject("Not found");
    }
  });
};

// Démarrage de la bibliothèque prompt
prompt.start();

// Demande de saisie des informations de recherche à l'utilisateur
prompt.get(["firstName", "lastName"], function (err, result) {
  // Appel de la fonction "findPeople" avec les informations de recherche saisies par l'utilisateur
  findPeople(result.firstName, result.lastName, people)
    .then((value) => {
      // Si la fonction "findPeople" a trouvé un élément correspondant, on affiche les informations de l'élément trouvé
      console.log(
        "Personne trouvée:",
        value.firstName,
        value.lastName,
        "/Parent:",
        value.parent
      );
    })
    // Sinon, on affiche un message d'erreur
    .catch((err) => {
      console.log("Aucune personne trouvée:", err);
    });
});
