// Déclaration de l'objet "my_object" avec des propriétés et une sous-propriété
var my_obect = {
  // Nom du produit
  firstname: "jean", //infos du produit
  lastname: "Dupont", // infos du produit
  Option: {
    // un produit dans le nom du produit
    name: "option 1", //infos du 2eme produit
    testing: true, // infos du 2eme produit.
  },
};

// Affichage du nom de l'option du produit
console.log(my_obect.Option.name); // on peut imbriquer my object dans d'autre objets "my object" dans options qui est imbriquer dans name

// Déclaration de l'objet "my_tree" avec des propriétés et un sous-objet "children"
var my_tree = {
  firstname: "jean",
  lastname: "dupont",
  datestart: 1918,
  dateEnd: 1943,
  children: [
    // définition de "children" comme un tableau
    {
      firstname: "jean jr",
      lastname: "dupont",
      datestart: 1930,
      dateEnd: 1973,
    },
  ],
};

// Affichage du premier enfant de l'objet "my_tree"
console.log(my_tree.children[0]);

// Ajout d'un nouvel enfant à l'objet "my_tree"
my_tree.children.push({
  firstname: "jean jr",
  lastname: "dupont",
  datestart: 1939,
  dateEnd: 1993,
});

// Affichage de l'objet "my_tree" après l'ajout du nouvel enfant
console.log(my_tree);

// Affichage de la longueur du tableau "children" de l'objet "my_tree"
console.log(my_tree.children.length);
