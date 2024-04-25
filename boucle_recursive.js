var table =[1,2,3,4,5]

function recursiveLoop(tab, index){
    console.log(tab[index], ": index =", index)
    if (index < tab.length -1)
    recursiveLoop(tab, index + 1)
else
console.log("fin du tableau")
}
recursiveLoop(table, 0)


//  for (var i=0; i <table.length; i++){
//     console.log(table [i])
// }

function recursiveLoopSub(tab ) {
for (var i=0; i <tab.length; i++) {
    console.log(tab[i].name)
    if(tab [i].subProject && tab [i].subProject.length > 0)
    recursiveLoopSub(tab[i].subProject)
}
}

var projet = [
  {
    name: "projet 1",
    subProject: [
      {
        name: "subProjet 1",
        subProject: [{ name: "SubProjectdesubProject1" }],
      },
    ],
  },
  { name: "Projet 2", subProjet: [] },
];

recursiveLoopSub(projet)
