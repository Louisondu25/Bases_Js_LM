// Importation des modules faker et lodash
const { faker } = require("@faker-js/faker/locale/fr");
const _ = require("lodash");

// Définition des variables d'âge minimum et maximum
var age_min = 18;
var age_max = 65;

// Création d'un tableau vide pour stocker les personnes
var obj = [];

// Boucle pour générer 25 personnes aléatoires
for (let i = 0; i < 25; i++) {
  // Génération du sexe de la personne
  var sexPeople = faker.person.sexType();
  // Génération du prénom de la personne
  var firstName = faker.person.firstName();
  // Génération du nom de la personne
  var lastName = faker.person.lastName();
  // Génération de l'âge de la personne entre 18 et 65 ans
  var age = _.random(age_min, age_max);

  // Ajout de la personne au tableau
  obj.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: sexPeople,
  });
}

// Fonction pour afficher les personnes dans le terminal
function printobj(tab) {
  // Boucle pour itérer sur chaque personne du tableau
  for (let i = 0; i < tab.length; i++) {
    // Récupération de la personne courante
    var obj_people = tab[i];
    // Définition du genre en français en fonction du genre de la personne
    var gender_fr = "Hommes";
    if (tab[i].gender === "female") {
      gender_fr = "Femmes";
    }
    // Création de la chaîne de caractères à afficher
    var text = `${obj_people.firstName},${obj_people.lastName},${gender_fr}, ${obj_people.age} ans`;
    // Affichage de la chaîne de caractères dans le terminal
    console.log(text);
  }
}

// Appel de la fonction printobj avec le tableau obj en argument
printobj(obj);

// Création de deux tableaux pour stocker les personnes de plus ou moins de 45 ans
var plus_de_45ans = [];
var moins_de_45ans = [];

// Boucle pour itérer sur chaque personne du tableau
for (let i = 0; i < obj.length; i++) {
  var e = obj[i]; //e veut dire élément
  if (e.age > 45) {
    plus_de_45ans.push(e);
  } else {
    moins_de_45ans.push(e);
  }
}

// Affichage des personnes de plus ou moins de 45 ans
console.log("\n plus de 45 ans :");
printobj(plus_de_45ans);
console.log("\n moins de 45 ans :");
printobj(moins_de_45ans);

// Création de deux tableaux pour stocker les hommes et les femmes
var Hommes = [];
var Femmes = [];

// Boucle pour itérer sur chaque personne du tableau
for (let i = 0; i < obj.length; i++) {
  if (obj[i].gender === "male") {
    Hommes.push(obj[i]);
  } else {
    Femmes.push(obj[i]);
  }
}

// Affichage des hommes et des femmes
console.log("\n Hommes:");
printobj(Hommes);
console.log("\n Femmes:");
printobj(Femmes);

// Création de quatre tableaux pour stocker les personnes en fonction de leur genre et de leur âge
var Hommesplusde45ans = [];
var Hommesmoinsde45ans = [];
var Femmesplusde45ans = [];
var Femmesmoinsde45ans = [];

// Boucle pour itérer sur chaque personne du tableau
for (let i = 0; i < obj.length; i++) {
  var e = obj[i]; // On stocke la personne courante dans la variable e (e = element)
  if (e.gender === "male" && e.age > 45) {
    // Si la personne est un homme et qu'il a plus de 45 ans, on l'ajoute au tableau Hommesplusde45ans
    Hommesplusde45ans.push(e);
  } else if (e.gender === "male" && e.age < 45) {
    // Sinon, si la personne est un homme et qu'il a moins de 45 ans, on l'ajoute au tableau Hommesmoinsde45ans
    Hommesmoinsde45ans.push(e);
  } else if (e.gender === "female" && e.age > 45) {
    // Sinon, si la personne est une femme et qu'elle a plus de 45 ans, on l'ajoute au tableau Femmesplusde45ans
    Femmesplusde45ans.push(e);
  } else if (e.gender === "female" && e.age < 45) {
    // Sinon, si la personne est une femme et qu'elle a moins de 45 ans, on l'ajoute au tableau Femmesmoinsde45ans
    Femmesmoinsde45ans.push(e);
  }
}

// Affichage des personnes dans le terminal
console.log("\n", "Hommes plus de 45ans:");
printobj(Hommesplusde45ans);
console.log("\n", "Hommes moins de 45ans:");
printobj(Hommesmoinsde45ans);
console.log("\n", "Femmes plus de 45ans:");
printobj(Femmesplusde45ans);
console.log("\n", "Femmes moins de 45ans:");
printobj(Femmesmoinsde45ans);
