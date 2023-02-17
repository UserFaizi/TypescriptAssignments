var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit
var placesToVisit = ["Bali", "Paris", "New York", "Tokyo", "Sydney"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
