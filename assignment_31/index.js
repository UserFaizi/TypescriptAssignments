var userNames = [];
// const userNames:string[] = ['Admin','Faizan','Eric','John','Williams'];
if (userNames.length > 0) {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var username = userNames_1[_i];
        if (username === 'Admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
