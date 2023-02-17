const userNames:string[] = ['Admin','Faizan','Eric','John','Williams'];
//testing the check of empty array
// const userNames:string[] = [];

if(userNames.length > 0)
{
    for (let username of userNames) {
        if (username === 'Admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
else{
    console.log("We need to find some users!");

}
