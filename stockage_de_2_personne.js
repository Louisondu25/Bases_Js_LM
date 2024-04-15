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

for (var i =0; i < 10; i++) {
    personage.push(
        {
            firstname: "kobe jr" + i,                           // infos de l'objet
            lastname: "bryan" + i,
            age: 36 + i,
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



for (var i = 0; i < personage.length; i++) {                              // Fonction qui permet de rechercher dans tous le tableau.
console.log("firstname",personage[i].firstname)                          // affichage du 1er objets
console.log("Lastname",personage[i].lastname)                           // affichage du 1er objets
console.log("age",personage[i].age)                                     // affichage du 1er objets
console.log("datestart",personage[i].datestart)                          // affichage du 1er objets
console.log("lieu de naissance",personage[i].lieudenaissance,"\n")      // affichage du 1er objets
console.log(`il est a la ${i} position dans le tableau,"\n"`)
}
