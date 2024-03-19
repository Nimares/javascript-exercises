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

// Must be: Divisible by 4
// if divisible by 100, must also be divisible by 400

// yearVar%4 != 0 false
// yearVar%4 == 0 && yearVar%100 == 0 && yearVar%400 != 0 false


// yearVar%100 != 0 true
// yearVar%100 == 0 && yearVar%400 == 0 true


