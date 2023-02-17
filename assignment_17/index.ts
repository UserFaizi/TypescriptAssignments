// Define an array of places to visit
let placesToVisit: string[] = ["Bali", "Paris", "New York", "Tokyo", "Sydney"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Reverse the order of the original list and print it
console.log("Reversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
console.log("Original Order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Sort the list in alphabetical order and print it
console.log("Alphabetical Order:");
placesToVisit.sort();
console.log(placesToVisit);

// Sort the list in reverse alphabetical order and print it
console.log("Reverse Alphabetical Order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);
