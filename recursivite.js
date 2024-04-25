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

function affichagefamille(tab, indent, origin){
    let tabulation = ""


    for(y=0;y < indent; y++){   //tant que inferieur a indent
    tabulation += " "           // ajout d'espace dans tabulation.
    }
    for(let i=0; i< tab.length; i++) {  //tant que i Inferieur a tab
        console.log(`${tabulation} nom: ${tab[i].lastName} / prenom:${tab[i].firstName} / origin: ${origin}`)   // affichage console de tabulation,du nom a la positioni et de l'origine
        if (tab [i].children && tab[i].children.length > 0) {  //si dans tab  a la position i il y a  le parametre enfant et presence d'enfant
            affichagefamille(tab[i].children, indent + 1, origin + `${tab[i].firstName} ${tab[i].lastName} - `)         //appelle de la fonction affichage famille en donnant tableau enfant + augmentation indent + nom et prenom du parent

        }

    }
}
