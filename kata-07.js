// Exercise: Convert normal text to camelCase.

let camelCase = function(input) {
  let inputCamel = "";
  for (let i = 0; i < input.length; i++) {
    let match = input[i].match(/ /gi);
    if (match) {
      let nextLetter = input[i+1];
      inputCamel += nextLetter.toUpperCase();
      i++;
    }
    else if (input[i-1] !== " ") {
      inputCamel += input[i];
    }

  }
  return inputCamel;
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// Expected Output:
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious