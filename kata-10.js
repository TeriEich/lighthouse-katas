// Exercise: Our function calculateChange should return an object which describes
// the total amount of change for the cashier to give back. Although pennies
// are not used in circulation, we will still calculate the amount of pennies
// to give back.
// Valid denominations are as follows:
// - Twenty dollars
// - Ten dollars
// - Five dollars
// - Two dollars
// - One dollar
// - Quarter (25¢)
// - Dime (10¢)
// - Nickel (5¢)
// - Penny (1¢)

const calculateChange = function(total, cash) {
  let returnedCash = cash - total;
  let change = {};
  while (returnedCash > 0) {
    if (returnedCash >= 2000) {
      change.twentyDollar = Math.floor(returnedCash / 2000);
      returnedCash = returnedCash % 2000;
    }
    else if (returnedCash >= 1000) {
      change.tenDollar = Math.floor(returnedCash / 1000);
      returnedCash = returnedCash % 1000;
    }
    else if (returnedCash >= 500) {
      change.fiveDollar = Math.floor(returnedCash / 500);
      returnedCash = returnedCash % 500;
    }
    else if (returnedCash >= 200) {
      change.twoDollar = Math.floor(returnedCash / 200);
      returnedCash = returnedCash % 200;
    }
    else if (returnedCash >= 100) {
      change.oneDollar = Math.floor(returnedCash / 100);
      returnedCash = returnedCash % 100;
    }
    else if (returnedCash >= 25) {
      change.quarter = Math.floor(returnedCash / 25);
      returnedCash = returnedCash % 25;
    }
    else if (returnedCash >= 10) {
      change.dime = Math.floor(returnedCash / 10);
      returnedCash = returnedCash % 10;
    }
    else if (returnedCash >= 5) {
      change.nickel = Math.floor(returnedCash / 5);
      returnedCash = returnedCash % 5;
    }
    else if (returnedCash >= 1) {
      change.penny = Math.floor(returnedCash / 1);
      returnedCash = returnedCash % 1;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }