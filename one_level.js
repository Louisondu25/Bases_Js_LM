var peoples = [
  {
    _id: 1001,
    username: "jeandupont",
    firstName: "Jean",
    lastName: "Dupont",
  },
  {
    _id: 1002,
    username: "louisbrocante",
    firstName: "Louis",
    lastName: "Brocante",
    parent: 1001,
  },
  {
    _id: 1003,
    username: "julienrouget",
    firstName: "Julien",
    lastName: "Rouget",
    parent: 1002,
  },
];

var people_transformer = [
  {
    _id: 1003,
    username: "julienrouget",
    firstName: "Julien",
    lastName: "Rouget",
    parent: {
      _id: 1002,
      username: "louisbrocante",
      firstName: "Louis",
      lastName: "Brocante",
      parent: {
        _id: 1001,
        username: "jeandupont",
        firstName: "Jean",
        lastName: "Dupont",
      },
    },
  },
];

// function transformPeople(peoples, parentId = null) {
//   return peoples
//     .filter((person) => person.parent === parentId)
//     .map((person) => {
//       const transformedChildren = transformPeople(peoples, person._id);
//       return {
//         ...person,
//         parent: transformedChildren.length > 0 ? transformedChildren[0] : null,
//         children: transformedChildren.slice(1),
//       };
//     });
// }

// function transformPeople(peoples, parentId = null) {
//   return peoples
//     .filter((person) => person.parent === parentId)
//     .map((person) => {
//       const transformedChildren = transformPeople(peoples, person._id);
//       return {
//         ...person,
//         parent: transformedChildren.length > 0 ? transformedChildren[0] : null,
//         children: transformedChildren.slice(1),
//       };
//     });
// }
// const people_transformertest = transformPeople(peoples);
// console.log(people_transformer);