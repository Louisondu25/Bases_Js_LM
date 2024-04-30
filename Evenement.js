const { reject, values } = require("lodash");

console.log("Bienvenue");
var calcul = (12 / 2) * 4;

console.log(calcul);
setTimeout(function () {
  try {
    calcul = 4;
    console.log(calcul);
    dispatchEvent;
  } catch (err) {
    console.log(err.name);
  } finally {
    console.log("FIN");
  }
}, 1000);

function waiting(time) {
  return new Promise((resolve, reject) => {
    if (time > 100) {
      setTimeout(() => {
        console.log("ok");
        resolve({ success: true });
      }, time);
    } else {
      reject(new Error({ success: false }));
    }
  });
}

waiting(101)
  .then((value) => {
    console.log("promise réussie: ", value);
  })
  .catch((err) => {
    console.log("promise échouée:", err.message);
  });