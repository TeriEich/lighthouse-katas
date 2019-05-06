// Exercise: Given a normal string of words,
// turn it into a percent-encoded string by
// replacing all whitespace with %20


const urlEncode = function(text) {
  let encodedText = "";
  for (let char of text.trim()) {
    if (char === " ") {
      encodedText += "%20";
    }
    else {
      encodedText += char;
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


// Expected Output:
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure