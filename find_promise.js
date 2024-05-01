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
    if (element.children) {
      var value = findpeopleLoop(
        firstName,
        lastName,
        element.children,
        path + element.firstName + " " + element.lastName + "/"
      );
      if (value) return value;
    }
  }
  return null;
};

var findPeople = function (firstName, lastName, people, path = "") {
  return new Promise((resolve, reject) => {
    var result = findpeopleLoop(firstName, lastName, people, path);
    if (result) {
      resolve(result);
    } else {
      reject("Not found");
    }
  });
};

prompt.start();

prompt.get(["firstName", "lastName"], function (err, result) {
  findPeople(result.firstName, result.lastName, people)
    .then((value) => {
      console.log(
        "Personne trouvée:",
        value.firstName,
        value.lastName,
        "/Parent:",
        value.parent
      );
    })
    .catch((err) => {
      console.log("Aucune personne trouvée:", err);
    });
});
