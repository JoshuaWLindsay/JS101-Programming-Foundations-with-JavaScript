function lastTerm(row) {
  let lastInteger = 0;
  for (let i = row; i > 0; i -= 1) {
    lastInteger += i;
  }
  return lastInteger;
}

function rowSum(rowNum) {
  let result = 0;
  for (let i = lastTerm(rowNum); i > (lastTerm(rowNum) - rowNum); i -= 1) {
    result += (i * 2);
  }
  if (rowNum <= 0) {
    return result = undefined;
  }
  return result;
}

console.log(rowSum(5));
console.log(rowSum(4));
console.log(rowSum(3));
console.log(rowSum(2));
console.log(rowSum(1));
console.log(rowSum(-1));