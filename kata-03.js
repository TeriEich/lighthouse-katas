// Exercise: Count the number of vowels that appear in a given string.

let numberOfVowels = function(data) {
  let n = 0;
  let i = 0;
  while (i < data.length) {
    if (data.charAt(i) === "a"
      || data.charAt(i) === "e"
      || data.charAt(i) === "i"
      || data.charAt(i) === "o"
      || data.charAt(i) === "u") {
      n++;
    }
    i++
  }
  return n;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Expected Output:
//  3
//  5
//  5