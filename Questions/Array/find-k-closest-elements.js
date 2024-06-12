// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// var findClosestElements = function(arr, k, x) {
//     let arrLen = arr.length;
//     let start = 0;
//     let end = arrLen - 1;
//     let midIndex;

//     if (start === end) return arr;
//     if (end + 1 === k) return arr;

//     while (start <= end) {
//         let mid = Math.ceil((end + start) / 2);
//         if (arr[mid] === x) {
//             midIndex = mid;
//             break;
//         } else if (arr[mid] < x) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     let targetIndex = midIndex;
//     if (!targetIndex) {
//         // assign left or right based on the closeness
//         if (Math.abs(x - arr[end]) > Math.abs(x - arr[end + 1])) {
//             targetIndex = end + 1;
//         } else {
//             targetIndex = end;
//         }
//     }
//     if (targetIndex > arrLen - 1) targetIndex = arrLen - 1;
//     if (targetIndex < 0) targetIndex = 0;

//     let targetStartIndex = targetIndex;
//     let targetEndIndex = targetIndex;
//     // search for left and right of the targetIndex
//     while(targetEndIndex - targetStartIndex + 1 < k) {
//         if (targetEndIndex >= arrLen - 1) {
//             targetStartIndex = targetStartIndex - 1;
//             continue;
//         } else if (targetStartIndex <= 0) {
//             targetEndIndex = targetEndIndex + 1;
//             continue;
//         }

//         if (Math.abs(arr[targetEndIndex + 1] - x) < Math.abs(arr[targetStartIndex - 1] - x)) {
//             targetEndIndex = targetEndIndex + 1;
//         } else {
//             targetStartIndex = targetStartIndex - 1;
//         }
//     }

//     return arr.slice(targetStartIndex, targetEndIndex + 1);

// };

// more readable sol
var findClosestElements = function (arr, k, x) {
    if (x <= arr[0]) {
        return arr.slice(0, k);
    }

    // [1,2,3,4,5]

    if (x >= arr[arr.length - 1]) {
        return arr.slice(arr.length - k, arr.length);
    }

    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);

        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
