// Importer la bibliothèque faker pour générer des données fictives
const { faker } = require("@faker-js/faker");

// Importer la bibliothèque lodash pour travailler avec des tableaux et des objets
const _ = require("lodash");

// Initialiser un tableau vide pour stocker les données utilisateur
var users = [];

// Boucler 10 fois pour générer 10 objets utilisateur
for (let i = 0; i < 10; i++) {
  // Ajouter un nouvel objet utilisateur au tableau users
  users.push({
    // Générer un ID unique pour l'utilisateur en utilisant la fonction uniqueId() de lodash
    id: _.uniqueId(),
    // Générer un prénom fictif pour l'utilisateur en utilisant la fonction firstName() de faker
    firstname: faker.person.firstName(),
    // Générer un nom de famille fictif pour l'utilisateur en utilisant la fonction lastName() de faker
    lastname: faker.person.lastName(),
    // Générer un nom d'utilisateur fictif pour l'utilisateur en utilisant la fonction userName() de faker
    username: faker.internet.userName(),
    // Générer une adresse e-mail fictive pour l'utilisateur en utilisant la fonction email() de faker
    email: faker.internet.email(),
    // Définir le poste de l'utilisateur sur "Directeur"
    job: "Directeur",
  });
}

// Initialiser un tableau vide pour stocker les données entreprise
var companies = [];

// Définir une fonction pour générer les données entreprise
function generateCompany() {
  // Créer une copie du tableau users en utilisant l'opérateur spread
  var users_tmp = [...users];

  // Boucler 10 fois pour générer 10 objets entreprise
  for (var i = 0; i < 10; i++) {
    // Générer un nom d'entreprise fictif en utilisant la fonction company.name() de faker
    const name = faker.company.name();
    // Générer un montant aléatoire pour le compte de l'entreprise en utilisant la fonction number.int() de faker
    const sumAccount = faker.number.int({ min: 1, max: 10000 });
    // Générer un index aléatoire pour sélectionner un utilisateur dans le tableau users_tmp en utilisant la fonction random() de lodash
    const random_user = _.random(0, users_tmp.length - 1);

    // Ajouter un nouvel objet entreprise au tableau companies
    companies.push({
      // Générer un ID unique pour l'entreprise en utilisant la fonction uniqueId() de lodash
      Id: _.uniqueId(),
      // Définir le nom de l'entreprise en utilisant le nom généré
      name: name,
      // Définir l'ID utilisateur de l'entreprise sur l'ID de l'utilisateur sélectionné
      user_id: users_tmp[random_user].id,
      // Définir le montant du compte de l'entreprise en utilisant le montant généré
      sum_account: sumAccount,
    });

    // Supprimer l'utilisateur sélectionné du tableau users\_tmp en utilisant la fonction splice() de lodash
    users_tmp.splice(random_user, 1);
  }
}

// Appeler la fonction generateCompany() pour générer les données entreprise
generateCompany();

// Afficher le tableau companies dans la console
console.log(companies);

var articles = []