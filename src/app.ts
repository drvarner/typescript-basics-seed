const pizzaCost: number = 10;
const pizzaToppings: number = 5;

function calculatePrice(cost: number, toppings: number): number {
  return cost + toppings * 1.5;
}

console.log(`Pizza costs: $${calculatePrice(pizzaCost, pizzaToppings)}`);
