type Pizza = {
  name: string;
  toppings: number;
};

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

console.log(serialized);

function getNameFromJSON(obj: string): string {
  return (JSON.parse(obj) as Pizza).name;
}

console.log(getNameFromJSON(serialized));
