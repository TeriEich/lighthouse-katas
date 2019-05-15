// Exercise: Create a function named talkingCalendar that takes in a date string
// with the format YYYY/MM/DD, and returns a new human readable date that looks
// like December 2nd, 2017.

let talkingCalendar = function(date) {
  let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  let dateMonth = months[(date[5] + date[6]) - 1];
  let dateYear = date[0] + date[1] + date[2] + date[3];
  let dateDay;

  if (date[8] === "0") {
    dateDay = date[9];
  }
  else {
    dateDay = date[8] + date[9];
  }

  switch (dateDay) {
    case "1":
    case "21":
    case "31":
      dateDay += "st";
      break;
    case "2":
    case "22":
      dateDay += "nd";
      break;
    case "3":
    case "23":
      dateDay += "rd";
      break;
    default:
      dateDay += "th";
  }
  return dateMonth + " " + dateDay + ", " + dateYear;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Expected Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
