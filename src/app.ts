const pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"],
};

function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

const { pizzaName } = order(pizza);

console.log(pizzaName);

const toppings = ["pepperoni", "bacon", "chilli"];

const [first, second, third] = toppings;

console.log(second);
