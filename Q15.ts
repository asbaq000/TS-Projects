// Question 15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Answer

let guests1: string[] = ["Ali Raza", "Hadi Mirza", "Rao Shehroze"];
for (let guest of guests1) {
  console.log("Dear " + guest + ", you are invited to dinner.");
}

console.log(
  "\n" +
    guests1[0] +
    " will not be able to join us in dinner so replacing him with Daniyal.\n"
);

guests1[0] = "Daniyal Tallat";

for (let guest of guests1) {
  console.log("Dear " + guest + ", you are invited to dinner.");
}
