// We already have access to students from data.js
const updatedStudent = students.map(function (currentStudent) {
  // console.log(currentStudent);
  currentStudent.role = "student";
  return currentStudent;
});
console.log(updatedStudent);
