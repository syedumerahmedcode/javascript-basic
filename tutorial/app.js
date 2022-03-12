// We already have access to students from data.js
const updatedStudent = students.map(function (currentStudent) {
  // console.log(currentStudent);
  currentStudent.role = "student";
  return currentStudent;
});
// console.log(updatedStudent);

const studentsWithHighScore = students.filter(function (currentStudent) {
  // if (currentStudent.score >= 80) {
  //   return currentStudent;
  // }

  // Following example return the value in a one liner
  // if (currentStudent.score >= 80) return currentStudent;

  // This works because in the background truthy is working.
  return currentStudent.score >= 80;
});
// console.log(studentsWithHighScore);

const studentWithSpecificId = students.find(function (currentStudent) {
  return currentStudent.id === 1;
});
console.log(studentWithSpecificId);
