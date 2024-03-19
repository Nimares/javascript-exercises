const repeatString = function(string, num) {
    let strResult = string;
    for (i=1; i<num; i++) {
        strResult += string;
    }
    return strResult
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
