function doubleNumbers(numbers) {
  for (let number = 0; number < numbers.length; number += 1) {
    numbers[number] = numbers[number] * 2;
  }
  return numbers;
}



let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(myNumbers); // => [ 1, 4, 3, 7, 2, 6 ]
console.log(doubleNumbers(myNumbers)); // => [ 2, 8, 6, 14, 4, 12 ]
console.log(myNumbers);                // => [ 2, 8, 6, 14, 4, 12 ]

