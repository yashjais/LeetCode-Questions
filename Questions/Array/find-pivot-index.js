// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0


// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000


// Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function(nums) {
//     // check for nums len -- if it is less than 3 boom
//     // assign the sum prior to starting point
//     let leftSum = 0;
//     let rightSum = 0;
//     let leftIndex = -1;
//     let rightIndex = nums.length;
//     if (nums[leftIndex + 1] < nums[rightIndex - 1]) {
//         rightSum += nums[rightIndex - 1];
//         rightIndex -= 1;
//     } else if (nums[leftIndex + 1] > nums[rightIndex - 1]) {
//         leftSum += nums[leftIndex + 1];
//         leftIndex += 1;
//     } else {
//         leftSum += nums[leftIndex + 1];
//         rightSum += nums[rightIndex - 1];
//         leftIndex += 1;
//         rightIndex -= 1;
//     }

//     while (leftIndex < rightIndex) {
//         console.log('index', leftIndex, rightIndex);
//         console.log('sum', leftSum, rightSum)
//         if (leftSum < rightSum) {
//             leftSum += nums[leftIndex];
//             leftIndex += 1;
//         } else if (leftSum > rightSum) {
//             rightSum += nums[rightIndex];
//             rightIndex -= 1;
//         } else {
//             if (leftIndex === (rightIndex - 2)) return leftIndex + 1;
//             leftSum += nums[leftIndex];
//             rightSum += nums[rightIndex];
//             leftIndex += 1;
//             rightIndex -= 1;
//         }
//     }

//     return -1;
// };

// var pivotIndex = function(nums) {
//     const numsLen = nums.length;
//     let rightSum = 0;

//     for (let i = 1; i < numsLen; i += 1) {
//         rightSum += nums[i];
//     }

//     let i = 0;
//     let leftSum = 0;
//     while (i < numsLen) {
//         if (rightSum === leftSum) return i;
//         leftSum += nums[i];
//         rightSum -= nums[i + 1]
//         i += 1;
//     }

//     return -1;
// }

var pivotIndex = function(nums) {
    const numsLen = nums.length;
    let totalSum = 0;
    for (let i = 0; i < numsLen; i += 1) {
        totalSum += nums[i]
  }

    let leftSum = 0;
    for (let i = 0; i < numsLen; i += 1) {
        let rightSum = totalSum - nums[i] - leftSum;
        if (leftSum == rightSum) {
            return i
    }

        leftSum += nums[i]
  }

    return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, -1, 1]))
