// studentManager.js

let students = [
  { id: 1, name: "Asis", age: 18, scores: [67, 89, 90] },
  { id: 2, name: "Bipin", age: 19, scores: [45, 32, 50] },
  { id: 3, name: "Chinmay", age: 18, scores: [90, 92, 88] },
  { id: 4, name: "Deepak", age: 20, scores: [55, 60, 58] },
  { id: 5, name: "Elina", age: 21, scores: [78, 81, 74] },
  { id: 6, name: "Farida", age: 19, scores: [33, 40, 36] },
  { id: 7, name: "Gitanjali", age: 18, scores: [95, 97, 99] },
  { id: 8, name: "Hari", age: 20, scores: [64, 67, 62] },
  { id: 9, name: "Ipsita", age: 22, scores: [88, 90, 85] },
  { id: 10, name: "Jyoti", age: 21, scores: [42, 38, 33] },
  { id: 11, name: "Kunal", age: 20, scores: [91, 93, 89] },
  { id: 12, name: "Lopamudra", age: 19, scores: [72, 70, 74] }
];

//! Add new student after validation
function addStudent(student) {
  if (!student.name || !Array.isArray(student.scores)) {
    console.log("Invalid student data");
    return;
  }
  students.push(student);
  console.log("Student added:", student);
}

//! Get student by ID
function getStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

//! Get average score of a student
function getAverageScore(id) {
  const student = getStudentById(id);
  if (!student) return null;
  let sum = 0;
  for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i];
  }
  return sum / student.scores.length;
}

//! Get students with average > minScore
function getTopScorers(minScore) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    const scores = students[i].scores;
    let total = 0;
    for (let j = 0; j < scores.length; j++) {
      total += scores[j];
    }
    const avg = total / scores.length;
    if (avg > minScore) {
      result.push(students[i]);
    }
  }
  return result;
}

//! Sort students alphabetically by name
function sortByName() {
  students.sort(function(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
}

//! Return only student names
function listAllNames() {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

// !Check if any student has score < 35
function hasFailingStudents() {
  for (let i = 0; i < students.length; i++) {
    const scores = students[i].scores;
    for (let j = 0; j < scores.length; j++) {
      if (scores[j] < 35) {
        return true;
      }
    }
  }
  return false;
}

//! Get failed scores of a student
function getFailedSubjects(student) {
  const failed = [];
  for (let i = 0; i < student.scores.length; i++) {
    if (student.scores[i] < 35) {
      failed.push(student.scores[i]);
    }
  }
  return failed;
}

//! Destructure student info (basic way)
function printStudentInfo(student) {
  var name = student.name;
  var scores = student.scores;
  console.log("Name:", name);
  console.log("Scores:", scores);
}

//! Add a score using spread (imitated manually here)
function addScore(student, newScore) {
  const newScores = [];
  for (let i = 0; i < student.scores.length; i++) {
    newScores.push(student.scores[i]);
  }
  newScores.push(newScore);
  return {
    id: student.id,
    name: student.name,
    age: student.age,
    scores: newScores
  };
}

//! Print summary
function printSummary(student) {
  let total = 0;
  for (let i = 0; i < student.scores.length; i++) {
    total += student.scores[i];
  }
  let avg = total / student.scores.length;
  console.log(student.name + " (age " + student.age + ") has an average score of " + avg.toFixed(2) + ".");
}

//! Group students by age
function groupByAge() {
  const grouped = {};
  for (let i = 0; i < students.length; i++) {
    const age = students[i].age;
    if (!grouped[age]) {
      grouped[age] = [];
    }
    grouped[age].push(students[i]);
  }
  return grouped;
}
 
//!--------------
console.log("\n--- Add Student ---");
addStudent({ id: 13, name: "Manas", age: 23, scores: [80, 85, 88] });

console.log("\n--- Get Student by ID (3) ---");
console.log(getStudentById(3));

console.log("\n--- Average Score of Chinmay (ID 3) ---");
console.log(getAverageScore(3));

console.log("\n--- Top Scorers (avg > 80) ---");
console.log(getTopScorers(80));

console.log("\n--- Sorted by Name ---");
sortByName();
console.log(students);

console.log("\n--- List All Names ---");
console.log(listAllNames());

console.log("\n--- Any Failing Students? ---");
console.log(hasFailingStudents());

console.log("\n--- Failed Subjects of Jyoti ---");
console.log(getFailedSubjects(getStudentById(10)));

console.log("\n--- Destructured Info of Gitanjali ---");
printStudentInfo(getStudentById(7));

console.log("\n--- Add New Score to Gitanjali ---");
console.log(addScore(getStudentById(7), 100));

console.log("\n--- Print Summary of Gitanjali ---");
printSummary(getStudentById(7));

console.log("\n--- Group by Age ---");
console.log(groupByAge());
