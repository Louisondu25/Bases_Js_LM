// Importation de lodash pour utiliser les fonctions has, keys et isPlainObject
const { tr } = require("@faker-js/faker");
const _ = require("lodash");

var obj = {
  a: 1,
  b: 3,
  c: {
    e: {
      f: {
        z: {
          y: 23,
        },
      },
    },
  },
};

// La fonction searchKey prend un objet et une clé en entrée et retourne true si la clé est présente dans l'objet
function searchKey(object, keyName) {
  return _.has(object, keyName);
}

// Affichage de true car la clé "y" est présente dans l'objet
console.log(searchKey(obj, "y"));

// La fonction returnEveryKey prend un objet en entrée et retourne un tableau contenant toutes les clés de l'objet, y compris les clés des objets imbriqués
function returnEveryKey(object) {
  let result = []; // Initialisation du tableau result
  const keys = _.keys(object); // Récupération des clés de l'objet dans un tableau

  for (let i = 0; i < keys.length; i++) {
    // Boucle pour itérer sur chaque clé
    const key = keys[i]; // Récupération de la clé courante
    result.push(key); // Ajout de la clé au tableau result

    if (_.has(object, key) && _.isPlainObject(object[key])) {
      // Si la clé est présente dans l'objet et que sa valeur est un objet
      const tabSublevel = returnEveryKey(object[key]); // Appel récursif de la fonction returnEveryKey sur l'objet imbriqué
      result = [...result, ...tabSublevel]; // Ajout des clés de l'objet imbriqué au tableau result
    }
  }

  return result; // Retour du tableau result contenant toutes les clés
}

// Affichage du tableau contenant toutes les clés de l'objet
console.log(returnEveryKey(obj)); // [ 'a', 'b', 'c', 'e', 'f', 'z', 'y' ]


function sommetableau(tab) {
  // Vérifie si le tableau est vide
  if (tab.length === 0) {
    // Si oui, retourne 0
    return 0;
  }
  // Sinon, retourne le premier élément du tableau + la somme du reste du tableau
  return tab[0] + sommetableau(tab.slice(1));
}

function lengthtableau(tab) {
  // Vérifie si le tableau est vide
  if (tab.length === 0) {
    // Si oui, retourne 0
    return 0;
  }
  // Sinon, retourne 1 + la longueur du reste du tableau
  return 1 + lengthtableau(tab.slice(1));
}

function isPalindrome(str) {
  // Vérifie si la longueur du tableau est inférieure ou égale à 1
  if (str.length <= 1) {
    // Si oui, retourne true car une chaîne vide ou une chaîne d'un seul caractère est un palindrome
    return true;
  }
  // Vérifie si le premier caractère de la chaîne est différent du dernier caractère
  if (str[0] !== str[str.length - 1]) {
    // Si oui, ce n'est pas un palindrome
    return false;
  }
  // Sinon, vérifie si la chaîne sans les deux premiers et derniers caractères est un palindrome en appelant récursivement la fonction isPalindrome
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("madame")) // Affiche false
console.log(isPalindrome("venu")); // Affiche false
console.log(isPalindrome("radar")); // Affiche true
console.log(isPalindrome("level")); // Affiche false
console.log(isPalindrome("racecar")); // Affiche true
console.log(isPalindrome("level")); // Affiche false
