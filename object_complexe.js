var my_obect = {                                // Nom du produit
    firstname: "jean",                          //infos du produit
    lastname: "Dupont",                         // infos du produit    
    Option: {                                   // un produit dans le nom du produit    
        name: "option 1",                       //infos du 2eme produit
        testing: true                           // infos du 2eme produit.
    }
}

console.log(my_obect.Option.name)               // on peut imbriquer my object dans d'autre objets " my object" dans options qui est imbriquer dans name


 var my_tree = {
    firstname: "jean",
    lastname: "dupont",
    datestart: 1918,
    dateEnd: 1943,
    children: {
        firstname: "jean jr",
        lastname: "dupont",
        datestart: 1930,
        dateEnd: 1973,

    }

    
 }

 console.log(my_tree.children[0])

my_tree.children.push = ({
    firstname: "jean jr",
    lastname: "dupont",
    datestart: 1939,
    dateEnd: 1993,

})
console.log(my_tree.children.push)

 my_tree.children = []
