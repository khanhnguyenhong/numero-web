const arrowDB = [
  {
    name: "123",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "147",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "159",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "258",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "357",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "369",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "456",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "789",
    type: "POSITIVE",
    descriptions: [],
  },
  {
    name: "123",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "147",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "159",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "258",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "357",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "369",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "456",
    type: "NEGATIVE",
    descriptions: [],
  },
  {
    name: "789",
    type: "NEGATIVE",
    descriptions: [],
  },
];

function arrowController() {
  function getArrow(req, res) {
    const { name, type } = req.params;
    res.send(arrowDB.filter((n) => n.name == name && n.type == type)[0]);
  }

  return {
    getArrow
  };
}

module.exports = arrowController;
