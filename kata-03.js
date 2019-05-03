// Exercise: Count the number of vowels that appear in a given string.

let numberOfVowels = function(data) {
  let matchingVowels = data.match(/[aeiou]/gi);
  if (matchingVowels) {
    return matchingVowels.length;
  }
  else {
    return "no vowels";
  }
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("mmtgp"));

// Expected Output:
//  3
//  5
//  5
//  no vowels