const { faker } = require(`@faker-js/faker/locale/fr`);

var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

var schema = {
  properties: {
    nb_element: {
      description: "combien d'element a crée ?",
      type: "number",
    },
    type: {
      description: "doit -on generer des hommes",
      type: "boolean",
    },
  },
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: name, password
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log(["nb_element"]);
  console.log(["type"]);
  var peoples = [];

  for (var i = 0; i < 25; i++) {
    var type = "female";
    if (result[type]) type = "male";
    var firstName = faker.person.firstName(type);
    var lastNames = faker.person.lastName(type);
    peoples.push({
      firstName,
      lastNames,
      email: faker.internet.email({ firstName, lastNames }),
    });
  }
  console.log(peoples);
});
