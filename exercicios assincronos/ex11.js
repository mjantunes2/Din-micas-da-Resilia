//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

let data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },

  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

let filteredData = data
  .filter((obj) => {
    if (obj.type === "dog") {
      return obj.name;
    }
  })
  .map((obj) => obj.age)
  .reduce((cont, actu) => cont + actu);

console.log(data, filteredData);
