const sumAll = function(num1, num2) {
    //Ensures that num1 is always the smallest
    if (errorHandler(num1, num2)) return "Error"
    
    let largest = num2;
    let smallest = num1;
    if (num1>num2) {
        largest = num1;
        smallest = num2;
    }
    let remove = gauss(smallest);
    let remainder = gauss(largest);
    let output = remainder-remove+1
    return output
    
};

const errorHandler = function(num1, num2) {
    if (num1<0 || num2 <0) return true
    if (typeof num1 != "number"  || typeof num2 != "number" ) {
        return true }
    return false
};

const gauss = number => ((number*(number+1))/2); 

console.log(sumAll(123, 1));

// 2 possible methods, either through iteration, or through modulated gauss formula

// Do not edit below this line
module.exports = sumAll;
