// Importation des fonctions reject et values depuis la bibliothèque lodash
const { reject, values } = require("lodash");

// Affichage d'un message de bienvenue
console.log("Bienvenue");

// Calcul de la valeur (12 / 2) * 4 et affichage du résultat
var calcul = (12 / 2) * 4;
console.log(calcul);

// Attente d'une seconde avant d'exécuter la fonction anonyme passée en argument à setTimeout
setTimeout(function () {
  // Essai de modification de la valeur de calcul et affichage du résultat
  try {
    calcul = 4;
    console.log(calcul);

    // Appel de la fonction dispatchEvent qui n'est pas définie dans ce contexte
    dispatchEvent;
  } catch (err) {
    // Affichage du nom de l'erreur en cas d'exception
    console.log(err.name);
  } finally {
    // Affichage du message "FIN" dans tous les cas
    console.log("FIN");
  }
}, 1000);

// Définition de la fonction waiting qui prend un argument time
function waiting(time) {
  // Retour d'une nouvelle Promesse avec deux arguments resolve et reject
  return new Promise((resolve, reject) => {
    if (time > 100) {
      // Si time est supérieur à 100, on définit un setTimeout qui appellera resolve après time millisecondes
      setTimeout(() => {
        console.log("ok");
        resolve({ success: true });
      }, time);
    } else {
      // Sinon, on rejette la Promesse avec une nouvelle erreur
      reject(new Error({ success: false }));
    }
  });
}

// Appel de la fonction waiting avec l'argument 101
waiting(101)
  // Appel de la fonction then en cas de résolution de la Promesse
  .then((value) => {
    console.log("promise réussie: ", value);
  })
  // Appel de la fonction catch en cas d'échec de la Promesse
  .catch((err) => {
    console.log("promise échouée:", err.message);
  });
