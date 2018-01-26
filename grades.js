const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

// What is the lowest score? Sort the array and find out.
const lowestScore = scores.reduce(function(a,b){
    return Math.min(a,b);
});
console.log("The lowest score is " + lowestScore + ".");

// What is the highest score?
const highestScore = scores.reduce(function(a,b){
return Math.max(a,b);
});
console.log("The highest score is " + highestScore + ".");

// way to keep count of each letter grade after looping
let grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

function currentGradeCount(array){
for (let i = 0; i < array.length; i++) {
    if (array[i] <= 100 && array[i] >= 91){
            grades.A++; 
        }else if (array[i] <= 90 && array[i] >= 81){
            grades.B++;
        }else if (array[i] <= 80 && array[i] >= 71){
            grades.C++;
        }else if (array[i] <= 70 && array[i] >= 61){
            grades.D++;
        }else //(array[i] <= 60)
        { grades.F++;
        }
     }
     console.log("There are " + grades.A + " A's, " + grades.B + " B's, " + grades.C + " C's, " + grades.D + " D's, " + grades.F + " F's.");
     
};
        
currentGradeCount(scores);

 
// Which grade had the fewest students achieve it?

    
    
// return Math.min(a,b);

// });


let fewestGrade = grades.sort(function(a,b) {
    return (a-b) 
});
// const lowestScore = scores.sort(function(a,b){
//     return(a,b);