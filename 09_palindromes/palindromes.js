const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w\']/g,"");
    let reverseStr = str.split("").reverse().join("")
    if (reverseStr == str) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
