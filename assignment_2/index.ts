let person: string = "Muhammad Faizan";

console.log(person.toLowerCase()); // "john doe"
console.log(person.toUpperCase()); // "JOHN DOE"

let titleCaseName: string = person.replace(/\b\w/g, (c) => c.toUpperCase()); // convert to titlecase
console.log(titleCaseName); // "John Doe"