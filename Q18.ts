// Question 18 - Seeing the World: Think of at least five places in the world you’d like to visit.

// Answer

let places = ["Nairobi", "Tokyo", "Berlin", "Rio", "Denver"];

console.log("Original order:", places);
console.log("\nAlphabetical order:", places.slice().sort());
console.log("\nOriginal order:", places);
console.log("\nReverse alphabetical order:", places.slice().sort().reverse());
console.log("\nOriginal order:", places);
console.log("\nReversed:", places.slice().reverse());
console.log("\nReversed back to original order:", places);
console.log("\nSorted alphabetically:", places.slice().sort());
console.log(
  "\nSorted in reverse alphabetical order:",
  places.slice().sort().reverse()
);
