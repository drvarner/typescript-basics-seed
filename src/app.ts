const pizza = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.name);

const toppings = ["pepperoni"];

function createOrder(
  pizza: { name: string; price: number; getName: Function },
  toppings: string[]
) {
  return { pizza, toppings };
}

const order = createOrder(pizza, toppings);

console.log(order);
