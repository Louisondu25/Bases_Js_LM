const prompt = require("prompt");

//
// Démarre l'invite 
//
prompt.start();

//
// Récupère deux propriétés de l'utilisateur : nom d'utilisateur et email 
//
prompt.get(["username", "email"], function (err, result) {
  //
  // Enregistre les résultats.
  //
  console.log("Command-line input received:");
  console.log("  username: " + result.username);
  console.log("  email: " + result.email);
});

console.log("Bienvenue")