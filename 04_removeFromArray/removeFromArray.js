const removeFromArray = function(arr, ...targetVals) {
    for (let targetVal of targetVals) {
        while (arr.includes(targetVal)){
            const targetValIndex = arr.indexOf(targetVal);
            arr.splice(targetValIndex, 1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
