let text: string = "Hello World!";
let num1: number = 5;
let num2: number = 10;
const array: string[] = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Tests for equality and inequality with strings
console.log('apple' === 'apple'); // true
// @ts-ignore
console.log('apple' !== 'orange'); // true
// @ts-ignore
console.log('apple' === 'orange'); // false
console.log('apple' !== 'apple'); // false

// Tests using the toLowerCase function
console.log('HELLO'.toLowerCase() === 'hello'); // true
console.log('hello'.toLowerCase() === 'Hello'); // false

// Numerical tests
console.log(5 === 5); // true
// @ts-ignore
console.log(5 !== 3); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false

// Tests using "and" and "or" operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(false || false); // false

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.indexOf('banana') !== -1); // true
console.log(fruits.indexOf('pear') !== -1); // false

// Test whether an item is not in an array
console.log(fruits.indexOf('pear') === -1); // true
console.log(fruits.indexOf('apple') === -1); // false
