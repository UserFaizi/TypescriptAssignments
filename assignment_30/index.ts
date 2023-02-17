const userNames:string[] = ['Admin','Faizan','Eric','John','Williams'];
for (let username of userNames) {
    if (username === 'Admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}