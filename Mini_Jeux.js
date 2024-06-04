async function main() {
  // Génération d'un nombre aléatoire entre 1 et 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  // Fonction pour afficher un message avec une couleur
  function displayMessage(message, color) {
    console.log(`\x1b[3${color}m${message}\x1b[0m`);
  }

  // Fonction pour demander un nombre à l'utilisateur
  async function askNumber() {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      readline.question("Entrez votre nombre : ", (number) => {
        readline.close();
        resolve(number);
      });
    });
  }

  // Boucle de jeu
  let guess;
  let trials = 0; // Ajout du compteur d'essais
  while (true) {
    guess = parseInt(await askNumber());
    trials++; // Incrémentation du compteur d'essais

    if (guess < secretNumber) {
      displayMessage(`Trop petit! (Essai ${trials})`, 6);
    } else if (guess > secretNumber) {
      displayMessage(`Trop grand! (Essai ${trials})`, 5);
    } else {
      displayMessage(`Bravo, vous avez gagné en ${trials} essai(s) !`, 2);
      break;
    }
  }
}

main();