let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesSum = 0;
let valuesArray = Object.values(ages);
console.log(valuesArray);

valuesArray.forEach(element => agesSum += element);
console.log(agesSum);
