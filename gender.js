const { faker } = require("@faker-js/faker/locale/fr");

var peoples = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 25; i++) {
  var firstName = faker.person.firstName();
  var lastName = faker.person.lastName();
  var age = getRandomNumber(18, 65);
  if (age > 45) {
    var gender = faker.person.gender() === "male" ? "male" : "female";

    peoples.push({
      firstName,
      lastName,
      gender,
      age,
    });
  }
}

console.log("People over 45:");
peoples
  .filter((person) => person.age > 45)
  .forEach((person) => {
    console.log(
      `${person.firstName} ${person.lastName} is ${person.age} years old and is ${person.gender}.`
    );
  });