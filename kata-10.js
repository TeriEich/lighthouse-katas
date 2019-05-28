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
  // Your code here
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }