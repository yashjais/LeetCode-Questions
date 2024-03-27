/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const arrLength = arr.length;

    if (arrLength < 3) return false;
    if (arr[0] > arr[1]) return false;
    if (arr[arrLength - 2] < arr[arrLength - 1]) return false;


    let reachedTop = false;
    for (let i = 0; i < arrLength - 1; i += 1) {
        if (arr[i] === arr[i + 1]) return false;

        if (!reachedTop) {
            if (arr[i] < arr[i + 1]) {
                continue;
            } else {
                reachedTop = true;
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                return false
            } 
        }
    }

    if (!reachedTop) return false;

    return true;
};

console.log(validMountainArray([2,1]));
console.log(validMountainArray([3,5,5]));
console.log(validMountainArray([0,3,2,1]));
console.log(validMountainArray([0,1,2,3,4,5,6,7]));
console.log(validMountainArray([7,6,5,4,3,2,1,0]));