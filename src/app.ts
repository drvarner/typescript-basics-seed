interface Pizza {
  name: string;
  sizes: string[];
}

interface Pizzas {
  data: Pizza[];
}

let pizzas: Pizzas;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
  };
}

pizzas = {
  data: [createPizza('Pepperoni', ['small', 'medium'])],
};

console.log(pizzas.data);
