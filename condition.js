var age = 20;                                                  // variable de l'age
var authorised =false                                         //variable d'autorisation

console.log(age >=18)                                        // affichage du vrai ou faux
if (age >= 18) {
    console.log("tu est majeur ?")                           //affichage du message suivant "tu est majeur ?"
}
else{
    console.log("tu est mineur!")                           //affichage du message suivant "tu est mineur!"
}
console.log("salut ca va ?")                                // affichage du message suivant "salut ca va ?"

console.log(`Autorisé: ${authorised}`)                      //affichage de l'autorisation


var authorised2 = age >=18 ? true : false                   //  fonction des Condition ternaires
console.log(`Autorisé: ${authorised}`)                      // affichage de l'autorisation des condition ternaires