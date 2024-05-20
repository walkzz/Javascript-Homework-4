// Задача 1.
// Од следнава низа од објекти:

// books = [
//   { title: "Book 1", author: "Author A", year: 2000 },
//   { title: "Book 2", author: "Author B", year: 2010 },
//   { title: "Book 3", author: "Author C", year: 2020 },
// ]
// - Да се искористи методот forEach() за итерирање низ низата книги и испечатете 
// го насловот и авторот на секоја книга во конзолата.
// - Да се искористи методот find() за да се најде првата книга издадена после 2000та година.

const books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
]
books.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
});