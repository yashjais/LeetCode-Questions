/**
 * @param {number[]} arr
 * @return {number[]}
 */

// brute force solution
// var replaceElements = function(arr) {
//     const arrLength = arr.length;
//     if (arrLength < 2) {
//         arr[0] = -1
//         return arr;
//     }

//     for (let i = 0; i < arrLength; i += 1) {
//         let greatestNumber = 0;
//         for (let j = i + 1; j < arrLength; j += 1) {
//             if (arr[j] > greatestNumber) {
//                 greatestNumber = arr[j];
//             }
//         }
//         arr[i] = greatestNumber;
//     }

//     arr[arrLength - 1] = -1;

//     return arr;
// };

// O(n) solution
// var replaceElements = function(arr) {
//     const arrLength = arr.length;
//     if (arrLength < 2) {
//         arr[0] = -1
//         return arr;
//     }

//     let storedNum;    
//     for (let i = arrLength - 1; i >= 0; i -= 1) {
//         if (i === arrLength - 1) {
//             storedNum = arr[i]
//             arr[i] = -1;
//             continue;
//         }

//         let tempNum = arr[i];
//         arr[i] = storedNum;
//         if (storedNum < tempNum) {
//             storedNum = tempNum;
//         }
//     }

//     return arr;
// };

// more efficient solution
var replaceElements = function(arr) {
    const arrLength = arr.length - 1;
    let curMax = arr[arrLength];
    arr[arrLength] = -1;

    for (let i = arrLength - 1; i >= 0; i--) {
        const cur = arr[i];
        arr[i] = curMax;
        curMax = Math.max(curMax, cur);
    }

    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));