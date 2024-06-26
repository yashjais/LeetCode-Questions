// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(n)
// var search = function(nums, target) {
//     let numsLen = nums.length;
//     let i = 0;

//     while (i < numsLen) {
//         if (nums[i] === target) {
//             return i;
//         }
//         i += 1;
//     }

//     return -1;
// };

// O(log n)
var search = function(nums, target) {
    let numsLen = nums.length;
    let startPoint = 0;
    let endPoint = numsLen - 1;

    const recursive = (startPoint, endPoint) => {
        let index = Math.floor((startPoint + endPoint)/2);

        if (endPoint - startPoint === 1 || endPoint === startPoint) {
            if (nums[endPoint] === target) return endPoint;
            if (nums[startPoint] === target) return startPoint;
            return -1
        }


        if (nums[index] === target) return index;
        if (nums[index] > target) {
            return recursive(startPoint, index)
        }
        if (nums[index] < target) {
            return recursive(index, endPoint)
        }
    };

    return recursive(startPoint, endPoint);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
