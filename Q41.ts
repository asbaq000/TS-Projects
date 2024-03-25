// Question 41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Answer

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let magicianNames: string[] = [
  "Hadi Mirza",
  "Ali raza",
  "Daniyal Tallat",
  "Rao Shehroze",
];

show_magicians(magicianNames);
