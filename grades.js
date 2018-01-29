const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

// What is the lowest score? Sort the array and find out.
const lowestScore = scores.reduce(function(a,b){
    return Math.min(a,b)});
console.log("The lowest score is " + lowestScore + ".");

// What is the highest score?
const highestScore = scores.reduce(function(a,b){
return Math.max(a,b)});
console.log("The highest score is " + highestScore + ".");

// way to keep count of each letter grade after looping
let grades = { A: 0, B: 0, C: 0, D: 0,F: 0};

// let grades = [ 
//     { A: 0, letter: "A's"},
//     { B: 0, letter: "B's"},
//     { C: 0, letter: "C's"},
//     { D: 0, letter: "D's"},
//     { F: 0, letter: "F's"}
// ];

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

// function countGrades(array){
let currentGradeCount = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] <= 100 && scores[i] >= 91){
            grades.A++; 
        }else if (scores[i] <= 90 && scores[i] >= 81){
            grades.B++;
        }else if (scores[i] <= 80 && scores[i] >= 71){
            grades.C++;
        }else if (scores[i] <= 70 && scores[i] >= 61){
            grades.D++;
        }else //(array[i] <= 60)
        { grades.F++;
        }
        currentGradeCount = "There are " + grades.A + " A's, " + grades.B + " B's, " + grades.C + " C's, " + grades.D + " D's, " + grades.F + " F's.";
        // currentGradeCount = grades.A + grades.B + grades.C  + grades.D + grades.F ;
     };
console.log(currentGradeCount);

// let gradesCountArray = [grades.A + " A's", grades.B + " B's", grades.C + " C's", grades.D + " D's", grades.F + " F's"];  

let gradesCountArray = [
    {letter: grades.A, text:"A's"},
    {letter: grades.B, text:"B's"},
    {letter: grades.C, text:"C's"},
    {letter: grades.D, text:"D's"},
    {letter: grades.F, text:"F's"}
];

function gradeLetters(){
    let max = -Infinity;
    for (j = 0; j < gradesCountArray.length; j++) {
        if (gradesCountArray[j] > max){
            max = gradesCountArray[j];
        }
    }
    return max;
};
// gradesLetters(grades.A);

// Which letter grade did students achieve the most?
let mostGrades = gradesCountArray.sort(function(a,b) {return b.letter - a.letter});
console.log("The most received grades: ", mostGrades[0]);

// Which letter grade did the students achieve the fewest?
let fewestGrade = gradesCountArray.sort(function(a,b) {return a.letter - b.letter});
console.log("The fewest received grades: ", fewestGrade[0]);

//----------------------------------------------
// Which letter grade did students achieve the most?
// let mostGrades = 0;
// mostGrades = gradesCountArray.sort(function(a, b) {return b - a});
// console.log("The most received grades: ", mostGrades[0]);

// // Which letter grade did the students achieve the fewest?
// let fewestGrade = 0; 
// fewestGrade = gradesCountArray.sort(function(a, b) {return a - b});
// console.log("The fewest received grades: ", fewestGrade[0]);