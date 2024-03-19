const removeFromArray = function(arr, ...targetVals) {
    for (let targetVal of targetVals) {
        while (arr.includes(targetVal)){
            const targetValIndex = arr.indexOf(targetVal);
            arr.splice(targetValIndex, 1);
        } ;
    }
    return arr
};

console.log(removeFromArray([3, 1, 2, 3, 4], 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
