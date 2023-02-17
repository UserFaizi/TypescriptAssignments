var guestList = ["Albert Einstein", "Malala Yousafzai", "Leonardo da Vinci"];
console.log("".concat(guestList[0], " can't make it to the dinner."));
guestList[0] = "Marie Curie";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to a dinner party at my place on Saturday. I look forward to meeting you in person."));
}
