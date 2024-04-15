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
console.log(personage)                              // affichage des deux objets

personage.pop ()                                    // fonction pour supprimer le dernier objets
console.log(personage)                              // affichage de la suppression du dernier objets 

personage.push({                                    //fonction pour ajouter  un objets
    firstname: "kobe jr",                           // infos de l'objet
    lastname: "bryan",
    age: 36,
    datestart: 1988,
    lieudenaissance: "atlanta" 
})
console.log(personage)                              // affichage de l'objet ajouter
                                                    // a savoir Tableau = [] et que le produit ou objet = {}.

var personne = [                                    // nom du produit
    {
        firstname: "elise",                         // infos du 1er objets
        lastname: "dubois",
        age: 32,
        datestart: 1992,
        lieudenaissance: "Lyon"
    },
    {
        firstname: "Maxime",                        // infos du 2eme objets
        lastname: "Moreau",
        age: 28,
        datestart: 1995,
        lieudenaissance: "Montreal"   
    }
]
console.log("firstname",personne[0].firstname)                          // affichage du 1er objets
console.log("firstname",personne[0].lastname)                           // affichage du 1er objets
console.log("firstname",personne[0].age)                                // affichage du 1er objets
console.log("firstname",personne[0].datestart)                          // affichage du 1er objets
console.log("firstname",personne[0].lieudenaissance,"\n")               // affichage du 1er objets

console.log("firstname",personne[1].firstname)                          // affichage du 2eme objets
console.log("firstname",personne[1].lastname)                           // affichage du 2eme objets
console.log("firstname",personne[1].age)                                // affichage du 2eme objets
console.log("firstname",personne[1].datestart)                          // affichage du 2eme objets
console.log("firstname",personne[1].lieudenaissance,"\n")               // affichage du 2eme objets

console.log(`il y a ${personne.length} personne dansle tableau`)        // affichage des deux objets,(altgr + touche è = ``) pour ecrire un texte + la commande s{} pout mettre le produit. length.
