// Question 42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Answer

function show_magicians1(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}

let magicianNames1: string[] = [
  "Hadi Mirza",
  "Ali raza",
  "Daniyal Tallat",
  "Rao Shehroze",
];

make_great(magicianNames1);

show_magicians1(magicianNames1);
