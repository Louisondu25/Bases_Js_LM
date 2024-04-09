let produit = {             //commande let +nom du produit
    nom: "seche cheveux",   //nom du produit
    prix: 35,               // prix
    stock: 28,
    nb_vendus: 9,
}

console.log(produit)
produit.gain = produit.prix*produit.nb_vendus
console.log(produit)


produit.valeur_stock = produit.prix*produit.stock
console.log("produit:",produit.nom,"/Gain:", produit.prix, "/valeur_stock:", produit.stock)

