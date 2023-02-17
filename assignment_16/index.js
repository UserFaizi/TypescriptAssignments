var guestList = ["Alice", "Bob", "Charlie"];
// Printing the guest list
console.log("Guest List:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Guest who can't make it
console.log("Unfortunately, " + guestList[2] + " can't make it to the dinner.");
// Replacing the guest who can't make it with a new person
guestList[2] = "Dave";
// Informing guests about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
guestList.unshift("Eve"); // adding at the beginning
guestList.splice(2, 0, "Frank"); // adding in the middle
guestList.push("Grace"); // adding at the end
// Printing invitation messages for each guest
console.log("Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", please come to the dinner.");
}
// Informing guests about the limited space
console.log("Unfortunately, we can only invite two guests for dinner.");
// Removing guests until only two names remain in the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry " + removedGuest + ", we can't invite you to dinner.");
}
// Printing invitation messages for the remaining two guests
console.log("Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you're still invited to the dinner.");
}
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the empty list
console.log("Guest List: " + guestList);
