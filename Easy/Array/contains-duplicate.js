// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const duplicateObj = {};

//     const numsLen = nums.length;
//     for (let i = 0; i < numsLen; i += 1) {
//         if (duplicateObj[nums[i]]) {
//             return true;
//         } else {
//             duplicateObj[nums[i]] = 1;
//         }
//     }

//     return false;
// };

// more optimized solution
var containsDuplicate = function(nums) {
    const numsLen = nums.length;
    if (numsLen < 2) return false;

    let set = new Set()
    for (let i = 0; i < numsLen; i += 1) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i])
        }
    }

    return false
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
