// Déclaration de variables simples
// ---------------------------------

// Déclare et initialise une variable simple1 avec la valeur 12
let variablesimple1 = 12;

// Déclare et initialise une variable simple2 avec la valeur de simple1
let variablesimple2 = variablesimple1;

// Modifie la valeur de simple1 en 35
variablesimple1 = 35;

// Affiche les valeurs de simple1 et simple2 dans la console
console.log("variablesimple1", variablesimple1);
console.log("variablesimple2", variablesimple2);

// Déclaration de variables complexes
// ----------------------------------

// Déclare et initialise une variable complexe1 avec un tableau de chaînes de caractères
let variablecomplexe1 = ["informatiques", "sport", "television"];

// Déclare et initialise une variable complexe2 avec la valeur de complexe1
let variablecomplexe2 = variablecomplexe1;

// Déclare et initialise une variable complexe3 avec les mêmes valeurs que complexe1 en utilisant le spread operator
let variablecomplexe3 = [...variablecomplexe1];

// Ajoute la chaîne "course" au tableau de complexe2
variablecomplexe2.push("course");

// Affiche les valeurs de complexe1, complexe2 et complexe3 dans la console
console.log("variablecomplexe1", variablecomplexe1);
console.log("variablecomplexe2", variablecomplexe2);
console.log("variablecomplexe3", variablecomplexe3);
