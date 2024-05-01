var data = [
  {
    type: "accompagnement",
    nom: "riz",
    ingredients: ["riz", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "puree",
    ingredients: ["pure", "lait", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "salade",
    ingredients: ["salade"],
    duration: 4,
    ustensile: ["saladier"],
  },
  {
    type: "accompagnement",
    nom: "frite",
    ingredients: ["patate", "huile"],
    duration: 13,
    ustensile: ["friteuse"],
  },
  {
    type: "assaisonnement",
    nom: "curry",
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: [],
  },
  {
    type: "assaisonnement",
    nom: "tandoori",
    ingredients: ["epice tandoori"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "assaisonnement",
    nom: "sauce forestier",
    ingredients: ["creme ", "champignon", "beurre", "eau"],
    duration: 3,
    ustensile: ["saladier", "mixeur"],
  },
  {
    type: "assaisonnement",
    nom: "paprika",
    ingredients: ["epice paprika"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "plat",
    nom: "boeuf",
    ingredients: ["viande", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "poulet",
    ingredients: ["poulet", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "saumon",
    ingredients: ["saumon", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "steak hache",
    ingredients: ["steak hache", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
];

// Déclaration d'un objet nommé "type\_element" qui contient trois tableaux vides pour stocker les différents types d'éléments: accompagnement, plat et assaisonnement.
var type_element = {
  accompagnement: [],
  plat: [],
  assaisonnement: [],
};

/* Les recettes de cuisine :
Créer un tableau d’object de recette de 10 recette differente et aléatoire avec les propriétés « nom » « ingrédients[] » « duration » « ustensile »

Exemple : 
{
    nom: « Riz Boeuf Curry »
    ingredients: [viande, huile, riz, eau, curry ]
    duration: 20
    ustensile : [poele, carresole]
}

*/
for (var i = 0; i < data.length; i++) {
  //  creation d'une boucle
  if (data[i].type === "accompagnement")            // fonction "if" (nom du tableau[i].type === " tableau Accompagnement")
    type_element.accompagnement.push(
      data[i]
    ); // "nom de la variable".Tableau. push
  else if (data[i].type === "plat")
    type_element.plat.push(
      data[i]
    );                                             // Fonction tant que + si (Tableau[i]. type === "tableau Plat") variable.tableau.push
  else type_element.assaisonnement.push(data[i]); //Fonction tant que + si (Tableau[i]. type === "tableau Assaisonement") variable.tableau.push
}

var recettes = [];                                         //creation du tableau Tableau recettes vide
var txt = ""                                               // creation variable Text

for (var i = 0; i < 10; i++) {
  // Creation de la boucle
  var accompagnement =
    type_element.accompagnement[
      Math.round(
        Math.random() * (type_element.accompagnement.length - 1 - 0) + 0
      )
    ]; //Tableau accompagnement = variable "type element". Tableau[ Aleatoire x(variable. taille du tableau) ]
  var plat =
    type_element.plat[
      Math.round(Math.random() * (type_element.plat.length - 1 - 0) + 0)
    ]; ////Tableau accompagnement = variable "type element". Tableau[ Aleatoire x(variable. taille du tableau) ]
  var assaisonnement =
    type_element.assaisonnement[
      Math.round(
        Math.random() * (type_element.assaisonnement.length - 1 - 0) + 0
      )
    ]; //Tableau assaisonement = variable "type element". Tableau[ Aleatoire x(variable. taille du tableau) ]
  var recette = `${accompagnement.nom} ${plat.nom} ${assaisonnement.nom}`; // variable recette = `${"Nom du tableau". nom}`
  var object_recette = {
    // variable "Object_recettes"
    nom: recette, //propriétés: recette
    ingredients: [
      //Tableau Ingredients
      ...accompagnement.ingredients,
      ...plat.ingredients,
      ...assaisonnement.ingredients,
    ],
    duration: accompagnement.duration + plat.duration + assaisonnement.duration, //nom de la propriete durée: tableau accompagnement.durée + plat.durée + assaisonement.durée
    ustensile: [
      // Tableau Ustensile
      ...accompagnement.ustensile, //Copie des tableau accompagnement . tableau ustensile
      ...plat.ustensile, //Copie des tableau plat
      ...assaisonnement.ustensile, //Copie des tableau assaisonement
    ],
  };
  recettes.push(object_recette); // nombre de la variable. push (pousser)
  console.log("\nNom : ", object_recette.nom); // affichage des noms de la recettes
  console.log("Durée : ", object_recette.duration); // affichage de la durée de la recettes
  console.log("Ingredients : ", object_recette.ingredients.join(", ")); // affichage des ingredients de la  recettes
  console.log("Ustensiles : ", object_recette.ustensile.join(", ")); //affichage des ustensiles pour la recettes
  txt += `nom: ${object_recette.nom}/ Durée: ${object_recette.duration}/ Ingredients:${object_recette.ingredients}/ustensiles: ${object_recette.ustensile} \n`;         // affichage  du texte  ou il y a  le nom , durée,ingredient et ustensilte.
}

//console.log(type_element)

const fs = require("fs");                                           // fonction demandant de crée un fichier
var folder_exist = fs.existsSync("recettes")                        //variable folder_exist = ( commande file system ) = fs.existsSync("recettes") 
console.log(folder_exist, !folder_exist)                            // affichage de folder_exist, !(inverser la fonction de folder_exist).(permet d'inverser la fonction principal de vrai a faux donc "! permet d'inverser de faux en vrai")
if (!folder_exist)                                                  // Fonction si (Inversion de folder_exist)
fs.mkdirSync("recettes")                                            // Creation du dossier recettes.
fs.appendFileSync("recettes/recette-24042024.txt", txt              // Creation du fichier text, nom de la variable crée donc "txt".
);