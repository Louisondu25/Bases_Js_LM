let produit = {             //commande let +nom du produit
    nom: "seche cheveux",   //nom du produit
    prix: 35,               // prix
    stock: 28,              // stockage
    nb_vendus: 9,           //nb vendus
}

// Affiche le produit
console.log(produit);

// Calcule le gain en fonction du prix et du nombre de ventes
produit.gain = produit.prix * produit.nb_vendus;

// Affiche à nouveau le produit avec le gain calculé
console.log(produit);

// Calcule la valeur du stock en fonction du prix et de la quantité en stock
produit.valeur_stock = produit.prix * produit.stock;

// Affiche le nom du produit, le gain, le prix et la valeur du stock
console.log("produit :", produit.nom, " / Gain :", produit.prix, " / valeur_stock :", produit.stock);

produit.cost = 15                                                                                               //nombre du cout
produit.total_cost = produit.cost * (produit.nb_vendus + produit.stock)                           //calcul du cout total= cout * (nb vendus +stock) 
console.log("somme des achats des produits :", produit.total_cost)  //affichage des sommes de produit


let benefice_par_produit = produit.prix - produit.cost              //benefice= prix -cout
console.log( "Benefice par produit : ", benefice_par_produit)       //affichage du benefice par produit
let pourcentage_benefice = 100*(benefice_par_produit/produit.prix)  //pourcentage benef =100*(benefice du prodruit/prix)
console.log("pourcentage Benefice par produit", pourcentage_benefice, "% ~", Math.round(pourcentage_benefice) + "%")    //affichage du pourcentage du benefice par produit

