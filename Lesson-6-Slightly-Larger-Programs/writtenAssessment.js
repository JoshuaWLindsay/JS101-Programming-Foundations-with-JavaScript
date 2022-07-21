// function objectHasProperty(object, property) {
//   if (Object.keys(object).includes(property)) {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// let obj = {}
// obj['something'] = 3;
// obj['enabled'] = false;

// console.log(obj);

// console.log(objectHasProperty(obj, 'something')); // returns 1
// console.log(objectHasProperty(obj, 'active'));    // returns 2
// console.log(objectHasProperty(obj, 'enabled'));    // returns 2

// let numbers1 = [8, 157, 203, 15, 2, 21];
// let numbers2 = numbers1.sort((a, b) => b - a);
// console.log(numbers2); // => [ 15, 157, 2, 203, 21, 8 ]

// let arr = [ 'a', 'b', 'c' ];
// let newArr = arr.filter(str => str);
// console.log(newArr);
// console.log(arr === newArr); // returns false

// const item1 = { size: 'small', color: 'red' };
// const item2 = { size: 'large', color: 'blue' };
// const item3 = { size: 'medium' };

// const item4 = item2;
// console.log(item4);
// item4.color = item3.color;
// console.log(item4);
// console.log(item2);
// item4.size = item3.size;
// console.log(item4);
// console.log(item2);
// item1.size = item2.size;

// console.log(item1); // { size: 'medium', color: 'red' }
// console.log(item2); // { size: 'medium', color: undefined }
// console.log(item3); // { size: 'medium' }
// console.log(item4); // { size: 'medium', color: undefined }
// console.log(item2 === item4);

// const myArr = ['A', 'B', 'C'];

// function logElem() {
//   console.log(myArr[3]);
// }

// logElem();

// function bar() {
//   let foo = 'Hello';
//   foo = 'Goodbye';
// }

// console.log(bar());
// // let baz = foo;

// // console.log(baz);

// let num1 = 5;
// console.log(num1);
// let num2 = num1;
// console.log(num1 === num2);
// console.log(num1);
// console.log(num2);
// num1 += num2;
// console.log(num1);
// console.log(num2);
// console.log(num1 === num2);

// const myArr = ['A', 'B', 'C'];

// function logElem(myArr) {
//   console.log(myArr[2]);
// }

// // logElem(['A', 'B']);
// logElem(myArr);

// let word = 'Hey';

// function double(hey) {
//   word = hey + hey;
// }

// double(word);
// console.log(word);

// let word = 'Hey';

// function double() {
//   word = word + word;
// }

// double();
// console.log(word);

// const arr = [1, 2, 3];
// let idx = 0;

// while (true) {
//   let num = arr[idx];
//   logNum(num);

//   if (idx >= 2) {
//     break;
//   }

//   idx += 1;
// }

// function logNum(num) {
//   console.log(num);
// }

// let arr1 = ['one'];
// let arr2 = arr1;
// arr1.push('two');
// console.log(arr1);
// console.log(arr2); // [ 'one', 'two' ]
// console.log(arr1 === arr2);

// arr1 = ['one'];
// console.log(arr1);
// console.log(arr2);
// arr1.push('three');
// console.log(arr1);
// console.log(arr2); // [ 'one', 'two' ]
// console.log(arr1 === arr2);

// let sentence = "it's oh so quiet..."

// function loud() {
//   sentence = sentence.toUpperCase();
// }

// console.log(loud());

// console.log(sentence);

// function removeFirstElement(arr) {
//   arr.shift();
// }

// const muppets = ['Kermit', 'Miss Piggy', 'Fozzie Bear', 'Gonzo'];
// removeFirstElement(muppets);

// console.log(muppets[1]);

// function removeFirstElement(arr) {
//   arr = ['Kermit', 'Miss Piggy', 'Fozzie Bear', 'Gonzo'];
//   console.log(arr);
//   arr.shift();
//   console.log(arr[1]);
// }

// const muppets = ['Kermit', 'Miss Piggy', 'Fozzie Bear', 'Gonzo'];
// removeFirstElement(muppets);

// console.log(muppets[1]);

// let cookie = 1;

// console.log([cookie, 1, 2, 3].map(n => n *= 2));
// console.log([cookie, 1, 2, 3].map(n => n * 2));
// console.log(cookie);

// let arr = [1, 2, 3].filter(function (n) {
//   return n < 2;
// });

// console.log(arr);

// let x;
// console.log(5 * x);        // ReferenceError: x is not defined

// let a = {};
// console.log(a.x);
// console.log(5 * '1');
// console.log(5 * a.x);      // Evaluates to NaN

// const myArr = ['A', 'B', 'C'];

// function logElem(myArr) {
//   console.log(myArr[2]);
// }

// logElem(myArr);

// let word = 'Hey';

// function double(string) {
//   return string = string + string;
// }

// word = double(word);
// console.log(word); // 'HeyHey'

// let arr = [ 'a', 0, 'c' ];
// let newArr = arr.filter(str => str);
// console.log(newArr);

// let numbers1 = [8, 157, 203, 15, 2, 21];
// let numbers2 = numbers1.sort((a, b) => b - a);
// console.log(numbers2); // => [ 15, 157, 2, 203, 21, 8 ]