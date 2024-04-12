let personage = {                       //nom du produit
    firstname:"louison",                // 1er prenom du produit
    lastname:"Menkour",                 //Nom de famille du produit
    username:"itsmelol",                //Pseudo du produit
    email: "louisondu25@gmail.com",     // email du produit
}

console.log("personnage",personage)     // affichage du produit



voisin =  personage                     // nouvelle variable
personage.username ="iwantsleepaslutfu"     //commande de la modification du username"itsmelol" en "iwantsleepaslutfu" du nom de produit
console.log("voisin", voisin)               //  addichage de la modification + affichage du produit.


personage = ["firstname","lastname","username","email"]      // variable  du nom du produit + les infos du nom du produit (prenom/nom,pseudo et email).
voisin = personage                                           // 2eme variable = nom du produit.
console.log("personnage",personage,"voisin",voisin)          // affichage des deux variables.