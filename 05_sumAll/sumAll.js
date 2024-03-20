const sumAll = function(num1, num2) {
    //Ensures that num1 is always the smallest
    if (errorHandler(num1, num2)) return "ERROR"

    if (num1>num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let remove = gauss(num1);
    let remainder = gauss(num2);
    let output = remainder-remove+1
    return output
    
};

const errorHandler = function(num1, num2) {
    if (num1<0 || num2 <0) 
        return true
    if (typeof num1 != "number"  || typeof num2 != "number" ) 
        return true
    return false
};

const gauss = number => ((number*(number+1))/2); 

console.log(sumAll(1, 4000));

// 2 possible methods, either through iteration, or through modulated gauss formula

// Do not edit below this line
module.exports = sumAll;
