const leapYears = function(yearVar) {
    if (yearVar%4 != 0) 
        return false
    else if (
        yearVar%4 == 0 &&
        yearVar%100 == 0 &&
        yearVar%400 != 0
        )
        return false 
    else 
        return true
        
};

console.log(leapYears(1900))

// Do not edit below this line
module.exports = leapYears;

// SOLUTION: 
    // const leapYears = function (year) {
    //     return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    //   };

// DISCUSSION: 
    // The second part of the logical comparsion operator is quite clever. 
    // Ensures that any number less than 100, return true. (4, 16 etc).
    // Additionally  if divisible by 100, (year%100 === 0 = True), must be divisible by 400. 
    // All of this in one line. 

    // In my attempt i was trying to write a return statement for all possible outcomes (!4, (4) (!100, 400), (100, 400) etc. 