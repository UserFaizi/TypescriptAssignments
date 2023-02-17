var current_users = ['admin', 'faizan', 'eric', 'john', 'williams'];
var new_users = ['NORA', 'FAIZAN', 'eric', 'JHON', 'alice'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert the username to lowercase for case-insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    if (current_users.indexOf(new_user_lower) >= 0) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please choose a different username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_user, "' is available."));
    }
}
