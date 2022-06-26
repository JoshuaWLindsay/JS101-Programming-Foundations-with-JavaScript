//Problem 1

let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => b - a);
arr;

// Should be as follows (to express explicit type conversion)

arr.sort((a, b) => Number(b) - Number(a)); // [ '11', '10', '9', '8', '7' ]

//Problem 2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a['published']) - Number(b['published']))

//Problem 3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

arr1[2][1][3];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

arr2[1].third[0];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

arr3[2].third[0][0];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

obj1.b[1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

Object.keys(obj2.third)[0];

//Problem 4

let arr1 = [1, [2, 3], 4];

arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };

obj1.first[2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

obj2.a.a[2] = 4;

//Problem 5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAgeSum = 0;

Object.values(munsters).forEach(object => {
  if (object.gender === 'male') {
  maleAgeSum += Number(object.age);
  }
});

console.log(`The total sum of ages for the male members of the Munster family is ${maleAgeSum}.`);

//Problem 6

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(member => {
  let capName = member[0][0].toUpperCase() + member[0].slice(1);
  console.log(`${capName} is a ${member[1].age}-year-old ${member[1].gender}.`);
})

//Problem 8

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(array => {
  let indChar = array.join('').split('');
  indChar.forEach(char => {
    if ('aeiou'.includes(char)) {
    console.log(char);
    }
  })
})

//Problem 9

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});

//Problem 10

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort().reverse();
  }
});

//Problem 11

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(object => {
  let arrays = Object.entries(object).map(array => {
    let newArray = array.slice();
    newArray[1] += 1;
    return newArray;
  })
  return Object.fromEntries(arrays);
})

//Problem 12

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subArr => {
  return subArr.filter(element => element % 3 === 0);
})

//Problem 13

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// arr.sort((a, b) => {
//   let oddSum = 0;
//   for (let i = 0; i < a)
//   if (a)
// })

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];


arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  
  return oddSumA - oddSumB;
})

//Problem 14

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let objValues = Object.values(obj).map(object => {
  return Object.entries(object);
})

objValues.map(subArray => {
  if (subArray[0][1] === 'fruit') {
    return subArray[1][1].map(element => element[0].toUpperCase() + element.slice(1));
  } else if (subArray[0][1] === 'vegetable') {
    return subArray[2][1].toUpperCase();
  }
})

//Problem 15

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(object => {
  return Object.values(object).every(subArray => {
    return subArray.every(num => num % 2 === 0);
  });
})

//Problem 16

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

Object.fromEntries(arr);

//Problem 17

function uuidGenerator() {
  let uuid = self.crypto.randomUUID();
  return uuid;
};

uuidGenerator;

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';

  sections.forEach((section, index) => {
    for (let i = 1; i <= section; i += 1) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }
    if (index < sections.length - 1) {
      uuid += '-';
    }
  })

  return uuid;
}

generateUUID();
generateUUID();
generateUUID();
