// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// Follow-up: Could you solve the problem in linear time and in O(1) space?

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     const numsMap = new Map();
//     const numsLen = nums.length;
//     const num = numsLen/2;

//     for (let i = 0; i < numsLen; i += 1) {
//         if (numsMap.has(nums[i])) {
//             numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
//         } else {
//             numsMap.set(nums[i], 1)
//         }
//     }

//     for (let [key, value] of numsMap) {
//         if (value > num) {
//             return key;
//         }
//     }
// };

// var majorityElement = function(nums) {
//     let n = nums.length;

//     let cnt = 1;
//     let e = nums[0]
//     for(let i=1; i<n; i++) {
//         if(nums[i] == e) {
//             cnt++;
//         } else {
//             cnt--;
//         }
//         if(cnt < 0) {
//             e = nums[i];
//             cnt = 1;
//         }
//     }

//     return e;
// };

// the code is playing on the basis that the number
// that is in majority will take more space in the nums array
// the key is to UNDERSTAND that the number will apper more than
// [n/2] times.
var majorityElement = function (nums) {
    let count = 0, maj = 0;
    for (let n of nums) {
        if (count === 0) {
            maj = n;
        }
        if (maj === n) {
            count++;
        } else {
            count--;
        }
    }
    return maj;
};


console.log(majorityElement([3, 2, 3]));
