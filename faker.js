// Importation de la fonction faker.person et faker.internet depuis la bibliothèque @faker-js/faker en français
const { faker } = require(`@faker-js/faker/locale/fr`);

// Déclaration d'un tableau nommé "peoples" contenant un objet avec les clés "firstName" et "lastNames"
var peoples = [
  {
    firstName: "jean",
    lastNames: "Luc",
  },
];

// Utilisation d'une boucle for pour ajouter 25 objets à l'array "peoples" en utilisant les fonctions faker.person.firstName et faker.person.lastNames
for (var i = 0; i < 25; i++) {
  // Affectation de la fonction faker.person.firstName à la variable firstName
  var firstName = faker.person.firstName;
  // Affectation de la fonction faker.person.lastNames à la variable lastNames
  var lastNames = faker.person.lastNames;
  // Ajout d'un nouvel objet à l'array "peoples" avec les clés "firstName", "lastNames" et "email"
  peoples.push({
    firstName, // Appel de la fonction firstName() pour générer un prénom aléatoire
    lastNames, // Appel de la fonction lastNames() pour générer un nom de famille aléatoire
    email: faker.internet.email({ firstName, lastNames }), // Génération d'une adresse email aléatoire en utilisant les fonctions faker.internet.email(), firstName() et lastNames()
  });
}
// Affichage du tableau "peoples" dans la console
console.log(peoples);
