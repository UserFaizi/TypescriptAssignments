let guestList: string[] = ["Alice", "Bob", "Charlie"];

// Printing the guest list
console.log("Guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}

// Guest who can't make it
console.log("Unfortunately, Charlie can't make it to the dinner.");

// Replacing the guest who can't make it with a new person
guestList[2] = "Dave";

// Informing guests about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Adding new guests
guestList.unshift("Eve"); // adding at the beginning
guestList.splice(2, 0, "Frank"); // adding in the middle
guestList.push("Grace"); // adding at the end

// Printing the number of guests invited to dinner
console.log(`You are inviting ${guestList.length} people to dinner.`);

// Printing the updated guest list with invitation messages
console.log("Updated Guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, please come to the dinner.`);
}
