var people = [{           // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [{
        firstName: "Jean",
        lastName: "Bernier",
        children: [{
            firstName: "Junior",
            lastName: "Bernier",
            children: [{
                firstName: "Jordan",
                lastName: "Bernier"
            },
            {
                firstName: "Luc",
                lastName: "Bernier"
            }]
        }]
    },
    {
        firstName: "Sacha",
        lastName: "Bernier",
    },
    {
        firstName: "Laurent",
        lastName: "Bernier",
    },
    {
        firstName: "Raphael",
        lastName: "Bernier",
    }]
},
{
    firstName: "Jean",
    lastName: "Luc",
    children: [{
        firstName: "Richard",
        lastName: "Luc",
        children: [{
            firstName: "Roméo",
            lastName: "Luc"
        }]
    }]
}]





function recursiveLoopSub(tab ) {
for (var i=0; i <tab.length; i++) {
    console.log(tab[i].firstName, tab[i].lastName);
    if(tab [i].children && tab [i].children.length > 0)
    recursiveLoopSub(tab[i].children)
}
}



recursiveLoopSub(people)

function affichagefamille(tab, indent, origin){         // ajouter  la fonction "affichagefamille"
    let tabulation = ""                                 // ouverture de la variable tabulation.


    for(y=0;y < indent; y++){   //tant que inferieur a indent
    tabulation += " "           // ajout d'espace dans tabulation.
    }
    for(let i=0; i< tab.length; i++) {
      //si i est  Inferieur a  la taille du tableau
      console.log(
        `${tabulation} nom: ${tab[i].lastName} / prenom:${tab[i].firstName} / origin: ${origin}`
      ); // affichage  de la variable tabulation(donc l'espace), avec la position i du nom de famille dans le tableau /la position i du prenom dans le tableau et de l'origine.
      if (tab[i].children && tab[i].children.length > 0) {
        //si dans tableau enfant a la position i il y a  le parametre enfant et presence d'enfant
        affichagefamille(
          tab[i].children,
          indent + 1,
          origin + `${tab[i].firstName} ${tab[i].lastName} - `
        ); //si le i élément du tableau tab a des enfants et si ces enfants ont une longueur supérieure à 0.
      }
    }
}
