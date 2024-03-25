// Question 32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Answer

let current_users = ["Asbaq", "hadi", "ali", "shehroze", "daniyal"];

let new_users = ["Ahmad", "ASBAQ", "Mehdi", "DANIYAL", "Talha"];

for (let new_user of new_users) {
  let new_user_lower = new_user.toLowerCase();

  if (current_users.some((user) => user.toLowerCase() === new_user_lower)) {
    console.log(
      "Sorry, the username " +
        new_user +
        " is already taken. Please enter a new username."
    );
  } else {
    console.log("Congratulations! The username " + new_user + " is available.");
  }
}
