// Importe le module "@faker-js/faker" et renomme la propriété "faker" en "faker"
const { faker } = require("@faker-js/faker");

// Importe le module "lodash" et renomme la propriété "_" en "_"
const _ = require("lodash");

// Définit un tableau vide pour stocker les utilisateurs
var users = [];

// Définit le nombre d'utilisateurs à générer
var number_users = 25;

// Boucle pour générer les utilisateurs
for (var i = 0; i < number_users; i++) {
  // Génère un prénom aléatoire
  let firstName = faker.person.firstName();

  // Génère un nom de famille aléatoire
  let lastName = faker.person.lastName();

  // Ajoute un utilisateur au tableau avec les informations générées
  users.push({
    // Génère un ID unique pour l'utilisateur
    id: _.uniqueId(),

    // Génère un nom d'utilisateur aléatoire en utilisant le prénom et le nom de famille
    username: faker.internet.userName({
      firstName: firstName,
      lastName: lastName,
    }),

    // Ajoute le prénom de l'utilisateur
    firstName: firstName,

    // Ajoute le nom de famille de l'utilisateur
    lastName: lastName,

    // Génère une adresse e-mail aléatoire en utilisant le prénom et le nom de famille
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    }),
  });
}

// Définit la valeur minimale pour le prix d'un produit
var price_min = 5.0;

// Définit la valeur maximale pour le prix d'un produit
var price_max = 6.0;

// Définit la valeur minimale pour le stock d'un produit
var stock_min = 0;

// Définit la valeur maximale pour le stock d'un produit
var stock_max = 10;

// Définit un tableau vide pour stocker les produits
var products = [];

// Définit le nombre de produits à générer
var number_products = 25;

// Boucle pour générer les produits
for (var i = 0; i < number_products; i++) {
  // Ajoute un produit au tableau avec les informations générées
  products.push({
    // Génère un ID unique pour le produit
    id: _.uniqueId(),

    // Génère un nom aléatoire pour le produit
    nom: faker.commerce.product(),

    // Génère une description aléatoire pour le produit
    description: faker.commerce.productDescription(),

    // Génère un prix aléatoire pour le produit en utilisant la fonction _.random()
    price: Number(_.random(price_min, price_max, true).toFixed(2)),

    // Génère un stock aléatoire pour le produit en utilisant la fonction _.random()
    stock: _.random(stock_min, stock_max),

    // Génère un département aléatoire pour le produit
    departement: faker.commerce.department(),
  });
}

// Importe le module Express
const express = require("express");

// Importe le module body-parser
var bodyParser = require("body-parser");

// Crée une instance de l'application Express
const app = express();

// Définit le numéro de port sur lequel l'application écoutera les requêtes
const port = 3000;

// Configure l'application pour analyser les données envoyées dans le corps des requêtes au format x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configure l'application pour analyser les données envoyées dans le corps des requêtes au format JSON
app.use(bodyParser.json());

// Définit un middleware pour logger les requêtes
app.use(getLogRequest);

// Définit la fonction getLogRequest pour logger les requêtes
function getLogRequest(req, res, next) {
  // Génère un ID unique pour la requête
  req.id_request = _.uniqueId("REQUEST_");

  // Affiche un message de log avec les informations de la requête
  console.log(
    `${new Date().toISOString()}: ${req.method} - ${req.url} (${
      req.id_request
    }) - Body: ${_.isEmpty(req.body) ? "Non" : "Oui"}`
  );

  // Appelle la fonction suivante dans le pipeline de middleware
  next();
}

// Définit la fonction printLogMessage pour afficher un message de log avec les informations de la requête et le message spécifié
function printLogMessage(req, msg) {
  // Affiche un message de log avec les informations de la requête et le message spécifié
  console.log(
    `${new Date().toISOString()}: ${req.method} - ${req.url}  (${
      req.id_request
    }) - Body: ${_.isEmpty(req.body) ? "Non" : "Oui"} - ${msg}`
  );
}

// Définit une route pour récupérer la liste des utilisateurs
app.get("/users", function (req, res) {
  // Envoie la liste des utilisateurs dans la réponse
  res.send(users);
});

// Définit une route pour récupérer la liste des produits
app.get("/products", function (req, res) {
  // Envoie la liste des produits dans la réponse
  res.send(products);
});

// Définit un tableau contenant les noms des champs autorisés pour les utilisateurs
var UserFieldAuthorized = ["firstName", "lastName", "email", "username"];

// Définit un tableau contenant les noms des champs requis pour les utilisateurs
var UserFieldRequired = ["firstName", "lastName", "username"];

// Définit un tableau contenant les noms des champs autorisés pour les produits
var ProductFieldAuthorized = [
  "nom",
  "description",
  "price",
  "stock",
  "departement",
];

// Définit un tableau contenant les noms des champs requis pour les produits
var ProductFieldRequired = ["nom", "description", "price"];

// Définit la fonction checkKeys pour vérifier si tous les champs de l'objet spécifié sont autorisés
function checkKeys(obj, fieldAuthorized) {
  // Récupère la liste des noms de champs de l'objet spécifié
  var tab = Object.keys(obj);

  // Initialise un tableau vide pour stocker les noms des champs non autorisés
  var tab_res = [];

  // Boucle à travers les noms de champs de l'objet spécifié
  for (var i = 0; i < tab.length; i++) {
    // Vérifie si le nom du champ courant n'est pas dans la liste des champs autorisés
    if (fieldAuthorized.indexOf(tab[i]) == -1) {
      // Ajoute le nom du champ non autorisé au tableau
      tab_res.push(tab[i]);
    }
  }

  // Retourne le tableau des noms de champs non autorisés
  return tab_res;
}

// Définit la fonction checkObjRequiredKey pour vérifier si tous les champs requis sont présents dans l'objet spécifié
function checkObjRequiredKey(obj, fieldRequired) {
  // Récupère la liste des noms de champs de l'objet spécifié
  var tab = Object.keys(obj);

  // Initialise un tableau vide pour stocker les erreurs
  var tab_res = [];

  // Boucle à travers les champs requis
  for (var i = 0; i < fieldRequired.length; i++) {
    // Vérifie si le champ requis est présent dans l'objet spécifié
    if (tab.indexOf(fieldRequired[i]) == -1) {
      // Ajoute une erreur au tableau si le champ n'est pas trouvé
      tab_res.push({ field: fieldRequired[i], type_error: "Not found" });
    } else if (!obj[fieldRequired[i]]) {
      // Ajoute une erreur au tableau si le champ est vide
      tab_res.push({ field: fieldRequired[i], type_error: "Found but empty" });
    }
  }

  // Retourne le tableau d'erreurs
  return tab_res;
}

// Définit une route pour récupérer un utilisateur par son ID
app.get("/user/:id", function (req, res) {
  // Récupère l'ID de l'utilisateur à partir des paramètres de la requête
  var id = req.params.id;

  // Récupère l'utilisateur correspondant à l'ID spécifié
  var user = _.find(users, ["id", String(id)]);

  // Vérifie si l'utilisateur a été trouvé et si l'ID est valide
  if (user && id) {
    // Affiche un message de log si l'utilisateur a été trouvé
    printLogMessage(req, "Utilisateur trouvé.");

    // Envoie l'utilisateur dans la réponse
    res.send(user);
  } else if (!id) {
    // Affiche un message de log si l'ID est manquant
    printLogMessage(req, "Il manque le params 'id' trouvé.");

    // Définit le code de statut de la réponse sur 405
    res.statusCode = 405;

    // Envoie un message d'erreur dans la réponse
    res.send({ msg: "Argument non valide." });
  } else {
    // Affiche un message de log si l'utilisateur n'a pas été trouvé
    printLogMessage(req, "Utilisateur non trouvé.");

    // Définit le code de statut de la réponse sur 404
    res.statusCode = 404;

    // Envoie un message d'erreur dans la réponse
    res.send({ msg: "Utilisateur not found." });
  }
});

// Définit la fonction checkKeyRequiredIsNotEmpty pour vérifier si tous les champs requis sont présents et non vides dans l'objet spécifié
function checkKeyRequiredIsNotEmpty(obj, fieldRequired) {
  // Initialise un tableau vide pour stocker les champs vides
  var fieldEmpty = [];

  // Récupère la liste des noms de champs de l'objet spécifié
  var key_obj = Object.keys(obj);

  // Boucle à travers les champs requis
  for (var i = 0; i < fieldRequired.length; i++) {
    // Vérifie si le champ requis est présent et non vide dans l'objet spécifié
    if (key_obj.indexOf(fieldRequired[i]) > -1 && !obj[fieldRequired[i]]) {
      // Ajoute le champ vide au tableau si le champ est présent mais vide
      fieldEmpty.push(fieldRequired[i]);
    }
  }

  // Retourne le tableau des champs vides
  return fieldEmpty;
}

// Définit une route pour mettre à jour un utilisateur par son ID
app.put(
  "/user/:id",
  middlewareCheckBodyKeysAuthorizedAndRequiredToPut(
    users,
    UserFieldAuthorized,
    UserFieldRequired
  ),
  function (req, res) {
    // Récupère les données de l'utilisateur à mettre à jour à partir du corps de la requête
    var user_to_edit = req.body;

    // Récupère l'index de l'utilisateur à mettre à jour à partir de la propriété index_element de la requête
    var user_to_edit_index = req.index_element;

    // Met à jour l'utilisateur en utilisant l'opérateur spread pour fusionner les données existantes et les nouvelles données
    users[user_to_edit_index] = {
      ...users[user_to_edit_index],
      ...user_to_edit,
    };

    // Envoie l'utilisateur mis à jour dans la réponse
    res.send(users[user_to_edit_index]);
  }
);

// Définit la fonction middlewareBodyIsArray pour vérifier si le corps de la requête est un tableau d'objets
function middlewareBodyIsArray(req, res, next) {
  // Récupère les données à ajouter à partir du corps de la requête
  var users_to_add = req.body;

  // Vérifie si le corps de la requête est un tableau
  if (_.isArray(users_to_add)) {
    // Appelle la fonction suivante dans le pipeline de middleware si le corps de la requête est un tableau
    next();
  } else {
    // Définit le code de statut de la réponse sur 405 si le corps de la requête n'est pas un tableau
    res.statusCode = 405;

    // Envoie un message d'erreur dans la réponse si le corps de la requête n'est pas un tableau
    res.send({ msg: "Le body n'est pas un tableau d'object." });
  }
}

// Définit une route pour ajouter plusieurs utilisateurs
app.post(
  "/users",
  middlewareBodyIsArray,
  middlewareCheckBodyKeysAuthorizedAndRequiredArray(
    UserFieldAuthorized,
    UserFieldRequired
  ),
  function (req, res) {
    // Récupère les données à ajouter à partir du corps de la requête
    var users_to_add = req.body;

    // Ajoute un ID unique à chaque utilisateur à ajouter
    users_to_add = _.map(users_to_add, (e) => {
      e.id = _.uniqueId();
      return e;
    });

    // Ajoute les utilisateurs au tableau des utilisateurs
    users = [...users, ...users_to_add];

    // Envoie les utilisateurs ajoutés dans la réponse
    res.send(users_to_add);
  }
);

const middlewareCheckBodyKeysAuthorizedAndRequired = (
  // Liste des clés autorisées dans le corps de la requête
  fieldAuthorized,
  // Liste des clés requises dans le corps de la requête
  fieldRequired
) => {
  // Retourne une fonction middleware qui vérifie les clés autorisées et requises du corps de la requête
  return (req, res, next) => {
    // Récupération de l'objet user à partir du corps de la requête
    const user = req.body;
    // Vérification des clés non autorisées
    const fieldNotAuthorized = checkKeys(user, fieldAuthorized);
    // Vérification des clés requises manquantes
    const fieldNoRequiredNotMissing = checkObjRequiredKey(user, fieldRequired);

    // Si il y a des erreurs, alors on envoie une réponse d'erreur
    if (fieldNotAuthorized.length > 0 || fieldNoRequiredNotMissing.length > 0) {
      // Définition du code d'état de la réponse HTTP à 405 (méthode non autorisée)
      res.statusCode = 405;
      let text = "";

      // Construction du message d'erreur pour les clés non autorisées
      if (fieldNotAuthorized.length > 0) {
        text += `One of the properties (${fieldNotAuthorized.join(
          ", "
        )}) is not authorized.`;
      }

      // Construction du message d'erreur pour les clés requises manquantes
      if (fieldNoRequiredNotMissing.length > 0) {
        text += `One of the required properties (${fieldNoRequiredNotMissing
          .map((e) => `${e.field} : ${e.type_error}`)
          .join(", ")}) is missing.`;
      }

      // Envoi de la réponse d'erreur
      res.send({
        msg: text,
        field_not_authorized: fieldNotAuthorized,
        field_require_missing: fieldNoRequiredNotMissing,
      });
    } else {
      // Si il n'y a pas d'erreurs, alors on appelle la fonction next() pour continuer le traitement de la requête
      next();
    }
  };
};

// Exemple d'utilisation du middleware
app.use(
  middlewareCheckBodyKeysAuthorizedAndRequired(
    ["name", "email"],
    ["name", "email"]
  )
);

// Fonctions d'aide
function checkKeys(obj, keys) {
  // Retourne les clés de l'objet qui ne sont pas dans la liste des clés autorisées
  return Object.keys(obj).filter((key) => !keys.includes(key));
}

function checkObjRequiredKey(obj, keys) {
  // Retourne les clés requises qui ne sont pas présentes dans l'objet ou qui sont invalides
  return keys.filter(
    (key) =>
      !obj.hasOwnProperty(key) || obj[key] === undefined || obj[key] === null
  );
}

const middlewareCheckBodyKeysAuthorizedAndRequiredToPut =
  (tab, fieldAuthorized, fieldRequired) => (req, res, next) => {
    // Récupération de l'ID de l'élément à modifier à partir des paramètres de la requête
    var id = req.params.id;
    // Récupération du corps de la requête
    var user_body = req.body;
    // Création d'un objet user_to_edit qui contiendra les clés autorisées
    var user_to_edit = {};
    // Boucle pour copier les clés autorisées du corps de la requête dans l'objet user_to_edit
    for (var i = 0; i < fieldAuthorized.length; i++) {
      if (_.has(user_body, fieldAuthorized[i]))
        user_to_edit[fieldAuthorized[i]] = user_body[fieldAuthorized[i]];
    }
    // Vérification des clés requises vides
    var field_required_empty = checkKeyRequiredIsNotEmpty(
      user_to_edit,
      fieldRequired
    );
    // Recherche de l'élément à modifier dans le tableau
    var user_to_edit_index = _.findIndex(tab, ["id", String(id)]);
    // Si l'élément à modifier n'est pas trouvé, alors on envoie une réponse 404
    if (user_to_edit_index == -1) {
      res.statusCode = 404;
      res.send({ msg: "Élément à modifier non trouvé." });
    }
    // Si des clés requises sont vides, alors on envoie une réponse 405
    else if (field_required_empty.length > 0) {
      res.statusCode = 405;
      res.send({
        msg: `Les champs requis (${field_required_empty.join(
          ", "
        )}) sont vides, impossible d'effectuer la modification.`,
        field_required_empty: field_required_empty,
      });
    }
    // Si tout est OK, alors on met à jour le corps de la requête et on appelle la fonction next()
    else {
      req.body = user_to_edit;
      req.index_element = user_to_edit_index;
      next();
    }
  };

const middlewareCheckBodyKeysAuthorizedAndRequiredArray =
  (fieldAuthorized, fieldRequired) => (req, res, next) => {
    // Récupération du tableau d'éléments à ajouter
    var users_to_add = req.body;
    // Initialisation d'un tableau pour stocker les erreurs
    var error_element = [];
    // Boucle pour vérifier chaque élément du tableau
    for (var i = 0; i < users_to_add.length; i++) {
      var user = users_to_add[i];
      // Vérification des clés non autorisées
      var fieldNotAuthorized = checkKeys(user, fieldAuthorized);
      // Vérification des clés requises manquantes
      var fieldNoRequiredNotMissing = checkObjRequiredKey(user, fieldRequired);
      // Construction du message d'erreur
      var text = `L'élément à la position ${i} :`;
      if (fieldNotAuthorized.length > 0) {
        text += `Une des propriétés (${fieldNotAuthorized.join(
          ", "
        )}) n'est pas autorisée. `;
      }
      if (fieldNoRequiredNotMissing.length > 0) {
        text += `Une des propriétés (${fieldNoRequiredNotMissing
          .map((e) => {
            return e.field + " : " + e.type_error;
          })
          .join(", ")}) requise n'est pas complète. `;
      }
      // Si des erreurs sont détectées, on ajoute un élément à error_element
      if (fieldNotAuthorized.length > 0 || fieldNoRequiredNotMissing.length > 0)
        error_element.push({
          msg: text,
          index: i,
          field_not_authorized: fieldNotAuthorized,
          field_require_missing: fieldNoRequiredNotMissing,
        });
    }
    // Si des erreurs sont détectées, on envoie une réponse 405
    if (error_element.length > 0) {
      res.statusCode = 405;
      res.send(error_element);
    }
    // Sinon, on appelle la fonction next()
    else {
      next();
    }
  };

// Définition de la route POST pour créer un nouvel utilisateur
app.post(
  "/user",
  // Middleware pour vérifier les clés autorisées et requises dans le corps de la requête
  middlewareCheckBodyKeysAuthorizedAndRequired(
    UserFieldAuthorized,
    UserFieldRequired
  ),
  // Fonction pour créer un nouvel utilisateur
  function (req, res) {
    // Récupération du corps de la requête
    var user = req.body;
    // Génération d'un ID unique pour l'utilisateur
    user.id = _.uniqueId();
    // Ajout de l'utilisateur au tableau des utilisateurs
    users.push(user);
    // Envoi de la réponse avec l'utilisateur créé
    res.send(user);
  }
);

// Définition de la route POST pour créer un nouveau produit
app.post(
  "/product",
  // Middleware pour vérifier les clés autorisées et requises dans le corps de la requête
  middlewareCheckBodyKeysAuthorizedAndRequired(
    ProductFieldAuthorized,
    ProductFieldRequired
  ),
  // Fonction pour créer un nouveau produit
  function (req, res) {
    // Récupération du corps de la requête
    var product = req.body;
    // Génération d'un ID unique pour le produit
    product.id = _.uniqueId();
    // Ajout du produit au tableau des produits
    products.push(product);
    // Envoi de la réponse avec le produit créé
    res.send(product);
  }
);

// Démarrage du serveur et écoute sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
