const fibonacci = function(iterants) {
    let lastNum = 0;
    let lastLastNum = 0;
    let sum = 1;

    if (iterants == 0) {
        return 0;
    } else if (iterants < 0) {
        return "OOPS";
    }
    for (let i = 1; i < Number(iterants); i++) {
        lastLastNum = lastNum;
        lastNum = sum;
        sum = lastNum + lastLastNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
