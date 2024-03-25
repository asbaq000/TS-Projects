// Question 37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Answer

function make_shirt(size: string = "Large", message: string = "Got Your Back") {
  console.log(
    "The shirt size is " +
      size +
      " and the message printed on it is: " +
      message
  );
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Go For It");
