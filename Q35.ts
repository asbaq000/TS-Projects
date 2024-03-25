// Question 35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Answer

const animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Printing animal names:");
for (const animal of animals) {
  console.log(animal);
}

console.log("\nPrinting statements about animals:");
for (const animal of animals) {
  switch (animal) {
    case "Dog":
      console.log("A " + animal + " can be a great pet");
      break;
    case "Cat":
      console.log("A " + animal + " is so cute");
      break;
    case "Rabbit":
      console.log("A " + animal + " is cute and playful");
      break;
    default:
      console.log("Not sure about this animal");
  }
}

console.log("\nAny of these animals would make a great pet!");
