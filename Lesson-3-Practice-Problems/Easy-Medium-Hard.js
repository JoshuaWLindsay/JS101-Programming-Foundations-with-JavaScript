/*

let str1 = "Come over here!"; // true
str1.includes('!');

let str2 = "What's up, Doc?"; // false
str2.includes('!')

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newStr = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(newStr);

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino');
str2.includes('Dino');

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones = flintstones.concat('Dino');
flintstones;

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
flintstones;

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice = advice.slice(0, 39);

let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replaceAll('important', 'urgent');
newAdvice;

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice();
reversedNumbers.reverse();

let numbers = [1, 2, 3, 4, 5];
let sortedNumbers = numbers.slice();
sortedNumbers.sort((num1, num2) => num2 - num1)

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
numbers.includes(number1);
let number2 = 95; // true
numbers.includes(number2);

let famousWords = "seven years ago...";
famousWords = "Four score and " + famousWords;
console.log(famousWords);

let famousWords = "seven years ago...";
let prefix = "Four score and ";
famousWords = prefix.concat(famousWords);
console.log(famousWords);

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
let newFlintstones = [];
newFlintstones.concat(flintstones[0], flintstones[1], flintstones[2][0], flintstones[2][1], flintstones[3][0], flintstones[3][1]);

// (6) ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones).flat().slice(4, 6);

let numbers = [1, 2, 3, 4]; 
Array.isArray(numbers); // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
Array.isArray(table); // false

let title = "Flintstone Family Members";
let pad = Math.floor((40 - title.length) / 2);
title.padStart(pad + title.length);

let regex = /t/g;
let statement1 = "The Flintstones Rock!";
statement1.match(regex).length // 2;
let statement2 = "Easy come, easy go.";
statement2.match(regex).length // null;

let numbers = [1, 2, 3, 4];
numbers.slice(numbers.length);

let numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}

let numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);

function isColorValid(color) {
  return color === "blue" || color === "green"
  }

isColorValid('blue');

*/
// Medium 1

//Question 1
let flinstones = 'The Flintstones Rock!';
let spaces = '';
for (let i = 0; i < 10; i += 1) {
  console.log(spaces + flinstones);
  spaces += ' ';
}

//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";

function caseChange(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i].toUpperCase()) {
      newString += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

caseChange(munstersDescription);

//question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(divisor);
  }
  divisor -= 1;
}
  return factors.reverse();
}
console.log(factors (10));

//Hard

//question 4

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('1.2.3.4'));