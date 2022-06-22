/*
INPUT: array
OUTPUT: Object with Elements as Keys and Indices as Values
*/

function arrayToObj(array) {
  let obj = {};
  array.forEach((name, index) => {
    obj[name] = index;
  })
  return obj;
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
console.log(flintstones);
console.log(arrayToObj(flintstones));