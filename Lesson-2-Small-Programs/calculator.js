// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

while (true) {
  prompt(MESSAGES.number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.validNumber);
    number1 = readline.question();
  }

  prompt(MESSAGES.number2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.validNumber);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.validOperation);
    operation = readline.question();
  }

  let output;
  /*
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // '3' represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // '2' represents division
  output = Number(number1) / Number(number2);
}
*/

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${MESSAGES.result}${output}`);

  prompt(MESSAGES.anotherOp);
  const answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}
