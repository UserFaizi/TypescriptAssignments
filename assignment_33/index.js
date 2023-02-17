var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var suffix = "";
    if (num === 1) {
        suffix = "st";
    }
    else if (num === 2) {
        suffix = "nd";
    }
    else if (num === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log("".concat(num).concat(suffix));
}
