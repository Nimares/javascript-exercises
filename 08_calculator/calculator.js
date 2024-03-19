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
  if (arr.length == 0) return 0;
  for (i=0; i<=arrIndex; i++) {
    sum += arr[i];
  }
  return sum
	
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  let output = 1;
  for (i=0; i<=arr.length-1; i++) {
    output = output*arr[i];
  }
  
  return output;

};

const power = function(num1, num2) {
  output = num1**num2;
  return output
	
};

const factorial = function(num) {
  let output = 1
  if (num == 0 || num == 1) {
    return output;
  } else {
    output = num * factorial(num-1)
    return output;
  }
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
