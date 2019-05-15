// Exercise: Create a function named talkingCalendar that takes in a date string
// with the format YYYY/MM/DD, and returns a new human readable date that looks
// like December 2nd, 2017.

let talkingCalendar = function(date) {
  let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  let dateMonth = months[(date[5] + date[6]) - 1];
  return dateMonth;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Expected Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
