// Importation du module faker pour générer des données aléatoires
const { faker } = require(`@faker-js/faker/locale/fr`);

// Importation du module prompt pour poser des questions à l'utilisateur
var prompt = require("prompt");

// Début du prompt
prompt.start();

// Définition du schéma de saisie pour l'utilisateur
var schema = {
  properties: {
    nb_element: {
      description: "Combien d'éléments voulez-vous créer ?",
      type: "number",
    },
    type: {
      description: "Faut-il générer des hommes ?",
      type: "boolean",
    },
  },
};

// Début du prompt
prompt.start();

// Récupération des propriétés saisies par l'utilisateur
prompt.get(schema, function (err, result) {
  // Affichage des propriétés saisies par l'utilisateur dans la console
  console.log(["nb_element"]);
  console.log(["type"]);

  // Initialisation d'un tableau vide pour stocker les personnes générées
  var peoples = [];

  // Boucle pour générer 25 personnes
  for (var i = 0; i < 25; i++) {
    // Définition du type de personne à générer (homme ou femme)
    var type = "female";
    if (result.type) type = "male";

    // Génération d'un prénom et d'un nom de famille pour la personne
    var firstName = faker.person.firstName(type);
    var lastNames = faker.person.lastName(type);

    // Génération d'une adresse email pour la personne
    var email = faker.internet.email({ firstName, lastNames });

    // Ajout de la personne au tableau
    peoples.push({
      firstName,
      lastNames,
      email,
    });
  }

  // Affichage des personnes générées dans la console
  console.log(peoples);
});
