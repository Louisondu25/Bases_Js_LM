obj = {
    "firstname": "Louison",
    "lastname" : "Menkour",
    "yearBorn": 1999
}
function getPropretyObject(object) {
    var objectkey =Object.keys(object)
    return objectkey.join(`, `)
}
function printProperty(keys){
    console.log("propriété sont :", keys)
}
var key = getPropretyObject(obj)
printProperty(key)
obj.age = 2024 - obj.yearBorn
obj.job = "Dev"

printProperty(getPropretyObject(obj))

var keys_existant = object.keys(obj)
for (let i=0; i < keys_existant.length; i++){
    console.log("Proprieté:",keys_existant[i],"/Valeur:", obj[keys_existant[i]])
}