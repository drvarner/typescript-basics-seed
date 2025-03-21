let selectedTopping: string = 'pepperoni';

// Implicit void return type
function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);
