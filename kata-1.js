let sumLargestNumbers = function(data) {
  let first = 0;
  let second = 0;
  for (item of data) {
    if (item >= first) {
      second = first;
      first = item;
    }
  }
  return first + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Find the two largest numbers in an array and return the sum
// Expected outcome:
//  11
//  5
//  126
