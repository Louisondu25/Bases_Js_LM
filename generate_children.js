// Création d'un tableau d'objets représentant des personnes
const peoples = [
  {
    _id: 1001,
    username: "jeandupont",
    firstName: "Jean",
    lastName: "Dupont",
  },
  {
    _id: 1002,
    username: "louisbrocante",
    firstName: "Louis",
    lastName: "Brocante",
    parent: 1001,
  },
  {
    _id: 1003,
    username: "julienrouget",
    firstName: "Julien",
    lastName: "Rouget",
    parent: 1002,
  },
  {
    _id: 1004,
    username: "loic",
    firstName: "loic",
    lastName: "lala",
  },
  {
    _id: 1005,
    username: "loic Junior",
    firstName: "loic Junior",
    lastName: "Junior",
    parent: 1004,
  },
];

// Création d'un tableau vide pour stocker les personnes transformées
var people_transformer = [];

// Fonction pour transformer les personnes en un format imbriqué avec les enfants
function transformPeople(person, tab) {
  var transformedPerson = { ...person }; // Création d'une copie de la personne
  var children = tab.filter((p) => p.parent === person._id); // Filtrage des enfants de la personne
  if (children.length > 0) {
    transformedPerson.children = children.map(
      (
        child // Ajout des enfants à la personne transformée
      ) => transformPeople(child, tab)
    );
  }
  return transformedPerson;
}

// Boucle pour transformer les personnes et les ajouter au tableau people\_transformer
for (var i = 0; i < peoples.length; i++) {
  var person = peoples[i];
  if (!person.parent) {
    var transformedPerson = transformPeople(person, peoples);
    people_transformer.push(transformedPerson);
  }
}

// Affichage du résultat dans la console
console.log(JSON.stringify(people_transformer, null, 4));
