// Définition de l'objet "obj" contenant des informations sur une personne
const obj = {
  firstname: "Louison",
  lastname: "Menkour",
  yearBorn: 1999,
};

// Fonction pour récupérer les clés d'un objet sous forme d'une chaîne de caractères séparées par des virgules
function getPropretyObject(object) {
  const objectkey = Object.keys(object);
  return objectkey.join(", ");
}

// Fonction pour afficher les clés d'un objet
function printProperty(keys) {
  console.log("Les propriétés sont :", keys);
}

// Récupération des clés de l'objet sous forme d'une chaîne de caractères
const key = getPropretyObject(obj);

// Affichage des clés de l'objet
printProperty(key);

// Ajout de nouvelles propriétés à l'objet
obj.age = 2024 - obj.yearBorn;
obj.job = "Dev";

// Affichage des clés et des valeurs de l'objet
const keys_existant = Object.keys(obj);
// Boucle sur chaque clé de l'objet
for (let i = 0; i < keys_existant.length; i++) {
  // Affichage de la clé et de sa valeur associée
  console.log(
    "Propriété :",
    keys_existant[i],
    "/ Valeur :",
    obj[keys_existant[i]]
  );
}
