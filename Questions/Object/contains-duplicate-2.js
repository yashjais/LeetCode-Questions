// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.



// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
//     const numsLen = nums.length;

//     const numMap = new Map();
//     for (let i = 0; i < numsLen; i += 1) {
//         if (numMap.has(nums[i])) {
//             const { lastPosition, leastCount } = numMap.get(nums[i]);
//             let count = leastCount;
//             if ((i - lastPosition) < count) {
//                 count = i - lastPosition;
//             }

//             numMap.set(nums[i], { lastPosition: i, leastCount: count })
//         } else {
//             numMap.set(nums[i], { lastPosition: i, leastCount: Number.POSITIVE_INFINITY });
//         }
//     }

//     let smallestNum = Number.POSITIVE_INFINITY;
//     for (let [key, { lastPosition, leastCount }] of numMap) {
//         if (leastCount <= k) {
//             return true;
//         }
//     }

//     return false;
// };

// more opt sol
var containsNearbyDuplicate = function(nums, k) {
    const numsLen = nums.length;
    if (numsLen === 1) return false;

    let set = new Set();
    for (let i = 0; i < numsLen; i += 1) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size > k) set.delete(nums[i - k]);
    }

    return false;
};