// Exercise: Create a function named makeCase that will receive an input string
// and one or more casing options. Return a new string that is formatted based on
// casing options.
// Precedence of each of the casing styles are as follows, values higher in the
// list should be processed first:
// 1. camel, pascal, snake, kebab, title
// 2. vowel, consonant
// 3. upper, lower

const makeCase = function(input, style) {
  let output = "";
  if (typeof style === "string") {
   style = [style];
  }
  for (let n = 0; n < style.length; n++) {
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let space = letter.match(/ /gi);
      let vowel = letter.match(/a|e|i|o|u/gi);
      switch (style[n]) {
        case "camel":
          if (space) {
            let nextLetter = input[i+1];
            output += nextLetter.toUpperCase();
            i++;
          }
          else if (input[i-1] !== " ") {
            output += letter;
          }
          break;
        case "pascal":
          if (space) {
            let nextLetter = input[i+1];
            output += nextLetter.toUpperCase();
            i++;
          }
          else if (i === 0) {
            output += letter.toUpperCase();
          }
          else if (input[i-1] !== " ") {
            output += letter;
          }
          break;
        case "snake":
          if (space) {
            output += "_";
          }
          else {
            output += letter;
          }
          break;
        case "kebab":
          if (space) {
            output += "-";
          }
          else {
            output += letter;
          }
          break;
        case "title":
          if (space) {
            let nextLetter = input[i+1];
            output += letter;
            output += nextLetter.toUpperCase();
          }
          else if (i === 0) {
            output += letter.toUpperCase();
          }
          else if (input[i-1] !== " ") {
            output += letter;
          }
          break;
        case "vowel":
          if (vowel) {
            output += letter.toUpperCase();
          }
          else {
            output += letter;
          }
          break;
        case "consonant":
          if (!vowel) {
            output += letter.toUpperCase();
          }
          else {
            output += letter;
          }
          break;
        case "upper":
          output += letter.toUpperCase();
          break;
        case "lower":
          output += letter.toLowerCase();
          break;
      }
    }
  }
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


// Expected Output:
//   thisIsAString
//   ThisIsAString
//   this_is_a_string
//   this-is-a-string
//   This Is A String
//   thIs Is A strIng
//   THiS iS a STRiNG
//   THIS_IS_A_STRING