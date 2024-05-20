// Задача 5.
// Напишете функција наречена checkGrade која зема нумеричка оценка како аргумент и враќа соодветна оценка за букви. 
// Оценките на буквите треба да се засноваат на следната скала:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Да се искористи тернарниот оператор(ternary operator) во функцијата.

function checkGrade(grade) {
    return (grade >= 90 && grade <= 100) ? 'A' :
           (grade >= 80 && grade <= 89) ? 'B' :
           (grade >= 70 && grade <= 79) ? 'C' :
           (grade >= 60 && grade <= 69) ? 'D' :
           'F';
}
let generateNumber = Math.floor(Math.random() * 100 + 1);
console.log(checkGrade(generateNumber));