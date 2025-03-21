const pizza: { name: string; price: number; getName(): string } = {
  name: 'Pepperoni',
  price: 20,
  getName() {
    return pizza.name;
  },
};

console.log(pizza.getName());
