var personage = [                                   //  Nom du produit
    {                                               //l'objets est une accolade{} (accolade = objets)   
       firstname: "louison",                        //infos du nom du produit
        lastname: "Menkour",
        age: 24,
        datestart: 1999,
        lieudenaissance: "Montbeliard",
    },
    {                                                // 2eme objet avec l'accolade{} (accolade = objets)
        firstname: "jean jr",                       // 2nd infos du 2eme produit
        lastname: "dupont",                         
        age: 28,
        datestart: 1996,
        lieudenaissance: "Montpelier"
    } 
]
//console.log(personage)                              // affichage des deux objets

//personage.pop ()                                    // fonction pour supprimer le dernier objets
//console.log(personage)                              // affichage de la suppression du dernier objets 

for (var i =0; i < 100; i++) {
    personage.push(
        {
            firstname: "Louis" + i,                           // infos de l'objet
            lastname: "labrocante" + i,
            age: 33 + i,
            datestart: 1988,
            lieudenaissance: "atlanta"
        }  
    )
}


personage.push({                                    //fonction pour ajouter  un objets
    firstname: "kobe jr",                           // infos de l'objet
    lastname: "bryan",
    age: 36,
    datestart: 1988,
    lieudenaissance: "atlanta" 
})
//console.log(personage)                              // affichage de l'objet ajouter
                                                    // a savoir Tableau = [] et que le produit ou objet = {}.



for (var i = 0; i < personage.length; i++) {                                        //fonction de la variable recherchant le nombre de 100 personne dans le tableau.
    if(personage[i].firstname === "Louis55") {                                     // fonction "if" avec [i]. une infos du produit(:)===(pour etre precis) Louis 55.
        console.log("firstname:", personage[i].firstname)                          // affichage des objets
        console.log("Lastname:", personage[i].lastname)                           // affichage des objets
        console.log("age:", personage[i].age)                                     // affichage des objets
        console.log("datestart:", personage[i].datestart)                          // affichage des objets
        console.log("lieu de naissance:", personage[i].lieudenaissance, "\n")      // affichage des objets
        console.log(`il est a la ${i} position dans le tableau\n`)
    }
}



var tableau_des_cinquantenaire = []                                                                             //fonction de la variable
for (var i=0; i < personage.length; i++)                                                                        // fonction "for" avec () variable "i=0;"; i > nom du tableau du produit(longueur du tableau; i++)
if(personage[i].age > 50)                                                                                       // fonction "if" avec [i]. une infos du produit(age) >(superieur age) 50.
tableau_des_cinquantenaire.push({...personage[i]})                                                              //Ajouter un tableau nommer (tableau_des_ cinquentenaire).push ({nom de l'ancien tableau "personnage"+ [i]})
console.log(`il y a ${tableau_des_cinquantenaire.length} qui ont plus de 50ans dans le tableau\n`)

var object_personnage = {}                                                       //Fonction de la variable
for (var i=0; i < personage.length; i++) {                                       // fonction "For" (variable i=0; i < nom du tableau.length; i++) (Length= longueur du tableau).
    object_personnage[personage[i].firstname] = personage[i]                     // nom de la variable "object_personnage"[nom du tableau"personnage"[i]].l'infos du produit] = tableau "personnage"[i]
}
console.log(object_personnage["Louis55"])                                        // affichage  de "l'objet_personnage" [objet qu'on veut rechercher"Louis55"].

