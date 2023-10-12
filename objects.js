const fruits = [
  {
    name: "apple",
    colors: ["red", "green"],
    shape: "round",
    bitter: false,
    berry: false,
  },
  {
    name: "Strawberry",
    colors: ["red", "yellow"],
    shape: "teardrop",
    bitter: false,
    berry: true,
  },
  {
    name: "pear",
    colors: ["yellow", "green"],
    shape: "teardrop",
    bitter: false,
    berry: false,
  },
  {
    name: "lime",
    colors: ["green"],
    shape: "elliptic",
    bitter: true,
    berry: false,
  },
  {
    name: "cherry",
    colors: ["red", "yellow", "black"],
    shape: "round",
    bitter: false,
    berry: false,
  },
  {
    name: "lemon",
    colors: ["yellow"],
    shape: "elliptic",
    bitter: true,
    berry: false,
  },
  {
    name: "blueberry",
    colors: ["purple"],
    shape: "round",
    bitter: false,
    berry: true,
  },
];

fruits.forEach((fruit) => {
  console.log(fruit.name);
  fruit.colors.forEach((fruity) => {
    console.log(fruity);
  });
});

const current1 = fruits.filter((fruit) => fruit.colors.includes("red"));
console.log(current1);
