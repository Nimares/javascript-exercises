const reverseString = function(string) {
    let reversedString ="";
    let stringNegativeIndex = -(string.length);

    for (i=-1; i>=stringNegativeIndex ;i--) {
        reversedString = reversedString+string.at(i);
    }
    return reversedString;
};

reverseString("Hello");

//Can be completed using slice() or at()

// Do not edit below this line
module.exports = reverseString;
