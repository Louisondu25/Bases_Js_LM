var people = [
  // Recursivité en Javascript "parent-enfant"
  {
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

// Fonction récursive qui affiche le prénom, nom et origine de chaque membre d'un tableau
function recursiveLoopSub(tab, indent, origin) {
  // Boucle sur chaque élément du tableau
  for (var i = 0; i < tab.length; i++) {
    // Initialisation d'une chaîne de tabulation en fonction de l'indentation donnée
    let tabulation = "";
    for (let y = 0; y < indent; y++) {
      tabulation += " ";
    }
    console.log(
      `${tabulation}nom: ${tab[i].lastName} / prénom:${tab[i].firstName} / origin: ${origin}${tab[i].firstName} ${tab[i].lastName}`
    ); // Affiche le prénom et le nom de l'élément actuel
    if (tab[i].children && tab[i].children.length > 0) {
      // Si l'élément actuel a des enfants, on appelle récursivement la fonction sur le tableau des enfants
      recursiveLoopSub(
        tab[i].children,
        indent + 1,
        origin + `${tab[i].firstName} ${tab[i].lastName} - `
      );
    }
  }
}

recursiveLoopSub(people, 0, "");