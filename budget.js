var data = [                                                        // variable du produit
    {                                                               // informations des objets
        type: "santé",
        description:["rdv chez le medecin"],                        //description a un tableau[rdv chez le medecin]
        price_min: 1000,                                            
        price_max: 300,
    },
    {
        type: "Loisir",
        description:["Cinema"],
        price_min: 1000,
        price_max: 300,
    }
]
 var wallet = {                                                          // variable  de wallet
    depense: []                                                          // infos de la variable
 }
var max =1713251378                                                      // variable maximum
var min =713251378                                                       // variable minimum

for (var i=0; i < 1000; i++){                                            // commande de la boucle
    var object_type = data[Math.round(Math.random() *((data.length - 1) - 0)+0)]                                          //variable de object_type est egale a  data(produit) + fonction de l'arrondissement du chiffre generer.
    var object_description = object_type.description[Math.round(Math.random() *object_type.description.length - 1)-0]    //variable de object_type est egale a  data(produit) + fonction de l'arrondissement du chiffre generer.

    wallet.depense.push({                                                                                              // ajouts des informations du produit et des infos des produit.
        date: Math.round(Math.random() *(max - min) + min),                                                           // date : formule pour generer aleatoirement des dates. 
        type: object_type.type,                                                                                      // type : nom de la variable obect_type .le type. 
        price: Math.round(Math.random() * (object_type.price_max -object_type.price_min) + object_type.price_min),  // prix : formule pour generer aleatoirement des prix.
        description: object_description                                                                            //description : nom de la variable object_description.
    })
}

 console.log(wallet.depense)                                                                        //affichage de la variable wallet. depense

 console.log("Taille tableau",wallet.depense.length)                                                // affichage de la taille du tableau