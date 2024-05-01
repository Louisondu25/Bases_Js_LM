// Importation du module 'path' qui fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires
const path = require("path");

// Définition d'une variable 'myPath' qui contient le chemin concaténé du répertoire courant,
// du sous-répertoire 'recettes' et du fichier 'recettes-24042024.txt'
var myPath = path.join(__dirname, "recettes", "recettes-24042024.txt");

// Affichage du chemin dans la console
console.log(myPath);
