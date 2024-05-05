let obj = [
  {
    firstName: "Louison", // Prénom de la personne
    lastName: "Menkour", // Nom de famille de la personne
    yearBorn: 1999, // Année de naissance de la personne
  },
  {
    firstName: "Jean", // Prénom de la personne
    lastName: "Luc", // Nom de famille de la personne
    yearBorn: 1950, // Année de naissance de la personne
    hobbies: "Sport", // Loisirs de la personne
    profession: "Professeur", // Profession de la personne
  },
];

for (let i = 0; i < obj.length; i++) {
  // Récupération des clés de l'objet courant
  var keys = Object.keys(obj[i]);
  // Parcours des clés de l'objet courant
  for (let j = 0; j < keys.length; j++) {
    //console.log(keys[j], ":", obj[i][keys[j]]);
  }
}

for (let i = 0; i < obj.length; i++) {
  // Récupération des clés de l'objet courant
  var keys = Object.keys(obj[i]);
  // Initialisation de la variable "text"
  var text = "";
  // Parcours des clés de l'objet courant
  for (let j = 0; j < keys.length; j++) {
    // Concaténation de la clé et de la valeur correspondante dans la variable "text"
    text += `${keys[j]} : ${obj[i][keys[j]]}`;
    // Si ce n'est pas la dernière clé, on ajoute une séparation "/"
    if (j + 1 != keys.length) {
      text += " / ";
    }
  }
  // Affichage de la chaîne de caractères "text"
  console.log(text);
}
