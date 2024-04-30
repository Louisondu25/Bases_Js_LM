const { reject } = require("lodash");
const prompt = require("prompt");

var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
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
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

function displayFamilyTree(people, level = 0) {
    for (const person of people) {
      let names = "";
      for (let i = 0; i < level; i++) {
        names += "  ";
      }
      names += `${person.firstName} ${person.lastName}\n`;
      console.log(names);
  
      if (person.children && person.children.length > 0) {
        displayFamilyTree(person.children, level + 1);
      }
    }
  } 
  var findpeopleLoop = function (firstName, lastName, tab, path) {
    for (var i = 0; i < tab.length; i++) {
      var element = tab[i];
      if (element.firstName == firstName && element.lastName == lastName) {
        return {
          ...element,
          parent: path + element.firstName + " " + element.lastName,
        };
      }
      if (element.children) {
        var value = findpeopleLoop(
          firstName,
          lastName,
          element.children,
          path + element.firstName + " " + element.lastName + "/"
        );
        if (value) return value;
      }
    }
    return null;
  };
  

  var findPeople = function (firstName, lastName, people, path = "") {
    return new Promise((resolve, reject) => {
      var result = findpeopleLoop(firstName, lastName, people, path);
      if (result) {
        resolve(result);
      } else {
        reject("Not found");
      }
    });
  };
  
  prompt.start();

  prompt.get(["firstName", "lastName"], function (err, result) {
    findPeople(result.firstName, result.lastName, people)
      .then((value) => {
        console.log(
          "Personne trouvée:",
          value.firstName,
          value.lastName,
          "/Parent:",
          value.parent
        );
      })
      .catch((err) => {
        console.log("Aucune personne trouvée:", err);
      });
  });