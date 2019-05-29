// Exercise: Create a function named organizeInstructors that will receive an array
// of instructor objects, and will return a new object that has the following
// format:
//   {
//     CourseName: [instructors]
//   }

// Pseudocode: (Thoughts before writing any code) For each object in instructors, each unique course name is added as
// a key in the new object, and each corresponding name is added to an array of
// that key.
// ---------------
// Make a new object.
// Loop through each object in instructors.
// If the course value is not in the new object, add it as a key with the name
// value of the instructors object added to the new key in an array.
// If the course value is already in the new object, add the name value to the
// array value of the matching key in the new object.

const organizeInstructors = function(instructors) {
  let courses = {};
  for (const instructor of instructors) {
    courses[instructor.course] = [];
  }
  for (const instructor of instructors) {
    courses[instructor.course].push(instructor.name);
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


// Expected Output:
//   {
//     iOS: ["Samuel"],
//     Web: ["Victoria", "Karim", "Donald"]
//   }
//   {
//     Blockchain: ["Brendan"],
//     Web: ["David", "Carlos"],
//     iOS: ["Martha"]
//   }