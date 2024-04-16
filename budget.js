var data = [                                                        // variable du produit
    {                                                               // informations
        type: "santé",
        description:["rdv chez le medecin"],
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
 var wallet = {
    depense: []
 }
var max =1713251378
var min =713251378

for (var i=0; i < 1000; i++){
    var object_type = data[Math.round(Math.random() *((data.length - 1) - 0)+0)]
    var object_description = object_type.description[Math.round(Math.random() *object_type.description.length - 1)-0]

    wallet.depense.push({
        date: Math.round(Math.random() *(max - min) + min),
        type: object_type.type,
        price: Math.round(Math.random() * (object_type.price_max -object_type.price_min) + object_type.price_min),
        description: object_description
    })
}

 console.log(wallet.depense)

 console.log("Taille tableau",wallet.depense.length)