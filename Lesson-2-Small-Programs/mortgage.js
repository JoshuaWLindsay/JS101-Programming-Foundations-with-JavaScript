/*

START Mortgage Calculator

INPUT Loan Amount

SET loanAmount = readline.question();

INPUT Annual Percentage Rate (APR)

SET annualPercentRate = readline.question();

SET monthIntRate = (Number(annualPercentRate) / 100) / 12;

INPUT Loan Duration

SET loanTermInYears = readline.question();

SET loanTermInMonths = (Number(loanTermInYears) * 12);

SET monthlyPayment =
(loanAmount) * ((monthIntRate) / (1 - Math.pow(1 + monthIntRate), (-loanTermInMonths))));

OUTPUT Payment amount per month as dollars and cents =>
`Your monthly payment amount: $${monthlyPayment}!`

*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number));
}

prompt('Welcome to your mortgage calculator! Please answer the following questions:');

while (true) {
  prompt('--------------------------------------------------------------------------');

prompt('What is the total amount of your loan in dollars?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt('Must enter a positive number.');
  loanAmount = readline.question();
}

prompt('What is the total Annual Percentage Rate (APR) of your loan as a percentage?');
prompt('(Example: 5 for 5% or 2.5 for 2.5%)');
let annualPercentRate = readline.question();

while (invalidNumber(annualPercentRate)) {
  prompt('Must enter a positive number.');
  annualPercentRate = readline.question();
}

let monthIntRate = ((Number(annualPercentRate) / 100) / 12);

prompt('What is the duration of your loan in years?');
prompt('(Example: 5 for 5 years or 5.5 for 5 years and 6 months)');
let loanTermInYears = readline.question();

while (invalidNumber(loanTermInYears)) {
  prompt('Must enter a positive number.');
  loanTermInYears = readline.question();
}

let loanTermInMonths = (Number(loanTermInYears) * 12);

const monthlyPayment = ((Number(loanAmount)) * ((monthIntRate) / (1 - Math.pow((1 + monthIntRate), (-loanTermInMonths)))));

prompt(`Your monthly payment amount: $${monthlyPayment.toFixed(2)}!`);

prompt('Would you like to perform another calculation?');
let answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  prompt('Please enter "y" or "n".');
  answer = readline.question().toLowerCase();
}

if (answer[0] === 'n') break;

}
