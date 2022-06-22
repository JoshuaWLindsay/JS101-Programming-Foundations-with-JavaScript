let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function minAge(obj) {
  let objValuesArray = Object.values(obj);
  let minValue = objValuesArray[0];
  for (let i = 0; i < objValuesArray.length; i += 1) {
    if (objValuesArray[i] < minValue) {
      minValue = objValuesArray[i];
    }
  }
  return minValue;
}

console.log(minAge(ages));


let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // => 10