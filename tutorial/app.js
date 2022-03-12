// We already have access to students from data.js
const updatedStudent = students.map(function (currentStudent) {
  // console.log(currentStudent);
  currentStudent.role = "student";
  return currentStudent;
});
// console.log(updatedStudent);

const studentsWithHighScore = students.filter(function (currentStudent) {
  if (currentStudent.score >= 80) {
    return currentStudent;
  }
});
console.log(studentsWithHighScore);
