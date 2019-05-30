// Exercise: Create a function named makeCase that will receive an input string
// and one or more casing options. Return a new string that is formatted based on
// casing options.
// Precedence of each of the casing styles are as follows, values higher in the
// list should be processed first:
// 1. camel, pascal, snake, kebab, title
// 2. vowel, consonant
// 3. upper, lower

const makeCase = function(input, case) {
  // Put your solution here
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