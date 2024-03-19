const add = function(num1, num2) {
  const sum = (+num1 + +num2);
  return sum;
};

const subtract = function(num1, num2) {
	const sum = (+num1 - +num2)
  return sum;
};

const sum = function(arr) {
  let sum = 0;
  let arrIndex = arr.length-1;
  if (arr.length == 0) return 0
  for (i=0; i<=arrIndex; i++) {
    sum += arr[i];
  }
  return sum
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
