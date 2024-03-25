// Question 16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// Answer

let guests2: string[] = ["Ali Raza", "Hadi Mirza", "Rao Shehroze"];

for (let guest of guests2) {
  console.log("Dear " + guest + ", you are invited to dinner.");
}

console.log(
  "\nWe have found a bigger dinner table, so now more space is available.\n"
);

guests2.unshift("Daniyal Tallat");
guests2.splice(2, 0, "Rao Salman");
guests2.push("Hassan Shah");

for (let guest of guests2) {
  console.log("Dear " + guest + ", you are invited to dinner.");
}
