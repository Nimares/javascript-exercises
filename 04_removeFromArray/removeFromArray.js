const removeFromArray = function(arr, targetVal) {
    const targetValIndex = arr.indexOf(targetVal);
    arr.splice(targetValIndex, 1);
    return arr
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
