const reverseString = function(string) {
    let rString = "";
    let reps = string.length
    for (let i = 0; i < reps; i++) {
        rString += string.slice(-1);
        string = string.slice(0, -1);
    }

    return rString;
}
// Do not edit below this line
module.exports = reverseString;
