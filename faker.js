const { faker} = require(`@faker-js/faker/locale/fr`);



var peoples = [{
    firstName: "jean",
    lastNames: "Luc"
},
]



for(var i=0; i < 25; i++){
      var firstName = faker.person.firstName
      var lastNames = faker.person.lastNames
    peoples.push({
        firstName,
        lastNames,
        email: faker.internet.email({firstName,lastNames})
    })
}
console.log(peoples)


