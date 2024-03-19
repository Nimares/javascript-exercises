const repeatString = function(string, num) {
    let strResult = "";
    if (num < 0) {
        return "ERROR"
    } else 
    {for (i=1; i<=num; i++) {
        strResult += string;
    } return strResult
    }
};


// Do not edit below this line
module.exports = repeatString;
