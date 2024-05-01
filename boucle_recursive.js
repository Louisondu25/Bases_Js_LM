// Déclaration d'un tableau nommé "table" contenant les nombres de 1 à 5
var table = [1, 2, 3, 4, 5];

// Définition d'une fonction récursive nommée "recursiveLoop" qui prend deux arguments : un tableau "tab" et un index "index"
function recursiveLoop(tab, index) {
  // Affichage de l'élément du tableau à l'index "index" et de sa position dans le tableau
  console.log(tab[index], ": index =", index);

  // Si l'index est inférieur à la longueur du tableau moins 1 (c'est-à-dire qu'il reste encore des éléments à afficher)
  if (index < tab.length - 1) {
    // Appel récursif de la fonction "recursiveLoop" avec le même tableau et l'index incrémenté de 1
    recursiveLoop(tab, index + 1);
  } else {
    // Affichage du message "fin du tableau" si tous les éléments ont été affichés
    console.log("fin du tableau");
  }
}

// Appel de la fonction "recursiveLoop" avec le tableau "table" et l'index initial 0
recursiveLoop(table, 0);

// Boucle for alternative pour afficher les éléments du tableau "table"
// for (var i = 0; i < table.length; i++) {
//   console.log(table[i]);
// }

// Définition d'une fonction récursive nommée "recursiveLoopSub" qui prend un tableau "tab" en argument
function recursiveLoopSub(tab) {
  // Boucle for pour parcourir les éléments du tableau "tab"
  for (var i = 0; i < tab.length; i++) {
    // Affichage du nom de l'élément courant du tableau
    console.log(tab[i].name);

    // Si l'élément courant possède un tableau "subProject" non vide
    if (tab[i].subProject && tab[i].subProject.length > 0) {
      // Appel récursif de la fonction "recursiveLoopSub" avec le tableau "subProject" de l'élément courant
      recursiveLoopSub(tab[i].subProject);
    }
  }
}

// Déclaration d'un tableau nommé "projet" contenant deux objets avec des propriétés "name" et "subProject"
var projet = [
  {
    name: "projet 1",
    subProject: [
      {
        name: "subProjet 1",
        subProject: [{ name: "SubProjectdesubProject1" }],
      },
    ],
  },
  { name: "Projet 2", subProjet: [] },
];

// Appel de la fonction "recursiveLoopSub" avec le tableau "projet"
recursiveLoopSub(projet);
