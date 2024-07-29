const removeFromArray = function(numList, ...numToRemove) {
    let newList = [];
    for (let i = 0; i < numList.length; i++) {
        if (!numToRemove.includes(numList[i])) {
            newList.push(numList[i]);
        }
    }

    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;