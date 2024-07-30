const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne)|| !Number.isInteger(numTwo)) {return "ERROR"};
    if (numOne < 0 || numTwo < 0) {return "ERROR"};

    let numToAdd = 0;
    let numFinal = 0;
    if (numOne < numTwo) {
        numToAdd = numOne;
        numFinal = numTwo;
    } else {
        numToAdd = numTwo;
        numFinal = numOne;
    }
    let sum = 0;
    for (let i = numToAdd; numToAdd <= numFinal; numToAdd++) {
        sum += numToAdd;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;