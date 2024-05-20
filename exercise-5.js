// Задача 5.
// Напишете функција наречена checkGrade која зема нумеричка оценка како аргумент и враќа соодветна оценка за букви. 
// Оценките на буквите треба да се засноваат на следната скала:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Да се искористи тернарниот оператор(ternary operator) во функцијата.

function checkGrade(num){
    if(num > 100 || num < 0){
        console.log("Invalid number entered");
    }
    else if(num <= 100 && num >= 90){
        console.log(`Grade: A, points: ${num}`);
    }
    else if(num <= 89 && num >= 80){
        console.log(`Grade: B, points: ${num}`);
    }
    else if(num <= 79 && num >= 70){
        console.log(`Grade: C, points: ${num}`);
    }
    else if(num <= 69 && num >= 60){
        console.log(`Grade: D, points: ${num}`);
    }
    else if(num <= 59 && num >= 0){
        console.log(`Grade: F, points: ${num}`);
    }
}
let generateNumber = Math.floor(Math.random() * 100 + 1);
checkGrade(generateNumber);