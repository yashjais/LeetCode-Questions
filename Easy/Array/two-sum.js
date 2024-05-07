// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force sol
// var twoSum = function(nums, target) {
//     let i = 0;
//     let j = i + 1;
//     const numsLen = nums.length;

//     while (i < numsLen) {
//         j = i + 1;
//         while (j < numsLen) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//             j += 1;
//         }
//         i += 1;
//     }
// };

// a little bit optimized sol
var twoSum = (nums, target) => {
    const numsLen = nums.length;
    const numsMap = new Map();
    for (let i = 0; i < numsLen; i += 1) {
        if (numsMap.has(nums[i])) {
            // push the val
            const arr = numsMap.get(nums[i]);
            arr.push(i);
        } else {
            numsMap.set(nums[i], [i]);
        }
    }

    for (let i = 0; i < numsLen; i += 1) {
        const value = target - nums[i];
        const indexes = numsMap.get(value);
        if (indexes) {
            if (indexes.length > 1) return indexes; 
            else if (indexes[0] !== i) return [i, indexes[0]]
        }   
    }
};

console.log(twoSum([3,2,4], 6));