/*
INPUT: String
OUTPUT: Frequency of each character as an object (Keys are the characters : Values are the number of occurrences)
*/

let statement = "The Flintstones Rock";

function letterFreq(string) {
  let strArray = string.split(' ').join('').split('');
  let strObj = {};
  for (let i = 0; i < strArray.length; i += 1) {
    if (Object.keys(strObj).includes(strArray[i])) {
      strObj[strArray[i]] += 1;
    } else {
        strObj[strArray[i]] = 1;
      }
  }
  console.log(strArray);
  console.log(strObj);
}

letterFreq(statement);
