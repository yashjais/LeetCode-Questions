// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// Constraints:

// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
// var arrayPairSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const numsLen = nums.length;

//     let sum = 0;
//     for (let i = 0; i < numsLen; i += 2) {
//         sum += Math.min(nums[i], nums[i + 1]);
//     }

//     return sum;
// };

// count sort
var arrayPairSum = function (nums) {
    const counts = new Array(20001).fill(0);
    for (const num of nums) {
        counts[num + 10000]++;
    }

    let sum = 0;
    let odd = true;
    for (let i = 0; i < 20001; i++) {
        while (counts[i] > 0) {
            if (odd) sum += i - 10000;
            odd = !odd;
            counts[i]--;
        }
    }

    return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
