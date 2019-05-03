// Exercise: determine which instructor has the longest name.

const instructorWithLongestName = function(instructors) {
    let longestName = instructors[0];
  for (let instructor of instructors) {
    if (instructor["name"].length > longestName["name"].length) {
      longestName = instructor;
    }
  }
  return longestName;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// Expected Output:
//  {name: "Jeremiah", course: "Web"}
//  {name: "Domascus", course: "Web"}