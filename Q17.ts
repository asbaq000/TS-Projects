// Question 17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Answer

let guests3 = [
  "Ali Raza",
  "Hadi Mirza",
  "Rao Shehroze",
  "Daniyal Tallat",
  "Rao Salman",
];

console.log("Sorry, we can only invite two guests.");

while (guests3.length > 2) {
  let removedGuest = guests3.pop();
  console.log("Sorry " + removedGuest + ", we can't invite you to dinner.");
}

console.log("\n");

for (let guest of guests3) {
  console.log("Dear " + guest + ", you are still invited to dinner.");
}

guests3 = [];
console.log("\nEmpty list:", guests3);
