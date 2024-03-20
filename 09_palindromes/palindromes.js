const palindromes = function (inputStr) {
    let firstHalf;
    let secondHalf;
    stringLength = inputStr.length;
    stringHalfwayPoint = stringLength/2;

    if (inputStr.length%2 == 0) {
        firstHalf = inputStr.subStr(0, stringHalfwayPoint-1)
        secondHalf = inputStr.subStr(-stringHalfwayPoint, -1)
    }

    return (isPalindrome(firstHalf, secondHalf));
};

const isPalindrome = function(half1, half2) {
    let reversed = half2.split("").reverse().join("");
    let output = (half1 == reversed) ? true : false;
    return output  
}

console.log(isPalindrome("hii", "iih"));


// Do not edit below this line
module.exports = palindromes;
