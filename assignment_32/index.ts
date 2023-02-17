let current_users:string[] = ['admin','faizan','eric','john','williams'] ;
let new_users: string[] = ['NORA', 'FAIZAN', 'eric', 'JHON', 'alice'];
for (let new_user of new_users) {
    // Convert the username to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();

    if (current_users.indexOf(new_user_lower) >= 0) {
        console.log(`Sorry, the username '${new_user}' is not available. Please choose a different username.`);
    } else {
        console.log(`Congratulations, the username '${new_user}' is available.`);
    }
}

