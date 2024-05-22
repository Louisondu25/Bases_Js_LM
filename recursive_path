// Importation de faker pour générer des données factices
const { faker } = require("@faker-js/faker");

// Importation de lodash pour utiliser les fonctions has, keys et isPlainObject
const _ = require("lodash");

// Importation de path pour manipuler les chemins de fichiers
const path = require("path");

// Initialisation du tableau files
var files = [];

// Boucle pour itérer 100 fois
for (var i = 0; i < 100; i++) {
  // Génération d'un chemin de fichier factice avec faker
  var file_path = faker.system.filePath();

  // Récupération de l'extension du fichier avec path
  var ext = path.extname(file_path);

  // Récupération du nom du fichier avec path
  var filename = path.basename(file_path);

  // Récupération du répertoire du fichier avec path
  var dirname = path.dirname(file_path);

  // Ajout d'un nouvel objet au tableau files
  files.push({
    // Ajout de la propriété name avec le nom du fichier
    name: filename,

    // Ajout de la propriété extension avec l'extension du fichier
    extension: ext,

    // Ajout de la propriété global_path avec le chemin de fichier factice
    global_path: file_path,

    // Ajout de la propriété dirname avec le répertoire du fichier
    dirname: dirname,

    // Ajout de la propriété dirname_tab avec le tableau des répertoires du chemin de fichier
    dirname_tab: dirname.replace("/", "").split("/"),
  });
}
// Initialisation du tableau files_recursive
var files_recursive = [];

// Définition de la fonction files_recursive_construction
function files_recursive_construction(path_dir, index, file, tab_recur) {
    // Récupération du chemin du répertoire courant
    const path = path_dir[index];

    // Initialisation de la variable create à false
    var create = false;

    // Recherche de l'élément dans le tableau tab_recur avec la méthode find de lodash
    let e = _.find(tab_recur, ["name", path]);

    // Si l'élément n'est pas trouvé
    if (!e) {
        // On définit create à true
        create = true;

        // Affichage d'un message indiquant que le répertoire n'existe pas et qu'on le crée
        console.log(
            "Le dossier",
            path,
            "n'existe pas, je le crée et l'ajoute au tableau de resultat.",
            "Je suis au niveau :",
            index
        );

        // Ajout d'un nouvel objet au tableau tab_recur
        e = {
            // Ajout de la propriété name avec le nom du répertoire
            name: path,

            // Ajout de la propriété type avec la valeur "D" pour répertoire
            type: "D",

            // Ajout de la propriété children avec un tableau vide
            children: [],
        };

        // Ajout de l'objet au tableau tab_recur
        tab_recur.push(e);
    } else {
        // Affichage d'un message indiquant que le répertoire existe déjà
        console.log(
            "Le dossier",
            path,
            "n'existe déja.",
            "Il a déja",
            e.children.length,
            "fichier ou dossier dedans.",
            "Je suis au niveau :",
            index
        );
    }
}

if (index === path_dir.length - 1) {
  // Si on est au dernier niveau du chemin, c'est qu'on a atteint le fichier
  console.log(
    "J'ai fini de créer tous les dossiers pour le fichier",
    file.global_path,
    "je peux ajouter le fichier au dossier et passer au suivant."
  );
  // On ajoute le fichier au tableau des enfants de l'objet courant
  e.children.push({
    name: file.name,
    type: "F",
    extension: file.extension,
    global: file.global_path,
  });
  // On retourne l'objet courant
  return e;
} else {
  // Si on n'est pas au dernier niveau, on continue la récursion
  if (create)
    console.log(
      "J'ai créé le dossier",
      path,
      "qui n'existait pas pour le fichier avec le chemin",
      file.global_path
    );
  else
    console.log(
      "J'ai déjà créé le dossier",
      path,
      "avant je vais ajouter les fichiers ou dossiers dans ses enfants pour le fichier avec le chemin",
      file.global_path
    );
  // On appelle la fonction récursive en passant le tableau des enfants de l'objet courant
  return files_recursive_construction(path_dir, index + 1, file, e.children);
}

// Boucle sur tous les fichiers du tableau files
for (let i = 0; i < files.length; i++) {
  // Récupération du fichier courant
  const file = files[i];

  // Affichage d'un message de log indiquant que l'on s'occupe du fichier courant
  console.log(
    "Je suis en train de m'occuper du fichier",
    file.global_path,
    "en position",
    i
  );

  // Appel de la fonction files_recursive_construction pour créer les dossiers récursivement
  files_recursive_construction(file.dirname_tab, 0, file, files_recursive);

  // Affichage d'un message de log indiquant que l'on a fini de s'occuper du fichier courant
  console.log(
    "J'ai fini de m'occuper du fichier",
    file.global_path,
    "en position",
    i
  );
}

// Définition de la fonction printPath qui prend en paramètres un objet, un niveau de récursion et un parent
function printPath(obj, level, parent) {
  // Initialisation d'une variable space qui contiendra des espaces pour l'indentation
  var space = "";

  // Si le niveau de récursion est supérieur à 0, on ajoute des espaces à la variable space
  if (level > 0) {
    for (var i = 0; i < level; i++) {
      space += "    ";
    }
  }

  // Boucle sur tous les éléments de l'objet
  for (var i = 0; i < obj.length; i++) {
    // Définition d'un tableau contenant les clés à afficher
    var keys = ["name", "global"];

    // Initialisation d'une variable text qui contiendra le texte à afficher
    var text = space + "- ";

    // Boucle sur toutes les clés du tableau keys
    for (var key_number = 0; key_number < keys.length; key_number++) {
      // Si la clé existe dans l'objet courant, on l'ajoute au texte
      if (obj[i][keys[key_number]]) {
        text += `${keys[key_number]} : ${obj[i][keys[key_number]]}`;
        // Si ce n'est pas la dernière clé, on ajoute un séparateur
        if (key_number + 1 != keys.length) text += " / ";
      }
    }

    // Affichage du texte dans la console
    console.log(text);

    // Si l'objet courant a des enfants, on appelle la fonction printPath récursivement
    if (obj[i].children) {
      printPath(obj[i].children, level + 1, "");
    }
  }
}

// Affichage de l'objet files_recursive dans la console
//console.log(JSON.stringify(files_recursive, null, 4))

// Appel de la fonction printPath avec l'objet files_recursive, un niveau de récursion de 0 et un parent vide
//printPath(files_recursive, 0, '-')
