// Importer la bibliothèque faker pour générer des données fictives
const { faker } = require("@faker-js/faker");

// Importer la bibliothèque lodash pour travailler avec des tableaux et des objets
const _ = require("lodash");

var users = []
var company = []
var articles = []
var number_company = 20
var number_users = 20;

for (let i = 0; i < number_users; i++) {
    var user = {
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
    }
// Ajouter l'utilisateur à la liste des utilisateurs
users.push(user);

// Vérifier si le nombre d'entreprises est égal au nombre d'utilisateurs
if (!(number_company == number_users)) {
    // Afficher un message indiquant lequel des deux nombres est le plus grand
    console.log(number_company > number_users ? "le nombre d'entreprises est plus grand que le nombre d'utilisateurs" : "le nombre d'utilisateurs est plus grand que le nombre d'entreprises");
}

// Créer une copie de la liste des utilisateurs
let users_tmp = [...users];

// Parcourir la liste des entreprises
for (let i = 0; i < number_company.length; i++) {
    // Sélectionner un utilisateur aléatoire dans la liste des utilisateurs
    let index_users = _.random(0, users_tmp.length - 1);
    // Créer une entreprise avec un identifiant unique, un nom aléatoire, un solde de compte aléatoire et l'identifiant de l'utilisateur sélectionné
    const company = {
        id: _.uniqueId("COMPANY"),
        name: faker.company.name(),
        sum_account: _.random(1, 10000),
        user_id: users_tmp[index_users].id,
    };
    // Ajouter l'entreprise à la liste des entreprises
    companies.push(company);
    // Supprimer l'utilisateur sélectionné de la liste des utilisateurs
    users_tmp.splice(index_users, 1);
}

// Parcourir la liste des éléments du tableau
for (let i = 0; i < array.length; i++) {
    // Générer un nombre aléatoire d'articles à créer
    let number_create_article = _.random(3, 150);
    // Faire quelque chose avec number_create_article
}

// Boucle sur chaque entreprise du tableau "companies"
for (let i = 0; i < companies.length; i++) {
    // Générer un nombre aléatoire d'articles à créer pour l'entreprise en cours
    let number_article_create = _.random(3, 150);

    // Boucle pour créer chaque article
    for (let j = 0; j < number_article_create; j++) {
        // Générer un prix de vente aléatoire pour l'article en cours
        let price_sell = _.random(1, 250);

        // Générer un pourcentage de bénéfice aléatoire pour l'article en cours
        let pourcent_benefice = _.random(10, 50);

        // Calculer le prix d'achat de l'article en fonction du prix de vente et du pourcentage de bénéfice
        let price_buy = price_sell * (pourcent_benefice / 100);

        // Créer un nouvel article avec ses propriétés
        let article = {
            name: faker.commerce.productName(), // Nom de l'article
            price_sell: price_sell, // Prix de vente de l'article
            price_buy: price_buy, // Prix d'achat de l'article
            pourcent_benefice: pourcent_benefice, // Pourcentage de bénéfice de l'article
            company_id: companies[i].id, // Identifiant de l'entreprise à laquelle appartient l'article
            stock: _.random(1, 150) // Quantité en stock de l'article
        };

        // Ajouter le nouvel article au tableau "articles"
        articles.push(article);
    }
}

// Utiliser la méthode "map" pour créer un nouveau tableau "companies" avec les bénéfices de chaque entreprise
companies = companies.map((e) => {
    // Filtrer les articles appartenant à l'entreprise en cours
    let article_prices = articles.filter((a) => {
        return a.company_id == e.id;
    });

    // Calculer le prix de vente total de chaque article en stock
    let sum_articles = article_prices.map((s) => {
        return s.price_sell * s.stock;
    });

    // Calculer le bénéfice total de l'entreprise en cours en sommant les prix de vente totaux de chaque article
    let total_sum_articles = _.sum(sum_articles);

    // Ajouter la propriété "benef" à l'entreprise en cours avec la valeur du bénéfice total
    e.benef = total_sum_articles;

    // Retourner l'entreprise en cours avec sa propriété "benef"
    return e;
});

// Afficher le tableau "companies" avec les bénéfices de chaque entreprise
console.log(companies)
};