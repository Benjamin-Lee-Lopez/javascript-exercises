const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numArray) {
  let sum = 0;
	for (let i = 0; i < numArray.length; i++) { sum += numArray[i] }
  return sum
};

const multiply = function(numArray) {
  let sum = 1;
	for (let i = 0; i < numArray.length; i++) { sum *= numArray[i] }
  return sum
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a == 0) {
    return 1
  }
	let iterants = a;
  let sum = a;
  for (let i = 1; i < iterants; i++) {sum *= i}
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
