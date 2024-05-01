// Déclaration d'un objet "data" avec trois tableaux vides pour stocker les données de musique, vidéo et podcast
var data = {
  music: [],
  video: [],
  podcast: [],
};

// Définition des valeurs maximale et minimale pour la propriété "time" des objets musique
var max = 54596;
var min = -1450;

// Boucle pour créer 500 objets musique aléatoires
for (var i = 0; i < 500; i++) {
  // Définition de la langue de l'objet musique (FR ou EN)
  var language = i % 2 === 0 ? "FR" : "EN";

  // Génération de chaînes de caractères aléatoires pour les propriétés "titre", "artiste" et "album"
  var chaineAleatoire = String(Math.random().toString(36)).substr(
    2,
    Math.floor(Math.random() * 6) + 2
  );
  var chaineAleatoire2 = String(Math.random().toString(36)).substr(
    2,
    Math.floor(Math.random() * 6) + 2
  );
  var chaineAleatoire3 = String(Math.random().toString(36)).substr(
    2,
    Math.floor(Math.random() * 6) + 2
  );

  // Ajout d'un nouvel objet musique à la propriété "music" de l'objet "data"
  data.music.push({
    titre: chaineAleatoire + i,
    artiste: chaineAleatoire2 + i,
    studio: "Studio" + i,
    language: language,
    time: Math.round(Math.random() * (max - min) + min),
    dateRelease: "1970" + i,
    album: chaineAleatoire3 + i,
  });
}

// Boucle pour afficher les détails de chaque objet musique dans la console
for (var i = 0; i < data.music.length; i++) {
  console.log(
    `Titre : ${data.music[i].titre}, Artiste : ${data.music[i].artiste}, Studio : ${data.music[i].studio}, Langue : ${data.music[i].language}, Durée : ${data.music[i].time}, Date de sortie : ${data.music[i].dateRelease}, Album : ${data.music[i].album}`
  );
}
