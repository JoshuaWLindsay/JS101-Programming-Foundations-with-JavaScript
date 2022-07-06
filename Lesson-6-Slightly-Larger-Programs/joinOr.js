function joinOr(array, spacing = ', ', otherOr = 'or') {
  let string;
  if (array.length <= 1) {
    string = array.join();
  } else if (array.length === 2) {
    string = array.join(` ${otherOr} `);
  } else {
    string = array.slice(0, array.length - 1).join(spacing) + 
    `${spacing}${otherOr} ${array[array.length - 1]}`;
  } 
  return string;
};

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"