/**
 * @param {number[]} arr
 * @return {boolean}
 */

// brute force solution
var checkIfExist = function(arr) {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
        for (let j = 0; j < arrLength; j += 1) {
            if (i !== j && arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }

    return false;
};

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([3,1,7,11]));