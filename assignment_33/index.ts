let arr:number[] = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    let suffix = "";

    if (num === 1) {
        suffix = "st";
    } else if (num === 2) {
        suffix = "nd";
    } else if (num === 3) {
        suffix = "rd";
    } else {
        suffix = "th";
    }

    console.log(`${num}${suffix}`);
}