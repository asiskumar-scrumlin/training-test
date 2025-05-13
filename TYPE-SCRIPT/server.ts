// studentManager.ts

interface Student {
  id: number;
  name: string;
  age: number;
  scores: number[];
}

let students: Student[] = [
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

// Add new student
function addStudent(student: Student): void {
  students.push(student);
  console.log("Student added:", student);
}

// Get student by ID
function getStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

// Get average score of a student
function getAverageScore(id: number): number | null {
  const student = getStudentById(id);
  if (!student) return null;
  const sum = student.scores.reduce((a, b) => a + b, 0);
  return sum / student.scores.length;
}

// Get top scorers
function getTopScorers(minScore: number): Student[] {
  return students.filter((student) => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg > minScore;
  });
}

// Sort students by name
function sortByName(): Student[] {
  return students.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
}

// Return only names
function listAllNames(): string[] {
  return students.map((student) => student.name);
}

// Check if any score < 35
function hasFailingStudents(): boolean {
  return students.some((student) => student.scores.some((score) => score < 35));
}

// Return failed scores
function getFailedSubjects(student: Student): number[] {
  return student.scores.filter((score) => score < 35);
}

// Destructure and log
function logStudentNameAndScores(student: Student): void {
  const { name, scores } = student;
  console.log("Name:", name);
  console.log("Scores:", scores);
}

// Add score using spread operator
function addScore(student: Student, newScore: number): Student {
  const newScores = [...student.scores, newScore];
  return { ...student, scores: newScores };
}

// Print summary
function printSummary(student: Student): void {
  const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  console.log(`${student.name} (age ${student.age}) has an average score of ${avg.toFixed(2)}.`);
}

// Group students by age
function groupByAge(): Record<number, Student[]> {
  const grouped: Record<number, Student[]> = {};
  students.forEach((student) => {
    if (!grouped[student.age]) {
      grouped[student.age] = [];
    }
    grouped[student.age].push(student);
  });
  return grouped;
}



console.log("\n--- Add Student ---");
addStudent({ id: 13, name: "Manas", age: 23, scores: [80, 85, 88] });

console.log("\n--- Get Student by ID (3) ---");
console.log(getStudentById(3));

console.log("\n--- Average Score of Chinmay (ID 3) ---");
console.log(getAverageScore(3));

console.log("\n--- Top Scorers (avg > 80) ---");
console.log(getTopScorers(80));

console.log("\n--- Sorted by Name ---");
console.log(sortByName());

console.log("\n--- List All Names ---");
console.log(listAllNames());

console.log("\n--- Any Failing Students? ---");
console.log(hasFailingStudents());

console.log("\n--- Failed Subjects of Jyoti ---");
const jyoti = getStudentById(10);
if (jyoti) console.log(getFailedSubjects(jyoti));

console.log("\n--- Destructured Info of Gitanjali ---");
const gitanjali = getStudentById(7);
if (gitanjali) logStudentNameAndScores(gitanjali);

console.log("\n--- Add New Score to Gitanjali ---");
if (gitanjali) console.log(addScore(gitanjali, 100));

console.log("\n--- Print Summary of Gitanjali ---");
if (gitanjali) printSummary(gitanjali);

console.log("\n--- Group by Age ---");
console.log(groupByAge());
