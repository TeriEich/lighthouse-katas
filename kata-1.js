let sumLargestNumbers = function(data) {
  let numberCrunch = [];
  for (item of data) {
    if (numberCrunch[0] == undefined) {
      numberCrunch.push(item);
    }
    else if (item > numberCrunch[0]) {
      numberCrunch.pop();
      numberCrunch.push(item);
    }
  }
  return numberCrunch[0];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Find the two largest numbers in an array and return the sum
// Expected outcome:
//  11
//  5
//  126

// Currently returning the largest number in an array.
// Find second largest number.
// Add the two and return the sum.