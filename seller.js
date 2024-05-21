// Importation des modules faker et lodash
const { faker } = require("@faker-js/faker");
const _ = require("lodash");

// Déclaration des variables
var number_elements = 10;
var price_min = 5;
var price_max = 1300;
var tva_min = 5;
var tva_max = 20;
var quantity_min = 1;
var quantity_max = 100;
var tva_interval = 10;
var articles = [];

// Boucle for qui crée 10 articles avec des propriétés aléatoires
for (var i = 0; i < number_elements; i++) {
  articles.push({
    name: faker.commerce.product(),
    category: faker.commerce.department(),
    price_unit_ttc: Number(_.random(price_min, price_max, true).toFixed(2)),
    tva: _.random(tva_min, tva_max),
    quantity: _.random(quantity_min, quantity_max),
    date: faker.date.birthdate({ min: 2020, max: 2023, mode: "year" }),
    siteweb: faker.internet.url({ protocol: "http", appendSlash: false }),
  });
}

// Fonction pour arrondir un nombre à 2 décimales
function arrondir(number) {
  return Math.round(number * 100) / 100;
}

//console.log(articles)

// Creer une nouvelle propriété "price_unit_ht", "price_total_ht" et "price_total_ttc"
articles = articles.map(function (e) {
  var price_ht = arrondir(e.price_unit_ttc * (1 - e.tva / 100));
  return {
    ...e,
    price_unit_ht: price_ht,
    price_total_ttc: arrondir(e.price_unit_ttc * e.quantity),
    price_total_ht: arrondir(price_ht * e.quantity),
  };
});

//console.log(articles)

// Filtre les articles dont le taux de TVA est entre 7 et 13 (inclus)
var more_tva_interval = articles.filter(function (e) {
  return e.tva > 7 && e.tva < 13;
});

// Boucle for qui crée un tableau d'articles dont le taux de TVA est entre 7 et 13 (inclus)
var for_tva_more_interval = [];

for (var i = 0; i < articles.length; i++) {
  if (articles[i].tva > 7 && articles[i].tva < 13) {
    for_tva_more_interval.push(articles[i]);
  }
}

// Affiche les articles dont le taux de TVA est entre 7 et 13 (inclus)
console.log(for_tva_more_interval);

// Filtre les articles dont le prix total TTC est supérieur à 10 000
let price_more_10k = articles.filter(function (e) {
  return e.price_total_ttc > 10000;
});

// Affiche les articles dont le prix total TTC est supérieur à 10 000
console.log(price_more_10k);

// Filtre les articles dont la quantité est supérieure à 50
var price_more_50 = articles.filter(function (e) {
  return e.quantity > 50;
});

// Affiche les articles dont la quantité est supérieure à 50
console.log(price_more_50);

// Ajoute une propriété "id" à chaque article en utilisant la méthode map
var articles = articles.map(function (e, index) {
  return {
    ...e,
    id: index,
  };
});

// Affiche les articles avec leur nouvelle propriété "id"
console.log(articles);

// Déclaration de la variable number\_users et initialisation à 25
var number_users = 25;
// Déclaration du tableau users vide
var users = [];

// Boucle for qui crée 25 utilisateurs avec des propriétés aléatoires
for (var i = 0; i < number_users; i++) {
  let firstName = faker.person.firstName(); // Génère un prénom aléatoire
  let lastName = faker.person.lastName(); // Génère un nom aléatoire
  users.push({
    // Ajoute un nouvel utilisateur au tableau users
    username: faker.internet.userName({
      // Génère un nom d'utilisateur à partir du prénom et du nom
      firstName: firstName,
      lastName: lastName,
    }),
    firstName: firstName, // Ajoute le prénom de l'utilisateur
    lastName: lastName, // Ajoute le nom de l'utilisateur
    email: faker.internet.email({
      // Génère une adresse e-mail à partir du prénom et du nom
      firstName: firstName,
      lastName: lastName,
    }),
  });
}

// Affiche les utilisateurs créés
console.log(users);

// Déclaration de la variable number\_max\_articles et initialisation à 10
var number_max_articles = 10;

// Déclaration de la variable tmp\_articles et initialisation à un tableau qui est une copie d'articles
var tmp_articles = [...articles];

// Boucle map qui ajoute une propriété "articles" à chaque utilisateur
users = users.map(function (e) {
  var limit = number_max_articles;
  if (limit > tmp_articles.length) {
    limit = tmp_articles.length;
  }
  var random_id_number = _.random(0, limit); // Génère un nombre aléatoire entre 0 et limit
  if (random_id_number > 0 && tmp_articles > 0) {
    // Si random\_id\_number est supérieur à 0 et qu'il reste des articles
    var id_to_users = []; // Déclaration de la variable id\_to\_users
    for (let i = 0; i < random_id_number.length; i++) {
      // Boucle for qui s'exécute random\_id\_number fois
      var index_to_take = _.random(0, tmp_articles.length - 1); // Génère un index aléatoire entre 0 et la longueur de tmp\_articles - 1
      id_to_users.push(tmp_articles[index_to_take].id); // Ajoute l'id de l'article à id\_to\_users
      tmp_articles.splice(index_to_take, 1); // Supprime l'article de tmp\_articles
    }
    return { ...e, articles: id_to_users }; // Ajoute la propriété "articles" à l'utilisateur avec les id\_to\_users
  } else {
    return { ...e, articles: [] }; // Si random\_id\_number est égal à 0, ajoute une propriété "articles" à l'utilisateur avec un tableau vide
  }
});
//Tableau utilisateur de 25 elements les proriétés sont :
// username - firstName - lastName - email

// Ajouter une propriete aux utilisateurs "articles" [id.articles] un nombre aléatoire 
// sans que une un utilisateur est le meme articles qu'un autre

//console.log(articles)
//articles = []

// On itère sur chaque utilisateur de la variable users
users = users.map(function (e) {
  // On vérifie si la propriété articles de l'utilisateur actuel contient des éléments
  if (e.articles.length > 0) {
    // On crée une variable depenses qui contiendra les prix totaux TTC de chaque article acheté par l'utilisateur actuel
    var depenses = e.articles.map(function (article) {
      // Pour chaque article acheté par l'utilisateur actuel, on recherche l'article dans la variable articles en utilisant la méthode _.find de la bibliothèque Lodash
      var a = _.find(articles, ["id", article])
      // Si l'article est trouvé et qu'il a une propriété price_total_ttc, on ajoute le prix total TTC de l'article à la variable depenses. Sinon, on ajoute 0 à la variable depenses
      if (a && a['price_total_ttc']) {
        return a['price_total_ttc']
      }
      return 0
    })
    // On calcule le montant total dépensé par l'utilisateur actuel en sommant les prix totaux TTC de chaque article acheté en utilisant la méthode _.sum de la bibliothèque Lodash
    var price_depense = _.sum(depenses)
    // On ajoute la propriété depenses à l'utilisateur actuel avec la valeur du montant total dépensé
    e["depenses"] = price_depense
  }
  // On renvoie l'utilisateur actuel avec ses propriétés modifiées
  return e
})
// On itère sur chaque utilisateur de la variable users en utilisant la méthode map qui renvoie un nouveau tableau avec les utilisateurs modifiés

//console.log(users)

// articles = articles.map(function (article) {
//   // On applique une fonction à chaque article du tableau articles
//   for (var i = 0; i < users.length; i++) {
//     // Pour chaque article, on parcourt la liste des utilisateurs
//     var user = users[i];
//     // On stocke l'utilisateur courant dans la variable user
//     if (_.indexOf(user.articles, article.id) > -1) {
//       // On vérifie si l'identifiant de l'article est dans la liste des articles de l'utilisateur
//       article.user_id = user.id;
//       // Si oui, on associe l'identifiant de l'utilisateur à l'article
//     }
//   }
//   return article;
//   // On renvoie l'article modifié
// });

// On itère sur chaque utilisateur du tableau users
users.forEach(function (user) {
    // Pour chaque utilisateur, on itère sur chaque article de son tableau d'articles
    user.articles.forEach(function (user_article) {
        // On recherche l'index de l'article dans le tableau articles en utilisant lodash's findIndex
        var index = _.findIndex(articles, ["id", user_article])
        // Si l'article est trouvé dans le tableau articles
        if (index > -1) {
            // On associe l'identifiant de l'utilisateur à l'article
            articles[index].user_id = user.id
        }
    })
})

// On initialise un objet vide pour stocker les utilisateurs
var obj_users = {}

// On initialise un objet vide pour stocker les articles
var obj_articles = {}

// On itère sur chaque article du tableau articles
// articles.forEach(function (article) {
//     // On vérifie si l'article a un identifiant d'utilisateur
//     if (article.user_id) {
//         // Si l'utilisateur n'existe pas encore dans l'objet obj_users
//         if (!obj_users[article.user_id])
//             // On crée un tableau vide pour stocker les articles de l'utilisateur
//             obj_users[article.user_id] = []
//         // On ajoute l'article au tableau des articles de l'utilisateur
//         obj_users[article.user_id].push(article)
//     }
// })

// On utilise lodash's groupBy pour regrouper les articles par identifiant d'utilisateur
obj_articles = _.groupBy(articles, 'user_id')



// On utilise lodash's map pour itérer sur les clés de l'objet obj_articles
// On retourne le nombre d'articles pour chaque utilisateur
console.log(_.map(Object.keys(obj_articles), (e) => {
    return obj_articles[e].length+ "-"+e
}))

// On définit l'identifiant de l'utilisateur sélectionné
var user_id_select = "112"

// Si l'utilisateur sélectionné a des articles dans l'objet obj_articles
if (obj_articles[user_id_select]) {
    // On affiche le nombre d'articles achetés par l'utilisateur et les noms des articles
    console.log(`L'utilisateur ${user_id_select} à acheté `, obj_articles[user_id_select].length, "article(s)",`(${_.map(obj_articles[user_id_select], 'name').join(',')})` )
}
// Sinon, on affiche que l'utilisateur n'a rien acheté
else {
    console.log(`L'utilisateur ${user_id_select} n'a rien acheté.`)
}

// On affiche le tableau d'articles
//console.log(articles)