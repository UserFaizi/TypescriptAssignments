var person = "Muhammad Faizan";
console.log(person.toLowerCase()); // "john doe"
console.log(person.toUpperCase()); // "JOHN DOE"
var titleCaseName = person.replace(/\b\w/g, function (c) { return c.toUpperCase(); }); // convert to titlecase
console.log(titleCaseName); // "John Doe"
