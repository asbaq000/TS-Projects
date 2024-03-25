// Question 34 - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// Answer

const favoritePizzas: string[] = [
  "Chicken Fajita",
  "Cheese Lover",
  "Chicken Supreme",
];

console.log("Printing pizza names:");
for (const pizza of favoritePizzas) {
  console.log(pizza);
}

console.log("\nPrinting sentences about favorite pizzas:");
for (const pizza of favoritePizzas) {
  console.log("I like " + pizza + " pizza.");
}

console.log("\nI really love pizza!");
