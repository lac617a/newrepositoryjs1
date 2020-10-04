const NumberOfStudents = 12;
const NumberOfTeachers = 5;

const fullroom = NumberOfStudents + NumberOfTeachers;
const percentT = 100 *  fullroom / NumberOfTeachers;
const percentS = 100 *  fullroom / NumberOfStudents;


console.log("Percentage of students " + percentS + "%");
console.log("Percentage of mentors " +  percentT + "%"):