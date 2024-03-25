// Question 45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Answer

type CarInfo = {
  manufacturer: string;
  modelName: string;
  extras: { [key: string]: any };
};

function storeCarInfo(
  manufacturer: string,
  modelName: string,
  ...extras: { [key: string]: any }[]
): CarInfo {
  const carInfo: CarInfo = {
    manufacturer,
    modelName,
    extras: {},
  };

  extras.forEach((extra) => {
    const key = Object.keys(extra)[0];
    carInfo.extras[key] = extra[key];
  });

  return carInfo;
}

const car = storeCarInfo("Toyota", "Camry", {
  color: "Red",
  features: ["Navigation", "Sunroof"],
});

console.log(car);
