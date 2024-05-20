// Задача 2.
// Даден е следниот објект:

// person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   address: {
//     street: "123 Main Street",
//     city: "New York",
//     state: "NY",
//     postalCode: "10001",
//   },
//   hobbies: ["Reading", "Traveling", "Cooking"],
// }
// а. Да се креира уште еден објект кој што ќе се вика additionalInfo и ќе ги содржи својствата:

// еmail(string)
// phone(string)
// education(object) кој што ќе ги содржи следниве својства:
// degree(string)
// major(string)
// Oткако ќе го креирате овој објект, на крај употребете го spread операторот за да ги споите 
// двата објекти во еден. Да се испечати резултатот во конзола.

// б. За следниот даден објект:

// user = {
//   id: 123,
//   username: "jsmith",
//   fullName: { firstName: "John", lastName: "Smith" },
//   contact: { email: "john@example.com", phone: "555-555-5555" },
//   addresses: [
//     {
//       type: "home",
//       street: "123 Main Street",
//       city: "New York",
//       state: "NY",
//       zip: "10001",
//     },
//     {
//       type: "work",
//       street: "456 Market Street",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94105",
//     },
//   ],
// }
// Да се употреби деструктурирање(destructuring) за да се извлечат следниве информации од објектот во променливи:

// Својството username
// Својствата firstName and lastName од fullName
// Својството email од contact
// home address (првиот елемент од addresses низата) во променливи: homeStreet, homeCity, homeState и homeZip.
// work address (вториот елемент од addresses низата) во променливи: workStreet, workCity, workState и workZip.
// На крај, да се испечатат вредностите на променливите во конзола.

person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
}