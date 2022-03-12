// We already have access to students from data.js
const averageScore =
  students.reduce(function (scoresTotal, currentStudent) {
    console.log(currentStudent);
    scoresTotal = scoresTotal + currentStudent.score;

    return scoresTotal;
  }, 0) / students.length;
console.log(averageScore);
