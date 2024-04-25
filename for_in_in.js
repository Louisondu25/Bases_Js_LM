const { default: test } = require("node:test")
const { text } = require("stream/consumers")

obj = {
  firstname: "Louison",
  lastname: "Menkour",
  yearBorn: 1999,
},
{
  firstname: "jeremy",
  lastname: "mangetmort",
  yearBorn: 1979,
}

for (var i=0; i < obj.length; i++) {
    var keys = object.keys(obj [i])
    console.log("")
    for (var j=0; j <keys.length; j++) {
        console.log(keys[j],":",obj[i][keys[j]])
    }
}
console.log("")

for (var i = 0; i < obj.length; i++) {
  var keys = object.keys(obj[i]);
  var Text = ""
  for (var j = 0; j < keys.length; j++) {
    text += `${keys[j]} : ${obj[i] [keys[j]]}`
    if (j + 1!= keys.length)
        text +=" / "
  }
}
console.log(text)