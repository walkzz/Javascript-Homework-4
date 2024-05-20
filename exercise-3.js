// Задача 3.
// За следнава низа од држави:

// const countries = [
// "Albania",
// "Bolivia",
// "Canada",
// "Denmark",
// "Ethiopia",
// "Finland",
// "Germany",
// "Hungary",
// "Ireland",
// "Japan",
// "Kenya",
// ]
// а. Испечатете ги сите земји што имаат „land“ во своето име и направете ги со големи букви.

// б. Испечатете ги сите земји што завршуваат со 'ia' и нивното име е поголемо од 7 букви.

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        console.log(countries[i].toUpperCase());
    }
}
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia") && countries[i].length > 7) {
        console.log(countries[i]);
    }
}