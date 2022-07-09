const readline = require('readline-sync');

function prompt(string) {
  console.log(`=> ${string}`);
}

// function isOdd(num) {
//   return (Math.abs(num) % 2 === 1);
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// function oddNum(beg, end) {
//   for (let i = beg; i <= end; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

// oddNum(1, 99);

// function evenNum(beg, end) {
//   for (let i = beg; i <= end; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// evenNum(1, 99);

// function roomArea() {
//   prompt(`Would you like to enter your measurements in feet or meters?`);
//   let feetOrMeters = readline.question().toLowerCase();

//   if (feetOrMeters[0] === 'f') {
//     prompt(`What is the length of your room in feet?`);
//     let length = readline.question();
    
//     prompt(`What is the width of your room in feet?`);
//     let width = readline.question();
  
//     let areaFeet = (length * width).toFixed(2);
//     const METERS_IN_FEET = 10.7639;
//     let areaMeters = (areaFeet / METERS_IN_FEET).toFixed(2); 
  
//     prompt(`The area of your room is ${areaFeet} square feet (${areaMeters} square meters)`);
  
//   } else if (feetOrMeters[0] === 'm') {
//     prompt(`What is the length of your room in meters?`);
//     let length = readline.question();
    
//     prompt(`What is the width of your room in meters?`);
//     let width = readline.question();

//     let areaMeters = (length * width).toFixed(2);
//     const METERS_IN_FEET = 10.7639;
//     let areaFeet = (areaMeters * METERS_IN_FEET).toFixed(2); 

//     prompt(`The area of your room is ${areaMeters} square meters (${areaFeet} square feet)`);
//   }
// }

// roomArea();

// function tipCalc() {
//   prompt(`What is the bill amount?`);
//   let billAmount = Number.parseFloat(readline.question());

//   prompt(`What is the tip percentage?`);
//   let tipPerc = Number.parseFloat(readline.question());

//   let tip = billAmount * (tipPerc / 100);

//   let total = billAmount + tip;

//   prompt(`The tip is $${tip.toFixed(2)}`);
//   prompt(`The total is $${total.toFixed(2)}`);
// }

// tipCalc();

// function sumOrProduct() {
//   prompt(`Please enter an integer greater than 0:`);
//   let integer = parseFloat(readline.question());

//   prompt(`Enter 's' to compute the sum, or 'p' to compute the product.`);
//   let operation = readline.question();

//   while (operation !== 's' || operation !== 'p') {
//     if (operation === 's') {
//       let sum = 0;
//       for (let i = 1; i <= integer; i++) {
//         sum += i;
//       }
//       prompt(`The sum of integers between 1 and ${integer} is ${sum}.`);
//       break;
//     } else if (operation === 'p') {
//       let product = 1;
//       for (let i = 1; i <= integer; i++) {
//         product *= i;
//       }
//       prompt(`The product of integers between 1 and ${integer} is ${product}.`);
//       break;
//     } else {
//       prompt(`Oops. Unknown operation.`);
//       prompt(`Enter 's' to compute the sum, or 'p' to compute the product.`);
//       operation = readline.question();
//     }
//   }
// }

// sumOrProduct();

// function shortLongShort(str1, str2) {
//   if (str1.length < str2.length) {
//     return str1 + str2 + str1;
//   } else
//   if (str2.length < str1.length) {
//     return str2 + str1 + str2;
//   }
// }
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// function isLeapYear(year) {
//   if (year % 100 === 0 && year % 400 !== 0) {
//     return false;
//   } else
//   if (year % 4 !== 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// function isLeapYear(year) {
//   if (year < 1752) {
//     return year % 4 === 0;
//   } else {
//     if (year % 100 === 0 && year % 400 !== 0) {
//       return false;
//     } else
//     if (year % 4 !== 0) {
//       return false;
//     } else {
//       return year % 4 === 0;
//     }
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// function multisum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// function utf16Value(string) {
//   let sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum += string.charCodeAt(i);
//   }
//   return sum;
// }

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// function greetings(arrayName, objectTitle) {
//   let name = arrayName.join(' ');
//   let title = Object.values(objectTitle).join(' ');

//   return `Hello, ${name}! Nice to have a ${title} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// function greetUser() {
//   prompt(`What is your name?`);
//   let name = readline.question();

//   if (name.endsWith('!')) {
//     name = name.slice(0, -1);
//     prompt(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
//   } else {
//   prompt(`Hello ${name}.`);
//   }
// }

// greetUser();

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// let multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true

// let square = (num1) => num1 * num1;

// function exponential(num, power) {
//   if (power === 1) {
//     return num;
//   } else if (power === 0) {
//     return 1;
//   }

//   let solution = multiply(num, num);

//   for (let i = 2; i < power; i++) {
//     solution = multiply(solution, num);
//   }

//   return solution;
// }

// console.log(exponential(5, 0) === 1); // logs true
// console.log(exponential(-4, 4) === 256); // logs true

// function operations() {
//   prompt(`Enter the first number:`);
//   let num1 = parseFloat(readline.question());

//   prompt(`Enter the second number:`);
//   let num2 = parseFloat(readline.question());

//   let sum = num1 + num2;
//   let difference = num1 - num2;
//   let product = num1 * num2;
//   let quotient = num1 / num2;
//   let remainder = num1 % num2;
//   let exponent = num1 ** num2;

//   prompt(`${num1} + ${num2} = ${sum}`);
//   prompt(`${num1} - ${num2} = ${difference}`);
//   prompt(`${num1} * ${num2} = ${product}`);
//   prompt(`${num1} / ${num2} = ${Math.floor(quotient)}`);
//   prompt(`${num1} % ${num2} = ${remainder}`);
//   prompt(`${num1} ** ${num2} = ${exponent}`);
// }

// operations();

// function penultimate(string) {
//   let array = string.split(' ');
//   return array[array.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function middleWord(string) {
//   let array = string.split(' ');

//   if (array.length % 2 === 1) {
//     let index = (array.length - 1) / 2;
//     return array[index];
//   } else {
//     let index = array.length / 2;
//     return `${array[index - 1]} ${array[index]}`;
//   }
// }

// console.log(middleWord('Hello my name is Bob.') === 'name');
// console.log(middleWord('Hello my other name is Bob.') === 'other name');

// function xor(value1, value2) {
//   if ((value1 === 'true' && value2 === 'true') ||
//       (value1 === 'false' && value2 === 'false')) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// function oddities(array) {
//   let oddArray = array.filter((element, index) => {
//     if (index % 2 === 0) {
//       return element;
//     }
//   });
//   // let newArray = [];
//   // for (let i = 0; i < array.length; i += 2) {
//   //   newArray.push(array[i]);
//   // }
//   // return newArray;
//   return oddArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// function hexadecimalToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   let sign = 1;
//   let array = string.split('').map(char => DIGITS[char.toUpperCase()]);
//   if (string[0] === '-') {
//     sign = -1;
//     array[0] = 0;
//   } else if (string[0] === '+') {
//     array[0] = 0;
//   }
//   let number = 0;
//   array.forEach((element, index) => {
//       number += (element * (16 ** (array.length - 1 - index)));
//       // Change base 16 to base 10 for decimal
//   });
//   console.log(array);
//   return number * sign;
// }

// console.log(hexadecimalToInteger("-4321") === -4321); // logs true
// console.log(hexadecimalToInteger("+570") === 570); // logs true
// console.log(hexadecimalToInteger('4D9f') === 19871); // logs true

// function integerToString(integer) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let string = [];

//   let placeValue = 1;

//   while (placeValue <= integer) {
//     placeValue *= 10;
//   }

//   for (placeValue; placeValue >= 1; placeValue /= 10) {
//     let value = Math.floor(integer / placeValue);
//     string.push(DIGITS[value]);
//     integer = integer - (value * placeValue);
//   }

//   if (string.length > 1) {
//     string.shift();
//   }

//   return string.join('');
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(1));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// function integerToString(integer) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let string = [];

//   let sign = Math.sign(integer);

//   integer = Math.abs(integer);

//   let placeValue = 1;

//   while (placeValue <= integer) {
//     placeValue *= 10;
//   }

//   for (placeValue; placeValue >= 1; placeValue /= 10) {
//     let value = Math.floor(integer / placeValue);
//     string.push(DIGITS[value]);
//     integer = integer - (value * placeValue);
//   }

//   if (string.length > 1) {
//     string.shift(1, 2);
//   }

//   switch (sign) {
//     case 1:
//       string.unshift('+');
//       break;
//     case 0:
//       break;
//     case -1:
//       string.unshift('-');
//       break;
//   }

//   return string.join('');
// }

// console.log(integerToString(4321));        // "+4321"
// console.log(integerToString(-123));           // "-123"
// console.log(integerToString(0));        // "0"

// function crunch(string) {
//   let array = string.split('');
//   let condensed = '';
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array[i - 1]) {
//       condensed += array[i];
//     } else {
//       continue;
//     }
//   }
//   return condensed;
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function logInBox(string, maxWidth = string.length) {
//   // if (string.length > maxWidth) {
//   //   string = string.slice(0, maxWidth);
//   // }
//   let header = ['+'];
//   let secondLine = ['|'];
//   for (let i = 0; i < maxWidth + 2; i++) {

//     header.push('-');
//     secondLine.push(' ');
//   }

//   header.push('+');
//   secondLine.push('|');

//   console.log(header.join(''));
//   console.log(secondLine.join(''));

//   for (let i = 0; i < string.length; i++) {
//     let substring = '';
//     for (let i = 0; i < maxWidth; i++) {
//       substring += string[i];
//     }
//     console.log(`| ${substring} |`);
//     string = string.slice(maxWidth);
//   }

//   console.log(secondLine.join(''));
//   console.log(header.join(''));
// }

// logInBox('To boldly go where no one has gone before.', 10);

// function logInBox(string, maxWidth = string.length) {
//   // if (string.length > maxWidth) {
//   //   string = string.slice(0, maxWidth);
//   // }
//   let header = ['+'];
//   let secondLine = ['|'];
//   for (let i = 0; i < maxWidth + 2; i++) {

//     header.push('-');
//     secondLine.push(' ');
//   }

//   header.push('+');
//   secondLine.push('|');

//   console.log(header.join(''));
//   console.log(secondLine.join(''));

//   for (let i = maxWidth; i < string.length + maxWidth; i += 0) {
//     let substring = string.substring(0, i);
//     while (substring.length < maxWidth) {
//       substring += ' ';
//     }
//     console.log(`| ${substring} |`);
//     string = string.slice(maxWidth);
//   }

//   console.log(secondLine.join(''));
//   console.log(header.join(''));
// }

// logInBox('To boldly go where no one has gone before.', 10);

// function stringy(num) {
//   let string = '1';
//   for (let i = num - 1; i > 0; i--) {
//     string += (Math.floor(Math.random() * 2));
//   }
//   console.log(string);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function stringy(num) {
//   let string = '';
//   for (let i = 0; i < num; i++) {
//     if (i % 2 === 0) {
//       string += '1';
//     }
//     else {
//       string += '0';
//     }
//   }
//   console.log(string);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

function findFibonacciIndexByLength(length) {
  // fibonacci
  let number = [1, 1];
  let lastElement = number[number.length - 1];
  while (String(lastElement).length < length) {
    number.push(number[number.length - 1] + number[number.length - 2]);
  }
  console.log(number);
}

findFibonacciIndexByLength(5);





