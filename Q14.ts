// Question 14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Answer

let guests: string[] = ["Ali Raza", "Hadi Mirza", "Rao Shehroze"];
for (let guest of guests) {
  console.log("Dear " + guest + ", you are invited to dinner.");
}
