/*
INPUT: Object with key-value pairs
Do I need to convert Object to Array? Going to try this way...
How can I check values for 'Fruit'?
OUTPUT: Object with key-value pairs where value is 'Fruit'

*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let copyObj = Object.entries(obj);
  let newArray = [];
  for (let element = 0; element < copyObj.length; element += 1) {
    if (copyObj[element][1] === 'Fruit') {
      newArray.push(copyObj[element]);
    }
  }
  let newObj = Object.fromEntries(newArray);
  console.log(newObj);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);